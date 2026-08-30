import { useState } from "react";

const UNSPLASH = {
  hero: "https://images.unsplash.com/photo-1762199904077-1c83cebbd205?w=1600&h=900&fit=crop&auto=format",
  earth: "https://images.unsplash.com/photo-1762214785391-aeab5f8d9e47?w=800&h=960&fit=crop&auto=format",
  water: "https://images.unsplash.com/photo-1685122121719-c513a7f1a845?w=800&h=960&fit=crop&auto=format",
  fire: "https://images.unsplash.com/photo-1756569620147-67d97c02375c?w=800&h=960&fit=crop&auto=format",
  air: "https://images.unsplash.com/photo-1612196808827-9ff25cb6137a?w=800&h=960&fit=crop&auto=format",
  ether: "https://images.unsplash.com/photo-1611489704164-6f73c62bd810?w=800&h=640&fit=crop&auto=format",
  promise: "https://images.unsplash.com/photo-1770731206301-43a9683f3438?w=1200&h=700&fit=crop&auto=format",
  organic: "https://images.unsplash.com/photo-1762199904138-d163fe89540a?w=800&h=640&fit=crop&auto=format",
  nonorganic: "https://images.unsplash.com/photo-1611490135455-3a02bb9eb653?w=800&h=640&fit=crop&auto=format",
};

const elements = [
  {
    id: "earth",
    symbol: "🌍",
    label: "Earth",
    sub: "Stability & Authenticity",
    products: "Bedspreads & Cushion Covers",
    color: "bg-[#4A3728]",
    overlay: "from-[#4A3728]/80",
    img: UNSPLASH.earth,
    alt: "Natural linen bedding with earthy tones",
  },
  {
    id: "water",
    symbol: "💧",
    label: "Water",
    sub: "Flow & Adaptability",
    products: "Pillow Covers",
    color: "bg-[#3A5068]",
    overlay: "from-[#3A5068]/80",
    img: UNSPLASH.water,
    alt: "Soft blue-grey cushions on a minimal sofa",
  },
  {
    id: "fire",
    symbol: "🔥",
    label: "Fire",
    sub: "Energy & Transformation",
    products: "Accent Pillows",
    color: "bg-[#9E4E28]",
    overlay: "from-[#9E4E28]/80",
    img: UNSPLASH.fire,
    alt: "Warm orange and terracotta accent pillows in a living room",
  },
  {
    id: "air",
    symbol: "🌬",
    label: "Air",
    sub: "Movement & Clarity",
    products: "Linen Drapes & Bedspreads",
    color: "bg-[#8A9090]",
    overlay: "from-[#8A9090]/80",
    img: UNSPLASH.air,
    alt: "Sheer linen curtains in a light airy room",
  },
];

const testimonials = [
  {
    quote:
      "TerraHaven brings nature into our home beautifully. We love the quality and eco-friendly ethos!",
    author: "Sarah M.",
    location: "Portland, OR",
  },
  {
    quote:
      "Every piece feels intentional and grounding. My bedroom has never felt so peaceful.",
    author: "Priya K.",
    location: "Austin, TX",
  },
  {
    quote:
      "The linen drapes transformed our living room — so light, so natural. Nothing else compares.",
    author: "James L.",
    location: "Brooklyn, NY",
  },
];

