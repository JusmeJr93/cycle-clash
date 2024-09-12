
import chalk from 'chalk';
import { __dirname } from '../utils/dirName.js';
import fs from 'fs';
import path from 'path';

export class Statistics {
    constructor() {
        this.filePath = path.join(__dirname, 'stats.json');
        this.stats = { wins: 0, losses: 0, draws: 0 };
        this.loadStats();
    }

    loadStats() {
        if (fs.existsSync(this.filePath)) {
            const data = fs.readFileSync(this.filePath, 'utf8');
            this.stats = JSON.parse(data);
        } else {
            this.stats = { wins: 0, losses: 0, draws: 0 };
        }
    }

    updateStats(result) {
        if (result === 'win') {
            this.stats.wins += 1;
        } else if (result === 'lose') {
            this.stats.losses += 1;
        } else if (result === 'draw') {
            this.stats.draws += 1;
        }
        this.saveStats();
    }

    resetStats() {
        this.stats = { wins: 0, losses: 0, draws: 0 };
        this.saveStats();
        console.log(chalk.green('Stats have been reset.'));
    }

    saveStats() {
        fs.writeFileSync(this.filePath, JSON.stringify(this.stats, null, 2));
    }

    displayStats() {
        console.log('Statistics:');
        console.log(chalk.green(`Wins: ${this.stats.wins}`));
        console.log(chalk.blue(`Draws: ${this.stats.draws}`));
        console.log(chalk.red(`Losses: ${this.stats.losses}`));
    }

    
}
