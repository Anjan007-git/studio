"use client";

import React, { useRef, useState } from "react";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number; // 0.1 to 0.4
}

export function MagneticButton({
  children,
  className = "",
}: MagneticButtonProps) {
  return (
    <div className={`inline-block ${className}`}>
      {children}
    </div>
  );
}
