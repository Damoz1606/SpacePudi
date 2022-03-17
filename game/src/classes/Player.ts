import { Physics, Scene } from "phaser";
import { Character } from "./Character";
import { Ship } from "./Ship";

export class Player {

    private ship: Ship;

    constructor(scene: Scene,
        x: number,
        y: number,
        texture: string,
        frames?: string | number) {

        this.ship = new Ship(scene, x, y, texture, frames);
    }

}