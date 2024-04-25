import { Scene, Vector, Keys } from "excalibur";
import {StartButton} from "../Actors/button.js";
import {CutsceneStartEndBackground} from "./actors/background.js";
import {CsBeeBaby, CsBeeHappy, CsBeeMad, CsSpider, CsSpiderDead} from "./actors/characters.js";
import {CsTextBox} from "./actors/text.js";
import {Resources} from "../resources.js";
import * as ex from "excalibur";

export class BossScene extends Scene {
    game
    texts
    beeHappy
    beeBabyOne
    beeBabyTwo
    beeBabyThree
    spiderDead

    onInitialize(_engine) {
        this.game = _engine
    }

    onActivate(_context) {
        super.onActivate(_context);
        this.BosscutsceneMusic = Resources.BossCutsceneMusic
        this.BosscutsceneMusic.play()
        this.startCutScene()
    }

    startCutScene() {
        this.actors.forEach((actor) => actor.kill());
        let background = new CutsceneStartEndBackground(-100, 0)
        this.add(background)
        
        this.texts = [
            new CsTextBox(Resources.CsBossOne.toSprite()),
            new CsTextBox(Resources.CsBossTwo.toSprite()),
        ];
        this.currentTextIndex = 0;
        this.add(this.texts[this.currentTextIndex]);

        this.spiderDead = new CsSpiderDead(640, 360)
        this.add(this.spiderDead)

        this.beeHappy = new CsBeeHappy(200, 200)
        this.add(this.beeHappy)

        this.beeBabyOne = new CsBeeBaby(150, 200)
        this.add(this.beeBabyOne)

        this.beeBabyTwo = new CsBeeBaby(170, 130)
        this.add(this.beeBabyTwo)

        this.beeBabyThree = new CsBeeBaby(220, 120)
        this.add(this.beeBabyThree)

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
                this.game.goToScene('bossVictory')
            });
            this.add(start);
            if (this.currentTextIndex === 2) {
                this.spiderDead.actions.moveTo(1300, 800, 400)
            }
        } else {
            this.game.goToScene('bossVictory')
         }
    }

    onPreUpdate(engine, delta) {
        if (engine.input.keyboard.wasPressed(Keys.Space)) {
            this.changeElements()
        }
    }
}