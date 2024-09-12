import chalk from "chalk";

console.log(chalk.green(`
    Welcome to the Cycle Clash Contest!
    
    1. **Objective:**
       - In this game, you will compete against the computer using a set of moves. Each move interacts with other moves according to specific rules to determine the winner.
    
    2. **Basic Rules:**
       - The game consists of arbitrary odd number of multiple moves (3, 5,7,9, etc.).
       - Each move draws against itself, wins against the next half of the moves in the circle and loses against the previous half.
       - The rules are determined by the order of moves provided when starting the game.
    
    3. **Example Moves:**
       - 3 moves (a, b, c): a wins against b. b wins against c. c wins against a.
       - 5 moves: (a, b, c, d, e): a wins against a and b. b  wins against c and d. c wins against d and e. d wins against e and a. e wins agains a and b.
       - etc.
    
    4. **Starting the Game:**
       - To start the game, provide at least 3 unique moves as command-line arguments.
       - Example: node src/index.js move1 move2 move3

    5. **Displaying Help:**
       - There is a "help table" that shows the interaction between the moves.
       - Open it with the Option '?' after starting or append 'help' to the command after the moves.
       - Example: node src/index.js move1 move2 move3 help

    **Good Luck and Have Fun!**
    `));

