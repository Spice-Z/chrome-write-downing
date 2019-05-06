import { MemosState } from "./reducers";

export const getCurrentMemo = (state: MemosState) => {
  return state.memos[state.currentMemo];
};

export const getMemos = (state: MemosState) => {
  return state.memos;
};

export const getMemoIdList = (state: MemosState) => {
  return state.memos.map(el => {
    return el.id;
  });
};

export const getIsAfterDeleteAction = (state: MemosState) => {
  return state.isAfterDeleteAction;
};
