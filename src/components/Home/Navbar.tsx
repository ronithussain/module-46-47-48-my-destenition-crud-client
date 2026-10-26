import Image from "next/image";
import Link from "next/link";
import { User } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/", active: true },
  { label: "Add-Destinations", href: "/add-destination" },
  { label: "Destinations", href: "/all-destination" },
  { label: "My Bookings", href: "/bookings" },
  { label: "Admin", href: "/admin" },
];

export default function Navbar() {
  return (
    <header className="w-full border-b border-black/10 bg-white">
      <div className="relative mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-10">
        <nav aria-label="Main navigation" className="hidden items-center gap-5 text-[13px] font-medium text-[#171717] md:flex lg:gap-7 lg:text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={link.active ? "page" : undefined}
              className={
                link.active
                  ? "relative py-1 text-[#15A1BF] after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:bg-[#15A1BF]"
                  : "py-1 transition-colors hover:text-[#15A1BF]"
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/"
          aria-label="Wanderlast home"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <Image
            src="/Wanderlast.png"
            alt="Wanderlast"
            width={162}
            height={24}
            priority
            className="h-5 w-auto sm:h-6 lg:h-7"
          />
        </Link>

        <div className="ml-auto flex items-center gap-4 text-[13px] font-medium text-[#171717] sm:gap-5 lg:gap-7 lg:text-sm">
          <Link
            href="/profile"
            className="hidden items-center gap-1.5 transition-colors hover:text-[#15A1BF] sm:flex"
          >
            <User className="size-4" strokeWidth={1.5} />
            Profile
          </Link>
          <Link href="/login" className="transition-colors hover:text-[#15A1BF]">
            Login
          </Link>
          <Link href="/signUp" className="transition-colors hover:text-[#15A1BF]">
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
}
