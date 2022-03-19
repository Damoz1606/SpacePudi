import { Scene } from "phaser";
import { TexturesKey } from "../../lib/Textures";
import { Fire } from "./Fire";

export class FirePurple extends Fire {
    constructor(scene: Scene,
        x: number,
        y: number,) {
        super(scene, x, y, TexturesKey.FirePurple);
    }

    public update(): void {

    };
}