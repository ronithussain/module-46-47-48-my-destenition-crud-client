import MyBookingsCard from "@/components/Bookings/MyBookingsCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { IBooking } from "@/app/types/type";
import { getTokenFromServer } from "@/lib/getTokenFromServer";

const MyBookingPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;
  console.log(user);

  const token = getTokenFromServer();

  const res = await fetch(`http://localhost:5000/my-bookings/${user?.email}`,{
    headers:{
      authorization: `Bearer ${token}`
    }
  });
  const myBookingsData: IBooking[] = await res.json();
  console.log(myBookingsData, "my bookings data");

  return (
    <div>
      <main className="min-h-screen bg-white px-4 py-8 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <div className="mb-6 border-b border-slate-100 pb-5">
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
              My Bookings
            </h1>
            <p className="mt-2 text-sm text-slate-500">
              Manage and view your upcoming travel plans
            </p>
          </div>

          {myBookingsData.length === 0 ? (
            <div className="rounded-xl border border-dashed border-slate-300 px-5 py-12 text-center">
              <p className="font-medium text-slate-800">No bookings found</p>
              <p className="mt-2 text-sm text-slate-500">
                Your booked destinations will appear here.
              </p>
            </div>
          ) : (
            <div className="divide-y divide-slate-100">
              {myBookingsData.map((booking) => (
                <MyBookingsCard key={booking._id} booking={booking} />
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default MyBookingPage;
