import Link from "next/link";
import { AnimatedPage } from "./components/AnimatedPage";
import { Footer } from "./components/Footer";
import { Nav } from "./components/Nav";
import { SectionShell } from "./components/SectionShell";
import Image from "next/image";

const services = [
  {
    id: 5,
    title: "Digital Advertising",
    body: "We create targeted advertising strategies to improve brand visibility and customer engagement across digital channels.",
  },
  {
    id: 6,
    title: "Technology Development",
    body: "We develop customized systems and digital tools to support business operations and improve workflow efficiency.",
  },
  {
    id: 7,
    title: "System Maintenance",
    body: "We provide ongoing maintenance and technical support to ensure systems remain stable, secure, and optimized.",
  },
];

const testimonials = [
  {
    name: "Mico",
    image: "/images/user1.png",
    quote: `"Working with Openfield Tech has significantly improved our digital advertising performance. Their team demonstrated strong market knowledge and helped us build more targeted campaigns that increased both visibility and engagement. What stood out most was their ability to adapt quickly and continuously optimize based on performance data."`,
  },
  {
    name: "Elizabeth",
    image: "/images/user2.png",
    quote: `"Openfield Tech delivered a customized system solution that helped us streamline internal operations and improve workflow efficiency. Their development process was well-structured, transparent, and highly responsive to our business needs. The final result exceeded our expectations in both usability and stability."`,
  },
  {
    name: "uyy_ari",
    image: "/images/user3.png",
    quote: `
    "Their technical support and maintenance services have been a key part of keeping our systems stable. From routine monitoring to issue resolution, their team has consistently provided reliable and efficient support. This has allowed us to focus more on business growth with greater confidence."
    `,
  },
];

