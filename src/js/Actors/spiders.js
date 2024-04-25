import * as ex from "excalibur";
import { Resources } from "../resources.js";
import { Maincharacter } from "./character.js";
import { Actor, CollisionType } from "excalibur";
import SpiderdamageSound from "../../sounds/Bossdamage.mp3"
import DamageSound from "../../sounds/Damage.mp3"

export class Spider extends ex.Actor {
    x
    y
    speed
    health
    constructor(x, y) {

        super({
            width: 90,
            height: 75,
            pos: new ex.Vector(x, y)
        });
        const spider = Resources.Spider.toSprite()
        spider.width = 120
        spider.height = 100
        this.graphics.add(spider)
        this.speed = 300

    }
    onInitialize(_engine) {
        super.onInitialize(_engine);
        this.body.collisionType = ex.CollisionType.Fixed
        this.on("precollision", (event) => this.onPreCollision(event))
        this.game = _engine

    }
    onPreKill(_scene) {
        super.onPreKill(_scene);
        const deadSpider = new DeadSpider()
        deadSpider.pos = this.pos.clone()
        this.scene.add(deadSpider)

    }

    onPreCollision(event) {
        const side = event.side
        const otherActor = event.other

        if (otherActor instanceof Maincharacter) {
            if (side === 'Top') {
                this.SpiderdamageSound = new Audio(SpiderdamageSound)
                this.SpiderdamageSound.play(100)
                //console.log('character killed a spider')
                this.kill()

            } else if (side === 'Right' || side === 'Left') {
                this.DamageSound = new Audio(DamageSound)
                this.DamageSound.play()
                otherActor.kill()
                //console.log(`character walked into spider and died`)
            }
        }


    }
}

export class DeadSpider extends Actor {
    constructor() {

        super({
            width: 100,
            height: 80,
        });
        const spider = Resources.DeadSpider.toSprite()
        spider.width = 120
        spider.height = 100
        this.graphics.add(spider)


    }
    onInitialize(_engine) {
        super.onInitialize(_engine);
        this.body.collisionType = CollisionType.Passive

    }
    onPostUpdate(_engine, _delta) {
        super.onPostUpdate(_engine, _delta);

        // Roll 180 degrees
        this.rotation += 0.08;

        if (this.rotation >= Math.PI) {
            this.rotation = Math.PI;
            this.scale = this.scale.add(new ex.Vector(-0.04, -0.04));
            this.vel = new ex.Vector(0, 10)
        }
        if (this.width <= 0) {
            // Time is up, kill the actor
            this.kill();
        }
    }
}
