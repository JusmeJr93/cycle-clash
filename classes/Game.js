import { GameRules } from './GameRules.js';
import { KeyGenerator } from './KeyGenerator.js';
import { HMACGenerator } from './HMACGenerator.js';
import { Menu } from './Menu.js';
import { HelpSystem } from './HelpSystem.js';
import { InputHandler } from './InputHandler.js';
import { Statistics } from './Statistics.js';
import chalk from 'chalk';

//to handle the core logic of the game, including user interaction, move processing, and HMAC generation
export class Game {
    constructor(moves) {
        this.moves = moves;
        this.gameRules = new GameRules(moves);
        this.statistics = new Statistics();
    }

    async play() {
        while (true) {// to generate a new key and computer move for each round
            const key = KeyGenerator.generateKey();
            const computerMove = this.moves[Math.floor(Math.random() * this.moves.length)];
            const hmac = HMACGenerator.generateHMAC(key, computerMove);

            console.log('HMAC:', chalk.magenta.italic(hmac));

            Menu.display(this.moves);
            const choice = await InputHandler.getUserChoice(this.moves);

            if (choice === 'help') {
                await HelpSystem.displayHelp(this.moves);
                continue;
            }

            if (choice === 'stats') {
                this.statistics.displayStats();
                continue;
            }

            if (choice === 'reset') {
                this.statistics.resetStats();
                continue;
            }

            if (choice === -1) {
                console.log('Exiting...');
                break;
            }

            const playerMove = this.moves[choice];
            const result = this.gameRules.determineWinner(playerMove, computerMove);

            console.log(chalk.green(`Your move: ${playerMove}`));
            console.log(chalk.blue(`Computer's move: ${computerMove}`));
            console.log(chalk.bold.yellow(`Result: ${result}`));
            console.log('Key: ', chalk.magenta.italic(key));

            this.statistics.updateStats(result);
            this.statistics.displayStats();
        }
    }
}
