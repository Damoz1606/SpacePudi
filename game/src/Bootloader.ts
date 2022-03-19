import { TexturePath, TexturesKey } from "./lib/Textures";

export class Bootloader extends Phaser.Scene {
    constructor() {
        super({
            key: 'Bootloader'
        });
        console.log('Scene Bootloader');
    }

    preload(): void {
        this.load.setPath('assets/');
        this.load.image(TexturesKey.BasicShip, TexturePath.BasicShip);
        this.load.image(TexturesKey.SmallShip, TexturePath.SmallShip);
        this.load.image(TexturesKey.BigShip, TexturePath.BigShip);
        this.load.image(TexturesKey.FireYellow, TexturePath.FireYellow);
        this.load.image(TexturesKey.FirePurple, TexturePath.FirePurple);

        this.load.on('complete', () => {
            this.scene.start('MainScene');
        });
    }

}
