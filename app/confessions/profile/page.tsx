"use client";
import React from "react";
import dynamic from "next/dynamic";
import { useAuth } from "@/lib/AuthProvider";
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
import { generateRandomIdentity } from "@/lib/identity";
import { RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { toast } from "sonner";
import { useQuery } from "@tanstack/react-query";
import { getConfessionsByUser } from "@/lib/api";
import fallBackImage from "@/assets/images/user.png"


const ConfessionCard = dynamic(() => import("../(components)/home/ConfessionCard"));
const ScreenWrapper = dynamic(() => import("../(components)/shared/ScreenWrapper"));

const Profile = () => {
  const { user, loading, removeUser } = useAuth();
  const [username, setUsername] = React.useState<string | null>(
    user?.user_metadata.username || null
  );
  const [avatar, setAvatar] = React.useState<string | null>(
    user?.user_metadata.avatar_url || null
  );

  const { data: confessions } = useQuery({
    queryKey: ["userConfessions", user?.id],
    queryFn: () => getConfessionsByUser(user?.id || ""),
    refetchOnWindowFocus: false,
    enabled: !!user?.id && !loading,
  });

  if (loading) return null;

  if (!user) {
    return (
      <div className="w-full h-[80vh] flex justify-center items-center">
        <h2 className="text-white">Please log in to view your profile</h2>
      </div>
    );
  }

  const totalEchoes =
    confessions?.reduce((acc, confession) => acc + (confession.echoes || 0), 0) ||
    0;

  const stats = [
    { name: "total confessions", value: confessions?.length || "0" },
    { name: "total echoes", value: totalEchoes.toString() },
    // { name: "highest streak", value: "7" },
    { name: "latest mood", value: confessions?.[0]?.mood || "neutral" },
  ];

  const handleRandom = () => {
    const { username, avatar } = generateRandomIdentity();
    setUsername(username);
    setAvatar(avatar);
  };

  const handleDeleteAccount = async () => {
    if (!user) return;
    removeUser()
      .then(() => {
        toast.success("Account deleted successfully");
      })
      .catch((error) => {
        toast.error(error.message || "Failed to delete account");
      });
  };

  return (
    <div className="w-full">
      <ScreenWrapper>
        <header>
          <div className="w-full flex justify-between items-end border-b border-white/25 py-2">
            <h2 className="text-foreground">Your annonomous profile</h2>
            {user && (
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button size="sm" variant="secondary">
                    Remove account
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle className="text-foreground">
                      Are you absolutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete
                      your account and remove your data from our servers.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel className="text-foreground">
                      Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction onClick={handleDeleteAccount}>
                      Continue
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            )}
          </div>
        </header>

        <div className="flex flex-wrap justify-center lg:gap-20 items-center w-full py-5">
          <div className="size-56 rounded-full border border-white/25 overflow-hidden p-2">
            <picture>
            <img
              src={avatar || fallBackImage.src}
              alt="profile-avatar"
              className="
       size-1/2 object-cover mx-auto translate-y-1/2"
            ></img>
            </picture>
          </div>

          <form className=" w-full lg:w-auto space-y-4 ">
            <div className="flex flex-col gap-2 relative">
              <label htmlFor="username" className="text-white/50">
                Username
              </label>
              <div className="inline-flex">
                <input
                  type="text"
                  id="username"
                  value={username || ""}
                  onChange={(e) => setUsername(e.target.value)}
                  autoComplete="username"
                  placeholder="username"
                  className="text-white text-sm bg-white/5 border border-white/25 focus:outline-none focus:border-white/50 py-1.5 px-3 rounded-md "
                />
                <button
                  type="button"
                  onClick={handleRandom}
                  className="text-white/50 ms-2 "
                >
                  <RefreshCcw size={20} />
                </button>
              </div>
            </div>

            <Button size="sm" className="self-start">
              Save changes
            </Button>
          </form>
        </div>

        <div className="grid lg:grid-cols-3 gap-3 my-5">
          {stats.map((stat) => (
            <div
              key={stat.name}
              className="flex flex-col gap-2 bg-white/5 p-4 rounded-md"
            >
              <h3 className="text-white/50 text-sm">{stat.name}</h3>
              <p className="text-white text-lg font-semibold">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="my-10">
          <h3 className="text-foreground text-xl">Your recent confessions</h3>

          <div className="grid lg:grid-cols-3 gap-5 py-3">
            {confessions?.map((confession) => (
              <ConfessionCard
                key={confession.id}
                {...confession}
                isAuth={user !== null}
              />
            ))}
          </div>

          <div className="flex w-full justify-end">
            <Button size="sm" variant="text">
              View all confessions
            </Button>
          </div>
        </div>
      </ScreenWrapper>
    </div>
  );
};

export default Profile;

