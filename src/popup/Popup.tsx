import * as React from "react";
import MemoAreaContainer from "../container/MemoAreaContainer";
import SwitchTabContainer from "../container/SwitchTabContainer";
import { MemoContents } from "../modules/actions";

interface PopupProps {
  memos: MemoContents[];
  initialize(): void;
}

export const Popup = (props: PopupProps) => {
  React.useEffect(() => {
    console.log("initialise at use effect");
    props.initialize();
  }, []);
  React.useEffect(() => {
    chrome.storage.local.set({ memos: props.memos });
  }, [props.memos]);
  return (
    <>
      <SwitchTabContainer />
      <MemoAreaContainer />
    </>
  );
};
