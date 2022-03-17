import { Physics, Scene } from "phaser";

export abstract class Character extends Physics.Arcade.Sprite {
    constructor(scene: Scene,
        x: number,
        y: number,
        texture: string,
        frames?: string | number) {
        super(scene, x, y, texture, frames);

        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);

        this.setScale(0.5);
        this.setCollideWorldBounds(true);
    }

    protected getBody(): Physics.Arcade.Body {
        return this.body as Physics.Arcade.Body
    }
}