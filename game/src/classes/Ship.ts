import { Scene } from "phaser";
import { Character } from "./Character";

export class Ship extends Character {

    constructor(scene: Scene,
        x: number,
        y: number,
        texture: string,
        frames?: string | number) {
        super(scene, x, y, texture, frames);
    }
}