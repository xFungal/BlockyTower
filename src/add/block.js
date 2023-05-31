import k from "../kaboom";
import {hex, round} from "../helpers";
import blocks from "../blocks";
import {engine, Matter} from "../matter";
import {addMiniBlock} from "./miniblock";
import matter from "../components/matter";

export const addBlock = () => {
    // k.get('block').forEach(block => {
    //     block.enterState('fallen-phase-2');
    // });

    let shapeType = window.nextBlock;
    window.nextBlock = k.choose(blocks.map(b => b.char));
    // shapeType = 'J';

    return k.add([
        'block',
        k.sprite('shape_' + shapeType),
        k.pos((k.width() / 2), k.camPos().y - k.height() / 2 - size * 3),
        k.origin('center'),
        k.rotate(0),
        k.area(),
        // k.scale(1),
        k.state('falling', ['falling', 'fallen-phase-1', 'fallen-phase-2']),
        k.outview({hide: true}),
        k.z(10),
        {
            shape: shapeType,
        },
        matter(engine, {
            createBody(object) {
                return blocks.find(b => b.char === object.shape).createMatterBody(object);
            },
        }),
        {
            lastPos: {x: 0, y: 0},
            placed: false,
            locked: false,
            add(){
                this.color = blocks.find(b => b.char === this.shape).color;
            },
            destroy() {
                if (this.body) {
                    Matter.World.remove(engine.world, this.body);
                }
            },
            update() {
                if(this.isOutOfView() || this.locked){
                    return;
                }

                if (this.pos.y > (k.camPos().y + k.height() / 2)) {
                // if(!this.locked && this.isColliding(window.bot)){
                    // if(window.bot.isMoving()){
                    //     this.locked = true;
                    //     this.color = k.rgb(...hex('cccccc'));
                    //     Matter.Body.setStatic(this.body, true);
                    // } else {
                        this.locked = true;
                    //     this.use(k.lifespan(0.5, {fade: 0.5}));
                    //     Matter.Body.setStatic(this.body, true);
                    if(this.body.speed) {
                        k.wait(0.5, () => {
                            k.go('gameOver');
                        });
                        return;
                    } else {
                        return;
                    }
                    // }
                }

                if (this.state === 'fallen-phase-2') {
                    return;
                }

                let touchedDown = round(this.pos.y, 1) === round(this.lastPos.y, 1);

                if (this.state === 'falling' && 1) {
                    let that = this;

                    let list = [...k.get('block'), ...k.get('foundation'), ...k.get('mini_block')];
                    list.forEach(otherBlock => {
                        if (that.state !== 'falling' || that._id === otherBlock._id) {
                            return;
                        }
                        let collided = Matter.SAT.collides(that.body, otherBlock.body).collided;

                        if (touchedDown && collided) {
                            that.collided = true;
                            if (that.collided) {
                                k.shake(k.isKeyDown('down') ? 4 : 2);
                                k.play('poof', {seek: 0.2});

                                k.get('score')[0].score += 1;

                                // const score = k.get('score')[0].score;
                                // if(score % 2 === 0) {
                                //     addMiniBlock();
                                //     k.wait(0.2, addMiniBlock);
                                //     k.wait(0.4, addMiniBlock);
                                // }

                                that.enterState('fallen-phase-1');
                                k.wait(1, function () {
                                    window.currentBlock = addBlock();
                                });
                                window.camPosY = Math.min(window.camPosY, that.pos.y-size*5);
                                that.body.frictionAir = 0.1;
                            }
                        }
                    });
                }

                // rotating
                if (this.state === 'falling' && window.currentBlock.shape !== 'O' && (k.isKeyPressed('up') || k.isKeyPressed('space'))) {
                    Matter.Body.rotate(window.currentBlock.body, 90 * (Math.PI / 180));
                }
                // move left
                else if (this.state === 'falling' && k.isKeyDown('left')) {
                    Matter.Body.setPosition(this.body, {x: this.body.position.x - 2, y: this.body.position.y});
                    // Matter.Body.setVelocity(this.body, {x: -2, y: 0});
                }
                // move right
                else if (this.state === 'falling' && k.isKeyDown('right')) {
                    Matter.Body.setPosition(this.body, {x: this.body.position.x + 2, y: this.body.position.y});
                    // Matter.Body.setVelocity(this.body, {x: 2, y: 0});
                }
                // speed up
                else if (this.state === 'falling' && k.isKeyDown('down')) {
                    Matter.Body.setPosition(this.body, {x: this.body.position.x, y: this.body.position.y + 4});
                }

                if (this.state === 'falling') {
                    Matter.Body.setAngularVelocity(this.body, 0);

                    this.lastPos = {...this.pos};
                }
            }
        }
    ]);
}
