import { connect } from "react-redux";
import { MemoArea } from "../components/MemoArea/MemoArea";
import { MemosState } from "../modules/reducers";

const MemoAreaContainer = connect((state: MemosState, ownProps) => {
  console.log(state);
  return {
    text: state.memos[0].text
  };
})(MemoArea);

export default MemoAreaContainer;
