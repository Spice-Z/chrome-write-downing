import * as React from "react";
import "./Popup.scss";
import { SwitchTab } from "../components/SwitchTab/SwitchTab";
import MemoAreaContainer from "../container/MemoAreaContainer";
import SwitchTabContainer from "../container/SwitchTabContainer";

export const Popup = () => {
  React.useEffect(() => {
    chrome.runtime.sendMessage({ popupMounted: true });
  });
  return (
    <>
      <SwitchTabContainer />
      <MemoAreaContainer />
    </>
  );
};
