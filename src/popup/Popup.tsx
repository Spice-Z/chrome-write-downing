import * as React from "react";
import "./Popup.scss";

interface AppProps {}

interface AppState {}

export const Popup = (props: AppProps, state: AppState) => {
  React.useEffect(() => {
    chrome.runtime.sendMessage({ popupMounted: true });
  });
  return <div className="popupContainer">Hello, world! with Hooks. </div>;
};
