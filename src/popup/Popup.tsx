import * as React from "react";
import "./Popup.scss";
import { MemoArea } from "../components/MemoArea/MemoArea";
import { SwitchTab } from "../components/SwitchTab/SwitchTab";

import { connect } from "react-redux";
import { Dispatch } from "redux";
import { MemoContents, DeleteMemo, AddMemo } from "../modules/memo";
import { ReduxAction, ReduxState } from "./store";

export class ActionDispatcher {
  constructor(private dispatch: (action: ReduxAction) => void) {}

  public increment(memo: MemoContents) {
    this.dispatch(AddMemo(memo));
  }

  public decrement(memoId: number) {
    this.dispatch(DeleteMemo(memoId));
  }
}

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

export default connect(
  (state: ReduxState) => ({ value: state.memoList }),
  (dispatch: Dispatch<ReduxAction>) => ({
    actions: new ActionDispatcher(dispatch)
  })
)(Popup);
