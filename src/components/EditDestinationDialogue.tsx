"use client";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useState } from "react";
import { PackageCheck, PackageCheckIcon, X } from "lucide-react";
import { IDestination } from "@/app/types/type";
import { redirect } from "next/navigation";
interface EditIDestinationProps {
  destination: IDestination;
}

const EditDestinationDialogue = ({ destination }: EditIDestinationProps) => {
  const [form, setForm] = useState(destination);

  const update = (field: keyof typeof form, value: string) => {
    setForm((current) => {
      return {
        ...current,
        [field]: value,
      };
    });
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const res = await fetch(`http://localhost:5000/all-destination/${destination._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    const afterUpdate = await res.json();
    if (afterUpdate.modifiedCount > 0) {
      toast.success("Destination updated successfully!");
      redirect('/all-destination')
    }

    console.log(afterUpdate, "api client");
  };
  return (
    <Dialog>
      <DialogTrigger className="inline-flex h-9 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-background px-4 py-2 text-sm font-medium hover:bg-slate-50">
        <PackageCheck className="h-4 w-4" />
        Edit
      </DialogTrigger>

      <DialogContent className="flex max-h-[90dvh] flex-col gap-0 overflow-hidden p-0 sm:max-w-2xl">
        {/* Fixed dialog header */}
        <DialogHeader className="shrink-0 border-b px-6 py-5 text-left">
          <DialogTitle className="text-xl font-semibold">
            Edit Destination
          </DialogTitle>

          <DialogDescription>
            Update the travel package information below.
          </DialogDescription>
        </DialogHeader>

        {/* Scrollable form body */}
        <form
          onSubmit={handleSubmit}
          className="flex min-h-0 flex-1 flex-col overflow-hidden"
        >
          <div className="flex-1 space-y-5 overflow-y-auto px-6 py-5">
            {/* Destination Name */}
            <div className="grid gap-2">
              <Label htmlFor="name">Destination Name</Label>
              <Input
                id="name"
                placeholder="Swiss Alps Adventure"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                required
              />
            </div>

            {/* Country and Category */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="country">Country</Label>
                <Input
                  id="country"
                  value={form.country}
                  onChange={(e) => update("country", e.target.value)}
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="category">Category</Label>
                <Select
                  value={form.category}
                  onValueChange={(value) => update("category", value ?? "")}
                >
                  <SelectTrigger id="category" className="w-full">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectItem value="Beach">Beach</SelectItem>
                    <SelectItem value="Mountain">Mountain</SelectItem>
                    <SelectItem value="City">City</SelectItem>
                    <SelectItem value="Adventure">Adventure</SelectItem>
                    <SelectItem value="Cultural">Cultural</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Price and Duration */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="price">Price (USD)</Label>
                <Input
                  id="price"
                  type="number"
                  min="0"
                  value={form.price}
                  onChange={(e) => update("price", e.target.value)}
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="duration">Duration</Label>
                <Input
                  id="duration"
                  value={form.duration}
                  onChange={(e) => update("duration", e.target.value)}
                  placeholder="6 Days/5 Nights"
                  required
                />
              </div>
            </div>

            {/* Departure Date */}
            <div className="grid gap-2">
              <Label htmlFor="departureDate">Departure Date</Label>
              <Input
                id="departureDate"
                type="date"
                value={form.departureDate}
                onChange={(e) => update("departureDate", e.target.value)}
                required
              />
            </div>

            {/* Image URL */}
            <div className="grid gap-2">
              <Label htmlFor="imageUrl">Image URL</Label>
              <Input
                id="imageUrl"
                type="url"
                value={form.imageUrl}
                onChange={(e) => update("imageUrl", e.target.value)}
                placeholder="https://example.com/image.jpg"
                required
              />
            </div>

            {/* Description */}
            <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={form.description}
                onChange={(e) => update("description", e.target.value)}
                placeholder="Describe the travel experience..."
                className="min-h-28 resize-y"
                required
              />
            </div>
          </div>

          {/* Fixed footer */}
          <div className="flex shrink-0 justify-end gap-3 border-t bg-background px-6 py-4">
            <DialogClose
              render={
                <Button type="button" variant="outline">
                  <X className="mr-2 h-4 w-4" />
                  Cancel
                </Button>
              }
            ></DialogClose>

            <Button
              type="submit"
              className="bg-[#00A8E8] text-white hover:bg-[#0095d1]"
            >
              <PackageCheckIcon className="mr-2 h-4 w-4" />
              {/* {loading ? "Updating..." : "Save Changes"} */}
              Save Changes
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditDestinationDialogue;
