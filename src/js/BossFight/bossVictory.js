import { Color, Font, FontUnit, Label, Scene, Vector } from "excalibur";
import { NextLvlButton } from "../Actors/button.js";
import { VictoryText } from "../Scenes/failVictoryActors/text.js";
import { BossFailVicBackground } from "../Scenes/failVictoryActors/background.js";
import { Resources } from "../resources.js";

export class VictoryBoss extends Scene {
    game
    score
    constructor(score) {
        super();
        this.score = score
    }
    onInitialize(_engine) {
        super.onInitialize(_engine);
        this.game = _engine
    }
    onActivate(_context) {
        super.onActivate(_context);
        this.BossvictoryMusic = Resources.BossvictoryMusic
        this.BossvictoryMusic.play()
        this.startVictoryBoss()
    }
    startVictoryBoss() {
        this.actors.forEach((actor) => actor.kill());
        //console.log('victory boss')
        let background = new BossFailVicBackground(0, 0)
        this.add(background)

        let victory = new VictoryText(screen.width / 2 - 200, 150)
        this.add(victory)

        let label2 = new Label({
            text: `Score: ${this.score.getScore()}`,
            pos: new Vector(480, 400),
            font: new Font({
                family: 'impact',
                size: 35,
                unit: FontUnit.Px,
                color: Color.White
            })
        })
        this.add(label2)
        let label3 = new Label({
            text: `You've finished the game`,
            pos: new Vector(380, 300),
            font: new Font({
                family: 'impact',
                size: 35,
                unit: FontUnit.Px,
                color: Color.White
            })
        })
        this.add(label3)

    }

}





