import Image from "next/image";
import Header from "@/components/Header";
import { MOCKUP_BLUEPRINT, sectionPhotos } from "@/lib/design-refs";

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
    image: sectionPhotos.collections.signature,
    alt: "Bronze capsule on stone with coffee beans",
  },
  {
    title: "Single Origin",
    tagline: "Distinctive. Authentic. Unforgettable.",
    image: sectionPhotos.collections.singleOrigin,
    alt: "Green capsule among coffee leaves",
  },
  {
    title: "Espresso Intenso",
    tagline: "Bold flavors for a stronger you.",
    image: sectionPhotos.collections.espressoIntenso,
    alt: "Black capsule on dark volcanic rock",
  },
  {
    title: "Flavored Editions",
    tagline: "A delightful twist on tradition.",
    image: sectionPhotos.collections.flavored,
    alt: "Purple capsule with vanilla and cinnamon",
  },
];

export default function HomePage() {
  return (
    <main data-mockup-blueprint={MOCKUP_BLUEPRINT}>
      {/* ── HERO — full-bleed product photography with left overlay (mockup composition) ── */}
      <section className="relative min-h-screen bg-aroma-black">
        <Header />

        {/* Background photography — real product still-life, not the mockup PNG */}
        <div className="absolute inset-0">
          <Image
            src={sectionPhotos.hero}
            alt=""
            fill
            priority
            className="object-cover object-[68%_center]"
            sizes="100vw"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-aroma-black from-0% via-aroma-black/90 via-40% to-aroma-black/30 to-100%" />
          <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-aroma-black/50 to-transparent" />
        </div>

        {/* Left-aligned content stack */}
        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pb-16 pt-32 lg:px-10 lg:pt-36">
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

        {/* Handwritten script accent — right side per mockup */}
        <p className="pointer-events-none absolute bottom-[22%] right-6 z-10 hidden font-serif text-lg italic leading-snug text-white/60 sm:block lg:right-12 lg:text-2xl">
          More than coffee
          <br />
          <span className="text-white/80">A ritual</span>
        </p>
      </section>

      {/* ── OUR COLLECTIONS ── */}
      <section id="collections" className="bg-aroma-cream py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
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

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
            {collections.map((col) => (
              <article
                key={col.title}
                className="group relative aspect-[3/4] overflow-hidden bg-aroma-charcoal"
              >
                <Image
                  src={col.image}
                  alt={col.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-aroma-black/75 from-0% via-transparent via-35% to-aroma-black/80 to-100%" />
                <div className="absolute inset-x-0 top-0 px-4 pb-3 pt-5 md:px-5 md:pt-6">
                  <h3 className="font-serif text-xs font-medium uppercase tracking-[0.12em] text-aroma-gold md:text-sm">
                    {col.title}
                  </h3>
                  <p className="mt-1 font-sans text-[11px] leading-snug text-white/75 md:text-xs">
                    {col.tagline}
                  </p>
                </div>
                <div className="absolute inset-x-0 bottom-0 px-4 py-4 md:px-5 md:py-5">
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

      {/* ── SUSTAINABILITY — full-bleed plantation photo with split overlay ── */}
      <section id="sustainability" className="relative min-h-[520px] lg:min-h-[580px]">
        <Image
          src={sectionPhotos.sustainability}
          alt=""
          fill
          className="object-cover object-[22%_40%]"
          sizes="100vw"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-aroma-black/85 via-aroma-black/50 to-aroma-black/30" />

        <div className="relative z-10 mx-auto grid min-h-[520px] max-w-7xl lg:min-h-[580px] lg:grid-cols-2">
          <div className="flex flex-col justify-center px-6 py-16 lg:px-14 lg:py-24 xl:px-20">
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

          <div className="flex items-center justify-center px-8 pb-16 pt-4 lg:px-12 lg:py-24">
            <blockquote className="max-w-sm text-center lg:text-left">
              <p className="font-serif text-xl italic leading-relaxed text-white md:text-2xl lg:text-[1.65rem]">
                &ldquo;Extraordinary coffee can create a better tomorrow.&rdquo;
              </p>
              <div className="mx-auto mt-5 h-px w-12 bg-aroma-gold lg:mx-0" />
            </blockquote>
          </div>
        </div>
      </section>
    </main>
  );
}
