# 👾 Lo-Fi Chess Café 🎧

## ✨ Welcome to the Café! ✨

Step into the cozy, atmospheric world of the Lo-Fi Chess Café – a unique web-based chess experience blending classic strategy with chill lo-fi vibes and real-time multiplayer fun.

Whether you're looking for a relaxed game against a friend or want to test your skills against a (soon-to-be-smarter!) computer, settle in, grab a virtual coffee, and make your move.

---

## 🚀 Tech Stack

Built with modern web technologies to bring the cozy vibes to life:

**Frontend:**

* **[Next.js](https://nextjs.org/):** A powerful React Framework for a fast and scalable frontend.
* **[Tailwind CSS](https://tailwindcss.com/) & [DaisyUI](https://daisyui.com/):** For rapid, utility-first styling and pre-built UI components with a pastel touch.
* **[react-chessboard](https://www.npmjs.com/package/react-chessboard) & [chess.js](https://github.com/jhlywa/chess.js):** Bringing the chessboard to life with interactive pieces and robust game logic.
* **[socket.io-client](https://socket.io/docs/v4/client-api/):** Enabling smooth, real-time communication for multiplayer games.

**Backend:**

* **[NestJS](https://nestjs.com/):** A progressive Node.js framework for a robust and scalable server.
* **[Socket.io](https://socket.io/):** Powering the real-time connection between players.
* **[chess.js (Optional)](https://github.com/jhlywa/chess.js):** For potential server-side validation.

---

## 📦 Getting Started

Ready to pour a cup and play? Follow these steps to set up the project locally:

**Prerequisites:**

* [Node.js](https://nodejs.org/) (v14+ recommended)
* npm or yarn

**1. Clone the Repository:**

```bash
git clone https://github.com/debayan-develops/Lo-Fi-Chess-Cafe.git
cd lofi-chess-cafe

**2. Backend Setup:**

Navigate to the `backend` directory, install dependencies, and start the server.

```bash
cd backend
npm install # or yarn install
npm run start:dev # or yarn start:dev

## 📝 Project Summary

This project involves building a Lo-Fi Chess Café web application with a Next.js frontend, a NestJS backend, and a unique aesthetic. Here's a summary of the key steps and features implemented and issues resolved during our work:

* **Project Setup:** Established the basic structure with separate `frontend` (Next.js/Tailwind/DaisyUI) and `backend` (NestJS) directories.
* **Tailwind CSS Configuration:** Troubleshooted and resolved "Unknown at rule @tailwind" errors by ensuring correct PostCSS configuration (`postcss.config.mjs` using `@tailwindcss/postcss` or `postcss.config.js` with `tailwindcss: {}` depending on the environment).
* **Git Configuration:** Fixed Git errors related to submodules (`error: 'backend/' does not have a commit checked out`) by guiding the removal of the `.git` folder from the `backend` directory for a single main repository. Provided steps for standard Git workflow (init, add, commit, remote, push).
* **.env.local ignored:** Added `.env.local` to the `.gitignore` file to prevent sensitive information from being committed.
* **Chessboard Sizing and Positioning:**
    * Initially addressed chessboard overflow issues by adjusting maximum width (`max-w-*`) classes on its container.
    * Attempted superimposing the interactive board over a background image by using `position: absolute` on the chessboard container and adjusting `top`/`left`/`transform`.
    * Reverted to a standard layout based on user preference, placing the chessboard back into normal flow and centering it horizontally within a main content column using `mx-auto` and vertical margin (`my-*`). Adjusted vertical margin for spacing.
* **Checkmate Display:** Implemented logic using `chess.js` to detect checkmate (and draw) conditions after moves and display a "Checkmate! Game Over." (or "Draw!") message on the screen.
* **Game Modes Selection:**
    * Added a UI with buttons ("Player vs Player" and "Vs Computer") to select game modes in `app/page.tsx`.
    * Added state management (`useState`) in `app/page.tsx` to track the selected mode.
    * Passed the selected `gameMode` as a prop to `ChessBoardComponent.tsx`.
    * Modified `ChessBoardComponent.tsx` to conditionally handle game logic: use Socket.io for PvP and include a placeholder function (`makeComputerMove`) for Vs Computer mode (currently makes random moves).
* **Frontend Client Component:** Resolved "React hook only works in a client component" error in `app/page.tsx` by adding the `"use client";` directive at the top of the file.
* **TypeScript Errors:** Fixed TypeScript errors in `ChessBoardComponent.tsx` related to potentially null socket instances within `useEffect` cleanup by restructuring the effect hook's variable declaration and cleanup logic.
* **Background and Aesthetics:**
    * Set a background image on the main page container (`<main>` element).
    * Added custom retro-style CSS rules (`.card`, `.head`, `.content`, `.button`) to `globals.css`. Troubleshooted and fixed syntax errors in the added CSS (e.g., replacing `translate` with `transform`).
    * Applied the `.button` class to the mode selection buttons and the reset button for retro styling.
    * Added emojis to various text elements for visual appeal.
    * Set text color (title and "Select Mode:") to white using inline styles after attempts with Tailwind classes were overridden.
* **Layout Refinement:** Restructured `app/page.tsx` to create a dedicated header area at the top-left (containing the title and mode selectors) and a separate, centered main content area below it (containing the chessboard and placeholder).

This summary covers the main features added and problems solved, giving a clear picture of the project's development during our conversation.
