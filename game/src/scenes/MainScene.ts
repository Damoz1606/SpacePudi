import { Player } from '../classes/Player';
import { TexturesKey } from '../lib/Textures';

export class MainScene extends Phaser.Scene {
    constructor(
        private player: Player
    ) {
        super({ key: 'MainScene' });
    }

    init() {
        console.log('MainScene');
    }

    create(): void {
        this.initPlayer();
    }

    private initPlayer(): void {
        this.player = new Player(this, 100, 100, TexturesKey.BasicShip)
    }
}
