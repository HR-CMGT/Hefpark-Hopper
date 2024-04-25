import {Actor, Vector, Sprite} from "excalibur";

export class CsTextBox extends Actor {
    constructor(image) {
        super({
            pos: new Vector(560, 420),
            width: 800,
            height: 201,
            anchor: new Vector(0.5,0.5),
        });

        const sprite = new Sprite(image);
        sprite.width = 800
        sprite.height = 201
        this.graphics.use(sprite);
    }
}

