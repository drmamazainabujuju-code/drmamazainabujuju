import { Phone, MessageCircle } from "lucide-react";

const PHONE = "+254790708623";
const WHATSAPP = "254790708623";

const FloatingContact = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
          "Hello Dr. Mama Zainabu Juju, I would like to request a consultation.",
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-glow ring-accent-glow animate-pulse-glow transition-smooth hover:scale-110"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="pointer-events-none absolute right-16 whitespace-nowrap rounded-md bg-card px-3 py-1.5 text-sm text-foreground opacity-0 shadow-deep transition-opacity group-hover:opacity-100">
          WhatsApp
        </span>
      </a>
      <a
        href={`tel:${PHONE}`}
        aria-label="Call Dr. Mama Zainabu Juju"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-secondary-foreground shadow-purple transition-smooth hover:scale-110"
      >
        <Phone className="h-6 w-6" />
        <span className="pointer-events-none absolute right-16 whitespace-nowrap rounded-md bg-card px-3 py-1.5 text-sm text-foreground opacity-0 shadow-deep transition-opacity group-hover:opacity-100">
          Call now
        </span>
      </a>
    </div>
  );
};

export default FloatingContact;
