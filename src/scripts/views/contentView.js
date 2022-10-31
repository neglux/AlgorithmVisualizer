import { View } from "./View";
import hljs from "highlight.js";
import "../../assets/SVG/cheveron-right.svg";

import "../../assets/SVG/arrow-sync.svg";
import "../../assets/SVG/media-play.svg";

class ContentView extends View {
  _parent = document.querySelector(".content");

  _generateMarkup() {
    return `
        <div class="row">
          <h1 class="heading-primary">${this._data.title}</h1>
        </div>
        <div class="row u-margin-y-md">
            <article class="canvas">
              ${this._data.data.map(this._generateFigure).join("")}
            </article>
        </div>
        <div class="row u-col-box u-center-horizontal">
          <button class="btn-rect stop-btn">
            <svg class="icon">
              <use xlink:href="#arrow-sync"></use>
            </svg>
          </button>
          <button class="btn-rect u-margin-x-sm play-btn">
            <svg class="icon">
              <use xlink:href="#media-play"></use>
            </svg>
          </button>
        </div>
        <div class="row">
         ${this._generateSourceCode(this._data.code)}
        </div>
      `;
  }

  _generateFigure(height, index) {
    return `<figure style="height: ${height}px" class="canvas__item" data-index=${index}></figure>`;
  }

  _generateSourceCode(codeStr) {
    const markup = `
      <code class="preview__code language-javascript">
      ${codeStr}
     </code>
    `;

    const domFromMarkup = document
      .createRange()
      .createContextualFragment(markup);

    const code = domFromMarkup.querySelector(".preview__code");
    hljs.highlightElement(code);

    return `
     <pre class="preview">
      ${code.outerHTML}
    </pre>`;
  }

  addHashChangeHandler(handler) {
    ["hashchange", "load"].forEach((event) => {
      window.addEventListener(event, () => {
        const algoName = window.location.hash.slice(1);
        handler(algoName);
      });
    });
  }

  addStartHandler(handler) {
    this._parent.addEventListener("click", (e) => {
      const btn = e.target.closest(".play-btn");
      if (!btn) return;

      handler();
    });
  }

  addResetHandler(handler) {
    this._parent.addEventListener("click", (e) => {
      const btn = e.target.closest(".stop-btn");
      if (!btn) return;

      handler();
    });
  }
}

export default new ContentView();
