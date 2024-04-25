import { CollisionType, Scene, Vector, Actor } from "excalibur";
import { GameOverButton, NextLvlButton } from "../Actors/button.js";
import { BackgroundLvlTwo } from "../Actors/Background.js";
import { Maincharacter } from "../Actors/character.js";
import { Spider } from "../Actors/spiders.js";
import { ClosedPortalClass, Portal } from "../Actors/portal.js";
import * as ex from "excalibur";
import { PlatformLvlOne, PlatformLvlTwo } from "../Actors/platform.js";
import { SpikesLvlTwo } from "../Actors/spikes.js";
import { Flower } from "../Actors/flower.js";
import { Resources, ResourceLoader } from '../resources.js'


export class LevelTwo extends Scene {
    game
    score
    character
    constructor(score) {
        super({
            width: 854,
            height: 600
        })
        this.score = score
    }

    onInitialize(_engine) {
        super.onInitialize(_engine);
        this.game = _engine
    }

    onActivate(_context) {
        super.onActivate(_context);
        this.score.deleteScore()
        this.bgMusic = Resources.Music
        this.bgMusic.loop = true
        this.bgMusic.play()
        this.startLevelTwo()
    }

    startLevelTwo() {

        this.actors.forEach((actor) => actor.kill());

        const background = new BackgroundLvlTwo(-550, 0)
        this.add(background)

        // Right invisible wall
        let leftWall = new Actor({
            pos: new Vector(-1, 0),
            width: 30,
            height: 9000000000,
            collisionType: CollisionType.Fixed
        })
        // Left invisible wall
        let rightWall = new Actor({
            pos: new Vector(8640, 0),
            width: 30,
            height: 9000000000,
            collisionType: CollisionType.Fixed
        })

        this.add(leftWall);
        this.add(rightWall)

        // Platform on the bottom
        const platform1 = new PlatformLvlTwo(-550, 580, 10000, 20, ex.Color.Green);
        platform1.scale = new ex.Vector(10.9, 1)
        this.add(platform1);



        const spikes1 = new SpikesLvlTwo(475, 200)
        spikes1.rotation = Math.PI
        spikes1.actions.repeatForever(repeatContext => {
            repeatContext.moveTo(475, 200, 120)
            repeatContext.moveTo(475, 580, 120)
        })
        this.add(spikes1)
        const platform2 = new PlatformLvlTwo(200, 130)
        platform2.actions.repeatForever(repeatContext => {
            repeatContext.moveTo(200, 130, 120)
            repeatContext.moveTo(200, 510, 120)
        })
        this.add(platform2)

        this.character = new Maincharacter(this.score)
        this.add(this.character)
        this.character.on('precollision', (event) => this.onPreCollision(event))

        const flower1 = new Flower(340, 520, this.score)
        this.add(flower1)
        const flower2 = new Flower(240, 520, this.score)
        this.add(flower2)

        const spikes2 = new SpikesLvlTwo(480, 550)
        this.add(spikes2)
        const spikes3 = new SpikesLvlTwo(750, 550)
        this.add(spikes3)
        const spikes4 = new SpikesLvlTwo(1020, 550)
        this.add(spikes4)
        const spikes5 = new SpikesLvlTwo(1290, 550)
        this.add(spikes5)
        const spikes6 = new SpikesLvlTwo(1560, 550)
        this.add(spikes6)
        const spikes7 = new SpikesLvlTwo(1830, 550)
        this.add(spikes7)
        const spikes8 = new SpikesLvlTwo(2100, 550)
        this.add(spikes8)
        const spikes9 = new SpikesLvlTwo(2370, 550)
        this.add(spikes9)
        const spikes10 = new SpikesLvlTwo(2640, 550)
        this.add(spikes10)
        const spikes11 = new SpikesLvlTwo(2910, 550)
        this.add(spikes11)
        const spikes12 = new SpikesLvlTwo(3180, 550)
        this.add(spikes12)
        const spikes13 = new SpikesLvlTwo(3450, 550)
        this.add(spikes13)
        const spikes14 = new SpikesLvlTwo(3720, 550)
        this.add(spikes14)
        const spikes15 = new SpikesLvlTwo(3990, 550)
        this.add(spikes15)
        const spikes16 = new SpikesLvlTwo(4260, 550)
        this.add(spikes16)
        const spikes17 = new SpikesLvlTwo(4530, 550)
        this.add(spikes17)
        const spikes18 = new SpikesLvlTwo(4800, 550)
        this.add(spikes18)
        const spikes19 = new SpikesLvlTwo(5070, 550)
        this.add(spikes19)
        const spikes20 = new SpikesLvlTwo(5340, 550)
        this.add(spikes20)
        const spikes21 = new SpikesLvlTwo(5610, 550)
        this.add(spikes21)
        const spikes22 = new SpikesLvlTwo(5880, 550)
        this.add(spikes22)
        const spikes23 = new SpikesLvlTwo(6150, 550)
        this.add(spikes23)
        const spikes24 = new SpikesLvlTwo(6420, 550)
        this.add(spikes24)
        const spikes25 = new SpikesLvlTwo(6690, 550)
        this.add(spikes25)
        const spikes26 = new SpikesLvlTwo(6960, 550)
        this.add(spikes26)
        const spikes27 = new SpikesLvlTwo(7230, 550)
        this.add(spikes27)
        const spikes28 = new SpikesLvlTwo(7500, 550)
        this.add(spikes28)
        const spikes29 = new SpikesLvlTwo(7770, 550)
        this.add(spikes29)
        const spikes30 = new SpikesLvlTwo(8040, 550)
        this.add(spikes30)

        const platform3 = new PlatformLvlTwo(600, 400)
        this.add(platform3)

        const spider1 = new Spider(640, 360)
        spider1.actions.repeatForever(repeatContext => {
            repeatContext.moveTo(640, 360, 100)
            repeatContext.moveTo(840, 360, 100)
        })
        this.add(spider1)

        const platform4 = new PlatformLvlTwo(700, 200)
        this.add(platform4)
        const spider2 = new Spider(740, 160)
        spider2.actions.repeatForever(repeatContext => {
            repeatContext.moveTo(740, 160, 120)
            repeatContext.moveTo(940, 160, 120)
        })
        this.add(spider2)

        const platform5 = new PlatformLvlTwo(1050, 450)
        this.add(platform5)
        const spider3 = new Spider(1090, 410)
        spider3.actions.repeatForever(repeatContext => {
            repeatContext.moveTo(1090, 410, 150)
            repeatContext.moveTo(1290, 410, 150)
        })
        this.add(spider3)

        const platform6 = new PlatformLvlTwo(1500, 400)
        this.add(platform6)
        const flower3 = new Flower(1520, 340, this.score)
        this.add(flower3)
        const flower4 = new Flower(1600, 340, this.score)
        this.add(flower4)
        const flower5 = new Flower(1680, 340, this.score)
        this.add(flower5)

        const platform7 = new PlatformLvlTwo(1050, 200)
        this.add(platform7)

        const platform8 = new PlatformLvlTwo(1400, 200)
        this.add(platform8)

        const platform9 = new PlatformLvlTwo(1900, 200)
        platform9.actions.repeatForever(repeatContext => {
            repeatContext.moveTo(1800, 200, 170)
            repeatContext.moveTo(2900, 200, 170)
        })
        this.add(platform9)

        const platform10 = new PlatformLvlTwo(2400, 350)
        this.add(platform10)
        const spider4 = new Spider(2440, 310)
        spider4.actions.repeatForever(repeatContext => {
            repeatContext.moveTo(2440, 310, 100)
            repeatContext.moveTo(2640, 310, 100)
        })
        this.add(spider4)

        const platform11 = new PlatformLvlTwo(2900, 350)
        this.add(platform11)
        const spider5 = new Spider(2940, 310)
        spider5.actions.repeatForever(repeatContext => {
            repeatContext.moveTo(2940, 310, 100)
            repeatContext.moveTo(3140, 310, 100)
        })
        this.add(spider5)

        const platform12 = new PlatformLvlTwo(2100, 50)
        this.add(platform12)
        const flower6 = new Flower(2170, -10, this.score)
        this.add(flower6)

        const platform13 = new PlatformLvlTwo(3100, 50)
        this.add(platform13)
        const flower7 = new Flower(3200, -10, this.score)
        this.add(flower7)

        const platform14 = new PlatformLvlTwo(3500, 400)
        this.add(platform14)

        const platform15 = new PlatformLvlTwo(3900, 400)
        this.add(platform15)

        const platform16 = new PlatformLvlTwo(4200, 450)
        platform16.actions.repeatForever(repeatContext => {
            repeatContext.moveTo(4200, 450, 150)
            repeatContext.moveTo(5000, 450, 150)
        })
        this.add(platform16)

        const platform17 = new PlatformLvlTwo(5300, 200)
        platform17.actions.repeatForever(repeatContext => {
            repeatContext.moveTo(5300, 100, 130)
            repeatContext.moveTo(5300, 500, 130)
        })
        this.add(platform17)

        const platform18 = new PlatformLvlTwo(5500, 200)
        platform18.actions.repeatForever(repeatContext => {
            repeatContext.moveTo(5500, 200, 180)
            repeatContext.moveTo(6500, 200, 180)
        })
        this.add(platform18)

        const platform19 = new PlatformLvlTwo(6900, 400)
        this.add(platform19)

        const platform20 = new PlatformLvlTwo(7400, 300)
        this.add(platform20)

        const platform21 = new PlatformLvlTwo(7800, 200)
        this.add(platform21)


        const platform22 = new PlatformLvlTwo(8100, 200)
        this.add(platform22)

        //Score label
        this.scoreLabel = new ex.Label({
            text: `Score: 0`,
            font: new ex.Font({
                unit: ex.FontUnit.Px,
                size: 20,
                color: ex.Color.Black
            })
        })
        this.add(this.scoreLabel)


        const closedPortal = new ClosedPortalClass(8500, 350)
        this.add(closedPortal)

    }
    onPreCollision(event) {
        let otherActor = event.other
        if (otherActor instanceof Portal) {
            this.game.goToScene('VictoryTwo')
            this.bgMusic.pause()
        }
    }

