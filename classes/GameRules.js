
export class GameRules {
    constructor(moves) {
        this.moves = moves;
        this.rules = this.createRules();
    }

    createRules() {
        const rules = {};
        const n = this.moves.length;
        for (let i = 0; i < n; i++) {
            rules[this.moves[i]] = {};
            for (let j = 1; j <= n / 2; j++) {
                const winIndex = (i + j) % n;
                const loseIndex = (i - j + n) % n;
                rules[this.moves[i]][this.moves[winIndex]] = 'win';
                rules[this.moves[i]][this.moves[loseIndex]] = 'lose';
            }
            rules[this.moves[i]][this.moves[i]] = 'draw';
        }
        return rules;
    }

    determineWinner(playerMove, computerMove) {
        if (!this.rules[playerMove] || !this.rules[playerMove][computerMove]) {
            throw new Error('Invalid move');
        }
        return this.rules[playerMove][computerMove];
    }
}
