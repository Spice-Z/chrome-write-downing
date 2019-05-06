import { MemoContents, ActionNames, MemosActions } from "./actions";
import { combineReducers } from "redux";

export interface MemosState {
  currentMemo: number | undefined;
  memos: MemoContents[];
  isAfterDeleteAction: boolean;
}

const initialState: MemosState = {
  currentMemo: 0,
  memos: [{ id: 0, text: "" }],
  isAfterDeleteAction: false
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

const arrangeMemo = (state: MemoContents[]) => {
  return state.map((el, index) => {
    return { id: index, text: el.text };
  });
};

const deleteMemo = (state = initialState, id: number): MemosState => {
  const currentMemo = state.currentMemo > 1 ? state.currentMemo - 1 : 0;
  const memos = arrangeMemo(
    state.memos
      .map(el => {
        if (el.id !== id) {
          return el;
        }
      })
      .filter(el => el !== undefined)
  );

  if (memos.length === 0) {
    return initialState;
  }
  return { currentMemo, memos, isAfterDeleteAction: true };
};

const memosApp = (state = initialState, action: MemosActions): MemosState => {
  switch (action.type) {
    case ActionNames.ADD:
      return {
        ...state,
        memos: state.memos.concat(action.payload.MemoContents),
        isAfterDeleteAction: false
      };
    case ActionNames.EDIT:
      return {
        ...state,
        memos: editMemo(state.memos, action.payload.MemoContents),
        isAfterDeleteAction: false
      };
    case ActionNames.DELETE:
      return deleteMemo(state, action.payload.memoId);
    case ActionNames.CHANGE_CURRENT_MEMO:
      return {
        ...state,
        currentMemo: action.payload.id,
        isAfterDeleteAction: false
      };
    default:
      return state;
  }
};

export default memosApp;
