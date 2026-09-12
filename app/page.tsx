import Image from "next/image";
import Header from "@/components/Header";

/* ── Trust strip icons ── */
function LeafIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
      <path d="M12 22C12 22 4 16 4 9C4 5 7 2 12 2C17 2 20 5 20 9C20 16 12 22 12 22Z" />
      <path d="M12 22V12" />
    </svg>
  );
}

function DiamondIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
      <path d="M12 2L22 12L12 22L2 12L12 2Z" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20" />
    </svg>
  );
}

function TruckIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
      <path d="M1 14h13v7H1z" />
      <path d="M14 10h5l3 4v7h-8V10z" />
      <circle cx="6" cy="21" r="2" />
      <circle cx="18" cy="21" r="2" />
    </svg>
  );
}

const trustItems = [
  { icon: LeafIcon, label: ["Premium", "Sourcing"] },
  { icon: DiamondIcon, label: ["Nespresso®", "Compatible"] },
  { icon: GlobeIcon, label: ["Sustainable", "Choices"] },
  { icon: TruckIcon, label: ["Fast & Secure", "Delivery"] },
];

const collections = [
  {
    title: "Signature Blends",
    tagline: "Timeless classics, perfected.",
    image: "/images/collection-signature.jpg",
    alt: "Bronze capsule on stone with coffee beans",
  },
  {
    title: "Single Origin",
    tagline: "Distinctive. Authentic. Unforgettable.",
    image: "/images/collection-single-origin.jpg",
    alt: "Green capsule among coffee leaves",
  },
  {
    title: "Espresso Intenso",
    tagline: "Bold flavors for a stronger you.",
    image: "/images/collection-espresso-intenso.jpg",
    alt: "Black capsule on dark volcanic rock",
  },
  {
    title: "Flavored Editions",
    tagline: "A delightful twist on tradition.",
    image: "/images/collection-flavored.jpg",
    alt: "Purple capsule with vanilla and cinnamon",
  },
];

