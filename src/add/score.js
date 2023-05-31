import k from "../kaboom";
import {hex} from "../helpers";

export const addScore = () => {
    const score = k.get('score');
    if (score.length > 0) {
        score[0].score = 0;
        return score[0];
    }
    return k.add([
        'score',
        k.text(0, {size: 40}),
        k.pos(k.width() - 25, 25),
        k.fixed(),
        k.color(hex('ffffff')),
        k.origin('right'),
        k.area(),
        k.z(10),
        k.stay(),
        {
            score: 0,
            update() {
                this.text = this.score;
                this.opacity = 1;
                if (window.currentScene === 'game') {
                    this.origin = 'right';
                    this.pos.x = k.lerp(this.pos.x, k.width() - 25, 0.1);
                    this.pos.y = k.lerp(this.pos.y, 25, 0.1);
                } else if (window.currentScene === 'gameOver') {
                    this.origin = 'center';
                    this.pos.x = k.lerp(this.pos.x, k.width() / 2, 0.1);
                    this.pos.y = k.lerp(this.pos.y, k.height() / 2 + 45, 0.1);
                } else {
                    this.opacity = 0;
                }
            }
        }
    ]);
}
