'use client'

import { usePin } from "@/context/AppSecurityContext";
import { PinModal } from "./otp-auth";
import { useApp } from "@/context/AppContext";
import { useEffect, useLayoutEffect, useState } from "react";

export function DashboardGate({ children }: {children: React.ReactNode}) {
  const { pinVerified, requiresPin, setUserAccount } = usePin();
  const {state} = useApp()


  

  useLayoutEffect(() => {
    if(state?.user?.accountNumber){
      setUserAccount(state?.user?.accountNumber)
    }
  }, [state?.user?.accountNumber])


  const locked = requiresPin && !pinVerified;

  if (state.loading) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <p className="text-sm font-medium">Loading dashboard...</p>
    </div>
  );
}

  return state?.user?.accountNumber ? (
  <>
    <div
      className={
        locked
          ? "pointer-events-none select-none blur-md scale-[0.98] opacity-70 transition-all duration-300"
          : "transition-all duration-300"
      }
    >
      {children}
    </div>

    {locked && <PinModal />}
  </>
) : null;
}
