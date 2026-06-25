"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Brand } from "./Brand";

const links = [
  { href: "/", label: "Home Page" },
  { href: "/solution", label: "The solution" },
  { href: "/contact", label: "Contact Us", button: true },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 min-w-80 bg-black/35 px-5 backdrop-blur-xl transition-colors duration-300 md:px-20">
        <nav className="mx-auto flex h-21 w-full max-w-300 items-center justify-between">
          <Link
            href="/"
            aria-label="Openfield home"
            onClick={() => setOpen(false)}
          >
            <Brand />
          </Link>
          <button
            type="button"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white transition hover:bg-white/10 md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={
                    link.button
                      ? "cta-button rounded-full px-5 py-2.5 text-sm font-semibold text-white transition hover:scale-105"
                      : `text-sm transition hover:text-white ${
                          active ? "font-semibold text-white" : "text-white/62"
                        }`
                  }
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </nav>
        <div
          className={`overflow-hidden transition-[max-height,opacity] duration-300 md:hidden ${
            open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mx-auto flex w-full max-w-300 flex-col gap-2 pb-5 cursor-pointer">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-[14px] px-4 py-3 text-sm font-semibold transition ${
                    link.button
                      ? "cta-button text-center text-white"
                      : active
                        ? "bg-white/10 text-white"
                        : "text-white/70 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </header>
      <div className="h-21 w-full min-w-80"></div>
    </>
  );
}
