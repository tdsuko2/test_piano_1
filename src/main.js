import Phaser from "phaser"

import PianoClickScene from "./scenes/PianoClickScene"

const config = {
  type: Phaser.AUTO,
  parent: "app",
  width: 1200,
  height: 800,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 },
    },
  },
  scene: [PianoClickScene],
}

export default new Phaser.Game(config)
