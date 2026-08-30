import { useState } from "react";

// Image sources - using Unsplash as placeholder
// Replace these with local Terra Haven images from /images/ directory
const IMAGES = {
  hero: "https://images.unsplash.com/photo-1762199904077-1c83cebbd205?w=1600&h=900&fit=crop&auto=format",
  earth: "https://images.unsplash.com/photo-1762214785391-aeab5f8d9e47?w=800&h=960&fit=crop&auto=format",
  water: "https://images.unsplash.com/photo-1685122121719-c513a7f1a845?w=800&h=960&fit=crop&auto=format",
  fire: "https://images.unsplash.com/photo-1756569620147-67d97c02375c?w=800&h=960&fit=crop&auto=format",
  air: "https://images.unsplash.com/photo-1612196808827-9ff25cb6137a?w=800&h=960&fit=crop&auto=format",
  landscape: "https://images.unsplash.com/photo-1762199904138-d163fe89540a?w=1200&h=600&fit=crop&auto=format",
  testimonial: "https://images.unsplash.com/photo-1770731206301-43a9683f3438?w=1200&h=700&fit=crop&auto=format",
};

const elements = [
  {
    id: "earth",
    label: "Earth",
    sub: "Stability & Authenticity",
    products: "Beds & Cushions",
    overlayColor: "rgba(74, 55, 40, 0.75)",
    img: IMAGES.earth,
    alt: "Natural linen bedding with earthy tones",
  },
  {
    id: "water",
    label: "Water",
    sub: "Flow & Adaptability",
    products: "Pillow Covers",
    overlayColor: "rgba(58, 80, 104, 0.75)",
    img: IMAGES.water,
    alt: "Soft blue-grey cushions on a minimal sofa",
  },
  {
    id: "fire",
    label: "Fire",
    sub: "Energy & Transformation",
    products: "Accent Pillows",
    overlayColor: "rgba(158, 78, 40, 0.75)",
    img: IMAGES.fire,
    alt: "Warm orange and terracotta accent pillows in a living room",
  },
  {
    id: "air",
    label: "Air",
    sub: "Movement & Clarity",
    products: "Linen Drapes",
    overlayColor: "rgba(138, 144, 144, 0.75)",
    img: IMAGES.air,
    alt: "Sheer linen curtains in a light airy room",
  },
];

const testimonials = [
  {
    quote:
      "Terra Haven brings nature into our home beautifully. We love the quality and eco-friendly ethos!",
    author: "Sarah M.",
  },
  {
    quote:
      "Every piece feels intentional and grounding. My bedroom has never felt so peaceful.",
    author: "Priya K.",
  },
  {
    quote:
      "The linen drapes transformed our living room — so light, so natural. Nothing else compares.",
    author: "James L.",
  },
];

