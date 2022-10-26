import * as model from "./model";

import contentView from "./views/contentView";
import listView from "./views/listView";

import algorithms from "../data/algorithms";

import { Animator } from "./helpers/animator";

const controlContent = (name) => {
  const algorithm = algorithms.find((algo) => algo.name === name);
  if (!algorithm) return;

  model.state.algorithm = algorithm;
  contentView.render(model.state.algorithm);
};

const controlStartAnimation = () => {
  const animator = new Animator(contentView);
  animator.animate(model.state.algorithm);
};

function App() {
  contentView.addHashChangeHandler(controlContent);
  contentView.addStartHandler(controlStartAnimation);
  listView.render(algorithms);
}

export default App;
