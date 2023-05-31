import k from "../kaboom";
import {hex} from "../helpers";
import blocks from "../blocks";

export const addNextBlock = () => {
    if (!k.get('next-block').length) {
        return k.add([
            'next-block',
            k.text('NEXT BLOCK', {size: 20}),
            k.pos(25, 25),
            k.fixed(),
            k.color(hex('ffffff')),
            k.origin('left'),
            k.area(),
            k.z(10),
            {
                draw() {
                    k.drawSprite({
                        sprite: 'shape_' + window.nextBlock,
                        pos: k.vec2(50, 60),
                        origin: 'center',
                        fixed: true,
                        color: blocks.find(b => b.char === window.nextBlock).color,
                    })
                },
                update() {
                }
            }
        ]);
    }
}
