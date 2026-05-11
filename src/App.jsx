import { useEffect, useState } from "react";
import {
  Activity,
  ArrowRight,
  BarChart3,
  BatteryCharging,
  BellRing,
  Bot,
  Check,
  ChevronDown,
  Cpu,
  Gauge,
  Image as ImageIcon,
  MessageCircle,
  MonitorSmartphone,
  MousePointer2,
  Paperclip,
  Power,
  RadioTower,
  RefreshCw,
  Route,
  Send,
  Settings2,
  ShieldCheck,
  Smartphone,
  Sparkles,
  TerminalSquare,
  Wifi
} from "lucide-react";

const features = [
  {
    icon: TerminalSquare,
    title: "Chat-first PC commands",
    copy: "Tell your Android app what you need done and the dispatcher turns it into a safe, logged action for your own computer."
  },
  {
    icon: Activity,
    title: "Live system pulse",
    copy: "Check battery, charging state, CPU, memory, disk, network, uptime, and service health from the phone before you touch the desk."
  },
  {
    icon: BellRing,
    title: "Wake and power alerts",
    copy: "Use Wake-on-LAN, receive power-on and resume notifications, and know when the PC is reachable again."
  },
  {
    icon: MonitorSmartphone,
    title: "Visible Remote View",
    copy: "When a task needs human steering, open a guarded remote surface with screenshots, taps, scrolls, hotkeys, and text entry controls."
  },
  {
    icon: Bot,
    title: "Local model modes",
    copy: "Route supported chat and desktop tasks through local models where available, with settings that keep the user in control."
  },
  {
    icon: Sparkles,
    title: "Local image edits",
    copy: "Pick an image on Android, tune strength and guidance, run the edit on the PC, then attach the result back into chat."
  },
  {
    icon: ShieldCheck,
    title: "Privacy-first",
    copy: "No always-on cloud dependency and no raw remote shell. Actions are authenticated, constrained, logged, and blocked around sensitive credentials."
  }
];

const steps = [
  {
    icon: Smartphone,
    title: "Pair the phone",
    copy: "Enter the rotating six-digit code and save the dispatcher address on your Android device."
  },
  {
    icon: Route,
    title: "Send a request",
    copy: "Ask for a status report, open an app, search files, wake the PC, or queue a visible desktop task."
  },
  {
    icon: Cpu,
    title: "Let the agent work",
    copy: "The dispatcher queues the safe action while the PC agent polls, executes, and writes results to history."
  },
  {
    icon: RadioTower,
    title: "Stay notified",
    copy: "WebSocket updates bring progress, completion, power events, and diagnostics back to your phone."
  }
];

const plans = [
  {
    name: "Founder",
    price: "$29",
    note: "Early individual access",
    perks: ["Android companion beta", "Chat command queue", "Battery and system diagnostics"],
    featured: false
  },
  {
    name: "Founder Pro",
    price: "$79",
    note: "For power users",
    perks: ["Everything in Founder", "Visible Remote View", "Local model setup guidance"],
    featured: true
  },
  {
    name: "Founder Team",
    price: "$199",
    note: "Small labs and builders",
    perks: ["Three founder seats", "Shared setup guidance", "Early roadmap feedback"],
    featured: false
  }
];

const faqs = [
  {
    q: "What is shipping first?",
    a: "The first product focus is the Android companion, local dispatcher, desktop agent, diagnostics, command queue, wake alerts, and guarded Remote View."
  },
  {
    q: "Does the pricing button charge my card?",
    a: "No. Payments are not connected yet. The current call to action is for founder interest and early-access updates."
  },
  {
    q: "Will local AI work on every PC?",
    a: "Local model support depends on the machine, model, and available hardware. Loop Control is designed to use local options where supported and keep normal controls useful without them."
  },
  {
    q: "Is this a remote desktop replacement?",
    a: "Not exactly. Loop Control focuses on commands, diagnostics, notifications, and a guarded Remote View for moments that need visible steering."
  },
  {
    q: "Does it expose a shell?",
    a: "No. The dispatcher maps requests to allowlisted actions, authenticates calls with a bearer token, logs events, and avoids credential-like text entry."
  }
];

