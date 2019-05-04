import { MemoContents, ActionNames, MemosActions } from "./actions";
import { combineReducers } from "redux";

export interface MemosState {
  currentMemo: number | undefined;
  memos: MemoContents[];
}

const initialState: MemosState = {
  currentMemo: 0,
  memos: [
    { id: 0, text: "あめんぼあかいお、あいうえお" },
    { id: 1, text: "こんこんこんちゃ" },
    { id: 2, text: "こんばんは" },
    { id: 3, text: "さようなら" }
  ]
};

const currentMemo = (
  state = initialState.currentMemo,
  action: MemosActions
): MemosState["currentMemo"] => {
  switch (action.type) {
    case ActionNames.CHANGE_CURRENT_MEMO:
      if (typeof state === "undefined") {
        return state;
      }
      return action.payload.id;
    default:
      return state;
  }
};

const editMemo = (
  state: MemoContents[],
  memo: MemoContents
): MemoContents[] => {
  return state.map(el => {
    if (el.id === memo.id) {
      return memo;
    }
    return el;
  });
};

const deleteMemo = (state: MemoContents[], id: MemoContents["id"]) => {
  return state.map(el => {
    if (el.id !== id) {
      return el;
    }
  });
};

const ArrangeMemo = (state: MemoContents[]) => {
  return state.map((el,index) => {
    return { id: index, text : el.text }
  }
  )
}


const memos = (
  state = initialState.memos,
  action: MemosActions
): MemosState["memos"] => {
  switch (action.type) {
    case ActionNames.ADD:
      return state.concat(action.payload.MemoContents);
    case ActionNames.EDIT:
      return editMemo(state, action.payload.MemoContents);
    case ActionNames.DELETE:
      return deleteMemo(state, action.payload.memoId);
    case ActionNames.ARRANGE:
      return ArrangeMemo(state);
    default:
      return state;
  }
};

const memosApp = combineReducers({ currentMemo, memos });

export default memosApp;
