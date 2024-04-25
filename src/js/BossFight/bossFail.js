import { Resource, Scene, Vector, Keys } from "excalibur";
import { TryAgainButton } from "../Actors/button.js";
import { BossFailVicBackground } from "../Scenes/failVictoryActors/background.js";
import { FailText } from "../Scenes/failVictoryActors/text.js";
import { Resources } from '../resources.js';

export class FailBoss extends Scene {
    game

    onInitialize(_engine) {
        this.game = _engine
        // gamepad
        if (this.game.gamepad) {
            this.game.gamepad.on('button', () => {
                this.failMusic.pause()
                this.game.goToScene('bossFight')
            })
        }
    }

    onActivate(_context) {
        super.onActivate(_context);
        this.failMusic = Resources.FailMusic
        this.failMusic.loop = true
        this.failMusic.play()
        this.startFailBoss()
    }

    startFailBoss() {

        this.actors.forEach((actor) => actor.kill());

        let background = new BossFailVicBackground(0, 0)
        this.add(background)

        let fail = new FailText(screen.width / 2 - 200, 150)
        this.add(fail)

        let tryAgain = new TryAgainButton()
        tryAgain.pos = new Vector(570, 400)
        tryAgain.on('pointerup', () => {
            this.failMusic.pause()
            this.game.goToScene('bossFight')
        })
        this.add(tryAgain)
    }

    onPreUpdate(_engine, delta) {
        if (this.game.input.keyboard.wasPressed(Keys.Space)) {
            this.failMusic.pause()
            this.game.goToScene('bossFight')
        }
    }
}