function App() {
  return (
    <main className="min-h-screen w-full max-w-full overflow-hidden bg-ink-950 text-slate-100">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] bg-[size:44px_44px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(38,214,170,.2),transparent_28%),radial-gradient(circle_at_76%_10%,rgba(85,199,255,.14),transparent_26%),radial-gradient(circle_at_62%_76%,rgba(255,191,105,.12),transparent_30%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,8,13,.32),#06080d_72%)]" />
      </div>

      <Header />

      <section className="relative min-h-[92vh] px-5 pb-16 pt-28 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl min-w-0 items-center gap-12 lg:grid-cols-[1.02fr_.98fr]">
          <div className="relative z-10 w-full min-w-0 max-w-[calc(100vw-2.5rem)] sm:max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-sm text-slate-200 shadow-glass backdrop-blur-xl">
              <Sparkles className="h-4 w-4 text-signal-green" />
              Local-first Android control for your PC
            </div>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.03] tracking-normal text-white sm:text-6xl lg:text-7xl">
              Loop Control
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              Pair your phone to your own computer, send safe commands, monitor live diagnostics, wake the machine, and open Remote View when a task needs human steering.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#founder"
                className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-signal-green px-6 py-3 font-semibold text-ink-950 transition hover:bg-emerald-300 focus:outline-none focus:ring-2 focus:ring-signal-green focus:ring-offset-2 focus:ring-offset-ink-950 sm:w-auto"
              >
                Join Founder Beta
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </a>
              <a
                href="#features"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md border border-white/14 bg-white/8 px-6 py-3 font-semibold text-white backdrop-blur-xl transition hover:border-white/24 hover:bg-white/12 focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-ink-950 sm:w-auto"
              >
                Explore features
              </a>
            </div>
            <p className="mt-4 max-w-xl text-sm font-semibold leading-6 text-slate-400">
              Early founder testing now open - Windows + Android beta.
            </p>
            <dl className="mt-10 grid max-w-xl grid-cols-1 gap-3 text-sm text-slate-400 sm:grid-cols-3">
              <Metric value="Local-first" label="architecture" />
              <Metric value="Android" label="companion" />
              <Metric value="Guarded" label="safe action queue" />
            </dl>
          </div>

          <HeroVisual />
        </div>
        <div className="pointer-events-none absolute bottom-4 left-1/2 hidden -translate-x-1/2 text-sm text-slate-500 md:block">
          <ChevronDown className="mx-auto h-5 w-5 animate-bounce" />
        </div>
      </section>

      <section id="features" className="px-5 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Control surface"
          title="A phone-sized command center for the PC you already own."
          copy="Loop Control is built around the real workflow: pair, chat, inspect, wake, steer, and get notified without exposing a raw shell."
        />
        <div className="mx-auto mt-12 grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </section>

      <section id="how" className="px-5 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="How it works"
          title="A short loop from Android to dispatcher to desktop agent."
          copy="The workflow is built for practical control before launch: a trusted phone, an authenticated local server, and a PC agent that reports back."
        />
        <div className="mx-auto mt-12 grid max-w-7xl gap-4 lg:grid-cols-4">
          {steps.map((step, index) => (
            <StepCard key={step.title} index={index + 1} {...step} />
          ))}
        </div>
      </section>

      <section id="founder" className="px-5 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Founder pricing"
          title="Early access plans for the first people testing the loop."
          copy="Payments are not connected yet. These founder tiers are placeholders for launch pricing while pre-ship interest is collected."
        />
        <div className="mx-auto mt-12 grid max-w-7xl gap-4 lg:grid-cols-3">
          {plans.map((plan) => (
            <PricingCard key={plan.name} {...plan} />
          ))}
        </div>
      </section>

      <section id="faq" className="px-5 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="FAQ"
          title="Answers before the first control loop."
          copy="A few clear notes on launch scope, pricing status, and where Loop Control fits."
        />
        <div className="mx-auto mt-12 grid max-w-4xl gap-4">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group rounded-lg border border-white/10 bg-white/[.065] p-6 shadow-glass backdrop-blur-xl open:border-signal-green/35"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-semibold text-white">
                {faq.q}
                <ChevronDown className="h-5 w-5 shrink-0 text-signal-green transition group-open:rotate-180" />
              </summary>
              <p className="mt-4 leading-7 text-slate-300">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="cta" className="px-5 pb-24 pt-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-lg border border-white/10 bg-white/[.075] p-6 shadow-glass backdrop-blur-xl sm:p-10 lg:p-12">
          <div className="grid items-start gap-8 lg:grid-cols-[.86fr_1fr]">
            <div>
              <p className="text-sm font-semibold uppercase text-signal-green">Founder beta</p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                Join Founder Beta
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-slate-300">
                Founder beta access is limited during initial rollout. Join for product updates, Android companion release notes, and early access timing.
              </p>
              <div className="mt-6 grid gap-3 text-sm text-slate-300 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                <SignupDetail label="Email" />
                <SignupDetail label="Username optional" />
                <SignupDetail label="Platform/device" />
              </div>
            </div>
            <TallySignup />
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-8 text-sm text-slate-500 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Logo />
          <p>Local-first PC control, Android companion, and guarded desktop operation.</p>
        </div>
      </footer>
    </main>
  );
}

