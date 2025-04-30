export interface Mood {
  value: string;
  color: string;
  darkColor: string;
  border: string;
}

export const moods: Mood[] = [
  { value: "happy", color: "rgba(255, 235, 59, 1)", darkColor: "rgba(255, 235, 59, 0.25)", border: "rgba(255, 235, 59, 0.32)" },
  { value: "sad", color: "rgba(33, 150, 243, 1)", darkColor: "rgba(33, 150, 243, 0.25)", border: "rgba(33, 150, 243, 0.32)" },
  { value: "angry", color: "rgba(244, 67, 54, 1)", darkColor: "rgba(244, 67, 54, 0.25)", border: "rgba(244, 67, 54, 0.32)" },
  { value: "relaxed", color: "rgba(76, 175, 80, 1)", darkColor: "rgba(76, 175, 80, 0.25)", border: "rgba(76, 175, 80, 0.32)" },
  { value: "excited", color: "rgba(255, 152, 0, 1)", darkColor: "rgba(255, 152, 0, 0.25)", border: "rgba(255, 152, 0, 0.32)" },
  { value: "nervous", color: "rgba(156, 39, 176, 1)", darkColor: "rgba(156, 39, 176, 0.25)", border: "rgba(156, 39, 176, 0.32)" },
  { value: "bored", color: "rgba(158, 158, 158, 1)", darkColor: "rgba(158, 158, 158, 0.25)", border: "rgba(158, 158, 158, 0.32)" },
  { value: "confident", color: "rgba(63, 81, 181, 1)", darkColor: "rgba(63, 81, 181, 0.25)", border: "rgba(63, 81, 181, 0.32)" }
];

export interface Confession {
    id: string;
    created_at: string;
    user_id: string;
    content: string;
    mood: string;
    upvotes: number;
    downvotes: number;
}


export const confessionData = [
  {
    id: '5e689d2e-38d2-4ad3-8b58-ba75555996d9',
    created_at: '2025-04-28T14:01:48.67868+00:00',
    user_id: '52894468-ebd0-4729-a6fd-4c424a68cbfc',
    content: "I'm scared that one day I’ll realize I spent my whole life making everyone else happy but forgot about myself.",
    mood: 'happy',
    upvotes: 0,
    downvotes: 0
  },
  {
    id: '9683814b-b4f0-4052-b47f-c359c8f7f51c',
    created_at: '2025-04-28T14:03:42.861324+00:00',
    user_id: '52894468-ebd0-4729-a6fd-4c424a68cbfc',
    content: 'Even when surrounded by people, I sometimes feel like the loneliest person in the room.',
    mood: 'sad',
    upvotes: 0,
    downvotes: 0
  },
  {
    id: 'b2dd0fc3-ebd2-439a-90cb-028d419f0ec6',
    created_at: '2025-04-28T14:08:57.541957+00:00',
    user_id: '52894468-ebd0-4729-a6fd-4c424a68cbfc',
    content: "I'm scared that one day I’ll realize I spent my whole life making everyone else happy but forgot about myself.",
    mood: 'happy',
    upvotes: 0,
    downvotes: 0
  },
  {
    id: '72fa7b97-7b39-4812-8da1-b879ea30fb38',
    created_at: '2025-04-28T14:08:57.541957+00:00',
    user_id: '52894468-ebd0-4729-a6fd-4c424a68cbfc',
    content: 'Even when surrounded by people, I sometimes feel like the loneliest person in the room.',
    mood: 'sad',
    upvotes: 0,
    downvotes: 0
  },
  {
    id: 'a9be7dea-3e0d-42aa-941f-01938b52c0d0',
    created_at: '2025-04-28T14:08:57.541957+00:00',
    user_id: '52894468-ebd0-4729-a6fd-4c424a68cbfc',
    content: 'Sometimes I wish I could pause life just to catch my breath.',
    mood: 'angry',
    upvotes: 0,
    downvotes: 0
  },
  {
    id: '503a727a-3654-401e-9c43-21254d6b57ed',
    created_at: '2025-04-28T14:08:57.541957+00:00',
    user_id: '52894468-ebd0-4729-a6fd-4c424a68cbfc',
    content: 'I dream of packing a bag and disappearing to a quiet beach.',
    mood: 'sad',
    upvotes: 0,
    downvotes: 0
  },
  {
    id: 'e8dd9ee4-a8e5-4491-a0fe-071e4bf10323',
    created_at: '2025-04-28T14:08:57.541957+00:00',
    user_id: '52894468-ebd0-4729-a6fd-4c424a68cbfc',
    content: "I often laugh at jokes I don't understand just to blend in.",
    mood: 'angry',
    upvotes: 0,
    downvotes: 0
  },
  {
    id: 'd61f5e6b-ff22-445f-8742-39fe7a174a57',
    created_at: '2025-04-28T14:08:57.541957+00:00',
    user_id: '52894468-ebd0-4729-a6fd-4c424a68cbfc',
    content: "My biggest fear is that I'll never find true peace within myself.",
    mood: 'sad',
    upvotes: 0,
    downvotes: 0
  },
  {
    id: '09725843-a65b-4206-b575-f80fbee3dfb1',
    created_at: '2025-04-28T14:08:57.541957+00:00',
    user_id: '52894468-ebd0-4729-a6fd-4c424a68cbfc',
    content: "Some nights, I write letters I'll never send.",
    mood: 'happy',
    upvotes: 0,
    downvotes: 0
  },
  {
    id: '6383615e-0163-41f2-ad9a-977bafd4f9ca',
    created_at: '2025-04-28T14:08:57.541957+00:00',
    user_id: '52894468-ebd0-4729-a6fd-4c424a68cbfc',
    content: 'If people knew the real me, I wonder if they would still love me.',
    mood: 'hopeful',
    upvotes: 0,
    downvotes: 0
  }
]