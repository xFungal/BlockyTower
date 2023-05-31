import k from "../kaboom";
import {engine, Matter} from "../matter"
import matter from "../components/matter";

export const addMiniBlock = () => {
    const f = k.get('foundation')[0]
    k.play('mini');
    return k.add([
        'mini_block',
        k.sprite('marble_packed', {frame: 0}),
        k.pos(k.randi(f.pos.x - size*8, f.pos.x + size*8), window.camPosY - size * (4+k.randi(1, 3))),
        k.origin('center'),
        k.z(10),
        k.scale(0),
            {
                update() {
                    this.scale.x = k.lerp(this.scale.x, 1, 0.3);
                    this.scale.y = k.lerp(this.scale.y, 1, 0.3);
                }
            },
            matter(engine, {
                isStatic: true,
                createBody(object) {
                    var partA = Matter.Bodies.rectangle(object.pos.x, object.pos.y, size, size);

                    var compoundBodyA = Matter.Body.create({
                        parts: [partA],
                        isStatic: true,
                    });

                    Matter.Body.setCentre(compoundBodyA, {x: partA.position.x, y: partA.position.y}, false);

                    return compoundBodyA;
                },
            })
    ]);
}
