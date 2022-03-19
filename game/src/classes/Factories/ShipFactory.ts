import { Scene } from "phaser";
import { TexturesKey } from "../../lib/Textures";
import { ShipTypes } from "../../lib/Types";
import { Ship } from "../Ship";
import { BasicShip } from "../Ships/BasicShip";
import { BigShip } from "../Ships/BigShip";
import { SmallShip } from "../Ships/SmallShip";

export class ShipFactory {
    public static create(
        scene: Scene,
        x: number,
        y: number,
        type: ShipTypes
    ): Ship {
        switch (type) {
            case ShipTypes.BasicShip:
                return new BasicShip(scene, x, y);
                break;
            case ShipTypes.SmallShip:
                return new SmallShip(scene, x, y);
                break;
            case ShipTypes.BigShip:
                return new BigShip(scene, x, y);
                break;
        }
    }
}