import * as ex from "excalibur";
import { Vector, Keys, Axes } from "excalibur";
import { Resources } from "../resources";
import { PlatformLvlOne } from "./platform.js";
import { PlatformLvlTwo } from "./platform.js";
import { PlatformLvlThree } from "./platform.js";
import { Portal } from "./portal";
import { Spider } from "./spiders";


export class Maincharacter extends ex.Actor {
    health
    speed
    jumped = false
    onGround = true
    x
    flowers

    constructor(flowers) {
        super({
            collisionType: ex.CollisionType.Active, // Gives the bee a collision with the platforms
            collider: ex.Shape.Circle(110, ex.vec(5, 25)),
        });
        this.graphics.use(Resources.Bee.toSprite()); // Bee picture
        this.health = 200;
        this.speed = 300;  // The speed of the bee
        this.scale = new ex.Vector(0.4, 0.4) // Scaling of the bee
        this.pos = new ex.Vector(50, 500); //Staring position bee
        this.pointer.useGraphicsBounds = true;
        this.enableCapturePointer = true;
        this.body.gravity = true; //Gravity
        this.flowers = flowers
    }

    onInitialize(engine) {
        this.game = engine
        this.jumpSound = Resources.JumpSound
        
        // gamepad support - todo test
        if (this.game.gamepad) {
            this.game.gamepad.on('button', () => this.jump())
        }

        this.on('collisionstart', (evt) => this.onCollisionStart(evt))
    }

    jump() {
        if (this.onGround === true) {
            this.jumpSound.play(100)
            this.vel.y = -500
            this.onGround = false
            this.jumped = true
        }
    }

    onPreUpdate(engine) {
        // MOVE
        if (engine.input.keyboard.isHeld(Keys.A) || engine.input.keyboard.isHeld(Keys.Left)) {
            this.vel.x = -this.speed
        } else if (engine.input.keyboard.isHeld(Keys.D) || engine.input.keyboard.isHeld(Keys.Right)) {
            this.vel.x = this.speed
        } else {
            this.vel.x = 0
        }
        // jump
        if (this.game.input.keyboard.wasPressed(Keys.W) || this.game.input.keyboard.wasPressed(Keys.Up)) {
            this.jump()
        }
        // gamepad support - todo test
        if (this.game.gamepad) {
            const xValue = this.gamepad.getAxes(Axes.LeftStickX)
            this.vel = new Vector(xValue * 40, this.vel.y)
        }
        

        // slow braking?
        if (this.vel.x > 0) {
            this.vel.x -= 10;
        } else if (this.vel.x < 0) {
            this.vel.x += 10;
        }

        engine.currentScene.camera.x = this.pos.x + 80 
    }

    onCollisionStart(evt) {
        if (evt.other instanceof PlatformLvlOne) { //Checking if there is collision with the platforms
            //console.log("you're on the floor");
            this.onGround = true;
        }
        if (evt.other instanceof PlatformLvlTwo) {
            //console.log("you're on the floor");
            this.onGround = true;
        }
        if (evt.other instanceof PlatformLvlThree) {
            //console.log("you're on the floor");
            this.onGround = true;
        }

    }

}
