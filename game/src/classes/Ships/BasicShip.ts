import { Scene } from "phaser";
import { TexturesKey } from "../../lib/Textures";
import { Ship } from "../Ship";

export class BasicShip extends Ship {

    constructor(scene: Scene,
        x: number,
        y: number) {
        super(scene, x, y, TexturesKey.BasicShip);

        this.getBody().setSize(60);
    }

    protected fire(): void {
        throw new Error("Method not implemented.");
    }
}