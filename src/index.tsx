import * as React from "react";
import * as ReactDOM from "react-dom";
import store from "./modules/store";
import { Provider } from "react-redux";
import PopupContainer from "./popup/PopupContainer";

chrome.tabs.query({ active: true, currentWindow: true }, tab => {
  ReactDOM.render(
    <Provider store={store}>
      <PopupContainer />
    </Provider>,
    document.getElementById("popup")
  );
});
