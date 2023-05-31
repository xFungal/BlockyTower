import k from "../kaboom";

export const addBounds = () => {
    k.add([
        k.rect(18, k.height()),
        k.opacity(0.2),
        k.pos(0, 0),
        k.fixed(),
        k.area(),
        // k.outline(1, k.rgb(55,55,55)),
        k.z(5),
        {
            update() {
                this.pos.y = window.currentBlock.collided ? -k.height() : 0;
                this.pos.x = window.currentBlock.body.bounds.min.x;
                this.width = window.currentBlock.body.bounds.max.x - window.currentBlock.body.bounds.min.x;
            }
        }
    ]);
}
