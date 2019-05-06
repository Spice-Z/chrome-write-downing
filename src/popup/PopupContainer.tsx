import { connect } from "react-redux";
import { Popup } from "./Popup";
import { MemosState } from "../modules/reducers";
import { MemoContents } from "../modules/actions";
import { getMemos } from "../modules/selectors";

interface StateFromProps {
  memos: MemoContents[];
}

const mapStateToProps = (state: MemosState): StateFromProps => {
  return {
    memos: getMemos(state)
  };
};

const PopupContainer = connect<StateFromProps>(mapStateToProps)(Popup);

export default PopupContainer;