export default function HomePage() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="relative min-h-[90vh] overflow-hidden bg-aroma-black lg:min-h-screen">
        {/* Hero photography */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-marble.jpg"
            alt="Marble countertop with espresso, ARÔMA capsule box, and colorful capsules"
            fill
            priority
            className="object-cover object-[85%_45%] lg:object-[75%_45%]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-aroma-black from-5% via-aroma-black via-45% to-aroma-black/20 to-70%" />
          <div className="absolute inset-0 bg-gradient-to-l from-aroma-black/70 from-0% via-aroma-black/20 via-25% to-transparent to-45%" />
        </div>

        <Header />

        {/* Decorative script — mockup right overlay */}
        <p
          className="pointer-events-none absolute bottom-[28%] right-8 hidden font-serif text-2xl italic leading-snug text-white/50 lg:block xl:right-16 xl:text-3xl"
          aria-hidden="true"
        >
          More than coffee
          <br />
          <span className="text-white/70">A ritual</span>
        </p>

        <div className="relative mx-auto flex max-w-7xl flex-col justify-center px-6 pb-16 pt-32 lg:min-h-screen lg:px-10 lg:pb-24 lg:pt-40">
          <div className="max-w-xl">
            <p className="eyebrow mb-4">
              Exceptional Coffee. Extraordinary Moments.
            </p>
            <h1 className="font-serif text-4xl font-light leading-tight text-white md:text-5xl lg:text-[3.25rem] lg:leading-[1.15]">
              Nespresso Capsules,
              <br />
              Redefined
            </h1>
            <p className="mt-5 max-w-md font-sans text-sm leading-relaxed text-white/75 md:text-[15px]">
              Discover a curated selection of Nespresso® compatible capsules from
              the world&apos;s finest coffee regions. Crafted for those who
              appreciate the extraordinary.
            </p>
            <a href="#collections" className="btn-gold mt-8">
              Shop Our Collection →
            </a>
          </div>

          {/* Trust strip */}
          <div className="mt-12 grid max-w-2xl grid-cols-2 gap-6 sm:grid-cols-4 lg:mt-16">
            {trustItems.map(({ icon: Icon, label }) => (
              <div key={label.join("-")} className="flex flex-col items-start gap-2 text-aroma-gold">
                <Icon />
                <span className="font-sans text-[9px] font-medium uppercase leading-tight tracking-[0.15em] text-white/80 md:text-[10px]">
                  {label[0]}
                  <br />
                  {label[1]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR COLLECTIONS ── */}
      <section id="collections" className="bg-aroma-cream py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          {/* Section header */}
          <div className="mb-12 text-center lg:mb-16">
            <p className="font-sans text-[10px] font-medium uppercase tracking-[0.25em] text-aroma-gold md:text-xs">
              Explore
            </p>
            <h2 className="mt-3 font-serif text-3xl font-light text-aroma-charcoal md:text-4xl lg:text-[2.75rem]">
              Our Collections
            </h2>
            <p className="mt-3 font-sans text-sm text-aroma-charcoal/60 md:text-base">
              Extraordinary flavors from extraordinary places
            </p>
          </div>

          {/* Collection grid — title header, photo, SHOP NOW footer per mockup */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {collections.map((col) => (
              <article
                key={col.title}
                className="group flex flex-col overflow-hidden bg-aroma-charcoal"
              >
                <div className="px-5 pb-4 pt-5">
                  <h3 className="font-serif text-sm font-medium uppercase tracking-wide text-aroma-gold md:text-base">
                    {col.title}
                  </h3>
                  <p className="mt-1 font-sans text-xs text-white/70 md:text-sm">
                    {col.tagline}
                  </p>
                </div>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={col.image}
                    alt={col.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
                <div className="px-5 py-4 text-center sm:text-left">
                  <a
                    href="#shop"
                    className="font-sans text-[10px] font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:text-aroma-gold"
                  >
                    Shop Now →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUSTAINABILITY — full-width plantation photo with split overlay ── */}
      <section id="sustainability" className="relative min-h-[520px] overflow-hidden lg:min-h-[580px]">
        <Image
          src="/images/sustainability-plantation.jpg"
          alt="Coffee plantation at golden hour in misty mountains"
          fill
          className="object-cover object-left-center lg:object-[30%_center]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-aroma-black/40" />

        <div className="relative grid min-h-[520px] lg:min-h-[580px] lg:grid-cols-2">
          {/* Left content panel */}
          <div className="flex flex-col justify-center bg-aroma-black px-6 py-16 lg:px-14 lg:py-24 xl:px-20">
            <p className="eyebrow mb-4">A Richer Tomorrow</p>
            <h2 className="font-serif text-3xl font-light leading-tight text-white md:text-4xl lg:text-[2.75rem]">
              Sustainability in
              <br />
              Every Capsule
            </h2>
            <p className="mt-5 max-w-md font-sans text-sm leading-relaxed text-white/70 md:text-[15px]">
              Great coffee should be good for the planet. Our capsules are
              responsibly sourced and many are recyclable, so you can enjoy
              every cup with a clear conscience.
            </p>
            <a href="#commitment" className="btn-gold mt-8 w-fit">
              Our Commitment →
            </a>
          </div>

          {/* Right quote over plantation */}
          <div className="flex items-center justify-center px-8 py-16 lg:px-12 lg:py-24">
            <blockquote className="max-w-sm text-center">
              <p className="font-serif text-xl italic leading-relaxed text-white md:text-2xl lg:text-[1.65rem]">
                &ldquo;Extraordinary coffee can create a better tomorrow.&rdquo;
              </p>
              <div className="mx-auto mt-5 h-px w-12 bg-aroma-gold" />
            </blockquote>
          </div>
        </div>
      </section>
    </main>
  );
}
