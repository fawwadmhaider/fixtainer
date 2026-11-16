import { ArrowRight, ArrowUpRight, Check, FileCheck2, Wrench } from "lucide-react";
import { createFileRoute, Link } from "@tanstack/react-router";

import fieldServiceImage from "@/assets/fixtainer-field-service.jpg";
import fixtainerLogo from "@/assets/fixtainer-logo.png.asset.json";

const whatsappMessage = encodeURIComponent(
  "Hello FIXtainer team, I’d like to learn more about your field service platform.",
);
const whatsappHref = `https://api.whatsapp.com/send?text=${whatsappMessage}`;

const serviceSteps = [
  { number: "01", title: "Register the asset", detail: "Keep the equipment and its service history together." },
  { number: "02", title: "Create the job", detail: "Schedule routine service or record a fault." },
  { number: "03", title: "Dispatch the team", detail: "Assign the right technicians to each visit." },
  { number: "04", title: "Record the work", detail: "Capture reports, evidence and parts used." },
  { number: "05", title: "Generate the invoice", detail: "Connect billing directly to completed work." },
  { number: "06", title: "Share the record", detail: "Give asset owners a clear view of the job." },
  { number: "07", title: "Track renewals", detail: "Keep upcoming services and contracts visible." },
];

const contractorIndustries = [
  "Facility & HVAC services",
  "Industrial maintenance",
  "Solar EPC & O&M",
  "Machinery & engineering",
  "Power & infrastructure",
  "Specialist service providers",
];

const ownerIndustries = [
  "Commercial real estate",
  "Healthcare",
  "Education",
  "Retail & hospitality",
  "Telecommunications",
  "Energy & utilities",
];

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "FIXtainer | Field Service & Maintenance ERP" },
      {
        name: "description",
        content:
          "Connect contractors, field teams and asset owners with FIXtainer, the enterprise field service and maintenance ERP for service jobs, assets, reports and invoices.",
      },
      {
        property: "og:title",
        content: "FIXtainer | Connected Field Service Operations",
      },
      {
        property: "og:description",
        content:
          "One connected maintenance ecosystem. Manage field teams, service jobs, asset history, work reports and invoices in one shared view.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "FIXtainer",
          applicationCategory: "BusinessApplication",
          applicationSubCategory: "Field service management and maintenance ERP",
          description:
            "Enterprise operations and field service ERP that connects service contractors and asset owners across jobs, maintenance, work reports and invoicing.",
          operatingSystem: "Web",
          audience: {
            "@type": "BusinessAudience",
            audienceType: "Service contractors and commercial and industrial asset owners",
          },
          featureList: [
            "Field service and job management",
            "Technician dispatch",
            "Asset history and maintenance scheduling",
            "Digital work reports and evidence",
            "Parts tracking and invoicing",
            "Contract and renewal tracking",
          ],
        }),
      },
    ],
  }),
});

function Wordmark({ footer = false }: { footer?: boolean }) {
  return (
    <Link
      to="/"
      aria-label="FIXtainer home"
      className={`inline-flex shrink-0 items-center ${footer ? "h-7" : "h-8"}`}
    >
      <img
        src={fixtainerLogo.url}
        alt="FIXtainer"
        width={1010}
        height={170}
        className={`h-full w-auto object-contain ${footer ? "max-w-40" : "max-w-40 sm:max-w-48"}`}
      />
    </Link>
  );
}

