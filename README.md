# Multiplayer Online Chess Game

A real-time multiplayer online chess game built with React, Node.js, Socket.IO, and Chess.js.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Game Rules](#game-rules)
- [Multiplayer Functionality](#multiplayer-functionality)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- Play chess against another player in real-time.
- Implement standard chess rules including castling, en passant captures, and pawn promotions.
- Visualize the chessboard using the Chessboard.jsx component.
- Validate moves using the Chess.js library.
- Display error messages for invalid moves.
- Start a new game at any time.

## Getting Started

These instructions will help you set up and run the project on your local machine for development and testing purposes.

### Installation

1. Clone the repository:
  git clone https://github.com/yourusername/chess-game.git
  cd Chess

2. Install dependencies for the server and client:
  cd server
  npm install
  cd ..
  npm install

### Usage

1. Start the server:

  cd server
  node index.js


The server will run on `http://localhost:4000`.

2. Start the React app:

  npm start


The app will run on `http://localhost:3000`.

3. Open your web browser and go to `http://localhost:3000` to start playing chess.

## Game Rules

This chess game follows standard rules, including:
- Pawns move forward, capture diagonally, and have the option to move two squares on their first move.
- Rooks can move horizontally or vertically.
- Knights move in an L-shape pattern.
- Bishops move diagonally.
- Queens can move horizontally, vertically, or diagonally.
- Kings can move one square in any direction.

For more detailed rules, please refer to the [official chess rules](https://www.fide.com/fide/handbook.html?id=171&view=article).

## Multiplayer Functionality

This game supports real-time multiplayer functionality using Socket.IO. Players can make moves, and the game state will be updated in real-time for both players.


## Technologies Used

- React
- Node.js
- Express
- Socket.IO
- CSS

## Contributing

If you'd like to contribute to this project, please follow these steps:
1. Fork the repository
2. Create a new branch (`git checkout -b feature/yourfeature`)
3. Make your changes and commit them (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/yourfeature`)
5. Create a new pull request

## License

This project is licensed under the [MIT License](LICENSE).