function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-ink-950/72 px-5 backdrop-blur-xl sm:px-6 lg:px-8">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4" aria-label="Primary navigation">
        <a href="#" aria-label="Loop Control home">
          <Logo />
        </a>
        <div className="hidden items-center gap-6 text-sm font-medium text-slate-300 md:flex">
          <a className="transition hover:text-white" href="#features">
            Features
          </a>
          <a className="transition hover:text-white" href="#how">
            How it works
          </a>
          <a className="transition hover:text-white" href="#founder">
            Pricing
          </a>
          <a className="transition hover:text-white" href="#faq">
            FAQ
          </a>
        </div>
        <a
          href="#cta"
          className="hidden min-h-10 items-center justify-center rounded-md border border-white/12 bg-white/8 px-4 text-sm font-semibold text-white backdrop-blur-xl transition hover:border-white/22 hover:bg-white/12 sm:inline-flex"
        >
          Join beta
        </a>
      </nav>
    </header>
  );
}

function SignupDetail({ label }) {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-ink-950/45 px-3 py-2">
      <Check className="h-4 w-4 shrink-0 text-signal-green" />
      <span>{label}</span>
    </div>
  );
}

function TallySignup() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const widgetUrl = "https://tally.so/widgets/embed.js";
    const loadEmbeds = () => {
      if (typeof window.Tally !== "undefined") {
        window.Tally.loadEmbeds();
        return;
      }

      document
        .querySelectorAll("iframe[data-tally-src]:not([src])")
        .forEach((iframe) => {
          iframe.src = iframe.dataset.tallySrc;
        });
    };

    const handleMessage = (event) => {
      if (typeof event.data === "string" && event.data.includes("Tally.FormSubmitted")) {
        setSubmitted(true);
      }
    };

    window.addEventListener("message", handleMessage);

    const existingScript = document.querySelector(`script[src="${widgetUrl}"]`);
    if (existingScript) {
      loadEmbeds();
    } else {
      const script = document.createElement("script");
      script.src = widgetUrl;
      script.async = true;
      script.onload = loadEmbeds;
      script.onerror = loadEmbeds;
      document.body.appendChild(script);
    }

    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <div className="rounded-lg border border-white/10 bg-ink-950/60 p-3 shadow-glass backdrop-blur-xl sm:p-4">
      <iframe
        data-tally-src="https://tally.so/embed/eqKN5Q?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
        loading="lazy"
        width="100%"
        height="214"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        title="Join the Founder Beta -- Loop Control"
        className="block w-full rounded-md bg-transparent"
      />
      <p className="mt-3 min-h-6 text-sm text-slate-400" aria-live="polite">
        {submitted
          ? "Thanks. You are on the founder beta list. Watch your inbox for rollout details."
          : "No payment flow yet. Founder beta access is limited while the first rollout is tested."}
      </p>
    </div>
  );
}

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="grid h-9 w-9 place-items-center rounded-md border border-white/12 bg-white/10 shadow-glow">
        <Power className="h-5 w-5 text-signal-green" />
      </div>
      <span className="text-base font-semibold text-white">Loop Control</span>
    </div>
  );
}

