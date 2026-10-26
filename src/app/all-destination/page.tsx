import { ChevronDown } from "lucide-react";

import DestinationCard from "@/components/Destination/DestinationCard";
import { IDestination } from "../types/type";

const filters = ["Category", "Price Range", "Sort By"];

const AllDestinationPage = async () => {
  const res = await fetch("http://localhost:5000/all-destination", {
    cache: "no-store",
  });
  const data: IDestination[] = res.ok ? await res.json() : [];

  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-[1200px] px-6 py-12 sm:py-14">
        <header>
          <h1 className="font-display text-3xl font-semibold tracking-tight text-[#111111] sm:text-4xl lg:text-[42px]">
            Explore All Destinations
          </h1>
          <p className="mt-2 text-sm text-[#5B6B6E]">
            Find your perfect travel experience from our curated collection.
          </p>
        </header>

        {/* category, price, sort buttons map */}
        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {filters.map((label) => (
            <button
              key={label}
              type="button"
              className="flex h-11 w-full items-center justify-between border border-[#E4E6E9] bg-white px-4 text-[11px] font-medium uppercase tracking-[0.12em] text-[#4B5563]"
            >
              {label}
              <ChevronDown
                aria-hidden="true"
                className="size-4 text-[#9CA3AF]"
                strokeWidth={1.75}
              />
            </button>
          ))}
        </div>

        <p className="mt-6 text-xs text-[#6B7280]">
          Showing {data.length} destination{data.length === 1 ? "" : "s"}
        </p>

        <div className="mt-6 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((destination) => (
            <DestinationCard key={destination._id} destination={destination} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default AllDestinationPage;
