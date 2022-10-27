import { addStyle } from "./addStyle";
import { sleep } from "./sleep";

export class Animator {
  #SPEED = 0.7 * 1000; // 1000ms => 1s
  #algo;
  isRunning;

  constructor(view) {
    this.view = view;
  }

  animate(algo) {
    this.#algo = algo;
    this.#algo.run(this.#algo.data, this);
  }

  start() {
    this.isRunning = true;
  }

  stop() {
    this.isRunning = false;
  }

  #findItem(index) {
    return Array.from(document.querySelectorAll(".canvas__item")).find(
      (item) => +item.dataset.index === index
    );
  }

  async setCur(index) {
    if (this.isRunning) {
      const item = this.#findItem(index);
      addStyle(item, "background-color", "#f0f0f0");
      await sleep(this.#SPEED);
      this.view.update(this.#algo);
    }
  }

  async setSwap(index1, index2) {
    if (this.isRunning) {
      const item1 = this.#findItem(index1);
      const item2 = this.#findItem(index2);
      addStyle(item1, "background-color", "#b3ffae");
      addStyle(item2, "background-color", "#b3ffae");
      await sleep(this.#SPEED);
      this.view.update(this.#algo);
    }
  }
}
