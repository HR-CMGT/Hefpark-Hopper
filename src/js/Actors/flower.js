import * as ex from 'excalibur'
import { Resources, ResourceLoader } from '../resources';
import { Maincharacter } from './character';

export class Flower extends ex.Actor {
    score
    constructor(x, y, score) {
        super({
            pos: new ex.Vector(x, y),
            width: 2250,
            height: 2130,
            anchor: ex.Vector.Zero, //Anchors the flowers
            collisionType: ex.CollisionType.Passive, //Bee bounces against the flowers
            collisionGroup: ex.CollisionGroupManager.groupByName('flower'),//Make sure you bounce against all the platforms
        });
        this.graphics.use(Resources.Flower.toSprite()); //Image of flower
        this.scale = new ex.Vector(0.03, 0.03)
        this.score = score
        this.coinSound = Resources.CoinSound
    }

    onInitialize() {
        this.on('collisionstart', (evt) => this.onCollisionStart(evt))
    }

    onCollisionStart(evt) {
        if (evt.other instanceof Maincharacter) {
            this.coinSound.play(100)
            this.score.incrementScore()
            this.kill()
        }

    }

}