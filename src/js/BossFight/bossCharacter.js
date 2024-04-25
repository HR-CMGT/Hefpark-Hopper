import { Actor, CollisionType, Vector, Shape, Input, Timer, Keys } from "excalibur";
import { Resources } from '../resources.js';

import { BossFloor } from "./bossBottomBorder.js";
import { HoneyBomber } from "./characterAttack.js";
import { BossPlatform } from "./bossPlatform.js";

export class MaincharacterBoss extends Actor {

    health = 300;
    damage
    grounded
    timer
    attackTimer
    mayAttack

    constructor() {

        const circle = Shape.Circle(105, new Vector(6, 27.5));

        super({
            height: 100,
            width: 100,
            collider: circle
        });

        this.timer = new Timer({
            fcn: () => this.graphics.use('HappyBee'),
            repeats: false,
            interval: 700,
        });

        this.attackTimer = new Timer({
            fcn: () => this.mayAttack = true,
            repeats: false,
            interval: 800,
        });
    }

    onActivate(ctx) {

        this.MaincharacterBoss.pos = new Vector(10, 500);
        this.MaincharacterBoss.reset();
    }

    onInitialize(engine) {

        this.game = engine
        this.body.useGravity = true
        this.body.collisionType = CollisionType.Active
        this.CharacterattackSound = Resources.CharacterAttackSound

        this.graphics.add('HappyBee', Resources.Bee.toSprite())
        this.graphics.add('MadBee', Resources.MadBee.toSprite())
        this.graphics.add('SadBee', Resources.SadBeeHit.toSprite())
        this.scale = new Vector(0.5, 0.5)

        this.graphics.use('HappyBee')
        this.mayAttack = true

        this.on('collisionstart', (event) => { this.isGrounded(event) });

        // gamepad support - todo test with two buttons , one for jump and one for attack
        if (this.game.gamepad) {
            this.game.gamepad.on('button', () => this.checkAttack())
        }

        this.game.currentScene.add(this.timer)
        this.game.currentScene.add(this.attackTimer)
    }

    reset() {
        this.graphics.use('HappyBee')
        this.health = 300;
    }

    checkAttack(evt){
        if (this.mayAttack) {
            this.CharacterattackSound.play()
            this.honeyBomb();
            this.graphics.use('MadBee');
            this.timer.start();
            this.mayAttack = false;
            this.attackTimer.start();
        }
    }

    isGrounded(event) {
        if (event.other instanceof BossFloor) {
            //console.log("you're on the floor");
            this.grounded = true;
        }
        if (event.other instanceof BossPlatform) {
            //console.log("you're on a platform");
            this.grounded = true;
        }
    }

    onPreUpdate(engine) {
        let xspeed = 0;
        let yspeed = 0;

        if (engine.input.keyboard.isHeld(Keys.D) || engine.input.keyboard.isHeld(Keys.Right)) {
            xspeed = 240;
        }

        if (engine.input.keyboard.isHeld(Keys.A) || engine.input.keyboard.isHeld(Keys.Left)) {
            xspeed = -240;
        }

        if (engine.input.keyboard.wasPressed(Keys.W) || engine.input.keyboard.wasPressed(Keys.Up)){
            if (this.grounded) {
                this.jumpSound = Resources.JumpSound
                this.jumpSound.play(100)
                yspeed = -650;
                this.grounded = false;
            }
        }

        if (engine.input.keyboard.wasPressed(Keys.Space)) {
            this.checkAttack()
        }

        // gamepad support - todo test
        if (this.game.gamepad) {
            xspeed = this.gamepad.getAxes(Axes.LeftStickX)
        }

        this.vel = new Vector(xspeed, this.vel.y + yspeed)
    }

    takeDamage(amount) {

        this.health -= amount;

        this.graphics.use('SadBee');
        this.timer.start();
        if (this.health < 251) {
            this.scene.hearts(5);
        }

        if (this.health < 201) {
            this.scene.hearts(4);
        }

        if (this.health < 151) {
            this.scene.hearts(3);
        }

        if (this.health < 101) {
            this.scene.hearts(2);
        }

        if (this.health < 51) {
            this.scene.hearts(1);
        }

        if (this.health < 1) {
            console.log("oopsies, dead");
            this.game.goToScene('bossFail');
        }
    }

    honeyBomb() {
        const bomb = new HoneyBomber()
        bomb.pos = this.pos.clone()
        this.scene.add(bomb)
    }

}
