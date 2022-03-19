import { Scene } from "phaser";
import { TexturesKey } from "../../lib/Textures";
import { ShipAttributes } from "../../lib/Types";
import { Ship } from "../Ship";

export class BigShip extends Ship {
    constructor(scene: Scene,
        x: number,
        y: number) {
        super(scene, x, y, TexturesKey.BigShip);

        this.getBody().setSize(100, 100);
        this.setDelayAttack(ShipAttributes.BigShipDelayAttack);
    }
}