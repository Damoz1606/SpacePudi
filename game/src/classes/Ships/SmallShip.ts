import { Scene } from "phaser";
import { Ship } from "../Ship";

export class SmallShip extends Ship {
    constructor(scene: Scene,
        x: number,
        y: number,
        texture: string,
        frames?: string | number) {
        super(scene, x, y, texture, frames);
    }
}