# 🎮 Tic Tac Toe Game

This is a responsive **Tic Tac Toe** game built using **HTML, CSS, and Vanilla JavaScript**. It allows two players to take turns, tracks wins and draws, and provides options to reset or start a new game.

---

## 🚀 Live Demo

You can play the game live here:  
**[Link coming soon — deploy via GitHub Pages or Netlify]**

---

## 🛠️ Technologies Used

- ✅ HTML5
- ✅ CSS3 (Flexbox, Responsive Design)
- ✅ JavaScript (DOM Manipulation, Event Handling)

---

## 🎯 Features

- Two-player turn-based gameplay (O and X)
- Winner detection logic based on grid patterns
- Draw condition when no winner after 9 moves
- Real-time UI updates using `innerText` and `disabled` properties
- "Reset Game" and "New Game" functionality
- Clean, responsive UI with hover effects and transitions

---

## 🧠 Game Logic Highlights

```js
const winPatterns = [
  [0,1,2], [3,4,5], [6,7,8],
  [0,3,6], [1,4,7], [2,5,8],
  [0,4,8], [2,4,6]
];

if (pos1Val === pos2Val && pos2Val === pos3Val) {
  msg.innerHTML = `Congratulations! Winner is ${pos1Val}`;
  disableBoxes();
}
````

---

## 📷 Screenshots

*(Add screenshots of your game UI here after deployment)*

---

## 📁 Folder Structure

```
TicTacToe/
├── index.html        # Game layout
├── style.css         # Styling & layout
├── app.js            # Game logic (turns, winner check)
└── README.md         # Project info
```

---

## 📌 How to Run Locally

1. Clone the repo:

```bash
git clone https://github.com/zufshan98/TicTacToe.git
```

2. Open the project folder and launch `index.html` in your browser.

---

## 📈 Future Improvements

* Add player vs computer (AI) mode
* Display player names dynamically
* Add score tracking for multiple rounds

---

## 🧾 License

This project is open-source and available under the [MIT License](LICENSE).

---

> Built with 💻 and ☕ by Zufshan Naaz


