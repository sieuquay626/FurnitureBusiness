import {createBrowserHistory} from "history";

const history = createBrowserHistory();

function goBack() {
  history.goBack();
}

function navigate(location, parameters) {
  history.push(location, parameters);
}

export default {
  history,
  goBack,
  navigate,
}