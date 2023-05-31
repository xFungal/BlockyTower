import {Matter} from "../matter";

export default function (engine, options = {}) {
    return {
        collided: false,
        add() {
            this.body = options.createBody(this)
            Matter.Composite.add(engine.world, this.body);
        },
        update() {
            this.pos.x = this.body.position.x;
            this.pos.y = this.body.position.y;
            this.angle = this.body.angle * (180 / Math.PI);
        }
    }
}
