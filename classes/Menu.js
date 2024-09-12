import chalk from 'chalk';

export class Menu {
    static display(moves) {
        console.log(chalk.bold(`Game starts with ${moves.length} moves. Available options:`));
        moves.forEach((move, index) => console.log(chalk.cyan(`${index + 1} - ${move}`)));
        console.log(chalk.yellow('0 - Exit'));
        console.log(chalk.green('? - Help'));
        console.log(chalk.blue('s - See current stats'));
        console.log(chalk.red('r - Reset Stats'));
    }
}