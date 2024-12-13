import Phaser from "phaser"

export default class PianoClickScene extends Phaser.Scene {
  constructor() {
    super("piano-click-scene")
  }

  init() {
    this.whites = []
    this.blacks = []
    this.timer = 0
  }

  preload() {
    this.load.image("bg", "images/bg.jpg")
    this.load.image("base", "images/base.png")
    this.load.image("black", "images/black.png")
    this.load.image("w", "images/white150.png")
    this.load.image("b", "images/black150.png")
  }

  create() {
    const cameraWidth = this.cameras.main.width
    const cameraHeight = this.cameras.main.height
    const bg = this.add.image(0, 0, "bg").setOrigin(0)
    bg.setScale(Math.max(cameraWidth / bg.width, cameraHeight / bg.height))

    const initX = 400
    const initY = 150
    const spacing = 5
    const size = 150

    this.createWhites(initX, initY, spacing, size, "w")
    this.createBlacks(initX, initY, spacing, size, "b")

    this.time.addEvent({ delay: 500, callback: this.showRandom3Tiles, callbackScope: this, loop: true });
  
    for (let i = 0; i < 16 ; i++) {
      this.blacks[i].on('pointerdown', () => {
        this.blacks[i].setVisible(false)
      })
    }
  }

  update(time) {
    
  }

  createWhites(initX, initY, spacing, size, key) {
    this.whites[0] = this.add.image(initX, initY, key)
    this.whites[1] = this.add.image(this.whites[0].x + size + spacing, initY, key)
    this.whites[2] = this.add.image(this.whites[1].x + size + spacing, initY, key)
    this.whites[3] = this.add.image(this.whites[2].x + size + spacing, initY, key)

    this.whites[4] = this.add.image(this.whites[0].x, this.whites[0].y + size + spacing, key)
    this.whites[5] = this.add.image(this.whites[1].x, this.whites[1].y + size + spacing, key)
    this.whites[6] = this.add.image(this.whites[2].x, this.whites[2].y + size + spacing, key)
    this.whites[7] = this.add.image(this.whites[3].x, this.whites[3].y + size + spacing, key)

    this.whites[8] = this.add.image(this.whites[4].x, this.whites[4].y + size + spacing, key)
    this.whites[9] = this.add.image(this.whites[5].x, this.whites[5].y + size + spacing, key)
    this.whites[10] = this.add.image(this.whites[6].x, this.whites[6].y + size + spacing, key)
    this.whites[11] = this.add.image(this.whites[7].x, this.whites[7].y + size + spacing, key)

    this.whites[12] = this.add.image(this.whites[8].x, this.whites[8].y + size + spacing, key)
    this.whites[13] = this.add.image(this.whites[9].x, this.whites[9].y + size + spacing, key)
    this.whites[14] = this.add.image(this.whites[10].x, this.whites[10].y + size + spacing, key)
    this.whites[15] = this.add.image(this.whites[11].x, this.whites[11].y + size + spacing, key)
  }

  createBlacks(initX, initY, spacing, size, key) {
    this.blacks[0] = this.add.image(initX, initY, key).setInteractive().setVisible(false)
    this.blacks[1] = this.add.image(this.blacks[0].x + size + spacing, initY, key).setInteractive().setVisible(false)
    this.blacks[2] = this.add.image(this.blacks[1].x + size + spacing, initY, key).setInteractive().setVisible(false)
    this.blacks[3] = this.add.image(this.blacks[2].x + size + spacing, initY, key).setInteractive().setVisible(false)

    this.blacks[4] = this.add.image(this.blacks[0].x, this.blacks[0].y + size + spacing, key).setInteractive().setVisible(false)
    this.blacks[5] = this.add.image(this.blacks[1].x, this.blacks[1].y + size + spacing, key).setInteractive().setVisible(false)
    this.blacks[6] = this.add.image(this.blacks[2].x, this.blacks[2].y + size + spacing, key).setInteractive().setVisible(false)
    this.blacks[7] = this.add.image(this.blacks[3].x, this.blacks[3].y + size + spacing, key).setInteractive().setVisible(false)

    this.blacks[8] = this.add.image(this.blacks[4].x, this.blacks[4].y + size + spacing, key).setInteractive().setVisible(false)
    this.blacks[9] = this.add.image(this.blacks[5].x, this.blacks[5].y + size + spacing, key).setInteractive().setVisible(false)
    this.blacks[10] = this.add.image(this.blacks[6].x, this.blacks[6].y + size + spacing, key).setInteractive().setVisible(false)
    this.blacks[11] = this.add.image(this.blacks[7].x, this.blacks[7].y + size + spacing, key).setInteractive().setVisible(false)

    this.blacks[12] = this.add.image(this.blacks[8].x, this.blacks[8].y + size + spacing, key).setInteractive().setVisible(false)
    this.blacks[13] = this.add.image(this.blacks[9].x, this.blacks[9].y + size + spacing, key).setInteractive().setVisible(false)
    this.blacks[14] = this.add.image(this.blacks[10].x, this.blacks[10].y + size + spacing, key).setInteractive().setVisible(false)
    this.blacks[15] = this.add.image(this.blacks[11].x, this.blacks[11].y + size + spacing, key).setInteractive().setVisible(false)
  }

  isTileVisible(idx) {
    if (this.blacks[idx].visible) {
      return true
    }
    return false
  }

  hidePreviousTiles() {
    for (let i = 0; i < 16 ; i++) {
      if (this.blacks[i].visible) {
          this.blacks[i].setVisible(false)
      }
    }
  }

  showRandom3Tiles() {
    this.hidePreviousTiles()

    var tileCount = 0
    while (tileCount < 3) {
      let idxShow = Math.floor(Math.random() * 16)
      if (!this.isTileVisible(idxShow)) {
        this.blacks[idxShow].setVisible(true)
        tileCount ++
      }
    }
  }

  updateAfterClick(idx) {
    let idxShow
    do {
      idxShow = Math.floor(Math.random() * 16)
    } while (!this.blacks[idxShow].visible)
      this.blacks[idxShow].setVisible(true)
  }
}
