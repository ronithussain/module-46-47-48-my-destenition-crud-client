"use client";
import { IDestination } from "@/app/types/type";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { getTokenFromClient } from "@/lib/getTokenFromClient";
import { redirect } from "next/navigation";
import { toast } from "sonner";

interface DeleteIDestinationProps {
  destination: IDestination;
}

export default function DeleteDestinationDialogue({
  destination,
}: DeleteIDestinationProps) {
  const handleDeleteDestination = async () => {

    // verify token :
    const token = getTokenFromClient();

    const res = await fetch(
      `http://localhost:5000/all-destination/${destination._id}`,
      {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${token}`,
        },
      },
    );
    const afterDelete = await res.json();
    console.log(afterDelete, "delete destination");
    if (afterDelete.deletedCount > 0) {
      toast.success("Destination packeg deleted successfully!");
      redirect("/all-destination");
    }
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger
        render={
          <Button
            variant="outline"
            className="rounded-lg border border-red-200 px-4 py-2 text-sm font-medium text-red-500 hover:bg-red-50"
          >
            Delete
          </Button>
        }
      />
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDeleteDestination}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
