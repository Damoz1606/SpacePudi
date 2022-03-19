import { Scene } from "phaser";
import { TexturesKey } from "../../lib/Textures";
import { Fire } from "./Fire";

export class FireYellow extends Fire {
    constructor(scene: Scene,
        x: number,
        y: number,) {
        super(scene, x, y, TexturesKey.FireYellow);
    }

    public update(): void {

    };
}