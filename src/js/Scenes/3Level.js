// import '../css/style.css'
import * as ex from "excalibur"
import { Resources, ResourceLoader } from '../resources.js'
import { Maincharacter } from '../Actors/character.js'
import { PlatformLvlThree } from '../Actors/platform.js'
import { BackgroundLvlThree } from '../Actors/Background.js'
import { SpikesLvlThree } from "../Actors/spikes.js"
import { MainSpike } from "../Actors/spikes.js"
import { Spider } from "../Actors/spiders.js"
import { ClosedPortalClass, Portal } from "../Actors/portal.js"
import { Flower } from "../Actors/flower.js"
//import music from "../../sounds/bee..mp3"


export class LevelThree extends ex.Scene {
    game
    health
    score
    character
    constructor(score) {
        super({});
        this.score = score
    }

    onInitialize(_engine) {
        super.onInitialize(_engine);
        this.game = _engine
        this.health = 2
    }

    onActivate(_context) {
        this.score.deleteScore()
        super.onActivate(_context);
        this.bgMusic = Resources.Music
        this.bgMusic.loop = true
        this.bgMusic.play()
        this.startLevelThree()
    }

    startLevelThree() {
        this.actors.forEach((actor) => actor.kill());
        //Background image
        const backgroundthreeImage = Resources.BackgroundLvlThree.toSprite();
        const backgroundlvl3 = new BackgroundLvlThree(-550, 0, 200, 20, backgroundthreeImage);
        this.add(backgroundlvl3);

        // Right invisible wall
        let leftWall = new ex.Actor({
            pos: ex.vec(-1, 0),
            width: 30,
            height: 9000000000,
            collisionType: ex.CollisionType.Fixed
        })

        // Left invisible wall
        let rightWall = new ex.Actor({
            pos: ex.vec(8500, 0),
            width: 30,
            height: 9000000000,
            collisionType: ex.CollisionType.Fixed
        })

        // Roof
        let foundation = new ex.Actor({
            pos: ex.vec(0, 600),
            width: 10000,
            height: 10,
            collisionType: ex.CollisionType.Fixed
        })
        this.add(foundation)
        this.add(leftWall);
        this.add(rightWall)

        // Platform on the bottom
        const platform1 = new PlatformLvlThree(0, 580, 10000, 20, ex.Color.Green);
        platform1.scale = new ex.Vector(10.9, 1)
        this.add(platform1);

        //information for making a level
        // width spikes = 465

        // const platform5 = new PlatformLvlOne(0, 50, 925, 155);
        // this.add(platform5);
        // let spider1 = new Spider()
        // spider1.pos = new ex.Vector(100, 0)
        // spider1.actions.repeatForever((repeatCtx) => {
        //     repeatCtx.moveTo(50, 0, 100)
        //     repeatCtx.moveTo(230, 0, 100)
        // })
        // this.add(spider1)

        // const platform2 = new PlatformLvlOne(0, 70, 925, 155);
        // this.add(platform2);
        // const flower1 = new Flower(100, 0, this.score);
        // this.add(flower1);

        // const movingplatform1 = new PlatformLvlThree()
        // movingplatform1.pos = new ex.Vector(500, 300)
        // movingplatform1.actions.repeatForever((repeatCtx) => {
        //     repeatCtx.rotateBy(Math.PI / 2, Math.PI, ex.RotationType.CounterClockwise)
        //     repeatCtx.rotateBy(Math.PI / 2, Math.PI, ex.RotationType.CounterClockwise)
        // })
        // this.add(movingplatform1)


        // game route


        const platform2 = new PlatformLvlThree(0, 200, 925, 155);
        this.add(platform2);

        let spider1 = new Spider()
        spider1.pos = new ex.Vector(100, 150)
        spider1.actions.repeatForever((repeatCtx) => {
            repeatCtx.moveTo(50, 150, 100)
            repeatCtx.moveTo(230, 150, 100)
        })
        this.add(spider1)

        const platform4 = new PlatformLvlThree(200, 400, 925, 155);
        this.add(platform4);

        const flower1 = new Flower(300, 330, this.score);
        this.add(flower1);

        const flower2 = new Flower(300, 510, this.score);
        this.add(flower2);

        const platform5 = new PlatformLvlThree(400, 200, 925, 155);
        this.add(platform5);

        let spider2 = new Spider()
        spider2.pos = new ex.Vector(500, 150)
        spider2.actions.repeatForever((repeatCtx) => {
            repeatCtx.moveTo(450, 150, 100)
            repeatCtx.moveTo(630, 150, 100)
        })
        this.add(spider2)

        const spikes1 = new SpikesLvlThree(800, 500);
        this.add(spikes1);

        const platform7 = new PlatformLvlThree(1000, 250, 925, 155);
        this.add(platform7);

        let spider3 = new Spider()
        spider3.pos = new ex.Vector(1100, 200)
        spider3.actions.repeatForever((repeatCtx) => {
            repeatCtx.moveTo(1050, 200, 100)
            repeatCtx.moveTo(1230, 200, 100)
        })
        this.add(spider3)

        const spikes2 = new SpikesLvlThree(1265, 500);
        this.add(spikes2);

        const platform8 = new PlatformLvlThree(1600, 300, 925, 155);
        this.add(platform8);

        const spikes3 = new SpikesLvlThree(1730, 500);
        this.add(spikes3);

        const platform9 = new PlatformLvlThree(2200, 350, 925, 155);
        this.add(platform9);

        let spider4 = new Spider()
        spider4.pos = new ex.Vector(2300, 300)
        spider4.actions.repeatForever((repeatCtx) => {
            repeatCtx.moveTo(2250, 300, 100)
            repeatCtx.moveTo(2430, 300, 100)
        })
        this.add(spider4)

        const spikes4 = new SpikesLvlThree(2195, 500);
        this.add(spikes4);

        const platform10 = new PlatformLvlThree(2800, 350, 925, 155);
        this.add(platform10);

        const flower3 = new Flower(2900, 280, this.score);
        this.add(flower3);

        const platform11 = new PlatformLvlThree(3000, 200, 925, 155);
        this.add(platform11);

        let spider5 = new Spider()
        spider5.pos = new ex.Vector(3100, 150)
        spider5.actions.repeatForever((repeatCtx) => {
            repeatCtx.moveTo(3050, 150, 100)
            repeatCtx.moveTo(3230, 150, 100)
        })
        this.add(spider5)

        const platform12 = new PlatformLvlThree(3200, 50, 925, 155);
        this.add(platform12);

        const flower4 = new Flower(3300, -20, this.score);
        this.add(flower4);

        const spikes5 = new SpikesLvlThree(3200, 500);
        this.add(spikes5);

        const spikes6 = new SpikesLvlThree(3665, 500);
        this.add(spikes6);

        const platform13 = new PlatformLvlThree(3800, 350, 925, 155);
        platform13.actions.rotateBy(Math.PI / 2, Math.PI, ex.RotationType.CounterClockwise);
        // platform13.rotation = (20 * Math.PI / 180); // Rotate by 180 degrees
        this.add(platform13);

        const flower5 = new Flower(3760, 280, this.score);
        this.add(flower5);

        const spikes7 = new SpikesLvlThree(4130, 500);
        this.add(spikes7);

        const platform131 = new PlatformLvlThree(4130, 350, 925, 155);
        platform131.actions.rotateBy(Math.PI / 2, Math.PI, ex.RotationType.CounterClockwise);
        // platform13.rotation = (20 * Math.PI / 180); // Rotate by 180 degrees
        this.add(platform131);

        const platform132 = new PlatformLvlThree(4300, 350, 925, 155);
        platform132.actions.rotateBy(Math.PI / 2, Math.PI, ex.RotationType.CounterClockwise);
        // platform13.rotation = (20 * Math.PI / 180); // Rotate by 180 degrees
        this.add(platform132);

        const spikes71 = new SpikesLvlThree(4595, 500);
        this.add(spikes71);

        const platform133 = new PlatformLvlThree(4650, 350, 925, 155);
        platform133.actions.rotateBy(Math.PI / 2, Math.PI, ex.RotationType.CounterClockwise);
        // platform13.rotation = (20 * Math.PI / 180); // Rotate by 180 degrees
        this.add(platform133);

        const platform134 = new PlatformLvlThree(4850, 400, 925, 155);
        platform134.actions.rotateBy(Math.PI / 2, Math.PI, ex.RotationType.CounterClockwise);
        // platform13.rotation = (20 * Math.PI / 180); // Rotate by 180 degrees
        this.add(platform134);

        const platform14 = new PlatformLvlThree(5400, 450, 925, 155);
        this.add(platform14);

        const platform141 = new PlatformLvlThree(5400, 500, 925, 155);
        platform141.actions.rotateBy(Math.PI / 2, Math.PI, ex.RotationType.CounterClockwise);
        this.add(platform141);

        const flower6 = new Flower(5490, 510, this.score);
        this.add(flower6);

        const flower7 = new Flower(5560, 510, this.score);
        this.add(flower7);

        const platform15 = new PlatformLvlThree(5550, 400, 925, 155);
        this.add(platform15);

        const platform16 = new PlatformLvlThree(5700, 350, 925, 155);
        this.add(platform16);

        let spider6 = new Spider()
        spider6.pos = new ex.Vector(5775, 530)
        spider6.actions.repeatForever((repeatCtx) => {
            repeatCtx.moveTo(5725, 530, 100)
            repeatCtx.moveTo(5955, 530, 100)
        })
        this.add(spider6)

        const platform17 = new PlatformLvlThree(5850, 300, 925, 155);
        this.add(platform17);

        const platform18 = new PlatformLvlThree(6000, 250, 925, 155);
        this.add(platform18);

        const platform19 = new PlatformLvlThree(6150, 200, 925, 155);
        this.add(platform19);

        const platform20 = new PlatformLvlThree(6300, 150, 925, 155);
        this.add(platform20);

        let spider7 = new Spider()
        spider7.pos = new ex.Vector(6400, 100)
        spider7.actions.repeatForever((repeatCtx) => {
            repeatCtx.moveTo(6350, 100, 100)
            repeatCtx.moveTo(6530, 100, 100)
        })
        this.add(spider7)

        let platform22 = new PlatformLvlThree(6300, 120, 925, 155)
        platform22.actions.repeatForever((repeatCtx) => {
            repeatCtx.moveTo(6300, 120, 70)
            repeatCtx.moveTo(6300, 530, 70)
        })
        this.add(platform22)

        const spikes8 = new SpikesLvlThree(6550, 200, 925, 155);
        spikes8.scale = new ex.Vector(0.25, 0.25)
        spikes8.rotation = Math.PI
        spikes8.actions.repeatForever((repeatCtx) => {
            repeatCtx.moveTo(6550, 200, 70)
            repeatCtx.moveTo(6550, 610, 70)
        })
        this.add(spikes8);


        const spikes9 = new SpikesLvlThree(6800, 500);
        this.add(spikes9);

        const platform221 = new PlatformLvlThree(6800, 450, 925, 155);
        platform221.actions.rotateBy(Math.PI / 2, Math.PI, ex.RotationType.CounterClockwise);
        // platform13.rotation = (20 * Math.PI / 180); // Rotate by 180 degrees
        this.add(platform221);

        const flower10 = new Flower(6755, 280, this.score);
        this.add(flower10);

        const spikes10 = new SpikesLvlThree(7265, 500);
        this.add(spikes10);

        const platform222 = new PlatformLvlThree(7100, 450, 925, 155);
        platform222.actions.rotateBy(Math.PI / 2, Math.PI, ex.RotationType.CounterClockwise);
        // platform13.rotation = (20 * Math.PI / 180); // Rotate by 180 degrees
        this.add(platform222);

        const platform223 = new PlatformLvlThree(7300, 400, 925, 155);
        platform223.actions.rotateBy(Math.PI / 2, Math.PI, ex.RotationType.CounterClockwise);
        // platform13.rotation = (20 * Math.PI / 180); // Rotate by 180 degrees
        this.add(platform223);

        const spikes11 = new SpikesLvlThree(7730, 500);
        this.add(spikes11);

        const platform224 = new PlatformLvlThree(7550, 350, 925, 155);
        platform224.actions.rotateBy(Math.PI / 2, Math.PI, ex.RotationType.CounterClockwise);
        // platform13.rotation = (20 * Math.PI / 180); // Rotate by 180 degrees
        this.add(platform224);

        const platform225 = new PlatformLvlThree(7800, 400, 925, 155);
        platform225.actions.rotateBy(Math.PI / 2, Math.PI, ex.RotationType.CounterClockwise);
        // platform13.rotation = (20 * Math.PI / 180); // Rotate by 180 degrees
        this.add(platform225);

        const platform226 = new PlatformLvlThree(7800, 400, 925, 155);
        platform226.actions.rotateBy(Math.PI / 2, Math.PI, ex.RotationType.CounterClockwise);
        // platform13.rotation = (20 * Math.PI / 180); // Rotate by 180 degrees
        this.add(platform226);

        const platform23 = new PlatformLvlThree(8000, 450, 925, 155);
        this.add(platform23);

        const flower8 = new Flower(8050, 380, this.score);
        this.add(flower8);

        const platform24 = new PlatformLvlThree(8030, 300, 925, 155);
        this.add(platform24);

        const flower9 = new Flower(8080, 230, this.score);
        this.add(flower9);

        const platform25 = new PlatformLvlThree(8060, 150, 925, 155);
        this.add(platform25);

        let spider8 = new Spider()
        spider8.pos = new ex.Vector(8160, 100)
        spider8.actions.repeatForever((repeatCtx) => {
            repeatCtx.moveTo(8110, 100, 100)
            repeatCtx.moveTo(8290, 100, 100)
        })
        this.add(spider8)

        //Portal
        let portal = new ClosedPortalClass(8300, 350)
        this.add(portal)

        // Adding bee to the game
        this.character = new Maincharacter(this.score)
        this.character.on('precollision', (event) => this.onPreCollision(event))
        // player.anchor = new ex.Vector(5, 25)
        this.add(this.character)


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
    }

