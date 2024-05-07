import { Scene, Vector, Keys, Buttons } from "excalibur";
import {StartButton} from "../Actors/button.js";
import {CsBeeHappy, CsBeeMad, CsSpider} from "./actors/characters.js";
import {CsTextBox} from "./actors/text.js";
import {Resources} from "../resources.js";
import {CutsceneBossBackground, CutsceneOneBackground} from "./actors/background.js";
import * as ex from "excalibur"

export class ThirdCutscene extends Scene {
    game
    texts

    beeHappy
    beeMad

    spider
    constructor() {
        super();
    }
    onInitialize(_engine) {
        super.onInitialize(_engine);
        this.game = _engine
        // gamepad
        // if (this.game.gamepad) {
        //     this.game.gamepad.on('button', () => {
        //         this.changeElements()
        //     })
        // }
    }
    onActivate(_context) {
        super.onActivate(_context);
        this.startSecondCutScene()
    }
    startSecondCutScene(){

        let background = new CutsceneBossBackground(-100,0)
        this.add(background)

        this.texts = [
            new CsTextBox(Resources.CsThirdOne.toSprite()),
            new CsTextBox(Resources.CsThirdTwo.toSprite()),
            new CsTextBox(Resources.CsThirdThree.toSprite()),

        ];
        this.currentTextIndex = 0;
        this.add(this.texts[this.currentTextIndex]);

        this.beeHappy = new CsBeeHappy(200, 200)
        this.add(this.beeHappy)

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
            start.pos = new Vector(screen.width/2-200, 400);
            start.on("pointerup", () => {
                this.game.goToScene("bossFight");
            });
            this.add(start);
        } else {
            this.game.goToScene('bossFight')
        }

        
        if (this.currentTextIndex === 1) {
            this.beeHappy.kill()
            this.beeMad = new CsBeeMad(200,200)
            this.add(this.beeMad)

            this.spider = new CsSpider(1000, 300)
            this.spider.actions.moveTo(750,300, 200)
            this.add(this.spider)
        } else if (this.currentTextIndex === 2) {
            this.spider.actions.moveTo(1400,300, 200)
        } 

    }

    onPreUpdate(engine, delta) {
        if (engine.input.keyboard.wasPressed(Keys.Space)) {
            this.changeElements()
        }
        if (engine.input.gamepads.at(0)?.wasButtonPressed(Buttons.Face1)) {
            this.changeElements()
        }
    }
}