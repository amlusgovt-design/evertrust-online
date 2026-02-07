"use client";

import { createContext, useContext, useState, useEffect } from "react";

const PIN_REQUIRED_ACCOUNTS = [
  "1223459922",
  "4441048536",
];

type PinContextType = {
  pinVerified: boolean;
  requiresPin: boolean;
  verifyPin: (pin: string) => void;
  setUserAccount: (accountNumber: string) => void;
};

const PinContext = createContext<PinContextType | null>(null);

const DEMO_PIN = "483921";

export function PinProvider({ children }: { children: React.ReactNode }) {
  const [pinVerified, setPinVerified] = useState(false);
    const [requiresPin, setRequiresPin] = useState(false);

  const setUserAccount = (accountNumber: string) => {
    if (PIN_REQUIRED_ACCOUNTS.includes(accountNumber)) {
      setRequiresPin(true);
    } else {
      setRequiresPin(false);
    }
  };


  useEffect(() => {
    const stored = sessionStorage.getItem("pinVerified");
    if (stored === "true") {
      setPinVerified(true);
    }
  }, []);

  const verifyPin = (pin: string) => {
    if (pin === DEMO_PIN) {
      sessionStorage.setItem("pinVerified", "true");
      setPinVerified(true);
    }
  };

//   const resetPin = () => {
//     sessionStorage.removeItem("pinVerified");
//     setPinVerified(false);
//   };

  return (
    <PinContext.Provider
      value={{ pinVerified, verifyPin, requiresPin, setUserAccount }}
    >
      {children}
    </PinContext.Provider>
  );
}

export function usePin() {
  const context = useContext(PinContext);
  if (!context) {
    throw new Error("usePin must be used within PinProvider");
  }
  return context;
}
