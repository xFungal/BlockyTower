import k from '../kaboom';
import {hex} from "../helpers";

export default () => {
    window.currentScene = 'gameOver';
    window.music?.stop();

    k.play('gameover');

    k.add([
        k.text('Game Over', {size: 40}),
        k.pos(k.width() / 2, k.height() / 2 - 60),
        k.origin('center'),
        k.z(10),
    ]);

    k.wait(0.5, function () {
        k.add([
            k.text('Your Score:', {size: 20}),
            k.pos(k.width() / 2, k.height() / 2 + 20),
            k.color(hex('cccccc')),
            k.origin('center'),
            k.z(10),
            k.opacity(0),
            {
                update() {
                    this.opacity = k.lerp(this.opacity, 1, 0.1);
                }
            }
        ]);
    });

    k.onKeyPress('r', () => k.go('game'));
    k.onKeyPress('enter', () => k.go('game'));
    k.onKeyPress('escape', () => k.go('menu'));
}