// Simple SVG Logo component
function TerraHavenLogo() {
  return (
    <svg
      viewBox="0 0 200 80"
      className="w-auto"
      style={{ height: "40px" }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        x="10"
        y="55"
        fontSize="48"
        fontFamily="'Fraunces', serif"
        fontWeight="400"
        fontStyle="italic"
        fill="#3B2D1E"
      >
        Terra
      </text>
      <text
        x="10"
        y="75"
        fontSize="18"
        fontFamily="'Work Sans', sans-serif"
        fontWeight="300"
        fill="#6B7B4A"
        letterSpacing="4"
      >
        HAVEN
      </text>
    </svg>
  );
}

export default function App() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div
      className="min-h-screen"
      style={{ fontFamily: "'Work Sans', system-ui, sans-serif", backgroundColor: "#F5F0E6", color: "#3B2D1E" }}
    >
      {/* HEADER */}
      <header
        className="fixed top-0 left-0 right-0 z-50 h-18 flex items-center justify-between px-6 md:px-10"
        style={{ 
          backgroundColor: "#F5F0E6",
          borderBottom: "1px solid rgba(107, 123, 74, 0.15)",
        }}
      >
        <a href="#" className="flex items-center">
          <TerraHavenLogo />
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {[
            { label: "Shop", href: "#elements" },
            { label: "About", href: "#about" },
            { label: "Sustainability", href: "#promise" },
            { label: "Contact", href: "#contact" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium tracking-wide transition-colors"
              style={{ color: "#5C4230" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#6B7B4A")}
              onMouseLeave={e => (e.currentTarget.style.color = "#5C4230")}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 flex flex-col gap-1.5"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className="block w-5 h-px transition-all"
            style={{ backgroundColor: "#3B2D1E" }}
          />
          <span
            className="block w-5 h-px transition-all"
            style={{ backgroundColor: "#3B2D1E" }}
          />
          <span
            className="block w-5 h-px transition-all"
            style={{ backgroundColor: "#3B2D1E" }}
          />
        </button>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 pt-20 px-8 flex flex-col gap-1 md:hidden"
          style={{ backgroundColor: "#F5F0E6" }}
        >
          {[
            { label: "Shop", href: "#elements" },
            { label: "About", href: "#about" },
            { label: "Sustainability", href: "#promise" },
            { label: "Contact", href: "#contact" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="py-3 text-base font-medium border-b"
              style={{
                color: "#3B2D1E",
                borderColor: "rgba(92, 66, 48, 0.15)",
              }}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      {/* HERO */}
      <section
        className="relative flex items-center justify-center overflow-hidden mt-18"
        style={{ minHeight: "500px", height: "65vh", maxHeight: "750px" }}
      >
        <img
          src={IMAGES.hero}
          alt="Nature-inspired bedroom with warm natural light and organic linen textiles"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(74, 52, 38, 0.15) 0%, rgba(74, 52, 38, 0.45) 70%, rgba(45, 30, 20, 0.65) 100%)",
          }}
        />
        
        <div className="relative z-10 text-center px-6 md:px-12 max-w-3xl">
          <p
            className="text-xs md:text-sm font-medium tracking-[0.15em] uppercase mb-4 md:mb-6"
            style={{ color: "rgba(245, 240, 230, 0.75)" }}
          >
            Rooted in Nature
          </p>
          
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight mb-4 md:mb-6"
            style={{
              fontFamily: "'Fraunces', serif",
              color: "#F5F0E6",
              fontStyle: "italic",
              textShadow: "0 2px 8px rgba(0,0,0,0.2)",
            }}
          >
            Nature at Home,<br />
            Elegance in Living
          </h1>

          <p
            className="text-base md:text-lg lg:text-xl font-light mb-8 md:mb-10 max-w-xl mx-auto"
            style={{ color: "rgba(245, 240, 230, 0.85)" }}
          >
            Rooted in nature, styled for living.
          </p>

          <a
            href="#elements"
            className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 text-xs md:text-sm font-medium tracking-widest uppercase transition-all"
            style={{
              backgroundColor: "#5C4230",
              color: "#F5F0E6",
              borderRadius: "3px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#6B7B4A";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#5C4230";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Explore Collections
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M2 7h10M9 3l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </section>

      {/* BRAND STATEMENT */}
      <section
        className="py-20 md:py-28 px-6 md:px-10"
        style={{ backgroundColor: "#EDE4D4" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-6 mb-8 md:mb-12">
            <div className="flex-1 h-px" style={{ backgroundColor: "rgba(107, 123, 74, 0.25)" }} />
            <h2
              className="text-3xl md:text-4xl font-light whitespace-nowrap"
              style={{
                fontFamily: "'Fraunces', serif",
                color: "#3B2D1E",
              }}
            >
              Crafted for Homes,<br className="md:hidden" /> Caring for Earth
            </h2>
            <div className="flex-1 h-px" style={{ backgroundColor: "rgba(107, 123, 74, 0.25)" }} />
          </div>

          <p
            className="text-base md:text-lg font-light leading-relaxed mb-12 md:mb-16 max-w-2xl mx-auto"
            style={{ color: "#5C4230" }}
          >
            Inspired by nature, creating sustainable and stylish sanctuaries.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-3xl mx-auto">
            {[
              {
                title: "Eco-Friendly",
                description: "Sustainable materials and responsible sourcing",
              },
              {
                title: "Ethically Made",
                description: "Fair trade practices and artisan craftsmanship",
              },
              {
                title: "Mindful Living",
                description: "Thoughtfully designed for wellbeing",
              },
            ].map(({ title, description }) => (
              <div key={title} className="flex flex-col items-center gap-3">
                {/* Simple SVG line icon */}
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  stroke="#6B7B4A"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-75"
                >
                  {title === "Eco-Friendly" && (
                    <>
                      <path d="M16 28c-1.5-1.5-4-4-4-8 0-4 3-7 4-7s4 3 4 7c0 4-2.5 6.5-4 8z" />
                      <path d="M12 16c-1-2-2-4-2-6 0-3.3 1.5-6 6-6s6 2.7 6 6c0 2-1 4-2 6" />
                    </>
                  )}
                  {title === "Ethically Made" && (
                    <>
                      <circle cx="16" cy="16" r="13" />
                      <path d="M8 12h16M8 16h16M8 20h16" />
                    </>
                  )}
                  {title === "Mindful Living" && (
                    <>
                      <circle cx="16" cy="16" r="12" />
                      <circle cx="11" cy="14" r="1.5" fill="#6B7B4A" />
                      <circle cx="21" cy="14" r="1.5" fill="#6B7B4A" />
                      <path d="M12 20c1.5 1 2.5 1.5 4 1.5s2.5-.5 4-1.5" strokeWidth="1" />
                    </>
                  )}
                </svg>
                <h3
                  className="text-base font-medium"
                  style={{ color: "#3B2D1E" }}
                >
                  {title}
                </h3>
                <p
                  className="text-sm font-light"
                  style={{ color: "#7A6554" }}
                >
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COLLECTION GRID */}
      <section id="elements" className="py-20 md:py-28 px-6 md:px-10" style={{ backgroundColor: "#F5F0E6" }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 md:mb-16">
            <p
              className="text-xs font-medium tracking-[0.15em] uppercase mb-3 md:mb-4"
              style={{ color: "#C4714A" }}
            >
              Our Collections
            </p>
            <h2
              className="text-3xl md:text-5xl font-light"
              style={{
                fontFamily: "'Fraunces', serif",
                color: "#3B2D1E",
              }}
            >
              Designed by Nature's<br />own framework
            </h2>
          </div>

          {/* Four Element Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 mb-4">
            {elements.map((el) => (
              <div
                key={el.id}
                className="group relative overflow-hidden cursor-pointer"
                style={{
                  aspectRatio: "5/6",
                  backgroundColor: "#D9CEBC",
                }}
              >
                <img
                  src={el.img}
                  alt={el.alt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                />
                <div
                  className="absolute inset-0 transition-opacity duration-300"
                  style={{ backgroundColor: el.overlayColor }}
                />

                {/* Content positioned at bottom */}
                <div className="absolute inset-0 flex flex-col justify-between p-4 md:p-5">
                  <div />
                  <div>
                    <p
                      className="text-xs font-medium tracking-[0.12em] uppercase mb-2"
                      style={{ color: "rgba(245, 240, 230, 0.7)" }}
                    >
                      {el.sub}
                    </p>
                    <h3
                      className="text-xl md:text-2xl font-light mb-2 md:mb-3"
                      style={{
                        fontFamily: "'Fraunces', serif",
                        color: "#F5F0E6",
                        fontStyle: "italic",
                      }}
                    >
                      {el.label}
                    </h3>
                    <div
                      className="h-px w-6 mb-2 md:mb-3 transition-all duration-300 group-hover:w-10"
                      style={{ backgroundColor: "rgba(245, 240, 230, 0.4)" }}
                    />
                    <p
                      className="text-xs md:text-sm font-light"
                      style={{ color: "rgba(245, 240, 230, 0.8)" }}
                    >
                      {el.products}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LANDSCAPE VISUAL */}
      <section className="relative overflow-hidden" style={{ minHeight: "400px" }}>
        <img
          src={IMAGES.landscape}
          alt="Natural landscape with warm organic elements"
          className="w-full h-full object-cover"
        />
      </section>

      {/* SUSTAINABILITY SECTION */}
      <section id="promise" className="py-20 md:py-28 px-6 md:px-10" style={{ backgroundColor: "#46533C" }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-6 mb-8 md:mb-12">
            <div className="flex-1 h-px" style={{ backgroundColor: "rgba(245, 240, 230, 0.2)" }} />
            <h2
              className="text-3xl md:text-4xl font-light whitespace-nowrap"
              style={{
                fontFamily: "'Fraunces', serif",
                color: "#F5F0E6",
              }}
            >
              Our Sustainable Promise
            </h2>
            <div className="flex-1 h-px" style={{ backgroundColor: "rgba(245, 240, 230, 0.2)" }} />
          </div>

          <p
            className="text-base font-light mb-12 md:mb-16 max-w-2xl mx-auto"
            style={{ color: "rgba(245, 240, 230, 0.65)" }}
          >
            Designed with care for home and planet
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-3xl mx-auto">
            {[
              {
                title: "Organic Materials",
                description: "Responsibly sourced natural fibers and dyes that honor the earth",
              },
              {
                title: "Artisan Crafted",
                description: "Fair-trade partnerships with skilled artisans and manufacturers",
              },
              {
                title: "Eco-Conscious Practices",
                description: "Minimal waste, sustainable packaging, and carbon-aware shipping",
              },
            ].map(({ title, description }) => (
              <div key={title} className="flex flex-col items-center text-center">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  stroke="#A3B999"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mb-4"
                >
                  {title === "Organic Materials" && (
                    <>
                      <path d="M18 30c-2-2-5-5-5-10 0-5 3-9 5-9s5 4 5 9c0 5-3 8-5 10z" />
                      <path d="M14 14c-1.5-2-3-4-3-7 0-4 2-7 7-7s7 3 7 7c0 3-1.5 5-3 7" />
                    </>
                  )}
                  {title === "Artisan Crafted" && (
                    <>
                      <rect x="4" y="8" width="14" height="14" rx="2" />
                      <rect x="18" y="8" width="14" height="14" rx="2" />
                      <path d="M11 22v3c0 1 0.5 2 2 2h10c1.5 0 2-1 2-2v-3" />
                      <circle cx="11" cy="14" r="1.5" fill="#A3B999" />
                      <circle cx="25" cy="14" r="1.5" fill="#A3B999" />
                    </>
                  )}
                  {title === "Eco-Conscious Practices" && (
                    <>
                      <circle cx="18" cy="18" r="14" />
                      <path d="M18 6v24M6 18h24" />
                      <circle cx="18" cy="18" r="4" fill="#A3B999" />
                    </>
                  )}
                </svg>
                <h3
                  className="text-lg font-medium mb-2"
                  style={{ color: "#F5F0E6" }}
                >
                  {title}
                </h3>
                <p
                  className="text-sm font-light leading-relaxed"
                  style={{ color: "rgba(245, 240, 230, 0.65)" }}
                >
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 md:py-28 px-6 md:px-10" style={{ backgroundColor: "#EDE4D4" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <p
              className="text-xs font-medium tracking-[0.15em] uppercase mb-3 md:mb-4"
              style={{ color: "#A76545" }}
            >
              Community
            </p>
            <h2
              className="text-3xl md:text-4xl font-light"
              style={{
                fontFamily: "'Fraunces', serif",
                color: "#3B2D1E",
              }}
            >
              What Our Customers Say
            </h2>
          </div>

          <div className="relative mb-10 md:mb-12">
            <blockquote className="text-center">
              <p
                className="text-lg md:text-2xl font-light leading-relaxed mb-6 md:mb-8"
                style={{
                  fontFamily: "'Fraunces', serif",
                  color: "#3B2D1E",
                  fontStyle: "italic",
                }}
              >
                "{testimonials[activeTestimonial].quote}"
              </p>
              <footer>
                <span className="text-sm font-medium" style={{ color: "#5C4230" }}>
                  {testimonials[activeTestimonial].author}
                </span>
              </footer>
            </blockquote>

            {/* Testimonial dots */}
            <div className="flex justify-center gap-2 mt-10">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className="transition-all duration-300"
                  style={{
                    width: i === activeTestimonial ? "24px" : "8px",
                    height: "8px",
                    borderRadius: "4px",
                    backgroundColor:
                      i === activeTestimonial
                        ? "#A76545"
                        : "rgba(92, 66, 48, 0.25)",
                  }}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>

          <div
            className="text-center py-8"
            style={{
              borderTop: "1px solid rgba(107, 123, 74, 0.2)",
              borderBottom: "1px solid rgba(107, 123, 74, 0.2)",
            }}
          >
            <p
              className="text-xs font-medium tracking-[0.12em] uppercase mb-4"
              style={{ color: "#6B7B4A" }}
            >
              Join the Terra Haven Community
            </p>
            <button
              className="px-6 md:px-8 py-3 text-sm font-medium tracking-wider uppercase transition-all"
              style={{
                backgroundColor: "#5C4230",
                color: "#F5F0E6",
                borderRadius: "2px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#6B7B4A";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#5C4230";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Stay Connected
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="py-16 md:py-20 px-6 md:px-10" style={{ backgroundColor: "#3B2D1E" }}>
        <div
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12 pb-12"
          style={{ borderBottom: "1px solid rgba(245, 240, 230, 0.12)" }}
        >
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <svg
                viewBox="0 0 200 80"
                className="w-auto"
                style={{ height: "32px" }}
                xmlns="http://www.w3.org/2000/svg"
              >
                <text
                  x="10"
                  y="55"
                  fontSize="42"
                  fontFamily="'Fraunces', serif"
                  fontWeight="400"
                  fontStyle="italic"
                  fill="#F5F0E6"
                >
                  Terra
                </text>
                <text
                  x="10"
                  y="72"
                  fontSize="16"
                  fontFamily="'Work Sans', sans-serif"
                  fontWeight="300"
                  fill="#A3B999"
                  letterSpacing="3"
                >
                  HAVEN
                </text>
              </svg>
            </div>
            <p
              className="text-xs font-light leading-relaxed max-w-xs"
              style={{ color: "rgba(245, 240, 230, 0.55)" }}
            >
              Crafted for Homes, Caring for Earth. Nature at Home, Elegance in Living.
            </p>
          </div>

          {/* Navigation Links */}
          {[
            { heading: "Shop", links: ["Earth", "Water", "Fire", "Air"] },
            { heading: "Company", links: ["About", "Sustainability", "Privacy", "Terms"] },
            { heading: "Social", links: ["Instagram", "Facebook", "Pinterest", "Newsletter"] },
          ].map(({ heading, links }) => (
            <div key={heading}>
              <p
                className="text-xs font-medium tracking-[0.12em] uppercase mb-4"
                style={{ color: "rgba(245, 240, 230, 0.5)" }}
              >
                {heading}
              </p>
              <ul className="flex flex-col gap-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-xs font-light transition-colors"
                      style={{ color: "rgba(245, 240, 230, 0.65)" }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "#A3B999";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "rgba(245, 240, 230, 0.65)";
                      }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
          <p
            className="text-xs font-light"
            style={{ color: "rgba(245, 240, 230, 0.35)" }}
          >
            © 2026 Terra Haven. All rights reserved.
          </p>
          <p
            className="text-xs font-light"
            style={{ color: "rgba(245, 240, 230, 0.35)" }}
          >
            Organic · Ethically Made · Sustainably Crafted
          </p>
        </div>
      </footer>
    </div>
  );
}
