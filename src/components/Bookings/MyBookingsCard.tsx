"use client";
import { IBooking } from "@/app/types/type";
import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Ticket, DollarSign, X, Eye } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const MyBookingsCard = ({ booking }: { booking: IBooking }) => {
  const router = useRouter();

  const handleDeleteMyBookingData = async () => {
    const res = await fetch(
      `http://localhost:5000/my-bookings/${booking._id}`,
      {
        method: "DELETE",
      },
    );
    const afterDelete = await res.json();
    if (afterDelete.deletedCount > 0) {
      toast.success("my destination confirmed packeg deleted successfully!");
      //   redirect("/my-booking");
      router.refresh();
    }
  };
  const status = booking.status ?? "Confirmed";

  const formattedDate = new Date(
    `${booking.departureDate}T00:00:00`,
  ).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <article className="flex flex-col gap-4 border-b border-slate-200 py-4 sm:flex-row sm:items-center sm:gap-5">
      {/* Destination image */}
      <div className="relative h-50 w-full shrink-0 overflow-hidden rounded-md sm:h-[140px] sm:w-[246px]">
        <Image
          src={booking.imageUrl}
          alt={booking.name}
          fill
          sizes="(max-width: 640px) 100vw, 146px"
          className="object-cover"
        />
      </div>

      {/* Booking information */}
      <div className="min-w-0 flex-1">
        <span
          className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-[12px] md:text-[16px] font-medium ${
            status === "Confirmed"
              ? "bg-emerald-50 text-emerald-600"
              : status === "Pending"
                ? "bg-orange-50 text-orange-600"
                : "bg-red-50 text-red-600"
          }`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-current" />
          {status}
        </span>

        <h2 className="mt-1 text-lg font-semibold leading-tight text-slate-900">
          {booking.name}
        </h2>

        <p className="mt-2 flex items-center gap-2 text-xs text-slate-500">
          <CalendarDays size={14} className="shrink-0" />
          Departure: {formattedDate}
        </p>

        <p className="mt-1 flex items-center gap-2 text-xs text-slate-500">
          <Ticket size={14} className="shrink-0" />
          Booking ID: {booking._id.slice(-4)}
        </p>

        <p className="mt-1 flex items-center gap-1 text-xl font-semibold text-sky-600">
          <DollarSign size={18} />
          {booking.price}
        </p>
      </div>

      {/* Action buttons */}
      <div className="flex shrink-0 items-center justify-end gap-2 sm:self-end">
        <button
          onClick={handleDeleteMyBookingData}
          type="button"
          className="inline-flex items-center gap-1 rounded-sm border border-red-300 px-3 py-2 text-sm md:text-md font-medium text-red-500 transition hover:bg-red-50"
        >
          <X size={16} />
          Cancel
        </button>

        <Link
          href={`/all-destination/${booking._id}`}
          className="inline-flex items-center gap-1 rounded-sm bg-cyan-600 px-3 py-2 text-sm md:text-md font-medium text-white transition hover:bg-cyan-700"
        >
          <Eye size={16} />
          View
        </Link>
      </div>
    </article>
  );
};

export default MyBookingsCard;
