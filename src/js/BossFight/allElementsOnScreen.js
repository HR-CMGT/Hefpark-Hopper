import { Actor, Vector, Color, Label, Sprite, Rectangle, ScreenElement, Font, FontUnit, Text, GraphicsGroup } from 'excalibur'
import { Resources } from '../resources';

export class UI extends ScreenElement {

    healthbar
    group
    border
    levelText
    scoreText
    hearts = []

    constructor(){
        super({ x: 10, y:10 });
    }

    onInitialize(engine){
       
        const whiteborder = new Rectangle({
            width: 300,
            height: 34,
            color: Color.fromRGB(255, 255, 255, 0.4)
        });

        this.border = new Actor()
        this.border.graphics.use(whiteborder)
        this.border.pos = new Vector(720, 60)
        
        this.levelText = new Label({
            text: 'Final Boss',
            pos: new Vector(10, 0),
            font: new Font({
                family: 'impact',
                size: 30,
                unit: FontUnit.Px,
                color: Color.White
            })
        })

        this.scoreText = new Label({
            text: 'Points: 0',
            pos: new Vector(10, 30),
            font: new Font({
                family: 'impact',
                size: 40,
                unit: FontUnit.Px,
                color: Color.White
            })
        })
        this.healthbar = new Actor({ x: 720, y: 60, color: Color.Red, width: 300, height: 34 })
        this.healthbar.anchor = Vector.Zero
        this.border.anchor = Vector.Zero

        this.addChild(this.levelText)
        this.addChild(this.scoreText)
        this.addChild(this.healthbar)
        this.addChild(this.border)

        // 6 hearts
        for (let i = 0; i < 6; i++) {
            const heart = new Actor()
            heart.graphics.use(Resources.BeeHeart.toSprite());
            heart.scale = new Vector(0.6, 0.6);
            heart.pos = new Vector(40 + (i * 52), 100);
            this.addChild(heart)
            this.hearts.push(heart)
        }
    }

    resetHealth(){
        this.healthbar.scale = new Vector(1, 1);
    }

    bossDamaged(currentHealth) {
        this.scene.engine.score.incrementScore(1)
        this.scoreText.text = `Points: ${this.scene.engine.score.getScore()}`
        this.healthbar.scale = new Vector(currentHealth/300, 1);
    }

    updateHealth(hearts){
        for (let i = 0; i < 6; i++) {
            if (i >= hearts) {
                this.hearts[i].active = false
            }
        } 
    }
}