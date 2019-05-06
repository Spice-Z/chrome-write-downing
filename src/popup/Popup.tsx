import * as React from "react";
import MemoAreaContainer from "../container/MemoAreaContainer";
import SwitchTabContainer from "../container/SwitchTabContainer";
import { MemoContents } from "../modules/actions";

interface PopupProps {
  memos: MemoContents[];
}

export const Popup = (props: PopupProps) => {
  React.useEffect(() => {
    //
  }, [props.memos]);
  return (
    <>
      <SwitchTabContainer />
      <MemoAreaContainer />
    </>
  );
};