function Metric({ value, label }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[.055] p-3 backdrop-blur-xl">
      <dt className="text-base font-semibold text-white">{value}</dt>
      <dd className="mt-1 text-xs uppercase text-slate-500">{label}</dd>
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[calc(100vw-2.5rem)] sm:max-w-[34rem]">
      <div className="absolute -inset-8 rounded-[2rem] border border-signal-green/10 bg-signal-green/5 blur-2xl" />
      <div className="relative mx-auto w-full max-w-[22rem] rounded-[2rem] border border-white/14 bg-[#050914] p-3 shadow-glass sm:max-w-[24rem]">
        <div className="overflow-hidden rounded-[1.55rem] border border-white/10 bg-ink-800">
          <div className="flex items-center justify-between border-b border-white/10 bg-ink-800 px-4 py-3">
            <div className="flex items-center gap-2">
              <Power className="h-4 w-4 text-signal-green" />
              <span className="text-sm font-black text-white">Local Control</span>
            </div>
            <RefreshCw className="h-4 w-4 text-slate-400" />
          </div>

          <div className="space-y-3 p-3">
            <div className="rounded-lg bg-signal-green px-3 py-2 text-sm font-extrabold text-[#07111f]">
              Paired - main-pc online
            </div>

            <div className="space-y-3 rounded-lg border border-white/10 bg-ink-900/80 p-3">
              <div className="flex items-center gap-2 text-xs font-black uppercase text-slate-400">
                <MessageCircle className="h-4 w-4 text-signal-green" />
                Chat
              </div>
              <ChatBubble side="user">Can you check battery and open Downloads?</ChatBubble>
              <ChatBubble>
                Battery is 82% and plugged in. I queued open_folder for Downloads.
              </ChatBubble>
              <div className="flex flex-wrap gap-2">
                <PhoneChip icon={Bot} label="Agent on" />
                <PhoneChip icon={Gauge} label="Model: Local" />
              </div>
              <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-[#111827] px-3 py-2">
                <Paperclip className="h-4 w-4 shrink-0 text-slate-400" />
                <span className="min-w-0 flex-1 truncate text-sm text-slate-300">Tell the desktop agent what to do</span>
                <Send className="h-4 w-4 shrink-0 text-signal-green" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <MiniMetric icon={BatteryCharging} label="Battery" value="82%" />
              <MiniMetric icon={Wifi} label="Reachable" value="Live" />
            </div>
          </div>

          <div className="grid grid-cols-5 gap-1 border-t border-white/10 bg-ink-900 px-2 py-2">
            <AppNavItem active icon={MessageCircle} label="Chat" />
            <AppNavItem icon={ImageIcon} label="Images" />
            <AppNavItem icon={MousePointer2} label="Remote" />
            <AppNavItem icon={BarChart3} label="Stats" />
            <AppNavItem icon={Settings2} label="Settings" />
          </div>
        </div>
      </div>

    </div>
  );
}

function ChatBubble({ side = "assistant", children }) {
  const isUser = side === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div className={`max-w-[82%] rounded-lg border px-3 py-2 text-sm leading-5 ${isUser ? "border-signal-green/20 bg-signal-green text-[#07111f]" : "border-white/10 bg-ink-800 text-slate-100"}`}>
        {children}
      </div>
    </div>
  );
}

