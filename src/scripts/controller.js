import * as model from "./model";
import contentView from "./views/contentView";
import listView from "./views/listView";

const controlContent = (name) => {
  const content = model.state.algorithms.find((algo) => algo.name === name);
  if (!content) return;

  contentView.render(content);
};

function App() {
  contentView.addHashChangeHandler(controlContent);
  listView.render(model.state.algorithms);
}

export default App;
