import { View } from "./View";

class ListView extends View {
  _parent = document.querySelector(".sidebar__list");

  _generateMarkup() {
    return this._data.map(this._generateItem).join("");
  }

  _generateItem(algo) {
    return `
          <li class="sidebar__item">
            <a class="sidebar__link" href="#${algo.name}">
              <svg class="icon">
                <use xlink:href="./assets/sprite.svg#icon-cheveron-right"></use>
              </svg>
              ${algo.name}
            </a>
          </li>`;
  }
}

export default new ListView();
