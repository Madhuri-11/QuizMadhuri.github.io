import 'phaser';
import gameConfig from '../Config/gameConfig.json';
import model from '../Model';
var score = 0, totalScore = 0, nextQues = 0, optionsButton = [], textTitle, textOnButtons = [],
  textOption1,
  textOption2,
  textOption3,
  textOption4, wrongAnswer, fiftySelected = false , flipQuestion = false, lifelineButtonText1, lifelineButtonText2, lifelineButton1, lifelineButton2, ScoreLabel, ScoreText, coinsLabel, coinsText, totalCoins = 0, quizTitleButton, optionsButton1, optionsButton2, optionsButton3, optionsButton4;

export default class CategoriesScene extends Phaser.Scene {
  constructor() {
    super('Basic');
    this.model = model;
    this.gameConfig = gameConfig;
  }

  init() {
    this.load.bitmapFont('winFont', 'assets/fonts/Font-outro-export.png', 'assets/fonts/Font-outro-export.xml');
    this.addQuestionTag(0);
  }

  create() {
    const textStyle = { fontSize: '18px', fill: '#fff' };
    ScoreLabel = this.add.bitmapText(490, 65, 'winFont', 'SCORE', 12);
    ScoreText = this.add.bitmapText(600, 65, 'winFont', totalScore, 10);
    coinsLabel = this.add.bitmapText(100, 65, 'winFont', 'COINS', 12);
    coinsText = this.add.bitmapText(200, 65, 'winFont', totalCoins, 10);

    wrongAnswer = this.add.bitmapText(280, 65, 'winFont', '', 12);
    quizTitleButton = this.add.image(400, 150, 'blueButton1');
    quizTitleButton.setScale(4, 1);

    lifelineButton1 = this.add.image(420, 500, 'blueButton1');
    lifelineButton2 = this.add.image(620, 500, 'blueButton1');

    lifelineButtonText1 = this.scene.scene.add.text(400, 490, "50:50", textStyle);
    lifelineButtonText2 = this.scene.scene.add.text(570, 490, "Flip Ques", textStyle);

    optionsButton1 = this.add.image(250, 280, 'blueButton1');
    optionsButton2 = this.add.image(550, 280, 'blueButton1');
    optionsButton3 = this.add.image(250, 380, 'blueButton1');
    optionsButton4 = this.add.image(550, 380, 'blueButton1');

    textTitle = this.scene.scene.add.text(120, 140, this.gameConfig[0].Title, textStyle);

    textOption1 = this.scene.scene.add.text(230, 270, this.gameConfig[0].Option1, textStyle);
    textOption2 = this.scene.scene.add.text(530, 270, this.gameConfig[0].Option2, textStyle);
    textOption3 = this.scene.scene.add.text(230, 370, this.gameConfig[0].Option3, textStyle);
    textOption4 = this.scene.scene.add.text(530, 370, this.gameConfig[0].Option4, textStyle);

    optionsButton.push(optionsButton1);
    optionsButton.push(optionsButton2);
    optionsButton.push(optionsButton3);
    optionsButton.push(optionsButton4);

    textOnButtons.push(textOption1);
    textOnButtons.push(textOption2);
    textOnButtons.push(textOption3);
    textOnButtons.push(textOption4);

    optionsButton1.setInteractive();
    optionsButton2.setInteractive();
    optionsButton3.setInteractive();
    optionsButton4.setInteractive();
    lifelineButton1.setInteractive();
    lifelineButton2.setInteractive();


    for (let i = 0; i < optionsButton.length; i++) {
      optionsButton[i].on('pointerdown', function () {
        this.checkScore(i);
      }.bind(this));
      console.log("Mad", optionsButton[i]);
    }

    lifelineButton1.on('pointerdown', function () {
      this.apply5050();
    }.bind(this));

    lifelineButton2.on('pointerdown', function () {
      this.flipTheQues();
    }.bind(this));

  }

  apply5050() {
    fiftySelected = true;
  }

  flipTheQues() {
    nextQues += 1;
    flipQuestion = true ;
  }

  checkScore(id) {
    if (this.gameConfig[nextQues].Correct === textOnButtons[id]._text) {
      totalScore += 20;
    }
    else {
      wrongAnswer.setText("wrong");
    }
    nextQues += 1;
    textOption3.visible = true;
    textOption4.visible = true;
    flipQuestion = false;
    fiftySelected = false;
    console.log("Mad", "onClick", score, totalScore);
  }

  ready() {
    this.scene.start('Game');
  }

  resetScore() {
    totalScore = 0;
    nextQues = 0;
    totalCoins = 0;
    this.timedEvent = this.time.delayedCall(2000, this.ready, [], this);
  }

  addQuestionTag(id) {
    console.log("Madtext", id, this.gameConfig);
  }

  update() {
    if (totalScore >= 60 && nextQues === 4) {
      totalCoins = 100;
      coinsText.setText(totalCoins);
    }
    if (totalCoins === 100) {
      this.resetScore();
    }
    if (nextQues === 4) {
      nextQues = 0;
    }
    ScoreText.setText(totalScore);
    if (fiftySelected) {
      textOption1.setText(this.gameConfig[nextQues].Option1);
      textOption2.setText(this.gameConfig[nextQues].Correct);
      textOption3.visible = false;
      textOption4.visible = false;
    }

    else if (flipQuestion) {
      textTitle.setText(this.gameConfig[nextQues].Title);
      textOption1.setText(this.gameConfig[nextQues].Option1);
      textOption2.setText(this.gameConfig[nextQues].Option2);
      textOption3.setText(this.gameConfig[nextQues].Option3);
      textOption4.setText(this.gameConfig[nextQues].Option4);
    }
    else {
      textTitle.setText(this.gameConfig[nextQues].Title);
      textOption1.setText(this.gameConfig[nextQues].Option1);
      textOption2.setText(this.gameConfig[nextQues].Option2);
      textOption3.setText(this.gameConfig[nextQues].Option3);
      textOption4.setText(this.gameConfig[nextQues].Option4);
    }
  }

};
