import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const searchFields = [
  { label: "Location", value: "Address, City Or Zip" },
  { label: "Date/Duration", value: "Anytime/3 Days" },
  { label: "Budget", value: "$0-$3000" },
  { label: "People", value: "5-10" },
];

export default function Banner() {
  return (
    <section className="flex flex-1 flex-col bg-[#0A0A0A]">
      <div className="relative mx-auto flex w-full flex-1 flex-col items-center justify-center overflow-hidden px-6 py-16 text-center sm:py-20 lg:min-h-[590px]">
        <Image
          src="/Banner.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-black/55" />

        <h1 className="relative z-10 font-display text-[clamp(3rem,7.2vw,6.75rem)] font-light leading-[0.98] tracking-[-0.02em] text-white">
          <span className="block">Discover Your</span>
          <span className="block">Next Adventure</span>
        </h1>

        <p className="relative z-10 mt-7 max-w-[620px] text-base leading-7 text-white/90 sm:text-lg">
          Explore breathtaking destinations and create unforgettable memories
          with our curated travel experiences.
        </p>

        <div className="relative z-10 mt-9 flex flex-wrap items-center justify-center gap-3 sm:mt-10">
          <Link
            href="/destinations"
            className="flex h-11 items-center gap-2 bg-[#15A1BF] px-8 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#1290ab]"
          >
            Explore Now
            <ArrowRight className="size-4" strokeWidth={2} />
          </Link>
          <Link
            href="/destinations"
            className="flex h-11 items-center bg-[#34373A] px-8 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#3f4246]"
          >
            View Destination
          </Link>
        </div>
      </div>

      {/* Search form */}
      <form className="w-full border-t border-white/10 bg-gradient-to-r from-[#3B3E41] to-[#333639]">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 lg:grid-cols-[repeat(4,minmax(0,1fr))_230px]">
          {searchFields.map((field) => (
            <div
              key={field.label}
              className="flex min-h-[76px] flex-col justify-center gap-1 border-b border-r border-white/10 px-5 py-4 lg:border-b-0"
            >
              <label
                htmlFor={`search-${field.label.toLowerCase()}`}
                className="text-[13px] font-medium text-white"
              >
                {field.label}
              </label>
              <input
                id={`search-${field.label.toLowerCase()}`}
                name={field.label.toLowerCase()}
                defaultValue={field.value}
                className="w-full bg-transparent text-xs text-white/60 outline-none placeholder:text-white/60"
              />
            </div>
          ))}

          <button
            type="submit"
            className="col-span-2 flex min-h-[64px] items-center justify-center bg-[#15A1BF] px-6 text-sm font-medium text-white transition-colors hover:bg-[#1290ab] lg:col-span-1 lg:min-h-0"
          >
            Search
          </button>
        </div>
      </form>
    </section>
  );
}
