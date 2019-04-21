import * as React from "react";
import * as ReactDOM from "react-dom";
import { Popup } from "./Popup";
import store from './store'
import {Provider} from 'react-redux'

chrome.tabs.query({ active: true, currentWindow: true }, tab => {
  ReactDOM.render(<Provider store={store}><Popup /></Provider>, document.getElementById("popup"));
});
