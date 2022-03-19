import { Physics, Scene } from "phaser";
import { TexturesKey } from "../lib/Textures";
import { ShipTypes } from "../lib/Types";
import { Character } from "./Character";
import { ShipFactory } from "./Factories/ShipFactory";
import { Ship } from "./Ship";

export class Player {

    private ship: Ship;

    constructor(scene: Scene,
        x: number,
        y: number,
        ship: ShipTypes) {

        this.ship = ShipFactory.create(scene, x, y, ship);
    }

    public update() {

    }

}