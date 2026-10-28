export interface IDestination {
  _id: string;
  name: string;
  country: string;
  category: "Beach" | "Mountain" | "City" | "Adventure" | "Cultural" | "";
  price: string;
  duration: string;
  departureDate: string;
  imageUrl: string;
  description: string;
  rating?: number;
}

export interface IBooking {
  _id: string;
  name: string;
  imageUrl: string;
  price: string;
  departureDate: string;
  status?: "Confirmed" | "Pending" | "Cancelled";
}
