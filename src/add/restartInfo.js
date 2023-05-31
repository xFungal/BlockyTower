import k from "../kaboom";
import {hex} from "../helpers";

export const addRestartInfo = () => {
    if (!k.get('restart-info').length) {
        return k.add([
            'restart-info',
            k.text('PRESS R TO RESTART', {size: 20}),
            k.pos(25, k.height() - 25),
            k.fixed(),
            k.color(hex('ffffff')),
            k.origin('left'),
            k.area(),
            k.stay(),
            k.z(10),
            {
                update() {
                }
            }
        ]);
    }
}
