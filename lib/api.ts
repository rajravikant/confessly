import { supabase } from "@/utils/supabase/client";

export async function getConfessions(
  search: string | null = null,
  mood: string | null = null,
  startIndex = 1
) {
  let query = supabase
    .from("confessions")
    .select("*", { count: "exact" })
    .order("created_at", { ascending: false })
    .range((startIndex - 1) * 9, startIndex * 9 - 1);

  if (mood) query = query.eq("mood", mood);
  if (search) query = query.ilike("content", `%${search}%`);

  const { data, error, count } = await query;

  if (error) {
    throw new Error(error.message);
  }

  const totalCount = count;
  const nextCursor =
    totalCount && totalCount > startIndex * 9 ? startIndex + 1 : undefined;

  return { confessions: data, nextCursor, totalCount };
}

export async function postConfession(
  content: string,
  mood: string,
  userId?: string
) {
  if (!content) {
    throw new Error("Content cannot be empty");
  }

  const { error, data } = await supabase
    .from("confessions")
    .insert([{ content: content.trim(), mood, user_id: userId }])
    .select("*")
    .single();

  if (error) {
    throw new Error(error.message);
  }

  // update profile table with confession count
  if (data && userId) {
    const { error } = await supabase.rpc("increment_confession_count", {
      userid: userId,
    });
    if (error) console.error(error);
  }

  return { confession: data };
}




export async function deleteConfession(confessionId: string, userId: string) {
  const { error } = await supabase
    .from("confessions")
    .delete()
    .eq("id", confessionId)
    .eq("user_id", userId);

  if (error) {
    throw new Error(error.message);
  }

  // update profile table with confession count
  const { error: profileError } = await supabase.rpc("decrement_confession_count", {
    userid: userId,
  });
  if (profileError) console.error(profileError);
}

export async function getConfessionsByUser(userId: string) {
  const { data, error } = await supabase
    .from("confessions")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}


export async function fetchLeaderboardUsers() {
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .order("confession_count", { ascending: false })
    .limit(10);

  if (error) {
    throw new Error(error.message);
  }

  return data;
}