    onPreCollision(event) {
        let otherActor = event.other
        if (otherActor instanceof Portal) {
            this.bgMusic.pause()
            this.game.goToScene('VictoryThree')
        }
    }

    onPreUpdate() {
        this.scoreLabel.text = `Score: ${this.score.getScore()}`
    }

    onPostUpdate(_engine, _delta) {
        super.onPostUpdate(_engine, _delta);
        //this.scoreLabel.pos = this.character.pos.clone().add(new ex.Vector(this.character.width, -80))
        this.scoreLabel.pos = this.character.pos.add(new ex.Vector(-30, -100))
        const mainCharacter = this.actors.find((actor) => actor instanceof Maincharacter);

        if (!mainCharacter) {
            this.game.goToScene('FailThree')
            this.bgMusic.pause()
        }

        const allSpiders = this.actors.filter((actor) => actor instanceof Spider);
        const allSpidersDead = allSpiders.every((egg) => egg.isKilled());

        if (allSpidersDead === true) {
            // Remove ClosedPortal if it exists
            const closedPortal = this.actors.find((actor) => actor instanceof ClosedPortalClass);
            if (closedPortal) {
                closedPortal.kill();
            }

            // Add Portal if it doesn't exist
            const portal = this.actors.find((actor) => actor instanceof Portal);
            if (!portal) {
                const newPortal = new Portal(8300, 350);
                this.add(newPortal);
            }
        }
    }

}

// import {Scene} from "excalibur";
// import {Scene, Vector} from "excalibur";
// import {GameOverButton, NextLvlButton} from "../Actors/button.js";

// export class LevelThree extends Scene {
//     game
//     constructor() {
//         super();
//     }
//     onInitialize(_engine) {
//         super.onInitialize(_engine);
//         this.game = _engine
//     }
//     onActivate(_context) {
//         super.onActivate(_context);
//         this.startLevelThree()
//     }
//     startLevelThree(){
//         console.log('level three')

//         let gameOverButton = new GameOverButton()
//         gameOverButton.pos = new Vector(400, 500)
//         gameOverButton.on('pointerup', () => {
//             this.game.goToScene('FailThree')
//         })
//         this.add(gameOverButton)

//         let nextLvlButton = new NextLvlButton()
//         nextLvlButton.pos = new Vector(600, 500)
//         nextLvlButton.on('pointerup', () => {
//             this.game.goToScene('VictoryThree')
//         })
//         this.add(nextLvlButton)
//     }

//     onDeactivate(_context) {
//         super.onDeactivate(_context);



//     }
// } 