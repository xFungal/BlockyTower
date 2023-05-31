import k from '../kaboom';
import {addBackground} from "../add/background";

export default () => {
    window.currentScene = 'menu';
    window.music?.stop();
    k.get('restart-info')?.[0]?.destroy();

    document.getElementById('canvas_kaboom').focus();
    addBackground();


    // k.add([
    //     k.rect(650, 180),
    //     k.pos(k.width() / 2 + 3, k.height() / 2 - 80 + 3),
    //     k.origin('center'),
    //     // k.opacity(0.2),
    //     k.color(hex('a56e53')),
    //     k.z(10),
    // ]);

    k.add([
        k.sprite('logo'),
        k.pos(k.width() / 2 + 3, 0),
        k.origin('center'),
        k.scale(0.5),
        // k.opacity(0.5),
        // k.color(0, 0, 0),
        k.z(10),
        {
            update(){
                this.pos.y = k.lerp(this.pos.y, k.height() / 2 - 60, 0.1);
            }
        }
    ]);

    k.add([
        k.text('Press ENTER to START', {size: 40}),
        k.pos(k.width() / 2, k.height() / 2 + 60),
        k.origin('center'),
        k.z(10),
        {
            update() {
                const time = new Date().getTime();
                this.opacity = time % 2000 < 1500 ? 1 : 0.0001;
            }
        }
    ]);

    k.onKeyPress('enter', () => k.play('click', {volume: 0.3}) && k.go('game'));
}
