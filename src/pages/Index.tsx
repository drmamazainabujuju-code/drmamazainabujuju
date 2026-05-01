import {
  Heart,
  Sparkles,
  Briefcase,
  Flame,
  Gem,
  Search,
  Scale,
  Baby,
  TrendingUp,
  Phone,
  MessageCircle,
  Star,
  ShieldCheck,
  Moon,
  Eye,
  Quote,
} from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import doctorImg from "@/assets/doctor.jpg";
import ritualImg from "@/assets/ritual.jpg";
import ringsImg from "@/assets/rings.jpg";
import FloatingContact from "@/components/FloatingContact";

const PHONE = "+254790708623";
const WHATSAPP_URL = `https://wa.me/254790708623?text=${encodeURIComponent(
  "Hello Dr. Mama Zainabu Juju, I would like to book a consultation.",
)}`;

const services = [
  {
    icon: Heart,
    title: "Perfect Marriage / Fix Marriage",
    imagePath: "/services/marriage-binding-ritual.webp",
    desc: "Restore harmony, trust and devotion in your union with time-honoured rituals that mend broken bonds.",
  },
  {
    icon: Sparkles,
    imagePath: "/services/Marriage-Relationship-Support.jpg",
    title: "Love Portion & Bring Back Lost Love",
    desc: "Reignite passion and call back a lover who has drifted away — gently, but with unmistakable power.",
  },
  {
    icon: Briefcase,
    imagePath:
      "/services/JOB-SPELL-Get-a-Job-Employment-Career-Magic-Dream-Job-1024x768.webp",
    title: "Business Ritual",
    desc: "Unlock your business potential and achieve lasting success through prosperity rites and sacred guidance.",
  },
  {
    icon: Flame,
    imagePath: "/services/Spiritual-Cleansing-Rituals-For-You-Your-Home.jpg",
    title: "Spiritual Cleansing",
    desc: "Release heavy energies and curses. Walk a transformative path of healing, peace and clarity.",
  },
  {
    icon: Gem,
    imagePath: "/services/magic-ring-and-charms-ritual.jpg",
    title: "Lucky Rings",
    desc: "Hand-crafted rings charged for love, business success and protection. Carry fortune wherever you go.",
  },
  {
    icon: Search,
    imagePath: "/services/Spiritual-Protection-Safety-Guidance.jpg",
    title: "Recover Lost Property",
    desc: "Powerful herbs and spiritual practice to reclaim what is rightfully yours and shield it from theft.",
  },
  {
    icon: Scale,
    imagePath: "/services/Court-Case-Legal-Guidance-win-court-case.jpg",
    title: "Win Court Cases",
    desc: "Walk into court with confidence. Cultural guidance for clarity, focus and a favourable outcome.",
  },
  {
    icon: Baby,
    imagePath: "/services/women-Family-Fertility-Support.avif",
    title: "Family & Fertility Support",
    desc: "Compassionate spiritual support for couples seeking children, family unity and ancestral blessings.",
  },
  {
    icon: TrendingUp,
    imagePath: "/services/Business-Financial-Growth-Guidance.jpg",
    title: "Business & Financial Growth",
    desc: "Align with abundance. Cultural rituals that nurture discipline, opportunity and steady wealth.",
  },
];

