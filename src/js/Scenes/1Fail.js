import { Scene, Vector, Keys } from "excalibur"
import { StartButton, TryAgainButton } from "../Actors/button.js";
import { CutsceneOneBackground } from "../cutScene/actors/background.js";
import { OneFailVicBackground } from "./failVictoryActors/background.js";
import { FailText } from "./failVictoryActors/text.js";
import { Resources, ResourceLoader } from '../resources.js'

export class FailOne extends Scene {

    game
    constructor() {
        super();
    }
    onInitialize(_engine) {
        super.onInitialize(_engine);
        this.game = _engine
        // gamepad
        if (this.game.gamepad) {
            this.game.gamepad.on('button', () => this.game.goToScene('LevelOne'))
        }
    }
    onActivate(_context) {
        super.onActivate(_context);
        this.failMusic = Resources.FailMusic
        this.failMusic.loop = true
        this.failMusic.play()
        this.startFailOne()
    }
    startFailOne() {
        this.actors.forEach((actor) => actor.kill());
        let background = new OneFailVicBackground(-100, 0)
        this.add(background)

        // console.log(screen)
        let fail = new FailText(screen.width / 2 - 200, 150)
        this.add(fail)


        let tryAgain = new TryAgainButton()
        tryAgain.pos = new Vector(570, 450)
        tryAgain.on('pointerup', () => {
            this.failMusic.pause()
            this.game.goToScene('LevelOne')
        })
        this.add(tryAgain)
    }

    onPreUpdate(_engine, delta) {
        if (this.game.input.keyboard.wasPressed(Keys.Space)) {
            this.failMusic.pause()
            this.game.goToScene('LevelOne')
        }
    }
    onDeactivate() {
        this.failMusic.pause()
    }
}