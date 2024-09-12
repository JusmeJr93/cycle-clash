import chalk from "chalk";

export function validateMoves(moves) {
    if (moves.length < 3) {
        return chalk.red('You must provide at least 3 moves. Per example: node index.js move1 move2 move3');
    }
    if (moves.length % 2 === 0) {
        return chalk.red(`The number of moves must be odd (3, 5, 7, ...). You entered ${moves.length} moves`);
    }
    const uniqueMoves = new Set(moves);
    if (uniqueMoves.size !== moves.length) {
        return chalk.red('You have repeated moves. Please enter unique moves.');
    }
    return true;
}