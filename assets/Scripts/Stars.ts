import { _decorator, Component, Node, Vec3, view } from "cc";
const { ccclass, property } = _decorator;

@ccclass("Stars")
export class Stars extends Component {
  @property
  moveSpeed: number = 100; // Speed in pixels per second

  start() {
    // Get canvas dimensions
    const canvasHeight = view.getVisibleSize().height;
    const canvasWidth = view.getVisibleSize().width;

    // Generate random Y position within canvas bounds
    const randomY = (Math.random() - 0.5) * canvasHeight; // Range: -canvasHeight/2 to +canvasHeight/2

    // Set position at right edge of canvas with random Y
    const rightEdgeX = canvasWidth / 2; // Right edge of canvas
    this.node.setPosition(new Vec3(rightEdgeX, randomY, 0));
  }

  update(deltaTime: number) {
    // Move the star to the left continuously
    const currentPosition = this.node.position;
    const newX = currentPosition.x - this.moveSpeed * deltaTime;
    this.node.setPosition(newX, currentPosition.y, currentPosition.z);
  }
}
