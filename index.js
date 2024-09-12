import { Game } from './classes/Game.js';
import { validateMoves } from './utils/validateInput.js';

(async () => {
    const args = process.argv.slice(2);

    const validationError = validateMoves(args);
    if (validationError !== true) {
        console.error(validationError);
        process.exit(1);
    }

    const game = new Game(args);

    await game.play();
})();