import { connect } from "react-redux";
import { SwitchTab, SwitchTabProps } from "../components/SwitchTab/SwitchTab";
import { MemosState } from "../modules/reducers";
import {
  changeCurrentMemo,
  MemosActions,
  MemoContents
} from "../modules/actions";
import { getCurrentMemo, getMemoIdList } from "../modules/selectors";
import { Dispatch } from "react";

interface DispatchFromProps {
  handleClickChangeCurrentMemo: (id: number) => void;
}
interface StateFromProps {
  currentMemo: MemoContents;
  MemoIdList: number[];
}

function mapDispatchToProps(
  dispatch: Dispatch<MemosActions>
): DispatchFromProps {
  return {
    handleClickChangeCurrentMemo: id => {
      dispatch(changeCurrentMemo(id));
    }
  };
}

function mapStateToProps(state: MemosState): StateFromProps {
  return {
    currentMemo: getCurrentMemo(state),
    MemoIdList: getMemoIdList(state)
  };
}

const SwitchTabContainer = connect<StateFromProps, DispatchFromProps, {}>(
  mapStateToProps,
  mapDispatchToProps
)(SwitchTab);

export default SwitchTabContainer;
