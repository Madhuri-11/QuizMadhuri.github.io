import 'phaser';
import config from './Config/config';
import gameConfig from './Config/gameConfig.json';
import HomeScene from './Scenes/HomeScene';
import GameScene from './Scenes/GameScene';
import BootScene from './Scenes/BootScene';
import PreloaderScene from './Scenes/PreloaderScene';
import TitleScene from './Scenes/TitleScene';
import OptionsScene from './Scenes/OptionsScene';
import CreditsScene from './Scenes/CreditsScene';
import CategoriesScene from './Scenes/CategoriesScene';
import BasicScene from './Scenes/BasicScene';
import EasyScene from './Scenes/EasyScene';
import MediumScene from './Scenes/MediumScene';
import NormalScene from './Scenes/NormalScene';
import HardScene from './Scenes/HardScene';

import Model from './Model';

class Game extends Phaser.Game {
  constructor () {
    super(config , gameConfig);
    const model = new Model();
    this.globals = { model, bgMusic: null };
    this.scene.add('Boot', BootScene);
    this.scene.add('Home', HomeScene);
    this.scene.add('Preloader', PreloaderScene);
    this.scene.add('Title', TitleScene);
    this.scene.add('Options', OptionsScene);
    this.scene.add('Credits', CreditsScene);
    this.scene.add('Categories', CategoriesScene);
    this.scene.add('Basic', BasicScene);
    this.scene.add('Easy', EasyScene);
    this.scene.add('Medium', MediumScene);
    this.scene.add('Normal', NormalScene);
    this.scene.add('Hard', HardScene);
    this.scene.add('Game', GameScene);
    this.scene.start('Boot');
  }
}

window.game = new Game();