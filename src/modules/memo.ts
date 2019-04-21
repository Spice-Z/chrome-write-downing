import { Action } from "redux";

enum ActionNames {
  ADD = "memo/add",
  DELETE = "memo/delete"
}

export interface MemoContents {
    id: number;
    text: string;
  }

interface AddAction extends Action {
  type: ActionNames.ADD;
  contents: MemoContents;
}
export const AddMemo = (contents: MemoContents): AddAction => ({
  type: ActionNames.ADD,
  contents:contents
});

interface DeleteAction extends Action {
  type: ActionNames.DELETE;
  memoId: number;
}

export const DeleteMemo = (memoId: number): DeleteAction => ({
  type: ActionNames.DELETE,
  memoId: memoId
});

export interface MemosState {
  memoList: MemoContents[];
}

export type MemoActions = AddAction | DeleteAction;

const initialState: MemosState = { memoList: [{ id: null, text: null }] };

export default function reducer(
  state: MemosState = initialState,
  action: Action | MemoActions
): MemosState {
  //   if (!("appAction" in action)) {
  //     return state
  //   }
  switch (action.type) {
    case ActionNames.ADD:
      return { memoList: [...state.memoList] };
    case ActionNames.DELETE:
      return { memoList: [] };
    default:
      return state;
  }
}
