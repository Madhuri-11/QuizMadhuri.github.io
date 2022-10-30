import 'phaser';

export default class CategoriesScene extends Phaser.Scene {
  constructor () {
    super('Categories');
  }

  create () {
    this.model = this.sys.game.globals.model;
  }

 
};
