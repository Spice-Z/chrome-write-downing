import * as React from "react";
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
