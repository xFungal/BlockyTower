import k from "../kaboom";
import {engine, Matter} from "../matter"
import matter from "../components/matter";

export const addFoundation = () => {
    return k.add([
        'foundation',
        k.sprite('foundation'),
        k.pos(k.width() / 2, k.height() - k.height() / 5),
        k.origin('center'),
        k.z(10),
        k.scale(0.5),
        matter(engine, {
            isStatic: true,
            createBody(object) {
                var partA = Matter.Bodies.rectangle(object.pos.x, object.pos.y, 216 / 2, 324 / 2);

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
