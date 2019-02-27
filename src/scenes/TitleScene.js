class TitleScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'TitleScene'
        })
    }
    preload() {
        
    }
    create() {        
        this.scene.bringToTop()

        this.registry.set('restartScene', false)

        this.startKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.X)

        this.input.on('pointerdown', () => {
            this.startGame()
        });
    }

    update(time, delta) {
        if (this.registry.get('restartScene')) {
            this.restartScene()
        }
        if (this.startKey.isDown) {
            this.startGame()
        }
    }

    startGame() {
        this.scene.stop('GameScene')
        this.scene.start('GameScene')
    }

    restartScene() {
        this.scene.stop('GameScene')
        this.scene.launch('GameScene')
        this.scene.bringToTop()

        this.registry.set('restartScene', false)
    }
}

export default TitleScene
