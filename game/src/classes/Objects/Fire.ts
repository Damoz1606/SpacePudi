import { Scene } from 'phaser';
import { Character } from '../Character';

export abstract class Fire extends Character {

    private damage!: number;
    private bodyVelocity: number;
    public abstract update(): void;

    constructor(scene: Scene,
        x: number,
        y: number,
        texture: string,
        frames?: string | number) {
        super(scene, x, y, texture, frames);

        this.setScale(0.1, 0.2);
    }

    public setRotation(radians: number): this {
        return super.setRotation(radians);
    }

    public getRotation(): number {
        return this.rotation;
    }

    public getBodyVelocity() {
        return this.bodyVelocity;
    }

    public setBodyVelocity(velocity: number) {
        this.bodyVelocity = velocity;
    }

    protected borderCollide(): boolean {
        return this.getBody().blocked.left ||
            this.getBody().blocked.right ||
            this.getBody().blocked.down ||
            this.getBody().blocked.up
    }
}