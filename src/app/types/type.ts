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
