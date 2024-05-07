import { Scene, Vector, Keys, Buttons } from "excalibur";
import { TryAgainButton } from "../Actors/button.js";
import { FailText } from "./failVictoryActors/text.js";
import { ThreeFailVicBackground } from "./failVictoryActors/background.js";
import { Resources, ResourceLoader } from '../resources.js'

export class FailThree extends Scene {
    game
    constructor() {
        super();
    }
    onInitialize(_engine) {
        super.onInitialize(_engine);
        this.game = _engine

        // gamepad todo check of listener alleen in deze scene werkt
        // if (this.game.gamepad) {
        //     this.game.gamepad.on('button', () => {
        //         //console.log("you pressed the gamepad and will go to level three")
        //         this.failMusic.pause()
        //         this.game.goToScene('LevelThree')
        //     })
        // }
    }

    onActivate(_context) {
        super.onActivate(_context);
        this.failMusic = Resources.FailMusic
        this.failMusic.loop = true
        this.failMusic.play()
        this.startFailThree()
    }

    startFailThree() {

        this.actors.forEach((actor) => actor.kill());

        let background = new ThreeFailVicBackground(0, 0)
        this.add(background)

        let fail = new FailText(screen.width / 2 - 200, 150)
        this.add(fail)

        let tryAgain = new TryAgainButton()
        tryAgain.pos = new Vector(570, 440)
        tryAgain.on('pointerup', () => {
            this.game.goToScene('LevelThree')
            this.failMusic.pause()
        })
        this.add(tryAgain)
    }

    onPreUpdate(_engine, delta) {
        if (this.game.input.keyboard.wasPressed(Keys.Space)) {
            this.failMusic.pause()
            this.game.goToScene('LevelThree')
        }
        if (_engine.input.gamepads.at(0)?.isButtonPressed(Buttons.Face1)) {
            this.failMusic.pause()
            this.game.goToScene('LevelThree')
        }
    }

    onDeactivate() {
        this.failMusic.pause()
    }
}

