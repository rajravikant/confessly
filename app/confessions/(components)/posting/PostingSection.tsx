"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import {Button} from "@/components/ui/Button";
import SelectionWheel from "../shared/SelectionWheel";
import { useRouter } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postConfession } from "@/lib/api";
import { useAuth } from "@/lib/AuthProvider";
import { toast } from "sonner";

const PostingSection = () => {
  const [mood, setMood] = useState({
    value: "happy",
    border: "rgba(255, 255, 255,0.25)",
  });
  const {user} = useAuth()

  const router = useRouter();
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: async (formData: FormData) => {
      const content = formData.get("content") as string;
      if (!content) {
       throw new Error("Content cannot be empty");
      }
      return postConfession(content.trim(), mood.value, user?.id);
    },
    onSuccess: async () => {
      await queryClient.cancelQueries({ queryKey: ["confessions"] });
      queryClient.invalidateQueries();

    
    
      router.push("/confessions");
    },
    onError: (error: Error) => {
      toast.error(`Error posting confession: ${error.message}`)
      console.error("Error posting confession:", error);
    },
  })

  // const postConfession = async (formData: FormData) => {
  //   const content = formData.get("content") as string;
  //   if (!content) {
  //     alert("Content cannot be empty");
  //     return;
  //   }
  //  try {
  //   //  const res = await axiosClient.post("/api/confess", {
  //   //    content: content.trim(),
  //   //    mood: mood.value,
  //   //  });
  //    if (res.status === 201) {
  //      router.push("/confessions");
  //    }
  //  } catch (error) {
  //    console.error("Error posting confession:", error);
    
  //  }
  // };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    mutation.mutate(formData)
  };



  return (
    <div className="py-5 w-full">
      <div className="w-full relative">
        <form onSubmit={handleSubmit} >
          <textarea
            className={cn(
              "relative border-2  bg-transparent text-white/80 placeholder:text-white/50 rounded-lg p-4 w-full h-56",
              "focus:outline-none "
            )}
            style={{
              borderColor: mood.border,
            }}
            name="content"
            placeholder="Write your confession here..."
            maxLength={500}
            required
            autoFocus
          />
          <div className="absolute bottom-4 right-2">
            <Button
              size="md"
              disabled={mutation.isPending}
              type="submit"
              style={{
                backgroundColor: mood.border,
                borderRadius: "99px",
              }}
            >
              {mutation.isPending ? "Posting..." : "Post Confession"}
            </Button>
          </div>
        </form>
      </div>

      <div className="lg:w-1/2 relative mt-5">
        <SelectionWheel
          onSelectMood={(mood) =>
            setMood({
              border: mood.border,
              value: mood.value,
            })
          }
        />
      </div>
    </div>
  );
};

export default PostingSection;
