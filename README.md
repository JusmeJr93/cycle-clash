# Cycle Clash Contest

## Overview

**Cycle Clash Contest** is a generalized version of the classic Rock-Paper-Scissors game. This game allows for any odd number of moves, with custom rules that ensure each move wins against half of the other moves and loses against the remaining ones. The game is designed to be played through the command line and supports interactive help, move validation, and secure move generation using HMAC.

## Game Rules

The game rules are defined based on the number of moves provided:

- Each move defeats the next half of the moves.
- Each move is defeated by the previous half of the moves.
- Moves are considered in a circular order, ensuring balanced gameplay.

## Features

- **Generalized Rules:** Supports any odd number of moves, allowing for custom game variations.
- **Cryptographic Security:** Uses HMAC (Hash-based Message Authentication Code) to securely generate computer moves, ensuring fair play.
- **Interactive Help System:** Provides detailed instructions and a dynamic help table to assist players in understanding game rules and move interactions.
- **Command-Line Interface:** User-friendly CLI for playing the game, accessing help, and understanding the rules
- **Dynamic Game Rules:** Automatically generates "win/lose/draw" rules based on the provided set of moves.
- **Statistics Tracking:** Keeps track of wins, losses, and draws for your gaming session.

## Setup

### Prerequisites

- First, ensure you have Node.js installed on your system.

### Installation

1. **Clone the repository** or **download the zip file**

2. **Navigate to the project directory**

3. **Install the dependencies:**  
   _npm install_

4. **Read the "How To Play" notes:**  
   _node guide.js_

5. **Run the game** with odd number of moves:
   _node index.js move1 move2 move3 ... moveN_

## How It Works

1. **HMAC Generation:**
   At the start of the game, the computer randomly selects a move and generates an HMAC (Hashed Message Authentication Code) using a secret key. The HMAC is displayed to you before you make your move, ensuring the computer's move can't be altered after the game starts. This ensures fairness and integrity in the game. Afterward, you can choose one of several options using your keyboard:
   - **n digits**: Select your move.
   - **0**: Exit the game.
   - **?**: Display help to understand move interactions.
   - **s**: View the current score.
   - **r**: Reset the score.

2. **Player Move:**
   You then choose your move from the list of valid options. If you’re unsure about the interactions between moves, you can press "?" to see a table that details which moves beat or lose to others.

3. **Determine the Winner:**
   After both the player and computer have made their moves, the game determines the winner based on the custom rules. The result is then displayed along with the updated score.

4. **HMAC Regeneration:**
   After the winner is determined and the score is updated, a new round begins. The computer selects a new move, generates a new HMAC, and you can continue playing or exit by choosing "0".

## 🚀 Technologies and Topics Used

- **JavaScript:** The core programming language used to implement the game logic and structure.
- **Node.js:** JavaScript runtime used to execute the game logic and enable command-line interaction for players.
- **OOP (Object-Oriented Programming):** The project follows an OOP approach, organizing the logic into classes for cleaner, more maintainable code.
- **HMAC (Hashed Message Authentication Code):** Cryptographic technique used to ensure that the computer's move is securely hashed before the player makes their choice, maintaining fairness and integrity.
- **CLI (Command-Line Interface):** Interactive text-based interface for users to play the game, view stats, and reset or get help with commands.
- **File System (fs) Module:** Used to read from and write to the local file system to persist player statistics across game sessions.
- **chalk:** Library used to enhance the visual experience by adding styled and colored output.
- **Table (cli-table):** Library used to generate and display the move interaction table, providing an easy way to visualize how each move interacts with others.
- **path:** Module used to handle and resolve file paths to ensure portability across different operating systems.
-**fs:** Module used to create and update a JSON file for the stats.
