import { _decorator, Component, Node } from "cc";
const { ccclass, property } = _decorator;

@ccclass("Stars")
export class Stars extends Component {
  @property
  moveSpeed: number = 100; // Speed in pixels per second

  start() {
    // Initialize the star position if needed
  }

  update(deltaTime: number) {
    // Move the star to the left continuously
    const currentPosition = this.node.position;
    const newX = currentPosition.x - this.moveSpeed * deltaTime;
    this.node.setPosition(newX, currentPosition.y, currentPosition.z);
  }
}
