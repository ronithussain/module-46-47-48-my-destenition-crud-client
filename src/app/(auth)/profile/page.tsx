import React from "react";

import {
  MapPin,
  Ticket,
  Globe,
  Plane,
  DollarSign,
  Edit2,
  Camera,
} from "lucide-react";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

function StatCard({
  title,
  value,
  icon,
  iconBg,
  iconColor,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
}) {
  return (
    <Card className="p-6">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-normal leading-none">
          {title}
        </CardTitle>
        <div className={`flex h-9 w-9 items-center justify-center rounded-full ${iconBg} ${iconColor}`}>
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
      </CardContent>
    </Card>
  );
}

export default function MyProfilePage() {
  return (
    <main className="min-h-screen bg-background px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <h1 className="font-display text-4xl font-light tracking-tight text-foreground md:text-5xl">
            My Profile
          </h1>
          <p className="text-muted-foreground mt-2">
            Manage your account settings and travel preferences
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Profile Card */}
          <section className="lg:col-span-1">
            <Card className="max-w-xs">
              <CardHeader className="py-8 text-center">
                <div className="relative inline-block mx-auto">
                  <Avatar
                    className="size-28 bg-[#00A8E8] text-white border-4 border-background"
                  >
                    <AvatarImage />
                    <AvatarFallback className="text-2xl">
                      <Camera className="size-8" />
                    </AvatarFallback>
                  </Avatar>
                  <button
                    className="absolute right-0 bottom-0 flex h-8 w-8 items-center justify-center rounded-full bg-[#00A8E8] text-white shadow-lg ring-2 ring-background transition-all hover:scale-110"
                    aria-label="Change profile photo"
                  >
                    <Camera className="size-3" />
                  </button>
                </div>
                <CardTitle className="mt-4 text-xl">Sarah Mitchell</CardTitle>
                <CardDescription
                  className="mt-1 flex items-center justify-center gap-1 text-sm"
                >
                  <MapPin className="size-4" />
                  San Francisco, CA
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex flex-col">
                    <span className="text-muted-foreground">Member since</span>
                    <span className="text-foreground font-medium">Mar 2024</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-muted-foreground">Nationality</span>
                    <span className="text-foreground font-medium">
                      United States
                    </span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pt-4">
                <Button
                  className="w-full bg-[#00A8E8] text-white hover:bg-[#0095d1]"
                >
                  <Edit2 className="mr-2 size-4" />
                  Edit Profile
                </Button>
              </CardFooter>
            </Card>
          </section>

          {/* Travel Statistics */}
          <section className="lg:col-span-2">
            <h2 className="text-base font-medium mb-6">Travel Statistics</h2>
            <div className="grid grid-cols-2 gap-6">
              <StatCard
                title="Total Bookings"
                value="12"
                icon={<Ticket className="size-5" />}
                iconBg="bg-blue-50"
                iconColor="text-blue-600"
              />
              <StatCard
                title="Countries Visited"
                value="18"
                icon={<Globe className="size-5" />}
                iconBg="bg-green-50"
                iconColor="text-green-600"
              />
              <StatCard
                title="Upcoming Trips"
                value="2"
                icon={<Plane className="size-5" />}
                iconBg="bg-orange-50"
                iconColor="text-orange-600"
              />
              <StatCard
                title="Total Spent"
                value="$15,750"
                icon={<DollarSign className="size-5" />}
                iconBg="bg-pink-50"
                iconColor="text-pink-600"
              />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
