"use client";
import React from "react";
import { AnimatedPage } from "../components/AnimatedPage";
import { Nav } from "../components/Nav";
import { SectionShell } from "../components/SectionShell";

export default function ContactPage() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const params: Record<string, any> = {
      telephone: "",
      email: "",
      message: "",
    };
    Object.keys(params).forEach((k) => {
      params[k] = formData.get(k);
    });
    if (window.confirm("Please confirm?")) {
      const response = await fetch("/api/sendMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: params }),
      });
    }
  };
  return (
    <AnimatedPage>
      <main className="page-shell">
        <Nav />
        <section className="pt-15.75 bg-[url('/images/footer.png')] bg-cover bg-center bg-no-repeat">
          <h2 className="module-title text-[36px] leading-13.5  font-semibold  text-center pt-15 px-14 tracking-[-1px] text-[#F5F5F5]">
            Contact us
          </h2>
          <SectionShell>
            <div className="bg-[url('/images/footer2.png')] bg-cover bg-center bg-no-repeat rounded-[25px] text-center min-h-130.25 pb-31.75 px-3">
              <div className="mx-auto max-w-250  pt-8 ">
                <form
                  id="contact-form"
                  onSubmit={handleSubmit}
                  className="mx-auto flex flex-col gap-5"
                >
                  <div className="relative h-13 overflow-hidden rounded-[10px] bg-white text-left">
                    <label
                      htmlFor="contact-telephone"
                      className="pointer-events-none absolute left-5 top-1/2 z-10 -translate-y-1/2 text-[14px] font-normal leading-6 tracking-[-0.2px] text-[#9693AA]"
                    >
                      Telephone
                    </label>
                    <input
                      id="contact-telephone"
                      name="telephone"
                      required
                      type="tel"
                      className="h-full w-full bg-transparent pl-31 pr-5 text-[14px] font-normal leading-6 tracking-[-0.2px] text-[#2F2D3D] outline-none"
                    />
                  </div>
                  <div className="relative h-11 overflow-hidden rounded-[10px] bg-white text-left">
                    <label
                      htmlFor="contact-email"
                      className="pointer-events-none absolute left-5 top-1/2 z-10 -translate-y-1/2 text-[14px] font-normal leading-6 tracking-[-0.2px] text-[#9693AA]"
                    >
                      E-mail
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      className="h-full w-full bg-transparent pl-31 pr-5 text-[14px] font-normal leading-6 tracking-[-0.2px] text-[#2F2D3D] outline-none"
                    />
                  </div>
                  <textarea
                    name="message"
                    placeholder="Message"
                    className="min-h-43 resize-none rounded-[10px] bg-white px-5 py-3.5 text-[14px] font-normal leading-6 tracking-[-0.2px] text-[#2F2D3D] outline-none placeholder:text-[#9693AA]"
                  />
                  <button
                    type="submit"
                    className="mx-auto cta-button mt-9 flex h-12 w-33.75 cursor-pointer items-center justify-center rounded-full text-[16px] font-semibold text-white"
                  >
                    Contact Us
                  </button>
                </form>
              </div>
            </div>
            <footer className="text-center pt-20">
              <div className="text-[14px] text-center text-white leading-3.5">
                ROOM S011, 2/F, THE CAPITAL, 61-65 CHATHAM ROAD SOUTH, TSIM SHA
                TSUI, HONG KONG
              </div>
              <div className="mt-3.75 text-[14px] text-center text-white leading-3.5">
                operation@openfieldtech.com
              </div>
              <div className="mt-8 text-white/50 border-t border-white/10 py-7.5">
                Copyright © Openfield Tech Limited
              </div>
            </footer>
          </SectionShell>
        </section>
      </main>
    </AnimatedPage>
  );
}
