import {
  _decorator,
  Component,
  Node,
  Prefab,
  instantiate,
  Vec3,
  view,
} from "cc";
const { ccclass, property } = _decorator;

@ccclass("StarSpawner")
export class StarSpawner extends Component {
  @property(Prefab)
  starPrefab: Prefab = null;

  @property
  spawnOffset: number = 50; // Offset from right edge of screen

  private currentStar: Node = null;
  private canvasWidth: number = 0;

  start() {
    // Get canvas width
    this.canvasWidth = view.getVisibleSize().width;

    // Spawn the first star
    this.spawnStar();
  }

  update(deltaTime: number) {
    // Check if current star has moved off the left side
    if (
      this.currentStar &&
      this.currentStar.position.x < -this.canvasWidth / 2 - 50
    ) {
      // Destroy the current star
      //   this.currentStar.destroy();
      //   this.currentStar = null;

      // Spawn a new star
      this.spawnStar();
    }
  }

  private spawnStar() {
    if (!this.starPrefab) {
      console.error("Star prefab not assigned!");
      return;
    }

    // Create new star instance
    this.currentStar = instantiate(this.starPrefab);

    // Set position on the right side of the canvas
    const spawnX = this.canvasWidth / 2 + this.spawnOffset;
    const spawnY = this.currentStar.position.y; // Keep original Y position
    const spawnZ = this.currentStar.position.z; // Keep original Z position

    this.currentStar.setPosition(new Vec3(spawnX, spawnY, spawnZ));

    // Add to the scene
    this.node.addChild(this.currentStar);
  }
}
