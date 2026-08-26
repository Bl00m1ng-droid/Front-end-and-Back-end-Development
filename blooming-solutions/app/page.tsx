const PETAL_ANGLES = [0, 60, 120, 180, 240, 300];

function BloomMark({
  size = 120,
  animated = false,
  className = "",
}: {
  size?: number;
  animated?: boolean;
  className?: string;
}) {
  const cx = 60;
  const cy = 58;
  const petalR = 15;
  const orbit = 17;
  const circumference = 2 * Math.PI * petalR;

  return (
    <svg
      viewBox="0 0 120 170"
      width={size}
      height={(size / 120) * 170}
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M60 92 C 60 115, 52 128, 60 150"
        stroke="#5A0F1A"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M60 112 C 50 110, 44 116, 40 126"
        stroke="#5A0F1A"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M60 128 C 70 126, 76 132, 80 141"
        stroke="#5A0F1A"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      {PETAL_ANGLES.map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        const px = cx + orbit * Math.sin(rad);
        const py = cy - orbit * Math.cos(rad);
        return (
          <circle
            key={angle}
            cx={px}
            cy={py}
            r={petalR}
            stroke="#5A0F1A"
            strokeWidth="1.4"
            className={animated ? "animate-unfurl" : ""}
            style={
              animated
                ? {
                    strokeDasharray: circumference,
                    strokeDashoffset: circumference,
                    animationDelay: `${i * 110}ms`,
                  }
                : undefined
            }
          />
        );
      })}
      <circle cx={cx} cy={cy} r="7" stroke="#5A0F1A" strokeWidth="1.4" />
    </svg>
  );
}

function SproutMark({ size = 56 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 60 60"
      width={size}
      height={size}
      fill="none"
      aria-hidden="true"
    >
      <path d="M30 48 L30 32" stroke="#5A0F1A" strokeWidth="1.6" strokeLinecap="round" />
      <path
        d="M30 36 C 24 34, 20 28, 21 22 C 27 23, 31 28, 30 36 Z"
        stroke="#5A0F1A"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M30 40 C 36 38, 40 33, 39 27 C 33 28, 29 33, 30 40 Z"
        stroke="#5A0F1A"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <ellipse cx="30" cy="50" rx="10" ry="3" stroke="#B8798A" strokeWidth="1.2" />
    </svg>
  );
}

function BudMark({ size = 56 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 60 60"
      width={size}
      height={size}
      fill="none"
      aria-hidden="true"
    >
      <path d="M30 50 L30 26" stroke="#5A0F1A" strokeWidth="1.6" strokeLinecap="round" />
      <path
        d="M30 34 C 23 33, 19 27, 21 21"
        stroke="#5A0F1A"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <ellipse cx="30" cy="16" rx="8" ry="11" stroke="#5A0F1A" strokeWidth="1.4" />
      <path d="M30 5 L30 27" stroke="#5A0F1A" strokeWidth="1" />
    </svg>
  );
}

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.47 14.38c-.29-.15-1.71-.84-1.98-.94-.27-.1-.46-.15-.66.15-.2.29-.76.94-.93 1.13-.17.2-.34.22-.63.07-.29-.15-1.22-.45-2.33-1.44-.86-.77-1.44-1.71-1.61-2-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.51-.07-.15-.66-1.59-.91-2.18-.24-.57-.48-.5-.66-.5-.17 0-.37-.02-.56-.02-.2 0-.51.07-.78.37-.27.29-1.02 1-1.02 2.43 0 1.43 1.04 2.82 1.19 3.01.15.2 2.05 3.13 4.96 4.39.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.11.55-.08 1.71-.7 1.96-1.38.24-.67.24-1.24.17-1.37-.07-.12-.27-.2-.56-.34Z" />
      <path d="M12.02 2C6.5 2 2.03 6.47 2.03 11.99c0 1.85.5 3.63 1.44 5.2L2 22l4.94-1.42a9.96 9.96 0 0 0 5.08 1.39h.01c5.52 0 9.99-4.47 9.99-9.99C22.02 6.47 17.55 2 12.02 2Zm5.85 15.82a8.3 8.3 0 0 1-5.85 2.42h-.01a8.28 8.28 0 0 1-4.22-1.15l-.3-.18-2.93.84.79-2.86-.2-.3a8.26 8.26 0 0 1-1.27-4.4c0-4.58 3.73-8.31 8.32-8.31 2.22 0 4.31.87 5.88 2.44a8.26 8.26 0 0 1 2.44 5.87c0 4.58-3.73 8.32-8.32 8.32Z" />
    </svg>
  );
}

