# Confessly

Confessly is an anonymous confession-sharing platform where users can post, react to, and interact with confessions. The platform includes features like mood-based filtering, a leaderboard, and a user-friendly interface for seamless interaction.

## Features

- **Anonymous Confessions**: Share your thoughts anonymously.
- **Mood Selection**: Filter confessions based on moods.
- **Leaderboard**: Track top contributors and reactions.
- **Responsive Design**: Optimized for all devices.
- **Interactive Animations**: Smooth animations for better user experience.
- **Confession of the Day (COTD)**: Highlighted confessions based on reactions.
- **Echo Buttons**: React to confessions with predefined moods.
- **Profile Management**: View and manage your confessions and reactions.

## Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS
- **Backend**: Supabase
- **Styling**: Tailwind CSS
- **Utilities**: Motion/React

## Folder Structure

```
app/
  confessions/  # Confession-related pages and components
    (components)/
      home/       # Components for the home page
      leaderboard/ # Components for the leaderboard page
      posting/    # Components for posting confessions
      shared/     # Shared components like AuthButtons, Modals, etc.
  leaderboard/   # Leaderboard-related pages
  profile/       # User profile page
  share/         # Share confession page
assets/          # Images and static assets
components/      # Reusable UI components
  landing/       # Components for the landing page
  magicui/       # Custom UI components with animations
  ui/            # Basic UI components like buttons, dialogs, etc.
lib/             # Utility functions and data
public/          # Public assets
utils/           # Supabase client and middleware
```

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd confessly
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000`.

## Environment Variables

Create a `.env.local` file in the root directory and add the following:

```
NEXT_PUBLIC_SUPABASE_URL=<your-supabase-url>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-supabase-anon-key>
```

## Scripts

- `npm run dev`: Start the development server
- `npm run build`: Build the project for production
- `npm run start`: Start the production server
- `npm run lint`: Run linting checks



## Contributing

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.


## Acknowledgements

- [DiceBear](https://www.dicebear.com/) for random avatar generation.
- Supabase for backend services.

## Contact

For any inquiries or feedback, please contact mailme.ravikantraj@gmail.com.

