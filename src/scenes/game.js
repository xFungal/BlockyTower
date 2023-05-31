import k from '../kaboom';
import camera from "../camera";
import {engine, Matter} from "../matter";
import {addFoundation} from "../add/foundation";
import {addBackground} from "../add/background";
import {hex, round} from "../helpers";
import {addRestartInfo} from "../add/restartInfo";
import {addNextBlock} from "../add/nextBlock";
import {addScore} from "../add/score";
import {addBounds} from "../add/bounds";
import blocks from "../blocks";
import {addBlock} from "../add/block";
import {addMiniBlock} from "../add/miniblock";
import {World} from "matter-js/src/module/main";

export default () => {
    document.getElementById('canvas_kaboom').focus();

    World.clear(engine.world);

    window.currentScene = 'game';

    window.music?.stop();
    window.music = k.play('music', {seek: 3, volume: 0.5})

    window.nextBlock = k.choose(blocks.map(b => b.char));

    window.size = 18;

    window.foundation = addFoundation();
    addBackground();

    window.currentBlock = addBlock();

    addBounds();
    addScore();
    addNextBlock();
    addRestartInfo();

    camera();

    // if(!k.get('bot').length) {
    //     window.bot = k.add([
    //         'bot',
    //         k.rect(k.width()+50, 380),
    //         k.opacity(0.8),
    //         k.pos(-25, window.foundation.pos.y),
    //         k.color(hex('A56E53')),
    //         k.outline(3, k.rgb(...hex('C49166'))),
    //         k.origin('topleft'),
    //         k.area(),
    //         k.z(5),
    //         {
    //             startingCam: window.camPosY,
    //             isMoving(){
    //                 return round(this.pos.y, 0) !== round(window.foundation.pos.y + (window.camPosY - this.startingCam), 0);
    //             },
    //             update() {
    //                 this.pos.y = k.lerp(this.pos.y, round(window.foundation.pos.y + (window.camPosY - this.startingCam), 0), 0.1);
    //             }
    //         }
    //     ]);
    // }

    k.onUpdate(() => {
        if (k.get('block').filter(b => b.state === 'falling' || b.state === 'fallen-phase-1').length === 0) {
            window.currentBlock = addBlock();
        }
    });


    k.onKeyPress('r', () => k.go('game'));
    k.onKeyPress('escape', () => k.go('menu'));
}
