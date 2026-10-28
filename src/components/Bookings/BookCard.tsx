"use client";
import { IDestination } from "@/app/types/type";
import { useSession } from "@/lib/auth-client";
import { json } from "better-auth";
import { redirect } from "next/navigation";
import React from "react";
import { toast } from "sonner";

interface IBookCardProps {
  data: IDestination;
}

const BookCard = ({ data }: IBookCardProps) => {
  const { data: session } = useSession();
  const user = session?.user;

  const handleBooking = async(e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();
    const departureDate = e.target.departureDate.value;
    // console.log(departureDate, 'the date is');

    const bookData = {
      username: user?.name,
      email: user?.email,
      image: user?.image,
      ...data, //destination er data ta deya holo
      departureDate: departureDate,
      bookingDate: new Date(),
    };
    // console.log(bookData, 'the all data is');

    const res = await fetch(`http://localhost:5000/bookings`, {
        method:'POST',
        headers:{
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(bookData),
    })
    const afterSubmit = await res.json()
    if(afterSubmit.insertedId){
          toast.success('Destination added successfully!')
          redirect('/my-booking')
        }
    console.log(afterSubmit, 'submited data is');
  };
  return (
    <div>
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

          <form onSubmit={handleBooking}>
            <input
              id="departureDate"
              type="date"
              name="date"
              defaultValue={data.departureDate}
              className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-3 text-sm text-slate-700 outline-none"
            />

            <button
              type="submit"
              className="mt-4 w-full rounded-lg bg-sky-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-sky-700"
            >
              Book Now →
            </button>
          </form>

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
  );
};

export default BookCard;
