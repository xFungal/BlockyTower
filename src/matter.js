import Matter from "matter-js";

var engine = Matter.Engine.create({
    enableSleeping: true,
});

// engine.world.gravity.y = 2;
// engine.world.gravity.scale = 0.005;

var render = Matter.Render.create({
    canvas: document.getElementById('canvas_matter'),
    engine: engine,
    options: {
        showPositions: true,
        showVelocity: true,
        showCollisions: true,
        showSeparations: true,
        showAngleIndicator: true,
        showShapes: true,
        showSleeping: true,
    }
});
render.canvas.width = document.documentElement.clientWidth;
render.canvas.height = document.documentElement.clientHeight;

Matter.Render.run(render);

Matter.Engine.run(engine);

export {Matter, engine, render};
