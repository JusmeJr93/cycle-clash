import chalk from 'chalk';
import readline from 'readline';

//to handle and validate the user input
export class InputHandler {
    static promptUser(promptText) {
        return new Promise((resolve) => {
            const rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout
            });

            rl.question(promptText, (input) => {
                rl.close();
                resolve(input.trim());
            });
        });
    }

    static async getUserChoice(moves) {
        while (true) {
            const input = await InputHandler.promptUser('Enter your choice: ');
            if (input === '?') return 'help';
            if (input === 's') return 'stats';
            if (input === 'r') return 'reset';
            const choice = parseInt(input, 10);
            if (!isNaN(choice) && choice >= 0 && choice <= moves.length) {
                return choice - 1;
            } else {
                console.log(chalk.red('Invalid choice, please choose one of the available options.'));
            }
        }
    }
}
