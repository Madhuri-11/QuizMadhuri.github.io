import 'phaser';

export default class CategoriesScene extends Phaser.Scene {
  constructor () {
    super('Hard');
  }

  create () {
    this.model = this.sys.game.globals.model;
  }

 
};
