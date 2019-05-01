import { Action } from "redux";

export enum ActionNames {
  CHANGE_CURRENT_MEMO = "memo/change/current",
  ADD = "memo/add",
  EDIT = "memo.edit",
  DELETE = "memo/delete"
}

export interface MemoContents {
  id: number;
  text: string;
}

interface ChangeCurrentMemoAction extends Action {
  type: ActionNames.CHANGE_CURRENT_MEMO;
  payload: {
    id: MemoContents["id"];
  };
}

interface AddAction extends Action {
  type: ActionNames.ADD;
  payload: {
    MemoContents:MemoContents;
  };
}

interface EditAction extends Action {
  type: ActionNames.EDIT;
  payload: {
    MemoContents:MemoContents;
  };
}

interface DeleteAction extends Action {
  type: ActionNames.DELETE;
  payload: {
    memoId: MemoContents["id"];
  };
}

export const changeCurrentMemo = (
  id: MemoContents["id"]
): ChangeCurrentMemoAction => ({
  type: ActionNames.CHANGE_CURRENT_MEMO,
  payload: {
    id
  }
});

export const AddMemo = (contents: MemoContents): AddAction => ({
  type: ActionNames.ADD,
  payload: {
    MemoContents: contents
  }
});

export const EditMemo = (contents: MemoContents): EditAction => ({
  type: ActionNames.EDIT,
  payload: {
    MemoContents: contents
  }
});

export const DeleteMemo = (memoId: number): DeleteAction => ({
  type: ActionNames.DELETE,
  payload: {
    memoId: memoId
  }
});

export type MemosActions =
  | ChangeCurrentMemoAction
  | AddAction
  | EditAction
  | DeleteAction;
