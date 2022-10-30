import 'phaser';

export default class HomeScene extends Phaser.Scene {
    constructor() {
        super('Home');
    }

    preload() {
        // load images
        this.load.image('background', 'assets/back.jpg');
        this.timedEvent = this.time.delayedCall(3000, this.ready, [], this);

    }

    create() {
        this.bg01 = this.add.image(400,300, 'background');
        this.bg01.setScale(0.625, 0.85);
    }

    ready() {
        this.scene.start('Title');
        this.readyCount++;
        if (this.readyCount === 2) {
            this.scene.start('Title');
        }
    }
};


