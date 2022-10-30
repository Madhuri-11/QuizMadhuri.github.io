import 'phaser';

export default class CategoriesScene extends Phaser.Scene {
  constructor () {
    super('Easy');
  }

  create () {
    this.model = this.sys.game.globals.model;
  }

 
};