export default function App() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div
      className="min-h-screen"
      style={{ fontFamily: "'Work Sans', system-ui, sans-serif", backgroundColor: "#F6F0E6", color: "#3B2D1E" }}
    >
      {/* NAV */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5"
        style={{ backgroundColor: "rgba(246,240,230,0.92)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(92,66,48,0.12)" }}
      >
        <a href="#" className="flex items-center">
          <img
            src="/src/imports/Copilot_20260823_125638.png"
            alt="TerraHaven logo"
            style={{ height: "7.5rem", mixBlendMode: "multiply" }}
            className="w-auto object-contain"
          />
        </a>
        <div className="hidden md:flex items-center gap-10 text-sm font-medium tracking-wide" style={{ color: "#5C4230" }}>
          <a href="#elements" className="hover:text-[#C4714A] transition-colors">Shop</a>
          <a href="#about" className="hover:text-[#C4714A] transition-colors">About</a>
          <a href="#promise" className="hover:text-[#C4714A] transition-colors">Sustainability</a>
          <a href="#contact" className="hover:text-[#C4714A] transition-colors">Contact</a>
        </div>
        <button
          className="hidden md:inline-flex items-center px-5 py-2.5 text-sm font-medium rounded transition-all"
          style={{ backgroundColor: "#3B2D1E", color: "#F6F0E6" }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#C4714A")}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#3B2D1E")}
        >
          Explore Collections
        </button>
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 h-0.5 bg-current mb-1.5" style={{ backgroundColor: "#3B2D1E" }} />
          <div className="w-5 h-0.5 bg-current mb-1.5" style={{ backgroundColor: "#3B2D1E" }} />
          <div className="w-5 h-0.5 bg-current" style={{ backgroundColor: "#3B2D1E" }} />
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col pt-24 px-8 gap-6 text-2xl md:hidden" style={{ backgroundColor: "#F6F0E6" }}>
          {["Shop", "About", "Sustainability", "Contact"].map(link => (
            <a key={link} href="#" className="border-b py-4" style={{ borderColor: "rgba(92,66,48,0.15)", color: "#3B2D1E" }} onClick={() => setMobileMenuOpen(false)}>
              {link}
            </a>
          ))}
        </div>
      )}

      {/* HERO */}
      <section className="relative min-h-screen flex items-end pb-24 overflow-hidden" style={{ backgroundColor: "#C4A882" }}>
        <img
          src={UNSPLASH.hero}
          alt="Naturally styled bedroom with organic linen bedding"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(30,20,10,0.72) 0%, rgba(30,20,10,0.15) 55%, transparent 100%)" }} />
        <div className="relative z-10 w-full max-w-5xl mx-auto px-8">
          <p className="text-sm font-medium tracking-[0.2em] uppercase mb-6" style={{ color: "rgba(246,240,230,0.7)" }}>
            Rooted in Nature, Styled for Living
          </p>
          <h1
            className="text-6xl md:text-8xl font-light leading-tight mb-6"
            style={{ fontFamily: "'Fraunces', serif", color: "#F6F0E6", fontStyle: "italic" }}
          >
            Nature at Home,<br />
            <span className="not-italic font-light">Elegance in Living.</span>
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-xl font-light" style={{ color: "rgba(246,240,230,0.82)" }}>
            Homes that reflect sustainability, authenticity, and mindful living.
          </p>
          <a
            href="#elements"
            className="inline-flex items-center gap-3 px-8 py-4 text-sm font-medium tracking-wide uppercase transition-all"
            style={{ backgroundColor: "#F6F0E6", color: "#3B2D1E" }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = "#C4714A"; e.currentTarget.style.color = "#F6F0E6"; }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = "#F6F0E6"; e.currentTarget.style.color = "#3B2D1E"; }}
          >
            Explore Collections
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </section>

      {/* ABOUT STRIP */}
      <section id="about" className="py-20 px-8" style={{ backgroundColor: "#EAE0CC" }}>
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16" style={{ backgroundColor: "rgba(92,66,48,0.35)" }} />
            <h2 className="text-3xl md:text-4xl font-light italic" style={{ fontFamily: "'Fraunces', serif", color: "#3B2D1E" }}>
              Crafted for Homes, Caring for Earth
            </h2>
            <div className="h-px w-16" style={{ backgroundColor: "rgba(92,66,48,0.35)" }} />
          </div>
          <p className="text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto mb-12" style={{ color: "#5C4230" }}>
            TerraHaven is inspired by <em>biophilic principles</em> — integrating natural textures, greenery, and organic forms into everyday spaces. Our philosophy: homes should nurture people while caring for the planet.
          </p>
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            {[
              { icon: "🌿", label: "Eco-Friendly" },
              { icon: "✦", label: "Ethically Made" },
              { icon: "☯", label: "Mindful Living" },
            ].map(({ icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-3">
                <div className="w-14 h-14 rounded-full flex items-center justify-center text-2xl" style={{ backgroundColor: "rgba(92,66,48,0.1)" }}>
                  {icon}
                </div>
                <span className="text-sm font-medium tracking-wide" style={{ color: "#5C4230" }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FIVE ELEMENTS */}
      <section id="elements" className="py-24 px-8" style={{ backgroundColor: "#F6F0E6" }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <p className="text-xs font-medium tracking-[0.22em] uppercase mb-3" style={{ color: "#C4714A" }}>Five Elements Collection</p>
              <h2 className="text-4xl md:text-5xl font-light" style={{ fontFamily: "'Fraunces', serif", color: "#3B2D1E" }}>
                Designed by Nature's<br /><em>Own Framework</em>
              </h2>
            </div>
            <p className="text-sm font-light leading-relaxed max-w-xs" style={{ color: "#7A6554" }}>
              Each collection embodies a natural force — its texture, palette, and spirit drawn directly from the earth's own design vocabulary.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {elements.map((el) => (
              <div
                key={el.id}
                className="group relative overflow-hidden cursor-pointer"
                style={{ aspectRatio: "5/6", backgroundColor: "#C4A882" }}
              >
                <img
                  src={el.img}
                  alt={el.alt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${el.overlay} to-transparent`}
                  style={{ opacity: 0.85 }}
                />
                <div className="absolute inset-0 flex flex-col justify-between p-5 md:p-6">
                  <div>
                    <span className="text-2xl">{el.symbol}</span>
                  </div>
                  <div>
                    <p className="text-xs font-medium tracking-[0.18em] uppercase mb-1" style={{ color: "rgba(246,240,230,0.7)" }}>
                      {el.sub}
                    </p>
                    <h3 className="text-2xl md:text-3xl font-light italic mb-3" style={{ fontFamily: "'Fraunces', serif", color: "#F6F0E6" }}>
                      {el.label}
                    </h3>
                    <div className="h-px w-8 mb-3 transition-all duration-300 group-hover:w-16" style={{ backgroundColor: "rgba(246,240,230,0.5)" }} />
                    <p className="text-sm font-light" style={{ color: "rgba(246,240,230,0.85)" }}>{el.products}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ETHER */}
          <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="relative overflow-hidden group cursor-pointer" style={{ minHeight: "320px", backgroundColor: "#D6C9B5" }}>
              <img
                src={UNSPLASH.ether}
                alt="Playful eco-conscious kids room decor"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(30,20,10,0.75) 0%, rgba(30,20,10,0.2) 100%)" }} />
              <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-12">
                <span className="text-3xl mb-3">✨</span>
                <p className="text-xs font-medium tracking-[0.18em] uppercase mb-2" style={{ color: "rgba(246,240,230,0.7)" }}>
                  Connection & Expansion
                </p>
                <h3 className="text-4xl font-light italic mb-3" style={{ fontFamily: "'Fraunces', serif", color: "#F6F0E6" }}>
                  Ether / Space
                </h3>
                <div className="h-px w-10 mb-4" style={{ backgroundColor: "rgba(246,240,230,0.4)" }} />
                <p className="text-sm font-light max-w-xs" style={{ color: "rgba(246,240,230,0.85)" }}>
                  Kids' Room Décor — playful, safe, eco-conscious sanctuaries where imagination grows.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex-1 p-8 flex flex-col justify-center" style={{ backgroundColor: "#EAE0CC" }}>
                <p className="text-xs font-medium tracking-[0.2em] uppercase mb-3" style={{ color: "#C4714A" }}>Our Belief</p>
                <blockquote className="text-2xl md:text-3xl font-light italic leading-snug" style={{ fontFamily: "'Fraunces', serif", color: "#3B2D1E" }}>
                  "Every room is an ecosystem. Every textile, a thread in a living home."
                </blockquote>
              </div>
              <div className="flex-1 flex items-center justify-center p-8 text-center" style={{ backgroundColor: "#3B2D1E" }}>
                <div>
                  <p className="text-xs font-medium tracking-[0.2em] uppercase mb-4" style={{ color: "rgba(246,240,230,0.5)" }}>Ready to transform your space?</p>
                  <button
                    className="px-8 py-3 text-sm font-medium tracking-wide uppercase border transition-all"
                    style={{ borderColor: "rgba(246,240,230,0.4)", color: "#F6F0E6" }}
                    onMouseEnter={e => { e.currentTarget.style.backgroundColor = "#C4714A"; e.currentTarget.style.borderColor = "#C4714A"; }}
                    onMouseLeave={e => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.borderColor = "rgba(246,240,230,0.4)"; }}
                  >
                    View All Collections
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUSTAINABLE PROMISE */}
      <section id="promise" className="relative py-28 overflow-hidden" style={{ backgroundColor: "#3B2D1E" }}>
        <img
          src={UNSPLASH.promise}
          alt="Organic linen and ceramic — sustainable materials"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="relative z-10 max-w-5xl mx-auto px-8 text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-12" style={{ backgroundColor: "rgba(246,240,230,0.25)" }} />
            <h2 className="text-3xl md:text-4xl font-light italic" style={{ fontFamily: "'Fraunces', serif", color: "#F6F0E6" }}>
              Our Sustainable Promise
            </h2>
            <div className="h-px w-12" style={{ backgroundColor: "rgba(246,240,230,0.25)" }} />
          </div>
          <p className="text-base font-light mb-16 max-w-xl mx-auto" style={{ color: "rgba(246,240,230,0.65)" }}>
            Designed with care for home and planet
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ backgroundColor: "rgba(246,240,230,0.1)" }}>
            {[
              {
                icon: "🌱",
                title: "Organic Materials",
                desc: "Organic linen, bamboo blends, and natural dyes — every fiber chosen with the earth in mind.",
              },
              {
                icon: "🤝",
                title: "Artisan Crafted",
                desc: "Fair-trade workshops and skilled artisans who've practiced their craft across generations.",
              },
              {
                icon: "♻️",
                title: "Eco-Conscious",
                desc: "Zero-waste packaging, carbon-offset shipping, and a take-back program for worn textiles.",
              },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="flex flex-col items-center text-center p-10" style={{ backgroundColor: "rgba(30,20,10,0.45)" }}>
                <span className="text-3xl mb-5">{icon}</span>
                <h3 className="text-xl font-light italic mb-3" style={{ fontFamily: "'Fraunces', serif", color: "#F6F0E6" }}>{title}</h3>
                <p className="text-sm font-light leading-relaxed" style={{ color: "rgba(246,240,230,0.65)" }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SHOP SPLIT */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[480px]">
        <div className="relative overflow-hidden group cursor-pointer" style={{ minHeight: "480px", backgroundColor: "#C4A882" }}>
          <img
            src={UNSPLASH.organic}
            alt="Organic linen furnishing collection"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0" style={{ background: "rgba(30,20,10,0.45)" }} />
          <div className="absolute inset-0 flex flex-col justify-end p-10 md:p-14">
            <p className="text-xs font-medium tracking-[0.2em] uppercase mb-2" style={{ color: "rgba(246,240,230,0.6)" }}>Collection I</p>
            <h3 className="text-3xl md:text-4xl font-light italic mb-4" style={{ fontFamily: "'Fraunces', serif", color: "#F6F0E6" }}>
              Organic Linen<br />Furnishing
            </h3>
            <button
              className="self-start px-6 py-2.5 text-xs font-medium tracking-widest uppercase transition-all"
              style={{ backgroundColor: "#F6F0E6", color: "#3B2D1E" }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = "#C4714A"; e.currentTarget.style.color = "#F6F0E6"; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = "#F6F0E6"; e.currentTarget.style.color = "#3B2D1E"; }}
            >
              Shop Now
            </button>
          </div>
        </div>
        <div className="relative overflow-hidden group cursor-pointer" style={{ minHeight: "480px", backgroundColor: "#8A9090" }}>
          <img
            src={UNSPLASH.nonorganic}
            alt="Non-organic furnishing collection"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0" style={{ background: "rgba(30,20,10,0.45)" }} />
          <div className="absolute inset-0 flex flex-col justify-end p-10 md:p-14">
            <p className="text-xs font-medium tracking-[0.2em] uppercase mb-2" style={{ color: "rgba(246,240,230,0.6)" }}>Collection II</p>
            <h3 className="text-3xl md:text-4xl font-light italic mb-4" style={{ fontFamily: "'Fraunces', serif", color: "#F6F0E6" }}>
              Non-Organic<br />Furnishing
            </h3>
            <button
              className="self-start px-6 py-2.5 text-xs font-medium tracking-widest uppercase transition-all"
              style={{ backgroundColor: "#F6F0E6", color: "#3B2D1E" }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = "#C4714A"; e.currentTarget.style.color = "#F6F0E6"; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = "#F6F0E6"; e.currentTarget.style.color = "#3B2D1E"; }}
            >
              Shop Now
            </button>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-28 px-8" style={{ backgroundColor: "#EAE0CC" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-medium tracking-[0.2em] uppercase mb-3" style={{ color: "#C4714A" }}>Community</p>
            <h2 className="text-4xl font-light italic" style={{ fontFamily: "'Fraunces', serif", color: "#3B2D1E" }}>
              What Our Customers Say
            </h2>
          </div>
          <div className="relative">
            <blockquote className="text-center">
              <p className="text-2xl md:text-3xl font-light italic leading-relaxed mb-8" style={{ fontFamily: "'Fraunces', serif", color: "#3B2D1E" }}>
                "{testimonials[activeTestimonial].quote}"
              </p>
              <footer>
                <span className="text-sm font-medium" style={{ color: "#5C4230" }}>
                  {testimonials[activeTestimonial].author}
                </span>
                <span className="text-sm font-light ml-2" style={{ color: "#8A7060" }}>
                  — {testimonials[activeTestimonial].location}
                </span>
              </footer>
            </blockquote>
            <div className="flex justify-center gap-2 mt-10">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className="transition-all duration-300"
                  style={{
                    width: i === activeTestimonial ? "28px" : "8px",
                    height: "8px",
                    borderRadius: i === activeTestimonial ? "4px" : "50%",
                    backgroundColor: i === activeTestimonial ? "#C4714A" : "rgba(92,66,48,0.3)",
                  }}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
          <div className="mt-16 text-center">
            <div className="inline-block border-b pb-1 cursor-pointer transition-colors" style={{ borderColor: "#C4714A", color: "#C4714A" }}>
              <span className="text-sm font-medium tracking-wide">Join the TerraHaven Movement →</span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="py-16 px-8" style={{ backgroundColor: "#3B2D1E" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 pb-12" style={{ borderBottom: "1px solid rgba(246,240,230,0.12)" }}>
          <div className="md:col-span-2">
            <img
              src="/src/imports/Copilot_20260823_125638.png"
              alt="TerraHaven logo"
              className="w-auto object-contain mb-4"
              style={{ height: "8.75rem", mixBlendMode: "screen" }}
            />
            <p className="text-sm font-light leading-relaxed max-w-xs" style={{ color: "rgba(246,240,230,0.55)" }}>
              Crafted for Homes, Caring for Earth.<br />
              Nature at Home, Elegance in Living.
            </p>
          </div>
          {[
            { heading: "Navigate", links: ["Shop", "About", "Impact", "Contact"] },
            { heading: "Collections", links: ["Earth", "Water", "Fire", "Air", "Ether"] },
          ].map(({ heading, links }) => (
            <div key={heading}>
              <p className="text-xs font-medium tracking-[0.18em] uppercase mb-5" style={{ color: "rgba(246,240,230,0.4)" }}>{heading}</p>
              <ul className="flex flex-col gap-3">
                {links.map(link => (
                  <li key={link}>
                    <a href="#" className="text-sm font-light transition-colors hover:text-[#C4714A]" style={{ color: "rgba(246,240,230,0.65)" }}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-xs font-light" style={{ color: "rgba(246,240,230,0.35)" }}>
            © 2026 TerraHaven. All rights reserved.
          </p>
          <p className="text-xs font-light" style={{ color: "rgba(246,240,230,0.35)" }}>
            Organic linen · Fair-trade crafted · Carbon-offset shipping
          </p>
        </div>
      </footer>
    </div>
  );
}
