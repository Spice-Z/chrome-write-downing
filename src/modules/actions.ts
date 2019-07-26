import { Action } from "redux";
import { fetchMemoFromLocalstorage } from "./apiClient";

// actionの種類を定義
export enum ActionNames {
  CHANGE_CURRENT_MEMO = "memo/change/current",
  ADD = "memo/add",
  EDIT = "memo.edit",
  DELETE = "memo/delete",
  ARRANGE = "memo/arange",
  INITIALIZE_MEMO = "memo/initialize",
  FETCH_MEMO = "memo/fetch/fetch",
  FETCH_MEMO_SUCESS = "memo/fetch/success"
}

export interface MemoContents {
  id: number;
  text: string;
}

interface InitializeMemoAction {
  type: ActionNames.INITIALIZE_MEMO;
  payload: {
    MemoContents: MemoContents[];
  };
}

interface FetchMemoAction {
  type: ActionNames.FETCH_MEMO;
  payload: {
    isFetching: boolean;
  };
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
    MemoContents: MemoContents;
  };
}

interface EditAction extends Action {
  type: ActionNames.EDIT;
  payload: {
    MemoContents: MemoContents;
  };
}

interface DeleteAction extends Action {
  type: ActionNames.DELETE;
  payload: {
    memoId: MemoContents["id"];
  };
}

interface ArrangeAction extends Action {
  type: ActionNames.ARRANGE;
}

export const changeCurrentMemo = (
  id: MemoContents["id"]
): ChangeCurrentMemoAction => {
  return {
    type: ActionNames.CHANGE_CURRENT_MEMO,
    payload: {
      id
    }
  };
};

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

export const ArrangeMemo = (): ArrangeAction => ({
  type: ActionNames.ARRANGE
});

export const FetchMemo = (isFetching: boolean): FetchMemoAction => {
  console.log("start or fetch memo");
  console.log({isFetching});
  return {
    type: ActionNames.FETCH_MEMO,
    payload: {
      isFetching
    }
  };
};

export const initializeMemo = (
  MemoContents: MemoContents[]
): InitializeMemoAction => {
  console.log("initializing");
  return {
    type: ActionNames.INITIALIZE_MEMO,
    payload: {
      MemoContents
    }
  };
};

export const makeMemoFromStorage = () => {
  return function(dispatch) {
    dispatch(FetchMemo(true));
    return fetchMemoFromLocalstorage().then((result: MemoContents[]) => {
      dispatch(initializeMemo(result));
      dispatch(FetchMemo(false));
    });
  };
};

export type MemosActions =
  | ChangeCurrentMemoAction
  | AddAction
  | EditAction
  | DeleteAction
  | ArrangeAction
  | FetchMemoAction
  | InitializeMemoAction;