function PhoneChip({ icon: Icon, label }) {
  return (
    <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[.06] px-3 py-1.5 text-xs font-bold text-slate-200">
      <Icon className="h-3.5 w-3.5 text-signal-green" />
      {label}
    </div>
  );
}

function MiniMetric({ icon: Icon, label, value }) {
  return (
    <div className="rounded-lg border border-white/10 bg-ink-900/70 p-3">
      <Icon className="h-4 w-4 text-signal-green" />
      <p className="mt-2 text-xs text-slate-400">{label}</p>
      <p className="mt-1 text-lg font-black text-white">{value}</p>
    </div>
  );
}

function AppNavItem({ icon: Icon, label, active = false }) {
  return (
    <div className={`flex min-w-0 flex-col items-center gap-1 rounded-lg px-1 py-1.5 text-[10px] font-black ${active ? "bg-[#1e3a5f] text-signal-green" : "text-slate-400"}`}>
      <Icon className="h-4 w-4" />
      <span className="max-w-full truncate">{label}</span>
    </div>
  );
}

function SectionHeading({ kicker, title, copy }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-semibold uppercase text-signal-green">{kicker}</p>
      <h2 className="mt-3 text-3xl font-semibold leading-tight text-white sm:text-4xl">{title}</h2>
      <p className="mt-4 leading-7 text-slate-300">{copy}</p>
    </div>
  );
}

function FeatureCard({ icon: Icon, title, copy }) {
  return (
    <article className="rounded-lg border border-white/10 bg-white/[.065] p-6 shadow-glass backdrop-blur-xl transition hover:-translate-y-1 hover:border-signal-green/35">
      <div className="mb-6 grid h-12 w-12 place-items-center rounded-md border border-white/10 bg-ink-950/60">
        <Icon className="h-6 w-6 text-signal-green" />
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 leading-7 text-slate-300">{copy}</p>
    </article>
  );
}

function StepCard({ icon: Icon, index, title, copy }) {
  return (
    <article className="relative rounded-lg border border-white/10 bg-white/[.055] p-6 shadow-glass backdrop-blur-xl">
      <div className="mb-8 flex items-center justify-between">
        <span className="grid h-10 w-10 place-items-center rounded-md bg-white text-sm font-bold text-ink-950">
          {index}
        </span>
        <Icon className="h-6 w-6 text-signal-blue" />
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 leading-7 text-slate-300">{copy}</p>
    </article>
  );
}

function PricingCard({ name, price, note, perks, featured }) {
  return (
    <article className={`rounded-lg border p-6 shadow-glass backdrop-blur-xl ${featured ? "border-signal-green/40 bg-signal-green/10" : "border-white/10 bg-white/[.055]"}`}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold text-white">{name}</h3>
          <p className="mt-2 text-sm text-slate-400">{note}</p>
        </div>
        {featured && (
          <span className="rounded-full border border-signal-green/30 bg-signal-green/12 px-3 py-1 text-xs font-semibold uppercase text-signal-green">
            Popular
          </span>
        )}
      </div>
      <div className="mt-8 flex items-end gap-2">
        <span className="text-5xl font-semibold text-white">{price}</span>
        <span className="pb-2 text-sm text-slate-400">target launch</span>
      </div>
      <ul className="mt-8 space-y-3">
        {perks.map((perk) => (
          <li key={perk} className="flex gap-3 text-slate-300">
            <Check className="mt-0.5 h-5 w-5 shrink-0 text-signal-green" />
            <span>{perk}</span>
          </li>
        ))}
      </ul>
      <a
        href="#cta"
        className={`mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md px-5 font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-ink-950 ${featured ? "bg-signal-green text-ink-950 hover:bg-emerald-300 focus:ring-signal-green" : "border border-white/12 bg-white/8 text-white hover:bg-white/12 focus:ring-white/30"}`}
      >
        Get Founder Access
        <ArrowRight className="h-4 w-4" />
      </a>
    </article>
  );
}

export default App;
