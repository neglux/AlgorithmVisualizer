import * as model from "./model";

import contentView from "./views/contentView";
import listView from "./views/listView";

import algorithms from "../data/algorithms";

import { Animator } from "./helpers/animator";
import { sleep } from "./helpers/sleep";

const animator = new Animator(contentView);
const controlContent = async (name) => {
  if (animator.isRunning) {
    animator.stop();
    await sleep(500); // make sure rendering clicked algorithm after animator stopped
  }

  const algorithm = algorithms.find((algo) => algo.name === name);
  if (!algorithm) return;

  model.state.algorithm = algorithm;
  model.state.algorithm.data = [...model.state.initialData];

  contentView.render(model.state.algorithm);
};

const controlStartAnimation = () => {
  animator.animate(model.state.algorithm);
};

const controlResetAnimation = () => {
  animator.stop();
  model.state.algorithm.data = [...model.state.initialData];
};

function App() {
  contentView.addHashChangeHandler(controlContent);
  contentView.addStartHandler(controlStartAnimation);
  contentView.addResetHandler(controlResetAnimation);
  listView.render(algorithms);
}

export default App;
