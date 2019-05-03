import { connect } from "react-redux";
import { MemoArea, MemoAreaProps } from "../components/MemoArea/MemoArea";
import { MemosState } from "../modules/reducers";
import { getCurrentMemo } from "../modules/selectors";

const MemoAreaContainer = connect((state:MemosState, ownProps):MemoAreaProps => {
  return {
    currentMemo: getCurrentMemo(state)
  };
})(MemoArea);

export default MemoAreaContainer;
