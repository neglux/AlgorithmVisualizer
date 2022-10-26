import { addStyle } from "./addStyle";
import { sleep } from "./sleep";

export class Animator {
  #SPEED = 1 * 1000; // 1000ms => 1s
  #algo;

  constructor(view) {
    this.view = view;
  }

  animate(algo) {
    this.#algo = algo;

    this.#algo.run(this.#algo.data, this);
  }

  #findItem(index) {
    return Array.from(document.querySelectorAll(".canvas__item")).find(
      (item) => +item.dataset.index === index
    );
  }

  async setCur(index) {
    const item = this.#findItem(index);
    addStyle(item, "background-color", "#f0f0f0");
    await sleep(this.#SPEED);
    this.view.render(this.#algo);
  }

  async setSwap(index1, index2) {
    const item1 = this.#findItem(index1);
    const item2 = this.#findItem(index2);
    addStyle(item1, "background-color", "#b3ffae");
    addStyle(item2, "background-color", "#b3ffae");
    await sleep(this.#SPEED);
    this.view.render(this.#algo);
  }
}
