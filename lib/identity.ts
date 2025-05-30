const adjectives = [
  "Silent",
  "Happy",
  "Lonely",
  "Mysterious",
  "Brave",
  "Gentle",
  "Shy",
  "Curious",
  "Playful",
  "Cheerful",
  "Bold",
  "Clever",
  "Bright",
  "Dreamy",
  "Wild",
  "Swift",
  "Kind",
  "Lucky",
];

const nouns = [
  "Panda",
  "Wolf",
  "Star",
  "Moon",
  "River",
  "Breeze",
  "Cloud",
  "Cactus",
  "Tiger",
  "Eagle",
  "Dolphin",
  "Falcon",
  "Phoenix",
  "Maple",
  "Sunflower",
  "Blossom",
  "Shadow",
  "Comet",
];

function getRandomItem<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

function getRandomUsername(): string {
  const adjective = getRandomItem(adjectives);
  const noun = getRandomItem(nouns);
  const randomNumber = Math.floor(Math.random() * 1000); // Optional: add some uniqueness
  return `${adjective}${noun}${randomNumber}`; // Example: SilentWolf823
}

function getRandomAvatar(): string {
  const randomNumber = Math.floor(Math.random() * 1000);
  return `https://api.dicebear.com/9.x/identicon/svg?seed=${randomNumber}`; 
}


export function generateRandomIdentity(): { username: string; avatar: string } {
  const username = getRandomUsername();
  const avatar = getRandomAvatar();
  return { username, avatar };
}