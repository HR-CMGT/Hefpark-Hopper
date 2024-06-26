import { Color, Font, FontUnit, Label, Scene, Vector, Keys, Buttons } from "excalibur";
import { NextLvlButton } from "../Actors/button.js";
import { ThreeFailVicBackground, TwoFailVicBackground } from "./failVictoryActors/background.js";
import { VictoryText } from "./failVictoryActors/text.js";
import { Resources, ResourceLoader } from '../resources.js'

export class VictoryThree extends Scene {
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
        // if (this.game.gamepad) {
        //     this.game.gamepad.on('button', () => {
        //         this.victoryMusic.pause()
        //         this.game.goToScene('thirdCutScene')
        //     })
        // }
    }
    onActivate(_context) {
        super.onActivate(_context);
        this.victoryMusic = Resources.VictoryMusic
        this.victoryMusic.loop = true
        this.victoryMusic.play()
        this.startVictoryTwo()
    }
    startVictoryTwo() {

        this.actors.forEach((actor) => actor.kill());

        let background = new ThreeFailVicBackground(0, 0)
        this.add(background)

        let victory = new VictoryText(screen.width / 2 - 200, 150)
        this.add(victory)

        let label2 = new Label({
            text: `Score: ${this.score.getScore()}`,
            pos: new Vector(500, 300),
            font: new Font({
                family: 'impact',
                size: 35,
                unit: FontUnit.Px,
                color: Color.White
            })
        })
        this.add(label2)

        let nextLvlButton = new NextLvlButton()
        nextLvlButton.pos = new Vector(570, 450)
        nextLvlButton.on('pointerup', () => {
            this.victoryMusic.pause()
            this.game.goToScene('thirdCutScene')
        })
        this.add(nextLvlButton)
    }

    onPreUpdate(_engine, delta) {
        if (this.game.input.keyboard.wasPressed(Keys.Space)) {
            this.victoryMusic.pause()
            this.game.goToScene('thirdCutScene')
        }
        if (_engine.input.gamepads.at(0)?.wasButtonPressed(Buttons.Face1)) {
            this.victoryMusic.pause()
            this.game.goToScene('thirdCutScene')
        }
    }
    onDeactivate() {
        this.victoryMusic.pause()
    }
}