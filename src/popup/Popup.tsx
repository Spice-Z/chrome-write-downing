import * as React from "react";
import "./Popup.scss";
import { MemoArea } from "../components/MemoArea/MemoArea";
import { SwitchTab } from "../components/SwitchTab/SwitchTab";

export const Popup = () => {
  React.useEffect(() => {
    chrome.runtime.sendMessage({ popupMounted: true });
  });
  return (
    <>
      <SwitchTab />
      <div className="popupContainer">Hello, world! with Hooks. </div>
      <MemoArea />
    </>
  );
};
