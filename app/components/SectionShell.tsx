"use client";

import type { ReactNode } from "react";

type SectionShellProps = {
  children: ReactNode;
  outerClassName?: string;
  innerClassName?: string;
};

export function SectionShell({
  children,
  outerClassName = "",
  innerClassName = "",
}: SectionShellProps) {
  return (
    <div className={`w-full  px-5 md:px-20 ${outerClassName}`.trim()}>
      <div className={`mx-auto  max-w-300 ${innerClassName}`.trim()}>
        {children}
      </div>
    </div>
  );
}
