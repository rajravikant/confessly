// export interface Confession {
//   content: string;
//   created_at: string;
//   echoes: number | 0;
//   id: string;
//   mood: string;
//   user_id: string | null;
// }

import { Database } from "./supabase";


export type Confession = Database["public"]["Tables"]["confessions"]["Row"];

export interface Mood {
  value: string;
  color: string;
  darkColor: string;
  border: string;
}
