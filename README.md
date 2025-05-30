# Confessly

Confessly is an anonymous confession-sharing platform where users can post, react to, and interact with confessions. The platform includes features like mood-based filtering, a leaderboard, and a user-friendly interface for seamless interaction.

## Features

- **Anonymous Confessions**: Share your thoughts anonymously.
- **Mood Selection**: Filter confessions based on moods.
- **Leaderboard**: Track top contributors and reactions.
- **Responsive Design**: Optimized for all devices.
- **Interactive Animations**: Smooth animations for better user experience.

## Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS
- **Backend**: Supabase
- **Styling**: Tailwind CSS
- **Utilities**: Axios, Motion

## Folder Structure

```
app/
  api/          # API routes for backend logic
  confessions/  # Confession-related pages and components
  leaderboard/  # Leaderboard-related pages and components
  login/        # Login page
  profile/      # User profile page
  share/        # Share confession page
assets/         # Images and static assets
components/     # Reusable UI components
lib/            # Utility functions and data
public/         # Public assets
utils/          # Supabase client and middleware
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

## API Endpoints

- **Confessions**: `/api/confess`
- **Test**: `/api/test`

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

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgements

- [DiceBear](https://www.dicebear.com/) for random avatar generation.
- Supabase for backend services.

## Contact

For any inquiries or feedback, please contact mailme.ravikantraj@gmail.com

