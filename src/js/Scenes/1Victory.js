import { Scene, Vector, Font, Label, FontUnit, Color, Keys } from "excalibur";
import { Resources, ResourceLoader } from '../resources.js'
import { NextLvlButton, TryAgainButton } from "../Actors/button.js";
import { OneFailVicBackground } from "./failVictoryActors/background.js";
import { VictoryText } from "./failVictoryActors/text.js";

export class VictoryOne extends Scene {
    game
    score
    constructor(score) {
        super();
        this.score = score
    }
    onInitialize(_engine) {
        super.onInitialize(_engine);
        this.game = _engine
        // gamepad
        if (this.game.gamepad) {
            this.game.gamepad.on('button', () => {
                this.victoryMusic.pause()
                this.game.goToScene('firstCutscene')
            })
        }
    }
    onActivate(_context) {
        super.onActivate(_context);
        this.victoryMusic = Resources.VictoryMusic
        this.victoryMusic.loop = true
        this.victoryMusic.play()
        this.startVictoryOne()
    }
    startVictoryOne() {
        this.actors.forEach((actor) => actor.kill());
        //console.log('victory one')
        let background = new OneFailVicBackground(-100, 0)
        this.add(background)

        let victory = new VictoryText(screen.width / 2 - 200, 150)
        this.add(victory)

        let label2 = new Label({
            text: `Score: ${this.game.score.getScore()}`,
            pos: new Vector(500,300),
            font: new Font({
                family: 'impact',
                size: 35,
                unit: FontUnit.Px,
                color: Color.White
            })
        })
        this.add(label2)

        let nextLvlButton = new NextLvlButton()
        nextLvlButton.pos = new Vector(570, 500)
        nextLvlButton.on('pointerup', () => {
            this.victoryMusic.pause()
            this.game.goToScene('firstCutscene')
        })
        this.add(nextLvlButton)
    }

    onPreUpdate(_engine, delta) {
        if (this.game.input.keyboard.wasPressed(Keys.Space)) {
            this.game.goToScene('firstCutscene')
        }
    }
}