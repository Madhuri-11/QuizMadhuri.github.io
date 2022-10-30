import 'phaser';

export default class BootScene extends Phaser.Scene {
  constructor () {
    super('Boot');
  }

  preload () {
    this.load.image('logo', 'assets/ui/Loading_Logo.jpg');
  }

  create () {
    this.scene.start('Preloader');
  }
};