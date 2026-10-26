import { IDestination } from "@/app/types/type";
import DeleteDestinationDialogue from "@/components/Destination/DeleteDestinationDialogue";
import EditDestinationDialogue from "@/components/Destination/EditDestinationDialogue";
import Image from "next/image";
import Link from "next/link";

interface IParamsProps {
  params: Promise<{
    destinationId: string;
  }>;
}

const DestinationDetailPage = async ({ params }: IParamsProps) => {
  const { destinationId } = await params;

  const res = await fetch(
    `http://localhost:5000/all-destination/${destinationId}`,
  );
  const data: IDestination = await res.json();

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        {/* Top navigation */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 px-5 py-4">
          <Link
            href="/all-destination"
            className="text-sm text-slate-500 transition hover:text-sky-600"
          >
            ← Back to Destinations
          </Link>
          {/* edit, cancel button */}
          <div className="flex gap-3">
         
            <EditDestinationDialogue destination={data}/>

            <DeleteDestinationDialogue destination={data}/>
          </div>
        </div>

        {/* Destination hero image */}
        <div className="p-4 sm:p-6">
          <div className="relative h-64 overflow-hidden rounded-xl sm:h-96">
            <Image
              src={data.imageUrl}
              alt={data.name}
              width={500}
              height={400}
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

            <div className="absolute bottom-5 left-5 text-white">
              <span className="rounded-full bg-white/20 px-3 py-1 text-sm backdrop-blur-md">
                {data.category}
              </span>

              <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
                {data.name}
              </h1>

              <p className="mt-1 text-sm text-white/90">📍 {data.country}</p>
            </div>
          </div>
        </div>

        {/* Main details + booking section */}
        <div className="grid gap-8 px-5 pb-8 sm:px-8 lg:grid-cols-3">
          {/* Left content */}
          <section className="space-y-7 lg:col-span-2">
            {/* Destination heading */}
            <div>
              <p className="text-sm font-medium text-sky-600">
                📍 {data.country}
              </p>

              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
                {data.name}
              </h2>

              <div className="mt-3 flex flex-wrap gap-3 text-sm text-slate-600">
                <span>🏔️ {data.category}</span>
                <span>•</span>
                <span>🗓️ {data.duration}</span>
              </div>
            </div>

            {/* Overview */}
            <div>
              <h3 className="mb-3 text-xl font-semibold text-slate-900">
                Overview
              </h3>

              <p className="text-sm leading-7 text-slate-600">
                {data.description}
              </p>
            </div>

            {/* Highlights */}
            <div>
              <h3 className="mb-4 text-xl font-semibold text-slate-900">
                Highlights
              </h3>

              <p className="mb-4 text-sm leading-6 text-slate-600">
                Discover the beauty of {data.country}, explore spectacular
                landscapes, enjoy local culture, and create unforgettable travel
                memories.
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Explore beautiful landscapes",
                  "Enjoy unforgettable views",
                  "Discover local culture",
                  "Experience nature and adventure",
                ].map((highlight) => (
                  <div
                    key={highlight}
                    className="flex items-center gap-2 text-sm text-slate-600"
                  >
                    <span className="text-emerald-500">✓</span>
                    {highlight}
                  </div>
                ))}
              </div>
            </div>

            {/* Travel information */}
            <div className="rounded-xl bg-slate-50 p-5">
              <h3 className="mb-4 text-lg font-semibold">Travel Information</h3>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-sm text-slate-500">Destination</p>
                  <p className="mt-1 font-medium">{data.country}</p>
                </div>

                <div>
                  <p className="text-sm text-slate-500">Duration</p>
                  <p className="mt-1 font-medium">{data.duration}</p>
                </div>

                <div>
                  <p className="text-sm text-slate-500">Departure Date</p>
                  <p className="mt-1 font-medium">
                    {new Date(
                      `${data.departureDate}T00:00:00`,
                    ).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-slate-500">Category</p>
                  <p className="mt-1 font-medium">{data.category}</p>
                </div>
              </div>
            </div>
          </section>

          {/* Right booking card */}
          <aside>
            <div className="sticky top-6 rounded-xl border border-slate-200 p-5 shadow-sm">
              <p className="text-sm text-slate-500">Starting from</p>

              <div className="mt-1 flex items-baseline gap-1">
                <span className="text-3xl font-bold text-sky-600">
                  ${data.price}
                </span>
              </div>

              <p className="text-xs text-slate-500">per person</p>

              <div className="my-5 border-t border-slate-100" />

              <label
                htmlFor="departureDate"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Departure Date
              </label>

              <input
                id="departureDate"
                type="date"
                value={data.departureDate}
                readOnly
                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-3 text-sm text-slate-700 outline-none"
              />

              <button
                type="button"
                className="mt-4 w-full rounded-lg bg-sky-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-sky-700"
              >
                Book Now →
              </button>

              <div className="mt-5 space-y-3 border-t border-slate-100 pt-4">
                {[
                  "Destination details available",
                  "Plan your next adventure",
                  "Travel information included",
                ].map((item) => (
                  <p key={item} className="flex gap-2 text-xs text-slate-500">
                    <span className="text-emerald-500">✓</span>
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default DestinationDetailPage;
