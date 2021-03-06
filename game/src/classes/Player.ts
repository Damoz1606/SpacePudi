import { Input, Physics, Scene } from "phaser";
import { TexturesKey } from "../lib/Textures";
import { FireTypes, PlayerAttributes, ShipTypes } from "../lib/Types";
import { degreesToRadians } from "../lib/utils";
import { Character } from "./Character";
import { ShipFactory } from "./Factories/ShipFactory";
import { Ship } from "./Ship";

export class Player {

    private ship: Ship;
    private velocity: number;
    private scene: Scene;

    private keyLeft: Input.Keyboard.Key;
    private keyRight: Input.Keyboard.Key;
    private keyAttack: Input.Keyboard.Key;

    constructor(scene: Scene,
        x: number,
        y: number,
        ship: ShipTypes) {

        this.init(scene, x, y, ship);
        this.initKeys();
    }

    private init(scene: Scene, x: number, y: number, ship: ShipTypes): void {
        this.scene = scene;
        this.ship = ShipFactory.create(scene, x, y, ship);
        this.velocity = 0;
    }

    private initKeys(): void {
        this.keyLeft = this.scene.input.keyboard.addKey(Input.Keyboard.KeyCodes.LEFT);
        this.keyRight = this.scene.input.keyboard.addKey(Input.Keyboard.KeyCodes.RIGHT);
        this.keyAttack = this.scene.input.keyboard.addKey(Input.Keyboard.KeyCodes.SPACE);
    }

    public update(time: number, delay: number) {
        this.checkRotation();
        this.movement(time);
        this.ship.update();
        this.ship.setRotation(degreesToRadians(this.velocity));
    }

    private movement(time: number): void {
        if (this.keyRight.isDown) {
            this.velocity += PlayerAttributes.Velocity;
        } else if (this.keyLeft.isDown) {
            this.velocity -= PlayerAttributes.Velocity;
        }
        if (this.keyAttack.isDown) {
            this.ship.fire(time, FireTypes.FireYellow);
        }
    }

    private checkRotation(): void {
        if (this.velocity >= 360) {
            this.velocity = 0;
        } else if (this.velocity <= 0) {
            this.velocity = 360;
        }
    }
}