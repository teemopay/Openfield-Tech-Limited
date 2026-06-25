import { AnimatedPage } from "../components/AnimatedPage";
import { Footer } from "../components/Footer";
import { Nav } from "../components/Nav";
import { SectionShell } from "../components/SectionShell";
import { AnalyticSvg } from "../components/Visuals";
import Image from "next/image";

const listOne = [
  {
    title: "Practical Applications",
    sub: [
      "Social media advertising campaigns",
      "Product launch promotion",
      " Customer acquisition strategy",
      " Brand awareness campaigns",
    ],
  },
  {
    title: "Example Results",
    sub: [
      "Increased ad engagement by 30%",
      "Improved conversion efficiency by 25%",
      "Reduced customer acquisition cost",
    ],
  },
];
export default function SolutionPage() {
  return (
    <AnimatedPage>
      <main className="page-shell">
        <Nav />
        <section className="purple-band py-21.25">
          <SectionShell>
            <div className="text-left md:max-w-166.5 text-white">
              <h1 className="hero-lines-title text-[30px] leading-11 md:text-[72px] md:leading-21.5 font-semibold tracking-[-0.6px]">
                <span className="hero-title-line block">
                  Integrated Solutions for Business Growth
                </span>
              </h1>
              <div className="hero-lines-subtitle mt-8 text-[#E3E6F4] text-[18px] translate-y-8 opacity-0 max-w-150.25 tracking-[-0.2px]">
                At Openfield Tech Limited, we provide integrated solutions that
                connect digital advertising, technology development, and system
                support.
                <br />
                Our goal is to help businesses improve market performance,
                strengthen internal operations, and maintain long-term
                stability.
              </div>
            </div>
          </SectionShell>
        </section>

        <section className="section-band py-50">
          <SectionShell innerClassName="text-center">
            <h2 className="module-title text-[30px] leading-11 md:text-[72px] md:leading-21.5 font-semibold tracking-[-1px]">
              Digital Growth Solution
            </h2>
            <p className="module-subtitle mt-15.5 text-[18px] leading-8.25 font-normal tracking-[-0.2px]">
              We help businesses expand their market reach through data-driven
              advertising strategies across major digital platforms.
              <br />
              Our campaigns are executed through channels such as{" "}
              <span className="font-bold">
                {" "}
                Instagram, Facebook, Google Ads, TikTok, and local media
                networks{" "}
              </span>
              , allowing brands to reach target audiences more effectively.{" "}
              <br />
              By analyzing user behavior, optimizing creatives, and refining
              audience segmentation, we improve campaign performance and
              customer acquisition efficiency.
            </p>
            <div className="mt-15.5 grid w-full grid-cols-1 items-stretch gap-10 lg:grid-cols-[399px_562px] lg:justify-center">
              <div className="text-left space-y-10 flex h-full flex-col justify-between">
                {listOne.map((item, key) => (
                  <article
                    key={key}
                    className=" neon-border-card  rounded-[25px] py-7 px-6.5 flex items-start min-h-47.75"
                  >
                    <div className="flex h-5 w-5 items-center justify-center rounded-full border border-[#5E43C0] bg-[#5E43C0] mr-5 mt-1.5">
                      <div className="h-3 w-3 rounded-full bg-linear-to-br from-[#8662FF] to-[#BEA5FF]" />
                    </div>
                    <div className="flex-1">
                      <div className="text-[22px] font-semibold leading-8 tracking-[-0.2px]">
                        {item.title}
                      </div>
                      <ul className="mt-2.5 list-disc pl-5 text-[14px] leading-6 marker:text-white/70 text-white/70 tracking-[-0.2px]">
                        {item.sub.map((s, index) => {
                          return <li key={index}>{s}</li>;
                        })}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>
              <div className="h-full w-full">
                <AnalyticSvg />
              </div>
            </div>
          </SectionShell>
        </section>

        <section className="relative pt-27.25 pb-38.75 bg-[url('/images/solution2.png')] bg-cover bg-center bg-no-repeat">
          <SectionShell>
            <div className="flex flex-col-reverse lg:flex-row   items-center">
              <Image
                className="max-w-100.5 max-h-161 mx-auto lg:mx-0 "
                src="/images/solution6.png"
                width={402}
                height={644}
                alt="Picture of the author"
              />
              <div className="flex-1  lg:pl-10 lg:mb-0  mb-20">
                <div className="module-title text-[30px] leading-11 md:text-[72px] md:leading-21.5 font-semibold  tracking-[-1px]">
                  Custom Technology Solution
                </div>
                <div className="module-subtitle mt-8 text-[22px] leading-8 text-[#E3E6F4] font-normal tracking-[-0.2px]">
                  We build customized systems designed around business
                  operations, helping companies simplify internal workflows and
                  improve management efficiency.
                </div>
                <div className="module-subtitle mt-6.5 text-[22px] leading-8 font-normal text-[#E3E6F4] tracking-[-0.2px]">
                  Our development includes{" "}
                  <span className="font-bold text-white">
                    internal dashboards, data management systems, API
                    integrations, and workflow automation tools{" "}
                  </span>
                  , tailored to each client’s needs. <br />
                  These solutions help reduce manual work and improve
                  operational visibility.
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                  <div>
                    <div className="text-[22px] leading-8 text-[#C3A2FF] font-semibold tracking-[-0.2px]">
                      Practical Applications
                    </div>
                    <ul className="mt-2.5 list-disc pl-5 text-[14px] leading-6 marker:text-white/70 text-white/70 tracking-[-0.2px]">
                      <li>Internal operation systems </li>
                      <li> CRM integration </li>
                      <li>Workflow automation</li>
                      <li> Data reporting systems</li>
                    </ul>
                  </div>
                  <div>
                    <div className="text-[22px] leading-8 text-[#C3A2FF] font-semibold">
                      Example Results
                    </div>
                    <ul className="mt-5 list-disc pl-5 text-[14px] leading-6 marker:text-white/70 text-white/70">
                      <li> Reduced manual processing time by 40% </li>
                      <li> Improved internal workflow efficiency</li>
                      <li>Enhanced operational transparency</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </SectionShell>
        </section>

        <section className="bg-[#000000] py-50 ">
          <SectionShell innerClassName="bg-[url('/images/solution4.png')] bg-cover bg-center bg-no-repeat rounded-[30px] module-title">
            <div className="grid grid-cols-1 xl:grid-cols-[minmax(580px,1fr)_minmax(0,1fr)] gap-10 py-9 pl-13.25 pr-10">
              <div>
                <div className="module-subtitle text-[30px] leading-11 md:text-[72px] md:leading-21.5 font-semibold tracking-[-1px]">
                  System Stability Solution
                </div>
                <div className="text-[22px] font-semibold leading-8 mt-4 text-[#C3A2FF] tracking-[-0.2px]">
                  Practical Applications
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
                  <div className="text-[14px] leading-6 tracking-[-0.2px]">
                    Internal operation systems <br /> CRM integration
                  </div>
                  <div className="text-[14px] leading-6 tracking-[-0.2px]">
                    Workflow automation <br /> Data reporting systems
                  </div>
                </div>
              </div>
              <div className="text-[22px] leading-8 text-[#E3E6F4] xl:max-w-117 tracking-[-0.2px]">
                We provide ongoing technical support and maintenance services to
                ensure system stability and long-term performance.
                <br />
                <br />
                Our services include{" "}
                <span className="font-bold">
                  server monitoring, issue troubleshooting, security patching,
                  and performance optimization
                </span>{" "}
                , helping businesses reduce downtime and maintain reliable
                operations.
              </div>
            </div>
          </SectionShell>
        </section>
        <Footer />
      </main>
    </AnimatedPage>
  );
}
