"use client";
import type React from "react";
import { useState, useEffect } from "react";
import {
  Check,
  DollarSign,
  Send,
  Shield,
  AlertCircle,
  Loader2,
  Info,
  HelpCircle,
  FileText,
  Copy,
  CreditCard,
  Lock,
} from "lucide-react";

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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { useApp } from "@/context/AppContext";
import { IAccount, ITransaction } from "../types/type";
import toast from "react-hot-toast";

export default function TransfersPage() {
  // Transfer Form States
  const [transferAmount, setTransferAmount] = useState("");
  const [fromAccount, setFromAccount] = useState("");
  const [recipientBank, setRecipientBank] = useState("");
  const [recipientName, setRecipientName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [routingNumber, setRoutingNumber] = useState("");
  const [bankAddress, setBankAddress] = useState("");
  const [transferType, setTransferType] = useState("wire");
  const [memo, setMemo] = useState("");
  const [confirmationChecked, setConfirmationChecked] = useState(false);

  // Deposit States
  const [depositAmount, setDepositAmount] = useState("");

  // Modal States
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [showPinModal, setShowPinModal] = useState(false);
  const [showLoadingModal, setShowLoadingModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // PIN Input
  const [pin, setPin] = useState("");

  // Data
  const [accounts, setAccounts] = useState<IAccount[]>([]);
  const transactionId = `NBTRX-${Math.floor(Math.random() * 100000000)}`;

  const { state, createTransaction, updateUserBalance } = useApp();

  useEffect(() => {
    if (state.accounts) setAccounts(state.accounts);
  }, [state.accounts]);

  // Form Validation for Transfer
  const isTransferFormValid =
    fromAccount &&
    transferAmount &&
    recipientBank &&
    recipientName &&
    accountNumber &&
    routingNumber &&
    bankAddress &&
    transferType &&
    confirmationChecked &&
    parseFloat(transferAmount) >= 1;

  const handleTransfer = (e: React.FormEvent) => {
    e.preventDefault();

    const amount = parseFloat(transferAmount);
    const account = accounts.find((a) => a.name === fromAccount);

    if (amount < 1) {
      toast.error("Amount must be at least $1");
      return;
    }
    if (!account || account.balance < amount) {
      toast.error("Insufficient balance");
      return;
    }

    setShowConfirmationModal(true);
  };

  const confirmAndShowPin = () => {
    setShowConfirmationModal(false);
    setShowPinModal(true);
    setPin(""); // Clear PIN field
  };

  const verifyPinAndSend = async () => {
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

    // Simulate processing
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
          createdAt: new Date().toISOString(),
          recipient: recipientName,
          bank: recipientBank,
          accountNumber,
          routingNumber,
          bankAddress,
          transferType,
        };

        await createTransaction(state.user?.uid ?? "", transferDetails);
        await updateUserBalance(
          state.user?.uid ?? "",
          fromAccount,
          "transfer",
          parseFloat(transferAmount)
        );

        setShowLoadingModal(false);
        setShowSuccessModal(true);
      } catch (error) {
        setShowLoadingModal(false);
        toast.error("Transfer failed. Please try again.");
      }
    }, 2500);
  };

  const handleFinish = () => {
    setShowSuccessModal(false);
    // Reset transfer form
    setTransferAmount("");
    setFromAccount("");
    setRecipientBank("");
    setRecipientName("");
    setAccountNumber("");
    setRoutingNumber("");
    setBankAddress("");
    setTransferType("wire");
    setMemo("");
    setConfirmationChecked(false);
    setPin("");
  };

  const handleDeposit = (e: React.FormEvent) => {
    e.preventDefault();
    const amount = parseFloat(depositAmount);
    if (amount <= 0) return;

    toast.success(`$${amount.toFixed(2)} deposit initiated!`, {
      icon: "Success",
      duration: 4000,
    });
    setDepositAmount("");
  };

  return (
    <div className="grid gap-6 max-w-6xl mx-auto p-4 md:p-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">Transfers & Payments</h1>
        <p className="text-gray-500">Send money or add funds to your account</p>
      </div>

      <Tabs defaultValue="transfer" className="w-full">
        <TabsList className="grid w-full grid-cols-2 bg-gray-100 rounded-xl p-1">
          <TabsTrigger
            value="transfer"
            className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-lg"
          >
            Transfer Money
          </TabsTrigger>
          <TabsTrigger
            value="deposit"
            className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-lg"
          >
            Deposit Funds
          </TabsTrigger>
        </TabsList>

        {/* ==================== TRANSFER TAB ==================== */}
        <TabsContent value="transfer" className="mt-6">
          <Card className="border-0 shadow-sm overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-green-50 to-green-100 border-b border-green-100">
              <div className="flex items-center gap-3">
                <div className="bg-green-600 p-2 rounded-full">
                  <Send className="h-5 w-5 text-white" />
                </div>
                <div>
                  <CardTitle>Transfer to External Bank</CardTitle>
                  <CardDescription>Send money securely with your PIN</CardDescription>
                </div>
              </div>
            </CardHeader>

            <form onSubmit={handleTransfer}>
              <CardContent className="space-y-6 pt-6">
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex gap-3">
                  <AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-amber-800">Important Information</p>
                    <p className="text-sm text-amber-700">
                      External transfers may take 1-3 business days to complete. Wire transfers
                      typically process the same day if submitted before 2:00 PM ET.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="from-account" className="text-sm font-medium">
                      From Account
                    </Label>
                    <Select value={fromAccount} onValueChange={setFromAccount} required>
                      <SelectTrigger id="from-account" className="border-gray-200 w-full py-5.5">
                        <SelectValue placeholder="Select source account" />
                      </SelectTrigger>
                      <SelectContent>
                        {accounts.map((account) => (
                          <SelectItem key={account.id} value={account.name}>
                            {account.name} ($
                            {account.balance.toLocaleString("en-US", {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })}
                            )
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="amount" className="text-sm font-medium">
                      Amount
                    </Label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                        $
                      </span>
                      <Input
                        type="number"
                        placeholder="0.00"
                        className="pl-7 border-gray-200 h-11"
                        value={transferAmount}
                        onChange={(e) => setTransferAmount(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4 pt-6 border-t border-gray-100 pt-6">
                  <h3 className="text-base font-medium mb-4">Recipient Details</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="recipient-bank" className="text-sm font-medium">
                        Bank Name
                      </Label>
                      <Input
                        id="recipient-bank"
                        placeholder="Enter bank name"
                        className="border-gray-200 h-11"
                        value={recipientBank}
                        onChange={(e) => setRecipientBank(e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="recipient-name" className="text-sm font-medium">
                        Recipient Name
                      </Label>
                      <Input
                        id="recipient-name"
                        placeholder="Enter recipient name"
                        className="border-gray-200 h-11"
                        value={recipientName}
                        onChange={(e) => setRecipientName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="account-number" className="text-sm font-medium">
                        Account Number
                      </Label>
                      <Input
                        id="account-number"
                        placeholder="Enter account number"
                        className="border-gray-200 h-11"
                        value={accountNumber}
                        onChange={(e) => setAccountNumber(e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="routing-number" className="text-sm font-medium">
                        Routing Number
                      </Label>
                      <Input
                        id="routing-number"
                        placeholder="Enter routing number"
                        className="border-gray-200 h-11"
                        value={routingNumber}
                        onChange={(e) => setRoutingNumber(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bank-address" className="text-sm font-medium">
                        Bank Address
                      </Label>
                      <Input
                        id="bank-address"
                        placeholder="Enter bank address"
                        className="border-gray-200 h-11"
                        value={bankAddress}
                        onChange={(e) => setBankAddress(e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="transfer-type" className="text-sm font-medium">
                        Transfer Type
                      </Label>
                      <Select value={transferType} onValueChange={setTransferType} required>
                        <SelectTrigger id="transfer-type" className="border-gray-200 py-5.5 w-full">
                          <SelectValue placeholder="Select transfer type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="wire">Wire Transfer (Same day)</SelectItem>
                          <SelectItem value="ach">ACH Transfer (1–3 days)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="memo" className="text-sm font-medium">
                      Memo
                    </Label>
                    <Input
                      id="memo"
                      placeholder="Add a note"
                      className="border-gray-200 h-11"
                      required
                      value={memo}
                      onChange={(e) => setMemo(e.target.value)}
                    />
                  </div>
                </div>

                <div className="border-t border-gray-100 py-6">
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="confirmation"
                      className="mt-1 data-[state=checked]:bg-green-600 data-[state=checked]:border-green-600"
                      checked={confirmationChecked}
                      onCheckedChange={(checked: boolean) =>
                        setConfirmationChecked(checked as boolean)
                      }
                      required
                    />
                    <div className="space-y-2">
                      <Label htmlFor="confirmation" className="font-medium">
                        I confirm the account details are correct and understand this transfer is
                        not reversible once processed.
                      </Label>
                      <p className="text-sm text-gray-500">
                        I understand funds leaving this platform are no longer managed by Evertrust
                        and may be subject to external bank policies.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="bg-gray-50">
                <Button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 h-11"
                  disabled={!isTransferFormValid}
                >
                  <Send className="mr-2 h-4 w-4" />
                  Continue to PIN Verification
                </Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>

        {/* ==================== DEPOSIT TAB (Unchanged) ==================== */}
        <TabsContent value="deposit" className="mt-6">
          <div className="grid gap-6">
            <Tabs defaultValue="bank" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-gray-100 rounded-xl p-1">
                <TabsTrigger
                  value="bank"
                  className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-lg"
                >
                  Bank Transfer
                </TabsTrigger>
                <TabsTrigger
                  value="debit"
                  className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-lg"
                >
                  Debit Card
                </TabsTrigger>
              </TabsList>

              {/* Bank Transfer Tab */}
              <TabsContent value="bank" className="mt-4">
                <Card className="border-0 shadow-sm overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-green-50 to-green-100 border-b border-green-100">
                    <div className="flex items-center gap-3">
                      <div className="bg-green-500 p-2 rounded-full">
                        <DollarSign className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-lg font-medium">
                          Deposit from Your Bank Account
                        </CardTitle>
                        <CardDescription>
                          Use the details below to send money from your external bank account via
                          ACH or wire transfer
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6 pt-6">
                    <div className="bg-blue-50 border border-blue-100 p-5 rounded-lg">
                      <p className="text-sm text-blue-700 mb-2">
                        <Info className="h-4 w-4 inline-block mr-1" />
                        Processing typically takes 1-3 business days. Check with your bank for any
                        fees or delays.
                      </p>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                      <div className="divide-y divide-gray-100">
                        <div className="flex justify-between items-center p-4">
                          <span className="text-sm font-medium text-gray-500">Account Name</span>
                          <div className="flex items-center">
                            <span className="text-sm font-medium">Evertrust</span>
                          </div>
                        </div>

                        <div className="flex justify-between items-center p-4">
                          <span className="text-sm font-medium text-gray-500">Routing Number</span>
                          <div className="flex items-center">
                            <span className="text-sm font-medium mr-2">021000021</span>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-8 w-8 p-0 cursor-pointer"
                              onClick={() => {
                                navigator.clipboard.writeText("021000021");
                                toast.success("Routing number copied to clipboard", {
                                  position: "top-right",
                                  style: {
                                    background: "#fff",
                                    color: "#008000",
                                    borderRadius: "10px",
                                    fontSize: "14px",
                                  },
                                });
                              }}
                            >
                              <Copy className="h-4 w-4" />
                              <span className="sr-only">Copy routing number</span>
                            </Button>
                          </div>
                        </div>

                        <div className="flex justify-between items-center p-4">
                          <span className="text-sm font-medium text-gray-500">Account Number</span>
                          <div className="flex items-center">
                            <span className="text-sm font-medium mr-2">9876543210</span>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-8 w-8 p-0 cursor-pointer"
                              onClick={() => {
                                navigator.clipboard.writeText("9876543210");
                                toast.success("Account number copied to clipboard", {
                                  position: "top-right",
                                  style: {
                                    background: "#fff",
                                    color: "#008000",
                                    borderRadius: "10px",
                                    fontSize: "14px",
                                  },
                                });
                              }}
                            >
                              <Copy className="h-4 w-4" />
                              <span className="sr-only">Copy account number</span>
                            </Button>
                          </div>
                        </div>

                        <div className="flex justify-between items-center p-4">
                          <span className="text-sm font-medium text-gray-500">Bank Name</span>
                          <span className="text-sm font-medium">Bank of America</span>
                        </div>

                        <div className="flex justify-between items-center p-4">
                          <span className="text-sm font-medium text-gray-500">Optional Memo</span>
                          <span className="text-sm font-medium">
                            Include your Evertrust User ID: NB****
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
                      <Button variant="outline" className="flex items-center gap-2">
                        <FileText className="h-4 w-4" />
                        Download PDF
                      </Button>

                      <Button variant="outline" className="flex items-center gap-2">
                        <HelpCircle className="h-4 w-4" />
                        How to Deposit
                      </Button>
                    </div>

                    <div className="bg-amber-50 border border-amber-100 p-4 rounded-lg">
                      <div className="flex gap-3">
                        <Shield className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm text-amber-800 font-medium mb-1">
                            Important Information
                          </p>
                          <p className="text-sm text-amber-700">
                            Funds will appear in your Evertrust account once processed. Funds in
                            your Evertrust account are not FDIC-insured. See terms for details.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Debit Card Tab */}
              <TabsContent value="debit" className="mt-4">
                <Card className="border-0 shadow-sm overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-green-50 to-green-100 border-b border-green-100">
                    <div className="flex items-center gap-3">
                      <div className="bg-green-500 p-2 rounded-full">
                        <CreditCard className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-lg font-medium">
                          Deposit with Debit Card
                        </CardTitle>
                        <CardDescription>
                          Enter your debit card details below to add funds instantly
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <form onSubmit={handleDeposit}>
                    <CardContent className="space-y-6 pt-6">
                      <div className="bg-blue-50 border border-blue-100 p-4 rounded-lg">
                        <p className="text-sm text-blue-700">
                          <Info className="h-4 w-4 inline-block mr-1" />A 2.5% fee applies to all
                          debit card deposits ($2.50 minimum). Funds are available instantly upon
                          approval.
                        </p>
                      </div>

                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="to-account-deposit" className="text-sm font-medium">
                            Destination Account
                          </Label>
                          <Select required>
                            <SelectTrigger id="to-account-deposit" className="border-gray-200 h-11">
                              <SelectValue placeholder="Select destination account" />
                            </SelectTrigger>
                            <SelectContent>
                              {accounts.map((account) => (
                                <SelectItem key={account.id} value={account.id}>
                                  {account.name} ($
                                  {account.balance.toLocaleString("en-US", {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                  })}
                                  )
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="deposit-amount" className="text-sm font-medium">
                            Deposit Amount
                          </Label>
                          <div className="space-y-3">
                            <div className="relative">
                              <span className="absolute left-3 top-3 text-gray-500">$</span>
                              <Input
                                id="deposit-amount"
                                type="number"
                                placeholder="0.00"
                                className="pl-7 border-gray-200 h-11"
                                value={depositAmount}
                                onChange={(e) => {
                                  setDepositAmount(e.target.value);
                                }}
                                required
                              />
                            </div>
                            <div className="flex flex-wrap gap-2">
                              <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                className="border-gray-200"
                                onClick={() => setDepositAmount("50")}
                              >
                                $50
                              </Button>
                              <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                className="border-gray-200"
                                onClick={() => setDepositAmount("100")}
                              >
                                $100
                              </Button>
                              <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                className="border-gray-200"
                                onClick={() => setDepositAmount("250")}
                              >
                                $250
                              </Button>
                              <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                className="border-gray-200"
                                onClick={() => setDepositAmount("500")}
                              >
                                $500
                              </Button>
                              <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                className="border-gray-200"
                                onClick={() => setDepositAmount("1000")}
                              >
                                $1,000
                              </Button>
                            </div>
                          </div>
                        </div>

                        {depositAmount && Number.parseFloat(depositAmount) > 0 && (
                          <div className="bg-gray-50 p-3 rounded-lg">
                            <div className="flex justify-between text-sm">
                              <span>Deposit amount:</span>
                              <span>${Number.parseFloat(depositAmount).toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span>Fee (2.5%):</span>
                              <span>
                                $
                                {Math.max(2.5, Number.parseFloat(depositAmount) * 0.025).toFixed(2)}
                              </span>
                            </div>
                            <div className="flex justify-between text-sm font-medium mt-1 pt-1 border-t border-gray-200">
                              <span>Total:</span>
                              <span>
                                $
                                {(
                                  Number.parseFloat(depositAmount) +
                                  Math.max(2.5, Number.parseFloat(depositAmount) * 0.025)
                                ).toFixed(2)}
                              </span>
                            </div>
                          </div>
                        )}

                        <div className="space-y-2">
                          <Label htmlFor="cardholder-name" className="text-sm font-medium">
                            Cardholder Name
                          </Label>
                          <Input
                            id="cardholder-name"
                            placeholder="Name as it appears on card"
                            className="border-gray-200 h-11"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="card-number" className="text-sm font-medium">
                            Card Number
                          </Label>
                          <Input
                            id="card-number"
                            placeholder="1234 5678 9012 3456"
                            className="border-gray-200 h-11"
                            required
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="expiry" className="text-sm font-medium">
                              Expiration Date
                            </Label>
                            <Input
                              id="expiry"
                              placeholder="MM/YY"
                              className="border-gray-200 h-11"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="cvv" className="text-sm font-medium">
                              CVV
                            </Label>
                            <Input
                              id="cvv"
                              placeholder="123"
                              className="border-gray-200 h-11"
                              required
                              maxLength={4}
                            />
                          </div>
                        </div>

                        <div className="flex items-start space-x-3 pt-2">
                          <Checkbox
                            id="save-card"
                            className="mt-1 data-[state=checked]:bg-green-600 data-[state=checked]:border-green-600"
                          />
                          <div className="space-y-1">
                            <Label htmlFor="save-card" className="font-medium">
                              Save this card for future deposits
                            </Label>
                            <p className="text-sm text-gray-500">
                              Your card information will be securely stored for future use.
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="bg-gray-50 border-t border-gray-100 px-6 py-4">
                      <Button
                        type="submit"
                        className="w-full bg-green-600 hover:bg-green-700 text-white h-11 font-medium"
                        disabled={!depositAmount || Number.parseFloat(depositAmount) <= 0}
                      >
                        <DollarSign className="mr-2 h-4 w-4" />
                        Add Funds
                      </Button>
                    </CardFooter>
                  </form>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </TabsContent>
      </Tabs>

      {/* ==================== CONFIRMATION MODAL ==================== */}
      {showConfirmationModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6">
            <h3 className="text-xl font-bold mb-4">Review Transfer</h3>
            <div className="bg-gray-50 rounded-lg p-4 space-y-3 text-sm">
              <div className="flex justify-between">
                <span>Amount:</span> <strong>${parseFloat(transferAmount).toFixed(2)}</strong>
              </div>
              <div className="flex justify-between">
                <span>To:</span> <strong>{recipientName}</strong>
              </div>
              <div className="flex justify-between">
                <span>Bank:</span> <strong>{recipientBank}</strong>
              </div>
              <div className="flex justify-between">
                <span>Account:</span> <strong>{accountNumber}</strong>
              </div>
            </div>
            <div className="mt-6 flex gap-3">
              <Button variant="outline" onClick={() => setShowConfirmationModal(false)}>
                Cancel
              </Button>
              <Button className="bg-green-600 hover:bg-green-700" onClick={confirmAndShowPin}>
                Continue with PIN
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* ==================== PIN VERIFICATION MODAL ==================== */}
      {showPinModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-sm w-full p-8 text-center">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <Lock className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Enter Your PIN</h3>
            <p className="text-gray-600 mb-6">
              Confirm this transfer with your 4-digit security PIN
            </p>

            <Input
              type="password"
              inputMode="numeric"
              maxLength={4}
              className="text-center text-3xl tracking-widest font-mono mx-auto w-48"
              value={pin}
              onChange={(e) => setPin(e.target.value.replace(/\D/g, "").slice(0, 4))}
              autoFocus
              placeholder="••••"
            />

            <div className="mt-8 flex flex-col gap-3">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700"
                onClick={verifyPinAndSend}
                disabled={pin.length !== 4}
              >
                Confirm Transfer
              </Button>
              <Button
                variant="ghost"
                onClick={() => {
                  setShowPinModal(false);
                  setPin("");
                }}
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Loading Modal */}
      {showLoadingModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 p-8 flex flex-col items-center">
            <Loader2 className="h-12 w-12 text-green-600 animate-spin mb-4" />
            <p className="text-lg font-medium">Processing your transfer...</p>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="h-10 w-10 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Transfer Sent!</h3>
            <p className="text-gray-600 mb-4">
              ${parseFloat(transferAmount).toFixed(2)} → {recipientName}
            </p>
            <div className="bg-gray-50 rounded-lg p-4 text-sm">
              <div>
                <strong>ID:</strong> {transactionId}
              </div>
            </div>
            <Button className="mt-6 w-full bg-green-600 hover:bg-green-700" onClick={handleFinish}>
              Done
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
