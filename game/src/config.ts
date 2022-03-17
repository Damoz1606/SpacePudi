import { Bootloader } from './Bootloader';
import { MainScene } from './scenes/MainScene';

export const CONFIG: any = {
    title: 'Pudi',
    version: '0.0.1',
    type: Phaser.WEBGL,
    backgroundColor: 0x444444,
    scale: {
        parent: 'phaser_container',
        width: 360,
        height: 640,
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    dom: {
        createContainer: true
    },
    render: {
        pixelArt: true,
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
            gravity: {
                y: 500
            }
        }
    },
    scene: [
        Bootloader,
        MainScene
    ]
};