    onPreUpdate() {
        this.scoreLabel.text = `Score: ${this.score.getScore()}`
    }
    onPostUpdate(_engine, _delta) {
        super.onPostUpdate(_engine, _delta);
        //this.scoreLabel.pos = this.character.pos.clone().add(new Vector(this.character.width, -80));
        this.scoreLabel.pos = this.character.pos.add(new ex.Vector(-30, -100))

        const allSpiders = this.actors.filter((actor) => actor instanceof Spider);
        const allSpidersDead = allSpiders.every((egg) => egg.isKilled());
        // DEBUGGING
        // const allSpidersDead = true

        if (allSpidersDead === true) {
            // Remove ClosedPortal if it exists
            const closedPortal = this.actors.find((actor) => actor instanceof ClosedPortalClass);
            if (closedPortal) {
                closedPortal.kill();
            }

            // Add Portal if it doesn't exist
            const portal = this.actors.find((actor) => actor instanceof Portal);
            if (!portal) {
                const newPortal = new Portal(8500, 350);
                this.add(newPortal);
            }
        }

        const mainCharacter = this.actors.find((actor) => actor instanceof Maincharacter);

        if (!mainCharacter) {
            this.game.goToScene('FailTwo')
            this.bgMusic.pause()
        }
    }


    onDeactivate() {
        this.bgMusic.pause()
    }
}