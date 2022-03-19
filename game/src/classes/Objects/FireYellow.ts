import { Scene } from "phaser";
import { FireEvents } from "../../lib/Events";
import { TexturesKey } from "../../lib/Textures";
import { velocityByAngle } from "../../lib/utils";
import { Fire } from "./Fire";

export class FireYellow extends Fire {

    constructor(scene: Scene,
        x: number,
        y: number,) {
        super(scene, x, y, TexturesKey.FireYellow);
    }

    public update(): void {
        if (this.borderCollide()) {
            this.setVelocity(0);
            this.scene.game.events.emit(FireEvents.Collides, this);
        } else {
            const velocity = velocityByAngle(this.getBodyVelocity(), this.getRotation());
            this.setVelocity(velocity.x, -velocity.y);
        }
    }
}