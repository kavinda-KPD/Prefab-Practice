import { _decorator, Component, Node, Vec3 } from "cc";
const { ccclass, property } = _decorator;

@ccclass("ScareCrow")
export class ScareCrow extends Component {
  @property
  moveSpeed: number = 50; // Speed in pixels per second

  @property
  moveDistance: number = 100; // How far to move left and right from center

  private startPosition: Vec3 = new Vec3();
  private leftBoundary: number = 0;
  private rightBoundary: number = 0;
  private movingRight: boolean = true;

  start() {
    // Store the initial position as the center
    this.startPosition = this.node.position.clone();

    // Calculate movement boundaries
    this.leftBoundary = this.startPosition.x - this.moveDistance;
    this.rightBoundary = this.startPosition.x + this.moveDistance;
  }

  update(deltaTime: number) {
    const currentPosition = this.node.position;
    let newX = currentPosition.x;

    if (this.movingRight) {
      // Move right
      newX += this.moveSpeed * deltaTime;

      // Check if we've reached the right boundary
      if (newX >= this.rightBoundary) {
        newX = this.rightBoundary;
        this.movingRight = false; // Change direction
      }
    } else {
      // Move left
      newX -= this.moveSpeed * deltaTime;

      // Check if we've reached the left boundary
      if (newX <= this.leftBoundary) {
        newX = this.leftBoundary;
        this.movingRight = true; // Change direction
      }
    }

    // Update position
    this.node.setPosition(newX, currentPosition.y, currentPosition.z);
  }
}