function WhatsAppLink({ label, outline = false }: { label: string; outline?: boolean }) {
  return (
    <a
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-sm px-5 py-3 font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary ${outline ? "fx-outline-button border" : "bg-primary text-primary-foreground hover:bg-primary/90"}`}
      href={whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label={`${label}; opens WhatsApp`}
    >
      {label}
      <ArrowUpRight aria-hidden="true" className="size-4" />
    </a>
  );
}

function IndustryList({
  title,
  description,
  industries,
}: {
  title: string;
  description: string;
  industries: string[];
}) {
  return (
    <div className="min-w-0">
      <div className="mb-7 border-l-[3px] border-primary pl-5">
        <h3 className="font-display text-2xl font-bold text-fixtainer-navy">{title}</h3>
        <p className="mt-1 text-muted-foreground">{description}</p>
      </div>
      <ul className="fx-industry-list grid grid-cols-1 gap-x-8 sm:grid-cols-2">
        {industries.map((industry) => (
          <li key={industry} className="py-4 text-base font-semibold text-foreground">
            {industry}
          </li>
        ))}
      </ul>
    </div>
  );
}

function HomePage() {
  return (
    <main>
      <section aria-labelledby="home-heading" className="fx-hero flex flex-col">
        <img
          src={fieldServiceImage}
          alt="Field service technician inspecting industrial equipment and logging work on a tablet"
          width={1536}
          height={1024}
          fetchPriority="high"
          className="fx-hero-image"
        />
        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col px-5 pb-20 sm:px-8 lg:px-12">
          <header className="flex min-h-[76px] items-center justify-between gap-3 border-b border-primary-foreground/20 sm:min-h-20">
            <Wordmark />
            <nav aria-label="Main navigation" className="fx-header-nav flex items-center gap-7">
              <a href="#platform" className="fx-nav-link text-sm font-medium">
                Platform
              </a>
              <a href="#workflow" className="fx-nav-link text-sm font-medium">
                How it works
              </a>
              <a href="#industries" className="fx-nav-link text-sm font-medium">
                Industries
              </a>
            </nav>
            <div className="hidden sm:block">
              <WhatsAppLink label="Get in touch" outline />
            </div>
            <div className="sm:hidden">
              <WhatsAppLink label="WhatsApp" outline />
            </div>
          </header>

          <nav aria-label="Explore FIXtainer" className="fx-mobile-nav flex flex-wrap gap-x-5 gap-y-2 py-4 sm:hidden">
            <a href="#platform" className="fx-nav-link text-sm">Platform</a>
            <a href="#workflow" className="fx-nav-link text-sm">How it works</a>
            <a href="#industries" className="fx-nav-link text-sm">Industries</a>
          </nav>

          <div className="flex flex-1 flex-col justify-center pb-8 pt-16 sm:py-20">
            <p className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-fixtainer-lime sm:text-sm">
              <span aria-hidden="true" className="size-2 rounded-full bg-primary" />
              Enterprise operations &amp; field service ERP
            </p>
            <h1
              id="home-heading"
              className="max-w-3xl font-display text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-7xl"
            >
              Field service, <span className="text-fixtainer-lime">connected.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-fixtainer-ice/90 sm:text-xl">
              One shared view for contractors and asset owners—from the first service job to the next renewal.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
              <WhatsAppLink label="Start a WhatsApp enquiry" />
              <a href="#platform" className="inline-flex items-center gap-2 py-2 font-semibold text-fixtainer-ice transition-colors hover:text-fixtainer-lime">
                Explore the platform <ArrowRight aria-hidden="true" className="size-4" />
              </a>
            </div>
          </div>

          <p className="max-w-4xl border-l-2 border-fixtainer-green pl-4 text-sm leading-6 text-fixtainer-ice/90 sm:text-base">
            Better visibility for asset owners. Better operational control for contractors. One connected maintenance ecosystem.
          </p>
        </div>
      </section>

      <section aria-label="Connected service operations" className="border-b border-border bg-fixtainer-cloud">
        <div className="mx-auto grid max-w-7xl gap-0 divide-y divide-border px-5 py-2 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-8 lg:px-12">
          {[
            { label: "One shared record", detail: "Assets, jobs, reports & invoices" },
            { label: "Two connected teams", detail: "Contractors & asset owners" },
            { label: "From call-out to renewal", detail: "One visible service workflow" },
          ].map((item) => (
            <div key={item.label} className="py-4 sm:px-7 sm:first:pl-0 sm:last:pr-0">
              <p className="font-display font-bold text-foreground">{item.label}</p>
              <p className="mt-1 text-sm text-muted-foreground">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="platform" aria-labelledby="platform-heading" className="scroll-mt-10 bg-background">
        <div className="mx-auto grid max-w-7xl gap-x-16 gap-y-10 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:px-12 lg:py-28">
          <div>
            <p className="fx-section-kicker text-sm uppercase tracking-[0.1em]">One platform, two sides</p>
            <h2 id="platform-heading" className="mt-4 max-w-lg font-display text-3xl font-extrabold leading-tight sm:text-4xl">
              A clearer way to manage every service relationship.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-7 text-muted-foreground">
              Reports, parts, invoices, assets and contracts can all tell the same story. FIXtainer keeps contractors and owners working from one connected maintenance record.
            </p>
          </div>
          <div className="grid gap-12 border-t border-border pt-8 sm:grid-cols-2 sm:gap-10">
            <article aria-labelledby="contractors-heading">
              <div className="mb-5 flex size-11 items-center justify-center rounded-sm bg-fixtainer-cloud text-fixtainer-green">
                <Wrench aria-hidden="true" className="size-5" />
              </div>
              <h3 id="contractors-heading" className="font-display text-xl font-bold">For service contractors</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">Manage service delivery from the office to the field.</p>
              <ul className="fx-check-list mt-5 space-y-3 text-sm">
                {["Service operations & job management", "Team and technician dispatch", "Digital work reports and evidence", "Parts tracking and faster invoicing"].map((item) => (
                  <li key={item}><Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-primary" /><span>{item}</span></li>
                ))}
              </ul>
            </article>
            <article aria-labelledby="owners-heading">
              <div className="mb-5 flex size-11 items-center justify-center rounded-sm bg-accent text-fixtainer-green">
                <FileCheck2 aria-hidden="true" className="size-5" />
              </div>
              <h3 id="owners-heading" className="font-display text-xl font-bold">For asset owners</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">See what is happening across your assets and service partners.</p>
              <ul className="fx-check-list mt-5 space-y-3 text-sm">
                {["Asset and contractor visibility", "Verified service delivery", "Planned maintenance and renewals", "Cost transparency and service history"].map((item) => (
                  <li key={item}><Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-primary" /><span>{item}</span></li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section id="workflow" aria-labelledby="workflow-heading" className="scroll-mt-10 border-y border-border bg-fixtainer-ice">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
          <div className="grid gap-5 sm:grid-cols-[0.72fr_1.28fr] sm:items-end">
            <p className="fx-section-kicker text-sm uppercase tracking-[0.1em]">From job to record</p>
            <div>
              <h2 id="workflow-heading" className="font-display text-3xl font-extrabold sm:text-4xl">Every step stays connected.</h2>
              <p className="mt-3 max-w-2xl leading-7 text-muted-foreground">
                Service history, work evidence, parts and billing follow the job, so both sides can see what happened and what comes next.
              </p>
            </div>
          </div>
          <ol className="mt-12 grid gap-x-6 gap-y-9 sm:grid-cols-2 lg:grid-cols-4">
            {serviceSteps.map((step) => (
              <li key={step.number} className="fx-workflow-step pt-4">
                <span className="font-display text-sm font-extrabold text-primary">{step.number}</span>
                <h3 className="mt-4 font-display text-lg font-bold">{step.title}</h3>
                <p className="mt-2 max-w-xs text-sm leading-6 text-muted-foreground">{step.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="industries" aria-labelledby="industries-heading" className="scroll-mt-10 bg-background">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
          <div className="max-w-2xl">
            <p className="fx-section-kicker text-sm uppercase tracking-[0.1em]">Built for the service ecosystem</p>
            <h2 id="industries-heading" className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">Supporting the people who keep operations running.</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              A connected workspace for maintenance and service partners, and the commercial and industrial organisations they serve.
            </p>
          </div>
          <div className="mt-12 grid gap-14 lg:grid-cols-2 lg:gap-20">
            <IndustryList title="Contractors" description="Service providers & maintenance partners" industries={contractorIndustries} />
            <IndustryList title="Asset owners" description="Commercial, industrial & public-serving organisations" industries={ownerIndustries} />
          </div>
        </div>
      </section>

      <section aria-labelledby="cta-heading" className="fx-final-cta">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-16 sm:px-8 sm:py-20 lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.1em] text-fixtainer-lime">Simplify. Control. Scale.</p>
            <h2 id="cta-heading" className="mt-3 font-display text-3xl font-extrabold leading-tight sm:text-4xl">
              Let’s make every operation connected.
            </h2>
            <p className="mt-3 text-base text-fixtainer-ice/80">One asset. Two sides. One shared record.</p>
          </div>
          <WhatsAppLink label="Start a WhatsApp enquiry" />
        </div>
      </section>

      <footer className="bg-background">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-7 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <Wordmark />
          <p className="text-sm text-muted-foreground">Enterprise operations &amp; field service ERP</p>
          <a href="#home-heading" className="inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary">
            Back to top <ArrowRight aria-hidden="true" className="size-4 -rotate-90" />
          </a>
        </div>
      </footer>
    </main>
  );
}