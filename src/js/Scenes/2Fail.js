import { Scene, Vector, Keys, Buttons } from "excalibur";
import { TryAgainButton } from "../Actors/button.js";
import { TwoFailVicBackground } from "./failVictoryActors/background.js";
import { FailText } from "./failVictoryActors/text.js";
import { Resources, ResourceLoader } from '../resources.js'

export class FailTwo extends Scene {
    game
    constructor() {
        super();
    }
    onInitialize(_engine) {
        super.onInitialize(_engine);
        this.game = _engine
        // gamepad
        // if (this.game.gamepad) {
        //     this.game.gamepad.on('button', () => {
        //         this.failMusic.pause()
        //         this.game.goToScene('LevelTwo')
        //     })
        // }
    }
    onActivate(_context) {
        super.onActivate(_context);
        this.failMusic = Resources.FailMusic
        this.failMusic.loop = true
        this.failMusic.play()
        this.startFailTwo()
    }
    startFailTwo() {

        this.actors.forEach((actor) => actor.kill());
        let background = new TwoFailVicBackground(0, 0)
        this.add(background)
        let fail = new FailText(screen.width / 2 - 200, 150)
        this.add(fail)

        let tryAgain = new TryAgainButton()
        tryAgain.pos = new Vector(560, 450)
        tryAgain.on('pointerup', () => {
            this.failMusic.pause()
            this.game.goToScene('LevelTwo')
        })
        this.add(tryAgain)
    }

    onPreUpdate(_engine, delta) {
        if (this.game.input.keyboard.wasPressed(Keys.Space)) {
            this.failMusic.pause()
            this.game.goToScene('LevelTwo')
        }
        if (_engine.input.gamepads.at(0)?.isButtonPressed(Buttons.Face1)) {
            this.failMusic.pause()
            this.game.goToScene('LevelTwo')
        }
    }
    onDeactivate() {
        this.failMusic.pause()
    }
}


