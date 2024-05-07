import { Scene, Vector, Keys, Buttons, Input } from "excalibur";
import { StartButton } from "../Actors/button.js";
import { CutsceneOneBackground } from "./actors/background.js";
import { CsBeeBaby, CsBeeHappy, CsBeeMad, CsSpider } from "./actors/characters.js";
import { CsTextBox } from "./actors/text.js";
import { Resources } from "../resources.js";
import * as ex from "excalibur";

export class StartCutscene extends Scene {
    game
    texts

    beeHappy
    beeMad
    beeBabyOne
    beeBabyTwo
    beeBabyThree
    spider


    constructor() {
        super();
    }
    onInitialize(_engine) {
        super.onInitialize(_engine);
        this.game = _engine

    }
    onActivate(_context) {
        super.onActivate(_context);
        this.startCutScene()
    }
    startCutScene() {
        console.log('cutscene start')
        this.actors.forEach((actor) => actor.kill());

        let background = new CutsceneOneBackground(0, 0)
        this.add(background)

        this.texts = [
            new CsTextBox(Resources.CsStartOne.toSprite()),
            new CsTextBox(Resources.CsStartTwo.toSprite()),
            new CsTextBox(Resources.CsStartThree.toSprite()),
            new CsTextBox(Resources.CsStartFour.toSprite()),
            new CsTextBox(Resources.CsStartFive.toSprite()),
            // Add more text instances as needed
        ];
        this.currentTextIndex = 0;
        this.add(this.texts[this.currentTextIndex]);


        // this.game.input.keyboard.on("press", (evt) => {
        //     if (evt.key === Keys.Space) {
        //         this.changeElements()
        //     }
        // })
        // gamepad todo test
        // if (this.game.gamepad) {
        //     this.game.gamepad.on('button', () => this.changeElements())
        // }

        this.beeHappy = new CsBeeHappy(200, 200)
        this.add(this.beeHappy)

        this.beeBabyOne = new CsBeeBaby(150, 200)
        this.add(this.beeBabyOne)

        this.beeBabyTwo = new CsBeeBaby(170, 130)
        this.add(this.beeBabyTwo)

        this.beeBabyThree = new CsBeeBaby(220, 120)
        this.add(this.beeBabyThree)

    }
    onPreUpdate(engine, delta) {
        if (engine.input.keyboard.wasPressed(Keys.Space)) {
            this.changeElements()
        }
        if (engine.input.gamepads.at(0)?.wasButtonPressed(Buttons.Face1)) {
            console.log("start cutscene button pressed")
            this.changeElements()
        }
    }

    changeElements() {
        if (this.currentTextIndex < this.texts.length - 1) {
            this.texts[this.currentTextIndex].kill();
            this.currentTextIndex++;
            this.add(this.texts[this.currentTextIndex]);
        } else if (this.currentTextIndex === this.texts.length - 1) {
            this.texts[this.currentTextIndex].kill();
            this.currentTextIndex++;
            let start = new StartButton();
            start.pos = new Vector(screen.width / 2 - 200, 400);
            start.on("pointerup", () => {
                this.game.goToScene("LevelOne");
            });
            this.add(start);
            this.beeMad.actions.moveTo(1300, 1000, 400)
        } else if (this.currentTextIndex === 5){
            this.game.goToScene("LevelOne");
        }
        
        if (this.currentTextIndex === 1) {
            this.beeHappy.kill()
            this.beeMad = new CsBeeMad(200, 200)
            this.add(this.beeMad)

            this.spider = new CsSpider(1000, 300)
            this.spider.actions.moveTo(850, 300, 200)
            this.add(this.spider)


        } else if (this.currentTextIndex === 2) {
            this.spider.actions.moveTo(1600, 300, 200)

        } else if (this.currentTextIndex === 3) {
            this.beeMad.actions.moveTo(600, 200, 400)
            this.beeBabyOne.actions.moveTo(-100, 170, 200)
            this.beeBabyTwo.actions.moveTo(-100, 100, 200)
            this.beeBabyThree.actions.moveTo(- 100, 90, 200)

        } else if (this.currentTextIndex === 5) {
            // this.beeMad.actions.moveTo(1300, 1000, 400)
        }

    }
}