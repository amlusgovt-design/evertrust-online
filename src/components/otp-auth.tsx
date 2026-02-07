"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { usePin } from "@/context/AppSecurityContext";

import { useState, useEffect } from "react";

export function PinModal() {
  const [pin, setPin] = useState("");
  const { verifyPin } = usePin();

useEffect(() => {
  if (pin.length === 6) {
    const timer = setTimeout(() => {
      verifyPin(pin);
    }, 700);

    return () => clearTimeout(timer);
  }
}, [pin, verifyPin]);

  return (
    <Dialog open>
      <DialogContent className="max-w-sm">
        <DialogHeader>
          <DialogTitle className="mt-6 mb-4 text-center">
            <h2>Security Verification Required</h2>
            <p className="mt-3 text-xs font-normal text-gray-400 tracking-wide">Enter your 6 digit pin</p>
          </DialogTitle>
        </DialogHeader>

        <div className="flex items-center justify-center">

        <InputOTP
          maxLength={6}
          value={pin}
          onChange={setPin}
        >
          <InputOTPGroup>
            {Array.from({ length: 6 }).map((_, i) => (
              <InputOTPSlot key={i} index={i} className="p-6" />
            ))}
          </InputOTPGroup>
        </InputOTP>
        </div>
      </DialogContent>
    </Dialog>
  );
}
