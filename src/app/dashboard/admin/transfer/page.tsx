"use client";
import type React from "react";
import { useState, useEffect } from "react";
import { Check, Send, AlertCircle, Loader2, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useApp } from "@/context/AppContext";
import toast from "react-hot-toast";
import { IAccount, ITransaction } from "../../user/types/type";

export default function TransfersPage() {
  const [transferAmount, setTransferAmount] = useState("");
  const [fromAccount, setFromAccount] = useState("");
  const [recipientBank, setRecipientBank] = useState("");
  const [recipientName, setRecipientName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [routingNumber, setRoutingNumber] = useState("");
  const [bankAddress, setBankAddress] = useState("");
  const [transferType, setTransferType] = useState("");
  const [memo, setMemo] = useState("");
  const [confirmationChecked, setConfirmationChecked] = useState(false);

  // Modal states
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [showPinModal, setShowPinModal] = useState(false);
  const [showLoadingModal, setShowLoadingModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const [pin, setPin] = useState("");
  const [accounts, setAccounts] = useState<IAccount[]>([]);

  const transactionId = `NBTRX-${Math.floor(Math.random() * 100000000)}`;

  const { state, createTransaction, updateUserBalance } = useApp();

  useEffect(() => {
    if (state.accounts) setAccounts(state.accounts);
  }, [state.accounts]);

  const isFormValid = Boolean(
    fromAccount &&
    transferAmount &&
    recipientBank &&
    recipientName &&
    accountNumber &&
    routingNumber &&
    bankAddress &&
    transferType &&
    confirmationChecked
  );

  const handleTransfer = (e: React.FormEvent) => {
    e.preventDefault();

    const amount = parseFloat(transferAmount);
    if (amount < 1) {
      toast.error("Amount must be at least $1");
      return;
    }

    const account = accounts.find(a => a.name === fromAccount);
    if (!account || account.balance < amount) {
      toast.error("Insufficient balance");
      return;
    }

    setShowConfirmationModal(true);
  };

  const confirmTransfer = () => {
    setShowConfirmationModal(false);
    setShowPinModal(true);
  };

  const verifyPinAndProceed = async () => {
    if (pin.length !== 4) {
      toast.error("Please enter your 4-digit PIN");
      return;
    }

    if (pin !== state.user?.pin) {
      toast.error("Incorrect PIN");
      setPin("");
      return;
    }

    setShowPinModal(false);
    setShowLoadingModal(true);

    setTimeout(async () => {
      try {
        const transferDetails: ITransaction = {
          date: new Date().toLocaleDateString(),
          type: "transfer",
          transactionId,
          amount: parseFloat(transferAmount),
          account: fromAccount,
          description: memo || "External transfer",
          status: "completed",
          userId: state.user?.uid ?? "",
          createdAt: new Date().toLocaleDateString(),
          recipient: recipientName,
          bank: recipientBank,
          accountNumber,
          routingNumber,
          bankAddress,
          transferType: transferType || "wire",
        };

        await createTransaction(state.user?.uid ?? "", transferDetails);
        await updateUserBalance(state.user?.uid ?? "", fromAccount, "transfer", parseFloat(transferAmount));

        setShowLoadingModal(false);
        setShowSuccessModal(true);
      } catch (error) {
        console.error("Transfer error:", error);
        setShowLoadingModal(false);
        toast.error("Transfer failed. Please try again.");
      }
    }, 2500);
  };

  const handleFinish = () => {
    setShowSuccessModal(false);
    // Reset form
    setTransferAmount("");
    setFromAccount("");
    setRecipientBank("");
    setRecipientName("");
    setAccountNumber("");
    setRoutingNumber("");
    setBankAddress("");
    setTransferType("");
    setMemo("");
    setConfirmationChecked(false);
    setPin("");
  };

  return (
    <div className="grid gap-6 max-w-6xl mx-auto p-4 md:p-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">
          Transfers & Payments
        </h1>
        <p className="text-gray-500">Send money to external bank accounts securely</p>
      </div>

      <Card className="border-0 shadow-sm overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-green-50 to-green-100 border-b border-green-100">
          <div className="flex items-center gap-3">
            <div className="bg-green-500 p-2 rounded-full">
              <Send className="h-5 w-5 text-white" />
            </div>
            <div>
              <CardTitle className="text-lg font-medium">Transfer to External Bank</CardTitle>
              <CardDescription>Send money to any bank account</CardDescription>
            </div>
          </div>
        </CardHeader>

        <form onSubmit={handleTransfer}>
          <CardContent className="space-y-6 pt-6">
            {/* Alert */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-amber-800">Important</p>
                <p className="text-sm text-amber-700">
                  Wire transfers process same day if submitted before 2:00 PM ET.
                </p>
              </div>
            </div>

            {/* From Account & Amount */}
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label>From Account</Label>
                <Select value={fromAccount} onValueChange={setFromAccount} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select account" />
                  </SelectTrigger>
                  <SelectContent>
                    {accounts.map((acc) => (
                      <SelectItem key={acc.id} value={acc.name}>
                        {acc.name} (${acc.balance.toFixed(2)})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Amount</Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                  <Input
                    type="number"
                    placeholder="0.00"
                    className="pl-7"
                    value={transferAmount}
                    onChange={(e) => setTransferAmount(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Recipient Info */}
            <div className="border-t pt-6">
              <h3 className="font-medium mb-4">Recipient Information</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <Input placeholder="Bank Name" value={recipientBank} onChange={(e) => setRecipientBank(e.target.value)} required />
                <Input placeholder="Recipient Name" value={recipientName} onChange={(e) => setRecipientName(e.target.value)} required />
                <Input placeholder="Account Number" value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} required />
                <Input placeholder="Routing Number" value={routingNumber} onChange={(e) => setRoutingNumber(e.target.value)} required />
                <Input placeholder="Bank Address" value={bankAddress} onChange={(e) => setBankAddress(e.target.value)} required />
                <Select value={transferType} onValueChange={setTransferType} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Transfer Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="wire">Wire Transfer (Same Day)</SelectItem>
                    <SelectItem value="ach">ACH Transfer (1–3 days)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Memo & Confirmation */}
            <div className="space-y-4 border-t pt-6">
              <Input placeholder="Memo (optional)" value={memo} onChange={(e) => setMemo(e.target.value)} />
              <div className="flex items-start gap-3">
                <Checkbox
                  id="confirm"
                  checked={confirmationChecked}
                  onCheckedChange={(c) => setConfirmationChecked(c as boolean)}
                  required
                />
                <Label htmlFor="confirm" className="text-sm">
                  I confirm all details are correct and understand this transfer cannot be reversed.
                </Label>
              </div>
            </div>
          </CardContent>

          <CardFooter className="bg-gray-50 border-t">
            <Button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 h-11"
              disabled={!isFormValid}
            >
              <Send className="mr-2 h-4 w-4" />
              Submit Transfer
            </Button>
          </CardFooter>
        </form>
      </Card>

      {/* Confirmation Modal */}
      {showConfirmationModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6">
            <h3 className="text-xl font-bold mb-4">Confirm Transfer</h3>
            <div className="bg-gray-50 p-4 rounded-lg space-y-2 text-sm">
              <div className="flex justify-between"><span>Amount:</span> <strong>${parseFloat(transferAmount).toFixed(2)}</strong></div>
              <div className="flex justify-between"><span>To:</span> <strong>{recipientName}</strong></div>
              <div className="flex justify-between"><span>Bank:</span> <strong>{recipientBank}</strong></div>
            </div>
            <div className="mt-6 flex gap-3">
              <Button variant="outline" onClick={() => setShowConfirmationModal(false)}>Cancel</Button>
              <Button className="bg-green-600 hover:bg-green-700" onClick={confirmTransfer}>
                Continue
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* PIN Modal */}
      {showPinModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-sm w-full p-6">
            <div className="text-center mb-6">
              <div className="mx-auto bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Lock className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold">Enter Your PIN</h3>
              <p className="text-gray-600 text-sm mt-2">Confirm transfer with your 4-digit security PIN</p>
            </div>
            <Input
              type="password"
              inputMode="numeric"
              maxLength={4}
              className="text-center text-2xl tracking-widest font-mono"
              value={pin}
              onChange={(e) => setPin(e.target.value.replace(/\D/g, "").slice(0, 4))}
              autoFocus
            />
            <div className="mt-6 flex gap-3">
              <Button variant="outline" onClick={() => { setShowPinModal(false); setPin(""); }}>
                Cancel
              </Button>
              <Button
                className="bg-green-600 hover:bg-green-700"
                onClick={verifyPinAndProceed}
                disabled={pin.length !== 4}
              >
                Confirm Transfer
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Loading & Success Modals (unchanged) */}
      {showLoadingModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 flex flex-col items-center">
            <Loader2 className="h-12 w-12 text-green-600 animate-spin mb-4" />
            <p className="text-lg font-medium">Processing your transfer...</p>
          </div>
        </div>
      )}

      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6 text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="h-10 w-10 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Transfer Successful!</h3>
            <p className="text-gray-600">
              ${parseFloat(transferAmount).toFixed(2)} sent to <strong>{recipientName}</strong>
            </p>
            <div className="bg-gray-50 p-4 rounded-lg my-4 text-sm">
              <div><strong>Transaction ID:</strong> {transactionId}</div>
            </div>
            <Button className="w-full bg-green-600 hover:bg-green-700" onClick={handleFinish}>
              Done
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}