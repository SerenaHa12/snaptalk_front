"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import * as z from "zod";

export const InitialModal = () => {
  const form = useForm({
    defaultValues: {
      name: "",
      imageUrl: "",
    },
  });
  return (
    <Dialog open={true}>
      <DialogContent className="bg-white text-black p-0 overflow-hidden">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">
            Customize your server
          </DialogTitle>
          <DialogDescription className="text-center text-zinc-500">
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
