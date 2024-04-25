import {Actor, Vector} from 'excalibur';
import {Resources} from "/src/js/resources.js";


export class CutsceneStartEndBackground extends Actor {
    constructor(x, y) {
        super({
            pos: new Vector(x, y),
            width: 1440, //1519,
            height: 900, //600,
            anchor: Vector.Zero,
        });

        const spriteOne = Resources.StartAndFinalSceneBg.toSprite();
        spriteOne.width = 1440
        spriteOne.height = 900
        this.graphics.add(spriteOne);
        this.scale = new Vector(0.85, 0.85 )
    }
}

export class CutsceneOneBackground extends Actor {
    constructor(x, y) {
        super({
            pos: new Vector(x, y),
            width: 1440,
            height: 900,
            anchor: Vector.Zero,
        });
        const sprite = Resources.CutsceneOneBg.toSprite();
        sprite.width = 1440
        sprite.height = 900
        this.graphics.add(sprite);
    }
}

export class CutsceneTwoBackground extends Actor {
    constructor(x, y) {
        super({
            pos: new Vector(x, y),
            width: 2059,
            height: 600,
            anchor: Vector.Zero,
        });
        const sprite = Resources.CutsceneTwoBg.toSprite();
        sprite.width = 2059
        sprite.height = 600
        this.graphics.add(sprite);
    }
}
export class CutsceneThreeBackground extends Actor {
    constructor(x, y) {
        super({
            pos: new Vector(x, y),
            width: 1726,
            height: 600,
            anchor: Vector.Zero,
        });
        const sprite = Resources.CutsceneThreeBg.toSprite();
        sprite.height = 600
        sprite.width = 1726
        this.graphics.add(sprite);
    }
}
export class CutsceneBossBackground extends Actor {
    constructor(x, y) {
        super({
            pos: new Vector(x, y),
            width: 1726,
            height: 600,
            anchor: Vector.Zero,
        });
        const sprite = Resources.CutsceneBossBg.toSprite();
        this.graphics.add(sprite);
    }
}
