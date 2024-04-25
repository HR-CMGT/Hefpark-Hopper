import { ImageSource, Sound, Loader } from 'excalibur'

// level one
import backgroundImage from "../images/background2.jpg"
import platformImage from "../images/platform.png"
import spikeImage from "../images/spikes.png"

// level two
import backgroundLvTwoImg from "../images/bglvl2.jpg"
import platformLvTwoImg from "../images/platformlvl2.png"
import spikesLvlTwoImg from "../images/spikeslvl2.png"

// level three
import backgroundLvlThreeImg from "../images/backgroundlvl3.jpg"
import platformLvlThreeImg from "../images/platformlvl3.png"
import spikesLvlThreeImg from "../images/spikeslvl3.png"


// characters and level elements
import beeImage from "../images/bee2.png"
import sadBee from "../images/sadBee.png"
import sadBeeHit from "../images/sadBeeHit.png"
import madBee from "../images/madBee.png"
import happiestBee from "../images/happiestBee.png"
import beeHeart from "../images/characterHeart.png"

import spiderImage from "../images/spoeder.png"
import deadSpiderImg from "../images/deadspider.png"

import flowerImage from "../images/flower.png"

import portalImage from "../images/portal.png"
import closedPortalImage from "../images/closedPortal.png"

// buttons

import startBtnImage from "../images/startButton.png"
import tryAgainBtnImage from "../images/tryAgain.png"
import nextLvlBtnImage from "../images/nextLevelButton.png"
import gameOverBtnImage from "../images/gameOverButton.png"

// bossfight
import boss from "../images/bossSpider.png"
import bossHit from "../images/bossspiderhit.png"
import honeyBomb from "../images/honeyBomb.png"
import bossWeb from "../images/bossWeb.png"
import bossFloorTemp from "../images/tempFloorBoss.png"
import bossBackground from "../images/bossBackground.jpg"
import bossPlatform from "../images/bossPlatform.png"

// cutscenes
        //bg
import startAndFinalSceneBgImg from "../images/cutscenes/startendscene1440.png"
import cutsceneOneBgImg from "../images/cutscenes/cutscene1.png"
import cutsceneTwoBgImg from "../images/cutscenes/cutscene2.png"
import cutsceneThreeBgImg from "../images/cutscenes/cutscene3.png"
import cutsceneBossBgImg from "../images/cutscenes/cutsceneboss.png"

import bushImg from "../images/cutscenes/bush.png"
import deadCutsceneSpiderImg from "../images/cutscenes/bossspiderded.png"

import beeTextImg from "../images/cutscenes/textbee.png"
import spiderTextImg from "../images/cutscenes/textspider.png"

// startscene
import textCsStartOneImg from "../images/cutsceneText/CSstart1.png"
import textCsStartTwoImg from "../images/cutsceneText/CSstart2.png"
import textCsStartThreeImg from "../images/cutsceneText/CSstart3.png"
import textCsStartFourImg from "../images/cutsceneText/CSstart4.png"
import textCsStartFiveImg from "../images/cutsceneText/CSstart5.png"

        //firstscene
import textFirstSceneImg from "../images/cutsceneText/CSlevel1.png"

        //secondscene
import textSecondSceneImg from "../images/cutsceneText/CSlevel2.png"

// third scene
import textCsThirdOneImg from "../images/cutsceneText/CSthree1.png"
import textCsThirdTwoImg from "../images/cutsceneText/CSthree2.png"
import textCsThirdThreeImg from "../images/cutsceneText/CSthree3.png"
import textCsThirdFourImg from "../images/cutsceneText/CSthree4.png"

// boss scene
import textCsBossOneImg from "../images/cutsceneText/CSboss1.png"
import textCsBossTwoImg from "../images/cutsceneText/CSboss2.png"

// fail victory screens
import failVicOneBgImg from "../images/cutscenes/failvic1.png"
import failVicTwoBgImg from "../images/cutscenes/failvic2.png"
import failVicThreeBgImg from "../images/cutscenes/failvic3.png"
import failVicBossBgImg from "../images/cutscenes/failvicboss.png"
import failText from "../images/cutscenes/fail.png"
import vicText from "../images/cutscenes/victory.png"

import textBubbleImage from "../images/textBubble.png"

import logoImage from "../images/logo.png"

