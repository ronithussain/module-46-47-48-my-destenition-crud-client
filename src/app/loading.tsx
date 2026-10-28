import { CalendarDays, Ticket } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-screen bg-white px-4 py-8 sm:px-6 sm:py-10">
      <div className="mx-auto max-w-5xl">
        {/* Page header skeleton */}
        <div className="mb-6 border-b border-slate-100 pb-5">
          <div className="h-8 w-48 bg-muted rounded animate-pulse mb-2" />
          <div className="h-5 w-32 bg-muted rounded animate-pulse" />
        </div>

        {/* Bookings list skeleton */}
        <div className="divide-y divide-slate-100 space-y-4">
          {[1, 2, 3].map((i) => (
            <article
              key={i}
              className="flex items-center gap-4 px-1 py-4 sm:gap-5"
            >
              {/* Image skeleton */}
              <div className="relative h-[80px] w-[112px] shrink-0 overflow-hidden rounded-lg sm:h-[84px] sm:w-[146px]">
                <div className="h-full w-full bg-muted animate-pulse rounded-lg" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/40 to-transparent animate-pulse" />
              </div>

              {/* Details skeleton */}
              <div className="min-w-0 flex-1">
                {/* Status badge skeleton */}
                <div className="h-6 w-16 rounded-full bg-muted animate-pulse mb-2" />

                {/* Name skeleton */}
                <div className="h-5 w-48 bg-muted rounded animate-pulse mb-1.5" />

                {/* Departure row skeleton */}
                <div className="flex items-center gap-1.5 mb-1.5">
                  <div className="h-3 w-3 rounded-full bg-muted animate-pulse" />
                  <div className="h-3 w-32 bg-muted rounded animate-pulse" />
                </div>

                {/* Booking ID row skeleton */}
                <div className="flex items-center gap-1.5 mb-3">
                  <div className="h-3 w-3 rounded-full bg-muted animate-pulse" />
                  <div className="h-3 w-24 bg-muted rounded animate-pulse" />
                </div>

                {/* Price skeleton */}
                <div className="h-5 w-20 bg-muted rounded animate-pulse" />
              </div>

              {/* Actions skeleton */}
              <div className="flex shrink-0 flex-col items-end gap-2 self-stretch sm:flex-row">
                <div className="h-[19px] w-20 rounded-sm border border-border bg-muted/50 animate-pulse" />
                <div className="h-[19px] w-24 rounded-sm bg-cyan-600/20 animate-pulse" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
