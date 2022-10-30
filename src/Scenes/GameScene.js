import 'phaser';
import apiController from '../Controller/apiController';
import Button from '../Objects/Button';
import config from '../Config/config';




export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
    this.controller = new apiController();
  }

  preload() {
    this.load.bitmapFont('winFont', 'assets/fonts/Font-outro-export.png', 'assets/fonts/Font-outro-export.xml');
    this.categoryButton_1 = new Button(this, config.width / 2, 40,  'blueButton1',  'blueButton2','Basic', 'Basic', 1, this.sys.game.globals.model);
    this.categoryButton_2 = new Button(this, config.width / 2, 160, 'blueButton1', 'blueButton2', 'Easy', 'Basic', 2, this.sys.game.globals.model);
    this.categoryButton_3 = new Button(this, config.width / 2, 280, 'blueButton1', 'blueButton2', 'Medium', 'Basic', 3, this.sys.game.globals.model);
    this.categoryButton_4 = new Button(this, config.width / 2, 400, 'blueButton1', 'blueButton2', 'Normal', 'Basic', 4, this.sys.game.globals.model);
    this.categoryButton_5 = new Button(this, config.width / 2, 520, 'blueButton1', 'blueButton2', 'Hard', 'Basic', 5, this.sys.game.globals.model);
  }

  create() {

  }

  update() {
  }
};

