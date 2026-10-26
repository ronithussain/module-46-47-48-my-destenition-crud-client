import Link from "next/link";
import { ArrowUpRight, CalendarDays, MapPin, Star } from "lucide-react";

import { IDestination } from "@/app/types/type";

interface IDestinationCardProps {
  destination: IDestination;
}

const DestinationCard = ({ destination }: IDestinationCardProps) => {
  const parsedRating = Number(destination.rating ?? 4.5);
  const rating = Number.isFinite(parsedRating) ? parsedRating : 4.5;

  return (
    <article className="group flex flex-col">
      <Link
        href={`/all-destination/${destination._id}`}
        className="relative block aspect-[16/10] w-full overflow-hidden bg-muted"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={destination.imageUrl}
          alt={destination.name}
          loading="lazy"
          decoding="async"
          className="size-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />

        <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-black/40 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-sm">
          {rating.toFixed(1)}
          <Star className="size-3 fill-[#F5A623] text-[#F5A623]" />
        </span>
      </Link>

      <div className="mt-4 flex items-start justify-between gap-3">
        <p className="flex min-w-0 items-center gap-1.5 text-xs text-[#6B7280]">
          <MapPin className="size-3.5 shrink-0" strokeWidth={1.75} />
          <span className="truncate">{destination.country}</span>
        </p>

        <p className="shrink-0 text-sm leading-none">
          <span className="font-semibold text-[#111111]">
            ${destination.price}
          </span>
          <span className="ml-0.5 text-[10px] text-[#9CA3AF]">/Person</span>
        </p>
      </div>

      <h3 className="mt-1.5 truncate text-[15px] font-semibold text-[#111111]">
        <Link
          href={`/all-destination/${destination._id}`}
          className="transition-colors hover:text-[#15A1BF]"
        >
          {destination.name}
        </Link>
      </h3>

      <p className="mt-1 flex items-center gap-1.5 text-xs text-[#9CA3AF]">
        <CalendarDays className="size-3.5 shrink-0" strokeWidth={1.75} />
        {destination.duration}
      </p>

      <Link
        href={`/all-destination/${destination._id}`}
        className="mt-3 inline-flex w-fit items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#15A1BF] transition-colors hover:text-[#1290ab]"
      >
        Book Now
        <ArrowUpRight className="size-3.5" strokeWidth={2} />
      </Link>
    </article>
  );
};

export default DestinationCard;
