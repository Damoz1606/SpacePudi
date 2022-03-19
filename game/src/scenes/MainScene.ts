import { Player } from '../classes/Player';
import { TexturesKey } from '../lib/Textures';
import { ShipTypes } from '../lib/Types';

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
        this.game.canvas.width
        this.player = new Player(this, this.game.canvas.width / 2, this.game.canvas.height / 2, ShipTypes.BasicShip)
    }

    public update(time: number, delta: number): void {
        this.player.update(time, delta);
    }
}
