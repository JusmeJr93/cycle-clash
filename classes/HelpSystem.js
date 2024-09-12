import Table from 'cli-table';
import { GameRules } from './GameRules.js';
import chalk from 'chalk';

export class HelpSystem {
    constructor(moves) {
        this.moves = moves;
        this.gameRules = new GameRules(moves);
    }

    generateTable() {
        const header = [' Computer ->'].concat(this.moves);
        const table = new Table({
            head: header,
            colWidths: [20].concat(new Array(this.moves.length).fill(20)),
        });

        for (let i = 0; i < this.moves.length; i++) {
            const row = [chalk.blue(`User: ${this.moves[i]}`)];
            for (let j = 0; j < this.moves.length; j++) {
                if (i === j) {
                    row.push('Draw');
                } else {
                    row.push(this.gameRules.determineWinner(this.moves[i], this.moves[j]));
                }
            }
            table.push(row);
        }

        return table.toString();
    }

    // method to display the moves interractions in a table
    static async displayHelp(moves) {
        const helpTable = new HelpSystem(moves);
        console.log(helpTable.generateTable());
    }
}
