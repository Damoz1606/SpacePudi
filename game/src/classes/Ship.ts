import { Scene } from "phaser";
import { FireTypes } from "../lib/Types";
import { Character } from "./Character";
import { FireFactory } from "./Factories/FireFactory";
import { Fire } from "./Objects/Fire";

export abstract class Ship extends Character {

    private fires: Fire[];
    private timeSinceLastAttack!: number;
    private delayAttack!: number;

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

    public update(): void {
        this.updateFire();
    }

    private updateFire(): void {
        for (const fire of this.fires) {
            fire.update();
        }
    }

    public fire(time: number, type: FireTypes): void {
        if (time > (this.timeSinceLastAttack + this.delayAttack)) {
            const fire = FireFactory.create(this.scene, this.x, this.y, type);
            fire.setBodyVelocity(100);
            fire.setRotation(this.rotation);
            this.addFire(fire);
            this.timeSinceLastAttack = time;
        }
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

    public setDelayAttack(delay: number) {
        this.delayAttack = delay;
        this.timeSinceLastAttack = -this.delayAttack;
    }
}