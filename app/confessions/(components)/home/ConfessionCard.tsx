"use client";
import { useState } from "react";
import MoodChips from "../shared/Chip";
import ReactionButton from "./ReactionButton";
import EchoButtons from "./EchoButtons";
import { Confession } from "@/types";
import { supabase } from "@/utils/supabase/client";
import { X } from "lucide-react";

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
import { toast } from "sonner";
import { deleteConfession } from "@/lib/api";
import { useAuth } from "@/lib/AuthProvider";
import { useQueryClient } from "@tanstack/react-query";

type ConfessionCardProps = Confession & {
  isAuth? : boolean;
};



const ConfessionCard = ({ content, mood, echoes, id, isAuth = false }: ConfessionCardProps) => {
  const [isEchoed, setIsEchoed] = useState<boolean>(false);
  const [currentEchoes, setCurrentEchoes] = useState(echoes);
  const {user} = useAuth()
  const queryClient = useQueryClient()

  const handleToggle = async (option: 'increase' | 'decrease') => {
    supabase.from('confessions').update({
      echoes: option === 'increase' ? currentEchoes + 1 : currentEchoes - 1
    }).eq('id', id).then(({ error }) => {
      if (error) {
        console.error("Error updating echoes:", error);
      }
    })
  }

  const toggleEchoes = async () => {
    if (isEchoed) {
      await handleToggle('decrease');
      setCurrentEchoes(currentEchoes - 1);
    } else {
      await handleToggle('increase');
      setCurrentEchoes(currentEchoes + 1);
    }
    setIsEchoed(!isEchoed);
  };


  const handleReaction = () => {
    console.log("Reacted to confession!");
  };


  const onConfirm = async () => {
    if (user?.id !== id) {
      toast.error("You can only delete your own confessions.");
      return;
    }
   try {
    await deleteConfession(id,user.id)
    queryClient.invalidateQueries({ queryKey: ["userConfessions",user.id] });
    toast.success("Confession deleted successfully!");
   } catch (error) {
    console.error("Error deleting confession:", error);
    toast.error("Failed to delete confession. Please try again.");
   }
  };

  return (
    <div className="confession-card relative  bg-black/15 border border-[#CAECF1]/10 p-4 rounded-xl shadow-md">
      <MoodChips mood={mood} className="absolute left-5 top-5" />
      
      {isAuth && 
      <AlertDialog>
      <AlertDialogTrigger asChild>
      <button className="absolute right-5 top-5 bg-secondary/10 rounded-full p-1 cursor-pointer hover:bg-secondary/20 transition-colors">
      <X size={20} color="white" />  
      </button>
      
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-foreground">
            Are you absolutely sure?
          </AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your confession.
           
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="text-foreground">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction onClick={onConfirm}>Delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
    
      
      }
      <div className="flex flex-col justify-between pt-10 h-full">
        <p className="text-sm font-medium text-white py-2">{content}</p>
        {!isAuth &&  <div className="flex items-center justify-end gap-2">
          <ReactionButton onReact={handleReaction} />
          <EchoButtons
            onEcho={toggleEchoes}
            echoes={currentEchoes}
            isEchoed={isEchoed}
          />
        </div> }
       
      </div>
    </div>
  );
};

export default ConfessionCard;