const services = [
  {
    name: "Graduate & Business Portfolios",
    price: "$25",
    unit: "starting at",
    description:
      "One clean site that puts your work in front of the right people: projects, resume, and a way to reach you, built to load fast and read well on any screen.",
    includes: [
      "Up to 5 pages",
      "Mobile-first layout",
      "Contact form",
      "One round of revisions",
    ],
  },
  {
    name: "E-Commerce Websites",
    price: "$100",
    unit: "starting at",
    description:
      "A store that's ready to take orders: product pages, cart, and checkout, styled to match your brand instead of a generic template.",
    includes: [
      "Up to 15 products",
      "Secure checkout",
      "Product catalog setup",
      "Two rounds of revisions",
    ],
  },
];

const steps = [
  {
    mark: <SproutMark />,
    label: "01",
    title: "Plant",
    description:
      "A short call about you or your business: what you do, who it's for, and what the site needs to say.",
  },
  {
    mark: <BudMark />,
    label: "02",
    title: "Grow",
    description:
      "I design and build the site, and share drafts along the way so you can weigh in before anything is final.",
  },
  {
    mark: <BloomMark size={56} />,
    label: "03",
    title: "Bloom",
    description:
      "The site goes live, and I walk you through how to update it yourself, no developer required.",
  },
];

