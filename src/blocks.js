import k from "./kaboom";
import {Matter} from "./matter";

let options = {
    frictionAir: 0.2,
    // frictionStatic: 999,
    chamfer: {radius: 2},
    slop: 0,
    restitution: 0,
    // mass: 10,
    // density:0.001,
    // inertia: Infinity,
};

export default [
    {
        char: 'I',
        color: k.rgb(200, 200, 100),
        createMatterBody: (object) => {
            var partA = Matter.Bodies.rectangle((object.pos.x), object.pos.y, size, 72, {...options});

            var compoundBodyA = Matter.Body.create({
                parts: [partA],
                ...options
            });
            return compoundBodyA;
        }
    },
    {
        char: 'L',
        color: k.rgb(100, 200, 100),
        createMatterBody: (object) => {
            var partA = Matter.Bodies.rectangle((object.pos.x), object.pos.y, size, size * 3, {...options}),
                partB = Matter.Bodies.rectangle((object.pos.x) + size, object.pos.y + size, size, size, {...options});

            var compoundBodyA = Matter.Body.create({
                parts: [partA, partB],
                ...options,
            });

            Matter.Body.setCentre(compoundBodyA, {x: partA.position.x, y: partA.position.y}, false);
            return compoundBodyA;
        }
    },
    {
        char: 'J',
        color: k.rgb(50, 150, 50),
        createMatterBody: (object) => {
            var partA = Matter.Bodies.rectangle((object.pos.x), object.pos.y, size, size * 3, {...options}),
                partB = Matter.Bodies.rectangle((object.pos.x) - size, object.pos.y + size, size, size, {...options});

            var compoundBodyA = Matter.Body.create({
                parts: [partA, partB],
                ...options,
            });

            Matter.Body.setCentre(compoundBodyA, {x: partA.position.x, y: partA.position.y}, false);
            return compoundBodyA;
        }
    },
    {
        char: 'O',
        color: k.rgb(100, 100, 200),
        createMatterBody: (object) => {
            var partA = Matter.Bodies.rectangle((object.pos.x), object.pos.y, size * 2, size * 2, {...options});

            var compoundBodyA = Matter.Body.create({
                parts: [partA],
                ...options
            });
            return compoundBodyA;
        }
    },
    {
        char: 'S',
        color: k.rgb(200, 100, 100),
        createMatterBody: (object) => {
            var partA = Matter.Bodies.rectangle((object.pos.x), object.pos.y, size, size * 2, {...options}),
                partB = Matter.Bodies.rectangle((object.pos.x) + size, object.pos.y + size, size, size * 2, {...options});

            var compoundBodyA = Matter.Body.create({
                parts: [partA, partB],
                ...options
            });

            Matter.Body.setCentre(compoundBodyA, {
                x: compoundBodyA.position.x,
                y: compoundBodyA.position.y
            }, false);
            return compoundBodyA;
        }
    },
    {
        char: 'Z',
        color: k.rgb(150, 50, 50),
        createMatterBody: (object) => {
            var partA = Matter.Bodies.rectangle((object.pos.x), object.pos.y + size, size, size * 2, {...options}),
                partB = Matter.Bodies.rectangle((object.pos.x) + size, object.pos.y, size, size * 2, {...options});

            var compoundBodyA = Matter.Body.create({
                parts: [partA, partB],
                ...options
            });

            Matter.Body.setCentre(compoundBodyA, {
                x: compoundBodyA.position.x,
                y: compoundBodyA.position.y
            }, false);
            return compoundBodyA;
        }
    },
    {
        char: 'T',
        color: k.rgb(50, 255, 150),
        createMatterBody: (object) => {
            var partA = Matter.Bodies.rectangle((object.pos.x), object.pos.y, size, 54, {...options}),
                partB = Matter.Bodies.rectangle((object.pos.x) + size, object.pos.y, size, size, {...options});

            var compoundBodyA = Matter.Body.create({
                parts: [partA, partB],
                ...options,
            });

            Matter.Body.setCentre(compoundBodyA, {x: partA.position.x, y: partA.position.y}, false);

            return compoundBodyA;
        }
    },
];
