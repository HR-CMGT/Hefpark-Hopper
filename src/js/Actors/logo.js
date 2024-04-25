import { Actor, Vector } from "excalibur";
import { Resources } from '../resources.js';

export class Logo extends Actor {

    constructor() {
        super({
            width: Resources.LogoImage.width,
            height: Resources.LogoImage.height
        })
    }

    onInitialize(){

        this.graphics.add(Resources.LogoImage.toSprite());
        this.scale = new Vector(0.15, 0.15)

    }
}