import Link from "next/link";
import { AlertCircle, Home, MapPin } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center text-center py-20 px-6">
      <div className="max-w-md">
        <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-muted mb-6">
          <AlertCircle size={32} strokeWidth={1.5} className="text-destructive" />
        </div>
        <h1 className="font-heading text-4xl font-bold text-foreground mb-2">
          Page Not Found
        </h1>
        <p className="text-muted-foreground mb-8">
          The destination you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium transition hover:bg-primary/80"
          >
            <Home size={18} /> Back to Home
          </Link>
          <Link
            href="/all-destination"
            className="inline-flex items-center justify-center gap-2 border border-border bg-background text-foreground px-4 py-2 rounded-lg font-medium transition hover:bg-muted"
          >
            <MapPin size={18} /> Explore Destinations
          </Link>
        </div>
      </div>
    </div>
  );
}
