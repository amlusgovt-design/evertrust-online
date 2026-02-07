'use client'

import { usePin } from "@/context/AppSecurityContext";
import { PinModal } from "./otp-auth";

export function DashboardGate({ children }: {children: React.ReactNode}) {
  const { pinVerified, requiresPin } = usePin();

  const locked = requiresPin && !pinVerified;

  return (
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
  );
}
