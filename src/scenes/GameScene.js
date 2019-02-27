class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        })
    }

    preload() {
        //this.load.scenePlugin('animatedTiles', AnimatedTiles, 'animatedTiles', 'animatedTiles')
    }

    create() {
        let back = this.add.image(0, 0, 'back')
        back.setOrigin(0)
    }

    update(time, delta) {
 
    }

}

export default GameScene