const testimonials = [
  {
    name: "Amina K.",
    place: "Nairobi, Kenya",
    text: "After years of pain, my husband returned home in just 7 days. Mama Zainabu gave me back my family.",
  },
  {
    name: "Joseph M.",
    place: "Mombasa, Kenya",
    text: "My business was sinking. Within a month of her ritual, contracts started flowing. I am forever grateful.",
  },
  {
    name: "Linda O.",
    place: "Kampala, Uganda",
    text: "I won a court case I was certain to lose. Her guidance made me calm, clear and victorious.",
  },
  {
    name: "Brian W.",
    place: "Kisumu, Kenya",
    text: "The lucky ring she prepared changed my fortune. Doors that were closed for years finally opened.",
  },
  {
    name: "Faith N.",
    place: "Dar es Salaam, Tanzania",
    text: "Ten years of waiting for a child. After her fertility blessing, I am now a proud mother of twins.",
  },
  {
    name: "Samuel A.",
    place: "Nakuru, Kenya",
    text: "My stolen vehicle was returned within two weeks. Even the police were astonished.",
  },
  {
    name: "Grace T.",
    place: "Eldoret, Kenya",
    text: "The cleansing ritual lifted a heaviness I had carried for years. I sleep peacefully again.",
  },
  {
    name: "Daniel R.",
    place: "Kigali, Rwanda",
    text: "My ex-lover came back to me, sincere and changed. Mama Zainabu’s gift is real and powerful.",
  },
  {
    name: "Mercy J.",
    place: "Thika, Kenya",
    text: "From a struggling kiosk to a growing shop in 3 months. Her business ritual truly works.",
  },
];