import shortcutOne from "../images/levelOneShortcut.png"
import shortcutTwo from "../images/levelTwoShortcut.png"
import shortcutThree from "../images/levelThreeShortcut.png"
import shortcutFour from "../images/levelFourShortcut.png"


import failMusic from "../sounds/Sad.mp4"
import victoryMusic from "../sounds/Victory.mp4"
import music from "../sounds/bee.mp3"
import bossvictoryMusic from "../sounds/Victoryboss.mp4"
import jumpSound from "../sounds/Jump.mp4"
import bosscutsceneMusic from "../sounds/Bosscutscene.mp3"
import bossmusic from "../sounds/boss.mp3"
import characterattackSound from "../sounds/Attack.mp3"
import coinSound from "../sounds/Coin.mp4"
import spiderdamageSound from "../sounds/Bossdamage.mp3"
import damageSound from "../sounds/Damage.mp3"


const Resources = {
    FailMusic: new Sound(failMusic),
    VictoryMusic: new Sound(victoryMusic),
    Music: new Sound(music),
    BossvictoryMusic: new Sound(bossvictoryMusic),
    BossCutsceneMusic: new Sound(bosscutsceneMusic),
    JumpSound: new Sound(jumpSound),
    BossMusic: new Sound(bossmusic),
    CharacterAttackSound: new Sound(characterattackSound),
    CoinSound: new Sound(coinSound),
    SpiderDamageSound: new Sound(spiderdamageSound),
    DamageSound: new Sound(damageSound),
    

    // lvl one
    Background: new ImageSource(backgroundImage),
    Platform: new ImageSource(platformImage),
    Spikes: new ImageSource(spikeImage),

    // lvl two
    BackgroundLvlTwo: new ImageSource(backgroundLvTwoImg),
    PlatformLvlTwo: new ImageSource(platformLvTwoImg),
    SpikesLvlTwo: new ImageSource(spikesLvlTwoImg),

    // lvl three
    BackgroundLvlThree: new ImageSource(backgroundLvlThreeImg),
    PlatformLvlThree: new ImageSource(platformLvlThreeImg),
    SpikesLvlThree: new ImageSource(spikesLvlThreeImg),


    // characters and level elements
    Bee: new ImageSource(beeImage),
    SadBee: new ImageSource(sadBee),
    SadBeeHit: new ImageSource(sadBeeHit),
    MadBee: new ImageSource(madBee),
    HappiestBee: new ImageSource(happiestBee),
    BeeHeart: new ImageSource(beeHeart),

    Spider: new ImageSource(spiderImage),
    DeadSpider: new ImageSource(deadSpiderImg),
    Flower: new ImageSource(flowerImage),
    Portal: new ImageSource(portalImage),
    ClosedPortal: new ImageSource(closedPortalImage),

    // buttons

    StartBtn: new ImageSource(startBtnImage),
    TryAgainBtn: new ImageSource(tryAgainBtnImage),
    NextLvlBtn: new ImageSource(nextLvlBtnImage),
    GameOverBtn: new ImageSource(gameOverBtnImage),

    // bossfight
    Boss: new ImageSource(boss),
    BossHit: new ImageSource(bossHit),
    HoneyBomb: new ImageSource(honeyBomb),
    BossWeb: new ImageSource(bossWeb),
    TempBossFloor: new ImageSource(bossFloorTemp),
    BossBackground: new ImageSource(bossBackground),
    BossPlatform: new ImageSource(bossPlatform),

    // cutscenes
            //bg:
    StartAndFinalSceneBg: new ImageSource(startAndFinalSceneBgImg),
    CutsceneOneBg: new ImageSource(cutsceneOneBgImg),
    CutsceneTwoBg: new ImageSource(cutsceneTwoBgImg),
    CutsceneThreeBg: new ImageSource(cutsceneThreeBgImg),
    CutsceneBossBg: new ImageSource(cutsceneBossBgImg),

    Bush: new ImageSource(bushImg),
    DeadCutsceneSpider: new ImageSource(deadCutsceneSpiderImg),

    BeeText: new ImageSource(beeTextImg),
    SpiderText: new ImageSource(spiderTextImg),
    // startscene
    CsStartOne: new ImageSource(textCsStartOneImg),
    CsStartTwo: new ImageSource(textCsStartTwoImg),
    CsStartThree: new ImageSource(textCsStartThreeImg),
    CsStartFour: new ImageSource(textCsStartFourImg),
    CsStartFive: new ImageSource(textCsStartFiveImg),

    //firstscene
    textFirstScene: new ImageSource(textFirstSceneImg),

    //secondscene
    textSecondScene: new ImageSource(textSecondSceneImg),

    // third scene
    CsThirdOne: new ImageSource(textCsThirdOneImg),
    CsThirdTwo: new ImageSource(textCsThirdTwoImg),
    CsThirdThree: new ImageSource(textCsThirdThreeImg),
    CsThirdFour: new ImageSource(textCsThirdFourImg),

    // boss scene
    CsBossOne: new ImageSource(textCsBossOneImg),
    CsBossTwo: new ImageSource(textCsBossTwoImg),

    // fail victory screens

    FailVicOneBg: new ImageSource(failVicOneBgImg),
    FailVicTwoBg: new ImageSource(failVicTwoBgImg),
    FailVicThreeBg: new ImageSource(failVicThreeBgImg),
    FailVicBossBg: new ImageSource(failVicBossBgImg),

    FailText: new ImageSource(failText),
    VictoryText: new ImageSource(vicText),
    TextBubble: new ImageSource(textBubbleImage),

    LogoImage: new ImageSource(logoImage),

    ShortcutOne: new ImageSource(shortcutOne),
    ShortcutTwo: new ImageSource(shortcutTwo),
    ShortcutThree: new ImageSource(shortcutThree),
    ShortcutFour: new ImageSource(shortcutFour)
}