export default function Home() {
  return (
    <AnimatedPage>
      <main className="page-shell">
        <Nav />
        <section className="pt-20 pb-23.75 bg-[url('/images/home8.png')] bg-cover bg-center  bg-no-repeat">
          <SectionShell>
            <div className="hero-lines-title text-[30px] leading-11 md:text-[72px] md:leading-21.5 font-semibold tracking-[-1px] text-center max-w-231.25 mx-auto">
              <span className="hero-title-line block">Empowering Growth</span>
              <span className="hero-title-line block">
                Through Technology and Digital Reach
              </span>
            </div>
            <div className="hero-lines-subtitle mt-7.75 text-[18px] leading-8.25 text-[#E3E6F4] text-center max-w-231.25 mx-auto tracking-[-0.2px] opacity-0 translate-y-8">
              Openfield Tech Limited helps businesses grow through strategic
              advertising, custom technology solutions, and reliable system
              support.By combining market insights with technical expertise, we
              create practical solutions that improve efficiency, strengthen
              digital presence, and support long-term business development.
            </div>
            <Link
              href="/contact"
              className="hero-lines-cta mx-auto cta-button mt-14 flex items-center justify-center rounded-full h-12 w-33.75 text-[16px] font-semibold text-white opacity-0 translate-y-8"
            >
              Contact Us
            </Link>
            <Image
              className="hero-lines-image mt-35.75 opacity-0 translate-y-8"
              src="/images/home9.png"
              width={1200}
              height={385}
              alt="Picture of the author"
            />
          </SectionShell>
        </section>

        <section className="pt-26.25 pb-50 bg-black">
          <SectionShell>
            <h2 className="module-title text-[30px] leading-11 md:text-[72px] md:leading-21.5 font-semibold tracking-[-1px] text-center">
              What We Do
            </h2>
            <p className="module-subtitle mt-8 mx-auto max-w-268.25 text-[18px] text-[#E3E6F4] tracking-[-0.2px] text-center">
              We provide businesses with integrated support across advertising,
              technology, and system operations.
              <br />
              Our services are designed to improve market reach, operational
              efficiency, and long-term digital stability.
            </p>
            <div className="mt-11.75 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <article
                  key={service.id}
                  className="neon-border-card rounded-[25px] px-6 pt-8.75 pb-10"
                  style={
                    {
                      "--neon-delay": `${index * -1.35}s`,
                    } as React.CSSProperties
                  }
                >
                  <Image
                    className="mx-auto md:mx-0"
                    src={`/images/home${service.id}.png`}
                    width={306}
                    height={222}
                    alt="Picture of the author"
                  />
                  <h3 className="mt-5 text-[22px] leading-8 font-semibold text-center text-white">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-[14px] leading-6 text-[#E3E6F4] text-center">
                    {service.body}
                  </p>
                </article>
              ))}
            </div>
          </SectionShell>
        </section>

        <section className="pt-30 pb-23 bg-[url('/images/home1.png')] bg-cover bg-center  bg-no-repeat">
          <SectionShell>
            <div className="grid gap-x-13.75 gap-y-10 xl:grid-cols-2">
              <div className="relative">
                <h2 className="module-title text-[30px] leading-11 md:text-[72px] md:leading-21.5 font-semibold tracking-[-1px] ">
                  About Us
                </h2>
                <div className="module-subtitle relative text-[22px] leading-8 tracking-[-0.2px] mt-15.75 z-10 xl:max-w-126.25 font-normal text-[#E3E6F4]">
                  Openfield Tech Limited is a technology-driven company
                  specializing in digital advertising, software development, and
                  system maintenance.
                </div>
                <br />
                <div className="module-subtitle relative text-[22px] leading-8 tracking-[-0.2px]  z-10 xl:max-w-126.25 font-normal text-[#E3E6F4]">
                  We work with businesses to build stronger digital
                  infrastructure, improve operational efficiency, and support
                  sustainable growth through reliable execution.
                </div>
              </div>
              <div>
                <div
                  className="home-card neon-border-card sm:flex items-center justify-between px-4.5 py-8 sm:py-1.25 min-h-61.75"
                  style={{ "--neon-delay": "-0.7s" } as React.CSSProperties}
                >
                  <Image
                    className="max-w-58.25 max-h-59 mx-auto sm:mx-0"
                    src="/images/home3.png"
                    width={233}
                    height={236}
                    alt="Picture of the author"
                  />
                  <div className="flex-1">
                    <div className="text-[24px] font-semibold leading-8">
                      Our Mission
                    </div>
                    <div className="mt-6 text-[14px] tracking-[-0.2px] leading-6 text-[#E3E6F4]">
                      To simplify business growth through technology and
                      efficient execution.
                      <br />
                      We believe the right combination of strategy and
                      technology can create stronger and more sustainable
                      business outcomes.
                    </div>
                  </div>
                </div>
                <div
                  className="home-card neon-border-card sm:flex items-center justify-between px-4.5 py-8 sm:py-1.25 mt-4.5 min-h-61.75"
                  style={{ "--neon-delay": "-2.1s" } as React.CSSProperties}
                >
                  <Image
                    className="max-w-58.25 max-h-59 mx-auto sm:mx-0"
                    src="/images/home4.png"
                    width={233}
                    height={236}
                    alt="Picture of the author"
                  />
                  <div className="flex-1">
                    <div className="text-[24px] font-semibold leading-8">
                      Our Values
                    </div>
                    <div className="relative mt-4.5 text-[14px] font-normal leading-6 tracking-[-0.2px]">
                      {[
                        {
                          title: "Innovation",
                          body: "We adapt to changing markets with practical ideas.",
                        },
                        {
                          title: "Reliability",
                          body: "Stable support and consistent delivery are our priorities.",
                        },
                        {
                          title: "Efficiency",
                          body: "We focus on delivering value through optimized execution.",
                        },
                      ].map((item, index) => (
                        <div
                          key={item.title}
                          className="relative flex items-start pb-2 last:pb-0"
                        >
                          <div className="h-6 min-w-3.25 flex items-center justify-center relative z-10">
                            <div className="grid h-3.5 w-3.5 place-items-center rounded-full border border-[#5E43C0] bg-[rgba(94,67,192,0.47)]">
                              <div className="w-2 h-2 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,#8662FF_69.46%,#BEA5FF_100%)]"></div>
                            </div>
                          </div>
                          {index !== 2 && (
                            <div className="absolute left-1.5 top-3.5 border-l h-full border-dashed border-[#5E43C0]"></div>
                          )}
                          <div className="flex-1 pl-3.5">
                            <div className="text-[14px] font-normal leading-6">
                              {item.title}
                            </div>
                            <div className="text-[10px] font-normal leading-6 text-white/70">
                              {item.body}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SectionShell>
        </section>

        <section className="py-50">
          <SectionShell>
            <h2 className="module-title text-[30px] leading-11 md:text-[72px] md:leading-21.5 font-semibold tracking-[-1px] text-center">
              Client Testimonials
            </h2>
            <div className="mt-27.75 grid gap-6 lg:grid-cols-3">
              {testimonials.map((item, index) => (
                <article
                  key={item.name}
                  className="neon-border-card rounded-[25px] px-4 pb-11 pt-16 relative flex flex-col items-center text-center"
                  style={
                    {
                      "--neon-delay": `${index * -1.15}s`,
                    } as React.CSSProperties
                  }
                >
                  <div className="absolute inset-x-0 -top-4 flex justify-center">
                    <div
                      className="h-20 w-20 rounded-full bg-cover bg-center shadow-lg"
                      style={{ backgroundImage: `url(${item.image})` }}
                    />
                  </div>
                  <h3 className="text-center text-[20px] font-medium mt-4">
                    {item.name}
                  </h3>
                  <p className="mt-6 text-sm leading-6 text-[#E3E6F4] text-center">
                    {item.quote}
                  </p>
                </article>
              ))}
            </div>
          </SectionShell>
        </section>

        <Footer />
      </main>
    </AnimatedPage>
  );
}