const reasons = [
  {
    icon: Moon,
    title: "Decades of Ancestral Wisdom",
    desc: "Generations of inherited spiritual knowledge from the heart of Africa.",
  },
  {
    icon: ShieldCheck,
    title: "Discreet & Confidential",
    desc: "Your story stays sacred. Every consultation is private and respectful.",
  },
  {
    icon: Eye,
    title: "Honest Spiritual Reading",
    desc: "She tells you the truth — even when it is hard — and shows the path forward.",
  },
  {
    icon: Sparkles,
    title: "Proven, Heartfelt Results",
    desc: "Hundreds of clients across East Africa have walked away transformed.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-md bg-background/70 border-b border-border/60">
        <nav className="container flex items-center justify-between py-4">
          <a
            href="#top"
            className="font-display text-lg sm:text-xl tracking-wider"
          >
            <span className="text-accent text-glow">Dr.</span> Mama Zainabu{" "}
            <span className="text-secondary-foreground/80">Juju</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#services" className="hover:text-accent transition-smooth">
              Services
            </a>
            <a href="#about" className="hover:text-accent transition-smooth">
              About
            </a>
            <a href="#why" className="hover:text-accent transition-smooth">
              Why Her
            </a>
            <a
              href="#testimonials"
              className="hover:text-accent transition-smooth"
            >
              Testimonials
            </a>
          </div>
          <a
            href={`tel:${PHONE}`}
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-mystic px-5 py-2 text-sm font-medium shadow-purple hover:scale-105 transition-smooth"
          >
            <Phone className="h-4 w-4" /> {PHONE}
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section
        id="top"
        className="relative min-h-screen flex items-center pt-24"
      >
        <img
          src={heroImg}
          alt="Mystical witch doctor altar with candles, herbs and bones"
          className="absolute inset-0 h-full w-full object-cover opacity-60"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-veil" />
        <div className="absolute inset-0 bg-gradient-glow" />
        <div className="container relative z-10 grid lg:grid-cols-12 gap-10 items-center py-20">
          <div className="lg:col-span-7 space-y-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/5 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-accent animate-flicker">
              <Sparkles className="h-3.5 w-3.5" /> Spiritual Healer • Kenya
            </span>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.05] font-bold">
              Dr. Mama{" "}
              <span className="text-accent text-glow">Zainabu Juju</span>
              <br />
              <span className="text-secondary-foreground/90 italic font-normal text-3xl sm:text-4xl lg:text-5xl">
                Witch Doctor & Spiritual Healer
              </span>
            </h1>
            <p className="max-w-2xl text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Ancient African wisdom for modern troubles. Heal broken hearts,
              restore marriages, unlock prosperity and reclaim what was lost —
              through sacred rituals passed down through generations.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-mystic px-7 py-3.5 font-medium shadow-glow hover:scale-105 transition-smooth"
              >
                <MessageCircle className="h-5 w-5" /> Consult on WhatsApp
              </a>
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center gap-2 rounded-full border border-accent/50 bg-background/50 px-7 py-3.5 font-medium text-accent hover:bg-accent/10 transition-smooth"
              >
                <Phone className="h-5 w-5" /> Call {PHONE}
              </a>
            </div>
            <div className="flex items-center gap-6 pt-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-1 text-accent">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent" />
                ))}
              </div>
              <span>Trusted across East Africa for over 25 years</span>
            </div>
          </div>
          <div className="lg:col-span-5 hidden lg:flex justify-end">
            <div className="relative animate-float-slow">
              <div className="absolute -inset-6 rounded-full bg-accent/20 blur-3xl" />
              <img
                src={doctorImg}
                alt="Portrait of Dr. Mama Zainabu Juju"
                className="relative h-[460px] w-[380px] object-cover rounded-[2rem] shadow-deep ring-1 ring-accent/30"
                width={1024}
                height={1024}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="container py-24 grid lg:grid-cols-2 gap-14 items-center"
      >
        <div className="relative">
          <img
            src={ritualImg}
            alt="Sacred ritual objects on Mama Zainabu's altar"
            className="rounded-2xl shadow-deep ring-1 ring-border w-full object-cover"
            width={1280}
            height={896}
            loading="lazy"
          />
          <div className="absolute -bottom-6 -right-6 bg-mystic rounded-xl px-6 py-4 shadow-purple hidden sm:block">
            <div className="font-display text-3xl text-glow text-accent">
              25+
            </div>
            <div className="text-xs uppercase tracking-widest text-foreground/80">
              Years of Service
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <span className="text-xs uppercase tracking-[0.3em] text-accent">
            About Mama Zainabu
          </span>
          <h2 className="font-display text-4xl sm:text-5xl leading-tight">
            A guardian of ancestral{" "}
            <span className="text-accent text-glow">spiritual power</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Born into a lineage of healers in the highlands of Kenya, Dr. Mama
            Zainabu Juju has devoted her life to restoring balance — in love,
            family, business and spirit. Her craft blends sacred herbs,
            ancestral chants and deep listening to bring peace to those who seek
            her counsel.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Whether you carry a heavy heart, a broken home, or a dream that
            refuses to bloom, her door — and her altar — are open to you.
          </p>
          <div className="flex gap-3 pt-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium hover:bg-primary/80 transition-smooth"
            >
              <MessageCircle className="h-4 w-4" /> Speak to her now
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="relative py-24 border-y border-border/60 bg-card/40"
      >
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-16 space-y-4">
            <span className="text-xs uppercase tracking-[0.3em] text-accent">
              Sacred Services
            </span>
            <h2 className="font-display text-4xl sm:text-5xl">
              Rituals that{" "}
              <span className="text-accent text-glow">transform lives</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              From the affairs of the heart to the wars of the courtroom — Mama
              Zainabu walks with you, every step.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, imagePath, title, desc }) => (
              <article
                key={title}
                className="group relative rounded-2xl space-y-4 border border-border bg-card p-7 shadow-deep transition-smooth hover:-translate-y-1 hover:border-accent/50 hover:shadow-glow"
              >
                <div>
                  <img src={imagePath} className="w-full h-72 object-cover" />
                </div>
                <h3 className="font-display text-xl mb-2">{title}</h3>
                <p className="text-muted-foreground leading-relaxed">{desc}</p>
              </article>
            ))}
          </div>

          {/* Lucky rings showcase */}
          <div className="mt-20 grid lg:grid-cols-2 gap-10 items-center rounded-3xl border border-border bg-background/60 p-8 lg:p-12 shadow-deep">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-accent">
                Lucky Rings
              </span>
              <h3 className="font-display text-3xl sm:text-4xl mt-3 mb-4">
                Carry your fortune{" "}
                <span className="text-accent text-glow">always</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Each ring is hand-crafted, blessed and charged with intention —
                for love, for business, for protection. Worn close to the skin,
                they become a constant whisper of fortune in your favour.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-6 py-3 text-sm font-semibold hover:scale-105 transition-smooth shadow-glow"
              >
                <Gem className="h-4 w-4" /> Order your ring
              </a>
            </div>
            <img
              src={ringsImg}
              alt="Enchanted lucky rings glowing with green energy"
              className="rounded-2xl object-cover w-full ring-1 ring-accent/30 shadow-glow"
              width={1280}
              height={896}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* WHY HER */}
      <section id="why" className="container py-24">
        <div className="max-w-2xl mx-auto text-center mb-14 space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-accent">
            Why Choose Her
          </span>
          <h2 className="font-display text-4xl sm:text-5xl">
            Why I chose{" "}
            <span className="text-accent text-glow">Dr. Mama Zainabu Juju</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Power without compassion is dangerous. Compassion without power is
            empty. She holds both.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl border border-border bg-card p-7 text-center shadow-deep hover:border-accent/50 transition-smooth"
            >
              <div className="mx-auto mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-mystic shadow-purple">
                <Icon className="h-7 w-7 text-accent" />
              </div>
              <h3 className="font-display text-lg mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section
        id="testimonials"
        className="relative py-24 border-y border-border/60 bg-card/40"
      >
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-14 space-y-4">
            <span className="text-xs uppercase tracking-[0.3em] text-accent">
              Voices of the Healed
            </span>
            <h2 className="font-display text-4xl sm:text-5xl">
              Real stories.{" "}
              <span className="text-accent text-glow">Real change.</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="relative rounded-2xl border border-border bg-background/70 p-7 shadow-deep hover:border-accent/40 transition-smooth"
              >
                <Quote className="absolute top-5 right-5 h-8 w-8 text-accent/20" />
                <div className="flex gap-1 mb-3 text-accent">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent" />
                  ))}
                </div>
                <blockquote className="text-foreground/90 italic leading-relaxed mb-5">
                  “{t.text}”
                </blockquote>
                <figcaption>
                  <div className="font-display text-base">{t.name}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-widest">
                    {t.place}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-24">
        <div className="relative overflow-hidden rounded-3xl bg-mystic p-10 sm:p-16 text-center shadow-purple">
          <div className="absolute inset-0 bg-gradient-glow" />
          <div className="relative space-y-6 max-w-2xl mx-auto">
            <h2 className="font-display text-4xl sm:text-5xl">
              Your transformation begins with{" "}
              <span className="text-accent text-glow">one call</span>
            </h2>
            <p className="text-foreground/85 text-lg">
              Speak directly with Dr. Mama Zainabu Juju. Confidential.
              Compassionate. Powerful.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-7 py-3.5 font-semibold shadow-glow hover:scale-105 transition-smooth"
              >
                <Phone className="h-5 w-5" /> {PHONE}
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-accent/60 bg-background/30 px-7 py-3.5 font-semibold hover:bg-background/50 transition-smooth"
              >
                <MessageCircle className="h-5 w-5" /> WhatsApp now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* DISCLAIMER + FOOTER */}
      <footer className="border-t border-border/60 bg-background">
        <div className="container py-14 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-display text-xl text-accent">Disclaimer</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The services provided by Dr. Mama Zainabu Juju are cultural and
              traditional guidance for personal reflection, emotional balance,
              and spiritual support. They are not intended as medical, legal,
              financial, or professional advice. Results may vary, and no
              guarantees are made. By using this website, you confirm that you
              are 21 years of age or older. Dr. Mama Zainabu Juju encourages
              responsible use of services and emphasizes personal reflection,
              cultural alignment, and well-being.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="font-display text-xl">Reach Out</h3>
            <a
              href={`tel:${PHONE}`}
              className="flex items-center gap-2 text-sm hover:text-accent transition-smooth"
            >
              <Phone className="h-4 w-4 text-accent" /> {PHONE}
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm hover:text-accent transition-smooth"
            >
              <MessageCircle className="h-4 w-4 text-accent" /> WhatsApp Mama
              Zainabu
            </a>
            <p className="text-xs text-muted-foreground pt-2">
              Serving clients across Kenya & East Africa.
            </p>
          </div>
        </div>
        <div className="border-t border-border/60 py-5 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Dr. Mama Zainabu Juju — Spiritual Healer.
          All rights reserved.
        </div>
      </footer>

      <FloatingContact />
    </div>
  );
};

export default Index;
