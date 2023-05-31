import k from "./kaboom";

export default function () {
    window.camPosX = k.width() / 2;
    window.camPosY = k.height() / 2;

    k.onUpdate(() => {
        let targetCamPos = {
            x: k.camPos().x,
            y: Math.min(k.height() / 2, k.lerp(k.camPos().y, window.camPosY, 0.05))
        };

        k.camPos(k.vec2(targetCamPos.x, targetCamPos.y));
    });
}
