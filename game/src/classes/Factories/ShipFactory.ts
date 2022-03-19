import { Scene } from "phaser";
import { TexturesKey } from "../../lib/Textures";
import { ShipTypes } from "../../lib/Types";
import { Ship } from "../Ship";

export class ShipFactory {
    public static create(
        scene: Scene,
        x: number,
        y: number,
        type: ShipTypes
    ) {
        switch (type) {
            case ShipTypes.BasicShip:
                return new Ship(scene, x, y, TexturesKey.BasicShip);
                break;
            case ShipTypes.SmallShip:
                return new Ship(scene, x, y, TexturesKey.SmallShip);
                break;
            case ShipTypes.BigShip:
                return new Ship(scene, x, y, TexturesKey.BigShip);
                break;
        }
    }
}