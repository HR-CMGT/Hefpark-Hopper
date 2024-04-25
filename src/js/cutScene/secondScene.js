import {Scene, Vector, Keys} from "excalibur";
import {StartButton} from "../Actors/button.js";
import {CutsceneThreeBackground, CutsceneTwoBackground} from "./actors/background.js";
import { Resources, ResourceLoader } from '../resources.js'
import {CsBeeMad} from "./actors/characters.js"
import {CsTextBox} from "./actors/text.js"
import * as ex from "excalibur";

export class SecondCutscene extends Scene {
    game
    texts

    constructor() {
        super();
    }

    onInitialize(_engine) {
        super.onInitialize(_engine);
        this.game = _engine
        // gamepad
        if (this.game.gamepad) {
            this.game.gamepad.on('button', () => {
                this.changeElements()
            })
        }
    }

    onActivate(_context) {
        super.onActivate(_context);
        this.startSecondCutScene()
    }



    startSecondCutScene() {
        let background = new CutsceneThreeBackground(-50, 0)
        this.add(background)

        const bee = new CsBeeMad()
        bee.pos = new Vector(300, 100)
        bee.flipHorizontal = true;
        this.add(bee)


        this.texts = [
            new CsTextBox(Resources.textSecondScene.toSprite()),
            // Add more text instances as needed
        ];
        this.currentTextIndex = 0;
        this.add(this.texts[this.currentTextIndex]);
    }

    onPreUpdate(engine, delta) {
        if (engine.input.keyboard.wasPressed(Keys.Space)) {
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
                this.game.goToScene('LevelThree')
            });
            this.add(start);
        } else {
            this.game.goToScene('LevelThree')
        }
    }
}