const ResourceLoader = new Loader({ fullscreenAfterLoad: true })
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}


/*
const OLDResourceLoader = new Loader([

    Resources.FailMusic,
    Resources.VictoryMusic,
    Resources.Music,
    Resources.BossvictoryMusic,
    Resources.JumpSound,
    Resources.BossCutsceneMusic,
    Resources.BossMusic,
    Resources.CharacterAttackSound,

    // lvl one
    Resources.Background,
    Resources.Platform,
    Resources.Spikes,

    // lvl two
    Resources.BackgroundLvlTwo,
    Resources.PlatformLvlTwo,
    Resources.SpikesLvlTwo,

    // lvl three
    Resources.BackgroundLvlThree,
    Resources.PlatformLvlThree,
    Resources.SpikesLvlThree,


    // characters and level elements
    Resources.Bee,
    Resources.SadBee,
    Resources.SadBeeHit,
    Resources.MadBee,
    Resources.HappiestBee,
    Resources.BeeHeart,
    
    Resources.Spider,
    Resources.DeadSpider,
    Resources.Flower,
    Resources.Portal,
    Resources.ClosedPortal,

    // buttons

    Resources.StartBtn,
    Resources.TryAgainBtn,
    Resources.NextLvlBtn,
    Resources.GameOverBtn,


    // bossfight
    Resources.Boss,
    Resources.BossHit,
    Resources.HoneyBomb,
    Resources.BossWeb,
    Resources.TempBossFloor,
    Resources.BossBackground,
    Resources.BossPlatform,

    //cutscenes
            //bg:
    Resources.StartAndFinalSceneBg,
    Resources.CutsceneOneBg,
    Resources.CutsceneTwoBg,
    Resources.CutsceneThreeBg,
    Resources.CutsceneBossBg,

    Resources.Bush,
    Resources.DeadCutsceneSpider,

    Resources.BeeText,
    Resources.SpiderText,
    // startscene
    Resources.CsStartOne,
    Resources.CsStartTwo,
    Resources.CsStartThree,
    Resources.CsStartFour,
    Resources.CsStartFive,

    //firstscene
    Resources.textFirstScene,
    //scondscene
    Resources.textSecondScene,

    // third scene
    Resources.CsThirdOne,
    Resources.CsThirdTwo,
    Resources.CsThirdThree,
    Resources.CsThirdFour,

    // boss scene
    Resources.CsBossOne,
    Resources.CsBossTwo,

    // fail victory screens
    Resources.FailVicOneBg,
    Resources.FailVicTwoBg,
    Resources.FailVicThreeBg,
    Resources.FailVicBossBg,

    Resources.FailText,
    Resources.VictoryText,
    Resources.TextBubble,

    Resources.LogoImage,
    Resources.ShortcutOne,
    Resources.ShortcutTwo,
    Resources.ShortcutThree,
    Resources.ShortcutFour
])
*/

export { Resources, ResourceLoader }
