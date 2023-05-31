import kaboom from "kaboom";

const k = kaboom({
    background: [174, 107, 78],
    canvas: document.getElementById('canvas_kaboom'),
    texFilter: 'linear',
    scale: 1,
    font: 'default_',
    global: false,
    debug: false,
});

k.loadFont('default_', 'fonts/Kenney_Mini_Square.ttf');
k.loadFont('Kenney_Mini_Square', 'fonts/Kenney_Mini_Square.ttf');

k.loadSprite('bg', 'sprites/bg.png');

k.loadSprite('shape_I', 'sprites/blocks/I.png');
k.loadSprite('shape_T', 'sprites/blocks/T.png');
k.loadSprite('shape_O', 'sprites/blocks/O.png');
k.loadSprite('shape_S', 'sprites/blocks/S.png');
k.loadSprite('shape_Z', 'sprites/blocks/Z.png');
k.loadSprite('shape_L', 'sprites/blocks/L.png');
k.loadSprite('shape_J', 'sprites/blocks/J.png');

k.loadSprite('foundation', 'sprites/foundation.png');
k.loadSprite('logo', 'sprites/logo.png');
k.loadSprite('marble_packed', 'sprites/marble_packed.png', {
    sliceX: 9,
    sliceY: 9,
});

k.loadSound('poof', 'sounds/poof.wav');
k.loadSound('gameover', 'sounds/gameover.wav');
k.loadSound('click', 'sounds/click.wav');
k.loadSound('mini', 'sounds/mini.wav');
k.loadSound('music', 'sounds/music.mp3');

k.onLoad(() => {
    document.getElementById('canvas_kaboom').focus();
});

document.getElementById('canvas_matter').onclick = function (e) {
    document.getElementById('canvas_kaboom').focus();
}

export default k;
