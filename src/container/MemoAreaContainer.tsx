import { connect } from "react-redux";
import { MemoArea, MemoAreaProps } from "../components/MemoArea/MemoArea";
import { MemosState } from "../modules/reducers";
import { getCurrentMemo } from "../modules/selectors";
import { Dispatch } from "react";
import { MemosActions, MemoContents, EditMemo } from "../modules/actions";

interface StateFromProps {
  currentMemo: MemoContents;
}
interface DispatchFromProps {
  updateCurrentMemo: (memo: MemoContents) => void;
}

const mapStateToProps = (state: MemosState): StateFromProps => {
  return {
    currentMemo: getCurrentMemo(state)
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch<MemosActions>
): DispatchFromProps => {
  return {
    updateCurrentMemo: memo => {
      dispatch(EditMemo(memo));
    }
  };
};

const MemoAreaContainer = connect<StateFromProps, DispatchFromProps, {}>(
  mapStateToProps,
  mapDispatchToProps
)(MemoArea);

export default MemoAreaContainer;
