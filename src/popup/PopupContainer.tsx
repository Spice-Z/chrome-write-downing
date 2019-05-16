import { connect } from "react-redux";
import { Popup } from "./Popup";
import { MemosState } from "../modules/reducers";
import { MemoContents, makeMemoFromStorage } from "../modules/actions";
import { getMemos } from "../modules/selectors";
import { Dispatch } from "react";

export interface StateFromProps {
  memos: MemoContents[];
}

export interface DispatchFromProps {
  initialize(): void;
}

const mapStateToProps = (state: MemosState): StateFromProps => {
  return {
    memos: getMemos(state)
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>): DispatchFromProps => {
  return {
    initialize: () => {
      dispatch(makeMemoFromStorage());
    }
  };
};

const PopupContainer = connect<StateFromProps,DispatchFromProps>(
  mapStateToProps,
  mapDispatchToProps
)(Popup);

export default PopupContainer;
