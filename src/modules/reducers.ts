import { MemoContents, ActionNames, MemosActions } from "./actions";
import { combineReducers } from "redux";

export interface MemosState {
  currentMemo: number | undefined;
  memos: MemoContents[];
}

const initialState: MemosState = {
  currentMemo: null,
  memos: [{ id: 1, text: "memoの文章ワッソ" }]
};

const currentMemo = (
  state = initialState.currentMemo,
  action: MemosActions
): MemosState["currentMemo"] => {
  // if (typeof state === "undefined") {
  //   return state;
  // }

  return 1;
};

const replaceMemo = (
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

const memos = (
  state = initialState.memos,
  action: MemosActions
): MemosState["memos"] => {
  switch (action.type) {
    case ActionNames.ADD:
      return state.concat(action.payload.MemoContents);
    case ActionNames.EDIT:
      return replaceMemo(state, action.payload.MemoContents);
    case ActionNames.DELETE:
      return deleteMemo(state, action.payload.memoId);
    default:
      return state;
  }
};

const memosApp = combineReducers({ currentMemo, memos });

export default memosApp;
