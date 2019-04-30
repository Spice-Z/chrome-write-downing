import { MemoContents, MemoActions, ActionNames } from "./actions";
import { Action, combineReducers } from "redux";

export interface MemosState {
  currentMemo: number | undefined;
  memos: MemoContents[];
}

const initialState: MemosState = {
  currentMemo: null,
  memos: []
};

const currentMemo = (state = initialState.currentMemo,): MemosState["currentMemo"] => {
  if (typeof state === "undefined") {
    return initialState.currentMemo;
  }

  return state;
};

const memos = (state = initialState.memos, action): MemosState["memos"] => {
  switch (action.type) {
    case ActionNames.ADD:
      return state ;
    case ActionNames.EDIT:
      return [...state] ;
    case ActionNames.DELETE:
      return [...state] ;
    default:
      return state;
  }
};

const memosApp = combineReducers({ currentMemo, memos });

export default memosApp;
