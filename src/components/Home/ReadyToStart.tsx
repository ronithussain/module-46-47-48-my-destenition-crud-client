import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ReadyToStart() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0B0B0B]">
      <Image
        src="/CTA.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-black/75" />

      <div className="relative mx-auto flex min-h-[360px] max-w-[1440px] flex-col items-center justify-center px-6 py-16 text-center sm:min-h-[460px] lg:min-h-[520px]">
        <h2 className="font-display text-3xl font-light tracking-tight text-white sm:text-4xl lg:text-5xl">
          Ready To Start Your Journey?
        </h2>
        <p className="mt-3 text-sm text-white/80 sm:text-base">
          Join thousands of travelers who have discovered the world with us
        </p>
        <Link
          href="/destinations"
          className="mt-7 inline-flex h-11 items-center gap-2 bg-white px-6 text-xs font-semibold uppercase tracking-[0.1em] text-[#111111] transition-colors hover:bg-[#EAEAEA]"
        >
          Book Your Trip Today
          <ArrowRight className="size-4 text-[#15A1BF]" strokeWidth={2} />
        </Link>
      </div>
    </section>
  );
}
