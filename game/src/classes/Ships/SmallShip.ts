import { Scene } from "phaser";
import { TexturesKey } from "../../lib/Textures";
import { ShipAttributes } from "../../lib/Types";
import { Ship } from "../Ship";

export class SmallShip extends Ship {
    constructor(scene: Scene,
        x: number,
        y: number) {
        super(scene, x, y, TexturesKey.SmallShip);

        this.getBody().setSize(60, 60);
        this.setDelayAttack(ShipAttributes.SmallShipDelayAttack);
    }
}