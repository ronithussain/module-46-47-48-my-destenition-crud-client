"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  User,
  Menu,
  X,
  LogOut,
  CalendarCheck,
  MapPin,
  ShieldCheck,
  House,
  PlusCircle,
} from "lucide-react";

import { useSession, signOut } from "@/lib/auth-client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { toast } from "sonner";

const navLinks = [
  { label: "Home", href: "/", icon: House },
  {
    label: "Add-Destinations",
    href: "/add-destination",
    icon: PlusCircle,
  },
  {
    label: "Destinations",
    href: "/all-destination",
    icon: MapPin,
  },
  {
    label: "My Bookings",
    href: "/bookings",
    icon: CalendarCheck,
  },
  { label: "Admin", href: "/admin", icon: ShieldCheck },
];

export default function Navbar() {
  const { data: session, isPending } = useSession();
  const user = session?.user;

  const router = useRouter();
  const pathname = usePathname();

  // Mobile menu state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Logout functionality
  const handleSignOut = async () => {
    try {
      await signOut({
        fetchOptions: {
          onSuccess: () => {
            setIsMobileMenuOpen(false);
            toast.success(`${user?.name || "User"} signed out successfully!`);
            router.push("/login");
            router.refresh();
          },
        },
      });
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  };

  // Close mobile menu after navigation
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/10 bg-white">
      <div className="relative mx-auto flex h-16 max-w-[1440px] items-center justify-between px-4 sm:px-8 lg:px-10">
        {/* Mobile hamburger button */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((previous) => !previous)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
          className="flex items-center justify-center rounded-md p-2 text-[#171717] transition-colors hover:bg-gray-100 md:hidden"
        >
          {isMobileMenuOpen ? (
            <X className="size-6" />
          ) : (
            <Menu className="size-6" />
          )}
        </button>

        {/* Desktop navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-5 text-[13px] font-medium text-[#171717] md:flex lg:gap-7 lg:text-sm"
        >
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname === link.href ||
                  pathname.startsWith(`${link.href}/`);

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`relative py-1 transition-colors hover:text-[#15A1BF] ${
                  isActive
                    ? "text-[#15A1BF] after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:bg-[#15A1BF]"
                    : ""
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Centered logo */}
        <Link
          href="/"
          aria-label="Wanderlast home"
          onClick={closeMobileMenu}
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

        {/* User section with independent loading */}
        <div className="ml-auto flex items-center gap-2 sm:gap-4 lg:gap-5">
          {isPending ? (
            // Only user section shows loading
            <div
              className="size-9 animate-pulse rounded-full bg-gray-200"
              aria-label="Loading user"
            />
          ) : user ? (
            // Logged-in user
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="hidden max-w-32 truncate text-sm font-medium text-[#171717] sm:block">
                {user.name}
              </span>

              <DropdownMenu>
                <DropdownMenuTrigger
                  className="flex size-10 items-center justify-center rounded-full outline-none ring-offset-2 transition hover:ring-2 hover:ring-[#15A1BF]/40 focus-visible:ring-2 focus-visible:ring-[#15A1BF]"
                  aria-label="Open user menu"
                >
                  <Avatar className="size-9">
                    <AvatarImage
                      referrerPolicy="no-referrer"
                      src={user.image || undefined}
                      alt={user.name || "User"}
                    />
                    <AvatarFallback>
                      {user.name?.charAt(0).toUpperCase() || "U"}
                    </AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>

                <DropdownMenuContent align="end" className="w-52">
                  <DropdownMenuGroup>
                    <DropdownMenuLabel>
                      <div className="flex flex-col gap-1">
                        <span className="font-semibold">
                          {user.name || "My Account"}
                        </span>
                        <span className="truncate text-xs font-normal text-muted-foreground">
                          {user.email}
                        </span>
                      </div>
                    </DropdownMenuLabel>

                    <DropdownMenuSeparator />

                    <DropdownMenuItem
                      onClick={() => router.push("/profile")}
                      className="cursor-pointer"
                    >
                      <User className="mr-2 size-4" />
                      Profile
                    </DropdownMenuItem>

                    <DropdownMenuItem
                      onClick={() => router.push("/bookings")}
                      className="cursor-pointer"
                    >
                      <CalendarCheck className="mr-2 size-4" />
                      My Bookings
                    </DropdownMenuItem>

                    <DropdownMenuSeparator />

                    <DropdownMenuItem
                      onClick={handleSignOut}
                      className="cursor-pointer text-red-600 focus:text-red-600"
                    >
                      <LogOut className="mr-2 size-4" />
                      Log out
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ) : (
            // Logged-out user
            <div className="flex items-center gap-3 text-sm font-medium">
              <Link
                href="/login"
                className="transition-colors hover:text-[#15A1BF]"
              >
                Login
              </Link>

              <Link
                href="/signUp"
                className="rounded-md bg-[#15A1BF] px-3 py-2 text-white transition-colors hover:bg-[#1189a3]"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Drawer + Overlay */}
      <div className="md:hidden">
        {/* Background Overlay */}
        <button
          type="button"
          aria-label="Close mobile menu"
          onClick={() => setIsMobileMenuOpen(false)}
          className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ease-in-out ${
            isMobileMenuOpen ? "visible opacity-100" : "invisible opacity-0"
          }`}
        />

        {/* Left Side Drawer */}
        <aside
          id="mobile-navigation"
          aria-label="Mobile navigation"
          aria-hidden={!isMobileMenuOpen}
          className={`fixed left-0 top-0 z-50 flex h-dvh w-3/4 max-w-sm flex-col bg-white shadow-2xl dark:bg-slate-950
      transition-transform duration-300 ease-in-out
      ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between border-b p-5">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-xl font-bold text-green-700"
            >
              Wanderlast
            </Link>

            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setIsMobileMenuOpen(false)}
              className="rounded-lg p-2 transition-colors hover:bg-gray-100 dark:hover:bg-slate-800"
            >
              <X size={22} />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 space-y-2 overflow-y-auto p-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3 transition-colors duration-200 ${
                    isActive
                      ? "bg-green-100 font-semibold text-green-800 dark:bg-green-900/40 dark:text-green-300"
                      : "text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-slate-800"
                  }`}
                >
                  <link.icon size={20} />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Drawer Footer */}
          <div className="border-t p-4">
            <p className="text-center text-xs text-gray-500">
              Explore the world with Wanderlast
            </p>
          </div>
        </aside>
      </div>
    </header>
  );
}
