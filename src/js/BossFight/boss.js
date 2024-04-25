import { Actor, CollisionType, Vector, Timer } from "excalibur";
import { Resources } from '../resources.js'

import { MaincharacterBoss } from "./bossCharacter.js";
import { SpiderWebShot } from "./bossAttack.js";
import DamageSound from "../../sounds/Damage.mp3"

export class BossSpider extends Actor {

    health = 300;
    timer;
    spriteTimer;

    constructor() {

        super({
            width: 200,
            height: 200
        })

        this.timer = new Timer({
            fcn: () => this.webShot(),
            repeats: true,
            interval: 4000,
        })

        this.spriteTimer = new Timer({
            fcn: () => this.graphics.use('Boss'),
            repeats: false,
            interval: 300,
        })

    }

    onActivate(ctx) {

        this.bossReset.bossReset();

    }

    onInitialize(engine) {

        this.game = engine

        this.body.collisionType = CollisionType.Fixed

        this.graphics.add('Boss', Resources.Boss.toSprite());
        this.graphics.add('BossHit', Resources.BossHit.toSprite());
        this.scale = new Vector(1.3, 1.3);

        this.graphics.use('Boss');

        this.actions.repeatForever((ctx) => {

            ctx.moveBy(-100, 0, 50)

            ctx.moveBy(100, 0, 50)

        })

        this.game.currentScene.add(this.spriteTimer);

        this.game.currentScene.add(this.timer);
        this.timer.start();

        this.on('collisionstart', (event) => { this.doDamage(event) });

    }

    bossReset() {
        this.health = 300;
    }

    doDamage(event) {
        if (event.other instanceof MaincharacterBoss) {
            console.log("ouch!");
            event.other.takeDamage(50);
            this.DamageSound = Resources.DamageSound
            this.DamageSound.play()
        }
    }

    hitBoss(amount) {

        this.health -= amount;
        this.scene.updateBossHealth(this.health);

        this.graphics.use('BossHit');
        this.spriteTimer.start();

        if (this.health < 1) {
            this.timer.stop();
            this.kill();
            this.game.goToScene('bossCutscene');
            console.log("Victory for you, whoo hoo")
        }

    }

    webShot() {

        const webShoot = new SpiderWebShot();
        webShoot.pos = this.pos.clone();
        this.scene.addWebShot(webShoot)

    }
}