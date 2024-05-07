import { Scene, Vector, Keys, Buttons } from "excalibur";
import {GameOverButton, NextLvlButton, StartButton} from "../Actors/button.js";
import {CutsceneStartEndBackground} from "../cutScene/actors/background.js";
import { Logo } from "../Actors/logo.js"

export class Start extends Scene {

    game

    onInitialize(_engine) {
        super.onInitialize(_engine);
        this.game = _engine
    }

    onActivate(_context) {
        super.onActivate(_context);
        this.startScene()
    }

    onPreUpdate(_engine, delta) {
        if (_engine.input.keyboard.wasPressed(Keys.Space)) {
            this.buttonPressed()
        }
        if (_engine.input.gamepads.at(0)?.isButtonPressed(Buttons.Face1)) {
            console.log('Controller A button pressed')
            this.buttonPressed()
        }
    }

    startScene(){
        this.actors.forEach((actor) => actor.kill());

        let background = new CutsceneStartEndBackground(0,0)
        this.add(background)

        const logo = new Logo();
        this.add(logo);
        logo.pos = new Vector(this.game.halfDrawWidth,this.game.drawHeight / 4);

        let start = new StartButton()
        start.pos = new Vector(this.game.halfDrawWidth, this.game.drawHeight * 0.78);
        this.add(start)
        
        // click 
        // start.on('pointerup', (buttonevent) => this.buttonPressed(buttonevent))
        
    }

    buttonPressed(buttonevent) {
        this.game.goToScene('startCutscene')

        // for debugging
        // this.game.goToScene("LevelOne")
        //this.game.goToScene('VictoryOne')
        //this.game.goToScene('VictoryTwo')
        //this.game.goToScene('secondCutscene')
        //this.game.goToScene('FailThree')
        //this.game.goToScene('VictoryThree')
        //this.game.goToScene('thirdCutScene')
        //this.game.goToScene('bossFight')
        //this.game.goToScene('bossFail');
        //this.game.goToScene('bossVictory')
        //this.game.goToScene('bossCutscene')

    }
}