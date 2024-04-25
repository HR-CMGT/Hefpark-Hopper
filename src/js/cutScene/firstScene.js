import {Scene, Vector, Keys} from "excalibur";
import {StartButton} from "../Actors/button.js";
import {Resources, ResourceLoader } from '../resources.js'
import {CutsceneOneBackground, CutsceneTwoBackground} from "./actors/background.js";
import {CsBeeHappy} from "./actors/characters.js"
import {CsTextBox} from "./actors/text.js"
import * as ex from "excalibur";


export class FirstCutscene extends Scene {
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
        this.startFirstCutScene()
    }
    startFirstCutScene(){

        let background = new CutsceneTwoBackground(-10,0)
        this.add(background)

        const bee = new CsBeeHappy()
        bee.pos = new Vector(280, 100)
        this.add(bee)

        this.texts = [
            new CsTextBox(Resources.textFirstScene.toSprite()),
            // Add more text instances as needed
        ];
        this.currentTextIndex = 0;
        this.add(this.texts[this.currentTextIndex]);

    }

    onPreUpdate(engine, delta) {
        if (engine.input.keyboard.wasPressed(ex.Keys.Space)) {
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
            start.pos = new Vector(screen.width / 2 - 200, 450);
            start.on("pointerup", () => {
                this.game.goToScene('LevelTwo')
            });
            this.add(start);
        } else {
            this.game.goToScene('LevelTwo')
        }
    }

}
