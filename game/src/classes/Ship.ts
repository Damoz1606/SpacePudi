import { Scene } from "phaser";
import { Character } from "./Character";
import { Fire } from "./Objects/Fire";

export abstract class Ship extends Character {

    private fires: Fire[];
    protected abstract fire(): void;

    constructor(scene: Scene,
        x: number,
        y: number,
        texture: string,
        frames?: string | number) {
        super(scene, x, y, texture, frames);

        this.init();
    }

    private init(): void {
        this.fires = [];
    }

    public addFire(fire: Fire): void {
        this.fires.push(fire);
    }

    public removeFire(fire: Fire): void {
        this.fires = this.fires.filter(item => item === fire);
    }

    public shiftFire(): void {
        this.fires.shift();
    }
}