class BootScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'BootScene'
        })
    }
    preload() {
        const progress = this.add.graphics()

        // Register a load progress event to show a load bar
        this.load.on('progress', (value) => {
            progress.clear()
            progress.fillStyle(0xffffff, 1)
            progress.fillRect(0, this.sys.game.config.height / 2, this.sys.game.config.width * value, 60)
        });

        // Register a load complete event to launch the title screen when all files are loaded
        this.load.on('complete', () => {
            progress.destroy()
            this.scene.start('LogoScene')
        })

        this.load.image('back', 'assets/images/back.png')
        this.load.spritesheet('logo-tiles', 'assets/images/logo-tiles.png', {
            frameWidth: 17,
            frameHeight: 16
        })

        this.load.audio('dollarone', [
            'assets/audio/dollarone.ogg'
        ])
    }
}

export default BootScene