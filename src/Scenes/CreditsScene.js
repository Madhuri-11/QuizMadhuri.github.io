import 'phaser';
import config from '../Config/config';

export default class CreditsScene extends Phaser.Scene {
  constructor () {
    super('Credits');
  }

  create () {
    this.madeByText = this.add.text(0, 0, 'Created By: Madhuri Anandani', { fontSize: '26px', fill: '#fff' });
    
    this.zone = this.add.zone(config.width/2, config.height/2, config.width, config.height);


    Phaser.Display.Align.In.Center(
      this.madeByText,
      this.zone
    );

    this.madeByText.setY(1500);


    this.madeByTween = this.tweens.add({
      targets: this.madeByText,
      y: 400,
      ease: 'Power1',
      duration: 8000,
      delay: 1000,
      onComplete: function () {
        this.madeByTween.destroy;
        this.scene.start('Title');
      }.bind(this)
    });
  }
};