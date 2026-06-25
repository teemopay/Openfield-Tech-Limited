import { SectionShell } from "./SectionShell";
import Link from "next/link";

export function Footer() {
  return (
    <>
      <section className="pt-20 bg-[url('/images/footer.png')] bg-cover bg-center bg-no-repeat">
        <SectionShell>
          <div className="bg-[url('/images/footer2.png')] bg-cover bg-center bg-no-repeat rounded-[25px] text-center min-h-130.25 pb-31.75">
            <h2 className="module-title text-[30px] leading-11 md:text-[72px] md:leading-21.5  font-semibold  text-center pt-15 px-14 tracking-[-1px] text-[#F5F5F5]">
              Start Your Partnership With Us
            </h2>
            <p className="module-subtitle text-center text-[22px] leading-8.25 text-[#E3E6F4] mt-21 px-2 lg:px-21.5 tracking-[-0.2px]">
              Leave your contact information, and our professional support team
              will reach out to you at the earliest opportunity. We are
              committed to understanding your needs and providing comprehensive
              solutions with attentive and reliable service.
            </p>
            <Link
              href="/contact"
              className="mx-auto cta-button mt-14 flex items-center justify-center rounded-full h-12 w-33.75 text-[16px] font-semibold text-white"
            >
              Contact Us
            </Link>
          </div>
          <footer className="text-center pt-20">
            <div className="text-[14px] text-center text-white leading-3.5">
              ROOM S011, 2/F, THE CAPITAL, 61-65 CHATHAM ROAD SOUTH, TSIM SHA
              TSUI, HONG KONG
            </div>
            <div className="mt-3.75 text-[14px] text-center text-white leading-3.5">
              operation@openfieldtech.com
            </div>
            <div className="mt-8 text-white/50 border-t border-white/10 py-7.5 text-[14px]">
              Copyright © Openfield Tech Limited
            </div>
          </footer>
        </SectionShell>
      </section>
    </>
  );
}
