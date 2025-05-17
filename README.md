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

### **3. Frontend Setup**

```bash
cd frontend
npm install    # or yarn install
