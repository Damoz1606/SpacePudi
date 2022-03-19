import { Scene } from "phaser";
import { TexturesKey } from "../../lib/Textures";
import { FireTypes, ShipTypes } from "../../lib/Types";
import { Fire } from "../Objects/Fire";
import { FirePurple } from "../Objects/FirePurple";
import { FireYellow } from "../Objects/FireYellow";
import { Ship } from "../Ship";
import { BasicShip } from "../Ships/BasicShip";
import { BigShip } from "../Ships/BigShip";
import { SmallShip } from "../Ships/SmallShip";

export class FireFactory {
    public static create(
        scene: Scene,
        x: number,
        y: number,
        type: FireTypes
    ): Fire {
        switch (type) {
            case FireTypes.FireYellow:
                return new FireYellow(scene, x, y);
                break;
            case FireTypes.FirePurple:
                return new FirePurple(scene, x, y);
                break;
        }
    }
}