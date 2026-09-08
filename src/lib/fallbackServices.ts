// Fallback service content for the /service/:slug pages and the navbar dropdown.
// This lets the two newer services (Digital Integration and AI Integration) render
// immediately without requiring Studio documents. Once matching documents exist in
// Sanity, the live data takes over automatically (keyed by slug).

export interface FallbackService {
  _id: string;
  title: string;
  slug: { current: string };
  serviceType: string;
  description: string;
  icon: string;
  price?: string;
  features?: string[];
  ctaTitle?: string;
  ctaDescription?: string;
}

export const fallbackServices: Record<string, FallbackService> = {
  "service-design": {
    _id: "fallback-service-design",
    title: "Service Design",
    slug: { current: "service-design" },
    serviceType: "",
    description:
      "Smarter ways of working, shaped around your customers and goals. We review how your business runs day to day and turn scattered processes into a calmer, smoother experience.",
    icon: "lightbulb",
    price: "Starting at R20,000 p/m",
    features: [
      "Look at how your business runs day to day",
      "Review how customers experience your service",
      "Find what's causing delays or confusion",
      "Suggest ways of doing things",
      "Prioritise what to fix first",
      "Get a simple plan you can act on",
    ],
    ctaTitle: "Ready to streamline how you work?",
    ctaDescription:
      "Tell us where the friction is and we'll map a calmer, connected way to run your business.",
  },
  "digital-integration": {
    _id: "fallback-digital-integration",
    title: "Digital Integration",
    slug: { current: "digital-integration" },
    serviceType: "digital-integration",
    description:
      "Simple tools and smooth systems that take the friction out of how you work. We help you connect the apps you already use so your business runs as one — not as a dozen open tabs.",
    icon: "settings",
    price: "Starting at R15,000 p/m",
    features: [
      "Review your current tools and how your team actually uses them",
      "Recommend better-fit options for the way you work",
      "Prioritise the changes that save the most time and stress",
      "Turn scattered tools into one smooth, connected system",
      "Handle the setup and integration for you",
      "Support you through the change so nothing gets dropped",
    ],
    ctaTitle: "Ready to streamline how you work?",
    ctaDescription:
      "Tell us where the friction is and we'll map a calmer, connected way to run your business.",
  },
  "ai-integration": {
    _id: "fallback-ai-integration",
    title: "AI Integration",
    slug: { current: "ai-integration" },
    serviceType: "ai-integration",
    description:
      "Practical, no-hype AI that saves you time and helps you do more with less. We find the right places to bring in AI and set it up so it actually fits your day-to-day.",
    icon: "zap",
    price: "Starting at R15,000",
    features: [
      "Look at how your business runs day to day",
      "Spot the bottlenecks and repetitive work that drains you",
      "Show you practical, realistic ways to use AI",
      "Set it up and walk you through the first use",
      "Help your team build confidence using it",
      "Stay available as you learn and adapt",
    ],
    ctaTitle: "Curious what AI could do for you?",
    ctaDescription:
      "Book a no-pressure chat and we'll point to the highest-impact places to start.",
  },
};

export const fallbackServiceList = Object.values(fallbackServices);
