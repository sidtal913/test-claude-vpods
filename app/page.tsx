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
      {/* ── HERO — full-bleed photography with left overlay content ── */}
      <section className="relative min-h-[100svh] bg-aroma-black">
        <Image
          src={sectionPhotos.hero}
          alt="Marble countertop with espresso, ARÔMA capsule box, and colorful capsules"
          fill
          priority
          className="object-cover object-[65%_center] lg:object-[70%_center]"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-aroma-black/90 via-aroma-black/55 to-aroma-black/15"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-aroma-black/70 via-transparent to-aroma-black/30"
          aria-hidden="true"
        />

        <Header />

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-between px-6 pb-10 pt-28 lg:px-10 lg:pb-14 lg:pt-36">
          <div className="max-w-xl text-center lg:text-left">
            <p className="eyebrow mb-4">
              Exceptional Coffee. Extraordinary Moments.
            </p>
            <h1 className="font-serif text-4xl font-light leading-tight text-white md:text-5xl lg:text-[3.25rem] lg:leading-[1.15]">
              Nespresso Capsules,
              <br />
              Redefined
            </h1>
            <p className="mx-auto mt-5 max-w-md font-sans text-sm leading-relaxed text-white/75 md:text-[15px] lg:mx-0">
              Discover a curated selection of Nespresso® compatible capsules from
              the world&apos;s finest coffee regions. Crafted for those who
              appreciate the extraordinary.
            </p>
            <a href="#collections" className="btn-gold mt-8">
              Shop Our Collection →
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4 lg:mt-0 lg:max-w-2xl">
            {trustItems.map(({ icon: Icon, label }) => (
              <div
                key={label.join("-")}
                className="flex flex-col items-center gap-2 text-aroma-gold sm:items-start"
              >
                <Icon />
                <span className="text-center font-sans text-[9px] font-medium uppercase leading-tight tracking-[0.15em] text-white/80 sm:text-left md:text-[10px]">
                  {label[0]}
                  <br />
                  {label[1]}
                </span>
              </div>
            ))}
          </div>
        </div>

        <p
          className="pointer-events-none absolute bottom-[22%] right-6 z-10 hidden font-serif text-lg italic leading-snug text-white/50 sm:block lg:right-12 lg:text-2xl"
          aria-hidden="true"
        >
          More than coffee
          <br />
          <span className="text-white/70">A ritual</span>
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
                <div className="absolute inset-0 bg-gradient-to-b from-aroma-black/80 from-0% via-aroma-black/10 via-40% to-aroma-black/85 to-100%" />
                <div className="absolute inset-x-0 top-0 px-4 pb-3 pt-5 md:px-5 md:pt-6">
                  <h3 className="font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-aroma-gold md:text-xs">
                    {col.title}
                  </h3>
                  <p className="mt-1.5 font-serif text-[11px] italic leading-snug text-white/80 md:text-xs">
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

      {/* ── SUSTAINABILITY — full-bleed plantation with dual overlay ── */}
      <section id="sustainability" className="relative min-h-[520px] lg:min-h-[640px]">
        <Image
          src={sectionPhotos.sustainability}
          alt="Coffee plantation at golden hour in misty mountains"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-aroma-black/35"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-aroma-black/75 via-aroma-black/25 to-aroma-black/40"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:min-h-[640px] lg:grid-cols-2 lg:items-center lg:gap-8 lg:px-10 lg:py-24">
          <div className="max-w-md text-center lg:text-left">
            <p className="eyebrow mb-4 text-aroma-gold">A Richer Tomorrow</p>
            <h2 className="font-serif text-3xl font-light leading-tight text-white md:text-4xl lg:text-[2.75rem]">
              Sustainability in
              <br />
              Every Capsule
            </h2>
            <p className="mx-auto mt-5 max-w-md font-sans text-sm leading-relaxed text-white/75 md:text-[15px] lg:mx-0">
              Great coffee should be good for the planet. Our capsules are
              responsibly sourced and many are recyclable, so you can enjoy
              every cup with a clear conscience.
            </p>
            <a href="#commitment" className="btn-gold mt-8">
              Our Commitment →
            </a>
          </div>

          <div className="flex items-center justify-center lg:justify-end">
            <blockquote className="max-w-sm text-center lg:text-right">
              <p className="font-serif text-xl italic leading-relaxed text-white md:text-2xl lg:text-[1.65rem]">
                &ldquo;Extraordinary coffee can create a better tomorrow.&rdquo;
              </p>
              <div className="mx-auto mt-5 h-px w-12 bg-aroma-gold lg:ml-auto lg:mr-0" />
            </blockquote>
          </div>
        </div>
      </section>
    </main>
  );
}