const principles = [
  {
    title: "Fast to load",
    description: "Every page is built lean, so it opens quickly on any connection or device.",
  },
  {
    title: "Easy to update",
    description: "You get a site you can edit yourself: swap a photo, add a project, change a price.",
  },
  {
    title: "Built to convert",
    description: "Clear layout, clear next step. Visitors know exactly what to do when they land.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-7 sm:px-10">
        <a href="#top" className="font-display text-lg tracking-tight text-ink focus-ring">
          Blooming Solutions
        </a>
        <nav className="hidden gap-8 font-body text-sm text-ink/70 sm:flex">
          <a href="#services" className="transition-colors hover:text-burgundy focus-ring">
            Services
          </a>
          <a href="#process" className="transition-colors hover:text-burgundy focus-ring">
            Process
          </a>
          <a href="#contact" className="transition-colors hover:text-burgundy focus-ring">
            Contact
          </a>
        </nav>
        <a
          href="#contact"
          className="rounded-full border border-burgundy px-4 py-2 font-body text-sm text-burgundy transition-colors hover:bg-burgundy hover:text-paper focus-ring"
        >
          Start a project
        </a>
      </header>

      {/* Hero */}
      <section id="top" className="mx-auto max-w-6xl px-6 pb-20 pt-8 sm:px-10 sm:pb-28 sm:pt-14">
        <div className="grid items-center gap-12 sm:grid-cols-[1.2fr_0.8fr]">
          <div className="animate-rise">
            <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-rose">
              Web design studio
            </p>
            <h1 className="font-display text-4xl font-medium leading-[1.08] tracking-tight text-ink sm:text-6xl">
              Your work, presented
              <br />
              <span className="italic text-burgundy">like it&rsquo;s ready</span> to bloom.
            </h1>
            <p className="mt-6 max-w-lg font-body text-base leading-relaxed text-ink/70 sm:text-lg">
              Blooming Solutions builds portfolio sites for graduates and
              online stores for small businesses — clean, fast, and built
              around what you&rsquo;re actually selling.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#services"
                className="rounded-full bg-burgundy px-6 py-3 font-body text-sm text-paper transition-colors hover:bg-burgundy-light focus-ring"
              >
                See pricing
              </a>
              <a
                href="#contact"
                className="font-body text-sm text-ink underline decoration-rose decoration-2 underline-offset-4 transition-colors hover:text-burgundy focus-ring"
              >
                Start a project
              </a>
            </div>
          </div>
          <div className="flex justify-center sm:justify-end">
            <BloomMark size={220} animated />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-y border-ink/10 bg-blush/40">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28">
          <div className="mb-14 max-w-xl">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-rose">
              Pricing
            </p>
            <h2 className="font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
              Two ways to work together
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.name}
                className="flex flex-col rounded-2xl border border-ink/10 bg-paper p-8 shadow-sm sm:p-10"
              >
                <div className="flex items-baseline justify-between gap-4 border-b border-ink/10 pb-6">
                  <h3 className="font-display text-xl font-medium leading-snug text-ink">
                    {service.name}
                  </h3>
                </div>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="font-mono text-xs uppercase tracking-wide text-ink/50">
                    {service.unit}
                  </span>
                  <span className="font-mono text-3xl text-burgundy">
                    {service.price}
                  </span>
                </div>

                <p className="mt-4 font-body text-sm leading-relaxed text-ink/70">
                  {service.description}
                </p>
                <ul className="mt-6 space-y-3 border-t border-ink/10 pt-6 font-body text-sm text-ink/80">
                  {service.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-rose" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-burgundy px-5 py-2.5 font-body text-sm text-burgundy transition-colors hover:bg-burgundy hover:text-paper focus-ring"
                >
                  Get started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28">
        <div className="mb-14 max-w-xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-rose">
            How it works
          </p>
          <h2 className="font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
            From first call to launch
          </h2>
        </div>
        <div className="grid gap-10 sm:grid-cols-3 sm:gap-8">
          {steps.map((step) => (
            <div key={step.title}>
              <div className="mb-5">{step.mark}</div>
              <p className="font-mono text-xs text-rose">{step.label}</p>
              <h3 className="mt-1 font-display text-xl font-medium text-ink">
                {step.title}
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-ink/70">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Principles */}
      <section className="border-y border-ink/10 bg-deep text-paper">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28">
          <div className="mb-14 max-w-xl">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-rose">
              What you get
            </p>
            <h2 className="font-display text-3xl font-medium tracking-tight text-paper sm:text-4xl">
              Built like a real business
            </h2>
          </div>
          <div className="grid gap-10 sm:grid-cols-3 sm:gap-8">
            {principles.map((p) => (
              <div key={p.title} className="border-t border-paper/20 pt-6">
                <h3 className="font-display text-lg font-medium text-paper">
                  {p.title}
                </h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-paper/70">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Footer */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28">
        <div className="grid items-end gap-10 sm:grid-cols-[1.3fr_0.7fr]">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-rose">
              Get in touch
            </p>
            <h2 className="font-display text-3xl font-medium leading-tight tracking-tight text-ink sm:text-4xl">
              Ready to start your project?
            </h2>
            <p className="mt-5 max-w-md font-body text-base leading-relaxed text-ink/70">
              Tell me a little about what you need — a portfolio or a store —
              and I&rsquo;ll follow up with next steps and a quote.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="mailto:dondokundai@gmail.com"
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-burgundy px-6 py-3 font-body text-sm text-paper transition-colors hover:bg-burgundy-light focus-ring"
            >
              hello@bloomingsolutions.com
            </a>
             <a
                href="https://wa.me/263780058570?text=Hi!%20I%27d%20like%20to%20talk%20about%20a%20website."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-burgundy px-6 py-3 font-body text-sm text-burgundy transition-colors hover:bg-burgundy hover:text-paper focus-ring"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Chat on WhatsApp
              </a>
              </div>
          </div>
          <div className="flex justify-start sm:justify-end">
            <BloomMark size={90} />
          </div>
        </div>
      </section>

      <footer className="border-t border-ink/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 font-body text-xs text-ink/50 sm:flex-row sm:px-10">
          <p>© {new Date().getFullYear()} Blooming Solutions.</p>
          <p>Portfolios from $25 · E-commerce from $100</p>
        </div>
      </footer>
    </main>
  );
}
