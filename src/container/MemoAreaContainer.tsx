import { connect } from "react-redux";
import { MemoArea } from "../components/MemoArea/MemoArea";
import { MemosState } from "../modules/reducers";

const currentMemoText = (state: MemosState): string => {
  return state.currentMemo !== undefined
    ? state.memos[state.currentMemo].text
    : "あああ";
};

const MemoAreaContainer = connect((state: MemosState, ownProps) => {
  return {
    text: currentMemoText(state)
  };
})(MemoArea);

export default MemoAreaContainer;
