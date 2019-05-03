import { MemosState } from "./reducers";

export const getCurrentMemo = (state: MemosState) => {
  return state.memos[state.currentMemo];
};

export const getMemoIdList = (state: MemosState) => {
  return state.memos.map(el => {
    return el.id;
  });
};