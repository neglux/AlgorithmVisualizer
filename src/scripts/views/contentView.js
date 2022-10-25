import { View } from "./View";

class ContentView extends View {
  _parent = document.querySelector(".content");

  _generateMarkup() {
    return `
        <div class="row">
          <h1 class="heading-primary">${this._data.title}</h1>
        </div>
        <div class="row u-margin-y-md">
        </div>
        <div class="row u-col-box u-center-horizontal">
          <button class="btn-rect">
            <svg class="icon">
              <use xlink:href="./assets/sprite.svg#icon-media-stop"></use>
            </svg>
          </button>
          <button class="btn-rect u-margin-x-sm">
            <svg class="icon">
              <use xlink:href="./assets/sprite.svg#icon-media-play"></use>
            </svg>
            <svg class="icon u-rotate-90 hidden">
              <use xlink:href="./assets/sprite.svg#icon-equals"></use>
            </svg>
          </button>
          <button class="btn-rect">
            <svg class="icon">
              <use xlink:href="./assets/sprite.svg#icon-arrow-sync"></use>
            </svg>
          </button>
        </div>
      `;
  }

  addHashChangeHandler(handler) {
    ["hashchange", "load"].forEach((event) => {
      window.addEventListener(event, () => {
        const algoName = window.location.hash.slice(1);
        handler(algoName);
      });
    });
  }
}

export default new ContentView();
