import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const footerColumns = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "/" },
      { label: "Destinations", href: "/destinations" },
      { label: "My Bookings", href: "/bookings" },
      { label: "My Profile", href: "/profile" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "/help" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
  },
];

const socialLinks = [
  {
    label: "X",
    href: "https://x.com",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452z",
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0B0B0B] text-white">
      <div className="mx-auto max-w-[1200px] px-6 pt-16 pb-8 lg:pt-20">
        <Link href="/" aria-label="Wanderlast home" className="inline-block">
          <Image
            src="/Wanderlast-1.png"
            alt="Wanderlast"
            width={542}
            height={80}
            className="h-auto w-full max-w-[542px]"
          />
        </Link>
        <p className="mt-5 max-w-[620px] text-base leading-7 text-white/65 sm:text-lg">
          Your gateway to extraordinary travel experiences around the world.
        </p>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr] lg:gap-8">
          <div>
            <h2 className="text-[13px] font-semibold uppercase tracking-[0.14em] text-white/90">
              Newsletter
            </h2>
            <p className="mt-3 max-w-[330px] text-sm leading-6 text-white/55">
              Subscribe for exclusive travel deals and inspiration.
            </p>
            <form className="relative mt-5 max-w-[380px]">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Enter email"
                className="h-11 w-full border border-white/10 bg-[#292929] px-4 pr-12 text-sm text-white outline-none placeholder:text-white/40 focus:border-[#15A1BF]"
              />
              <button
                type="submit"
                aria-label="Subscribe to newsletter"
                className="absolute inset-y-0 right-0 flex w-11 items-center justify-center text-[#15A1BF] transition-colors hover:text-white"
              >
                <ArrowRight className="size-4" strokeWidth={2} />
              </button>
            </form>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <h2 className="text-[13px] font-semibold uppercase tracking-[0.14em] text-white/90">
                {column.title}
              </h2>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/55 transition-colors hover:text-white sm:text-base"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h2 className="text-[13px] font-semibold uppercase tracking-[0.14em] text-white/90">
              Contact Us
            </h2>
            <div className="mt-4 space-y-3 text-sm text-white/55 sm:text-base">
              <p>766 901 6222</p>
              <a
                href="mailto:info@wanderland.com"
                className="block transition-colors hover:text-white"
              >
                info@wanderland.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 Wanderlast. All rights reserved.</p>
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                target="_blank"
                rel="noreferrer"
                className="text-white/55 transition-colors hover:text-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="size-4"
                  fill="currentColor"
                >
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
