import { Scene } from "phaser";
import { Ship } from "../Ship";

export class BigShip extends Ship {
    constructor(scene: Scene,
        x: number,
        y: number) {
        super(scene, x, y, texture, frames);
    }
}