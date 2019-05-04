import { connect } from "react-redux";
import { SwitchTab, SwitchTabProps } from "../components/SwitchTab/SwitchTab";
import { MemosState } from "../modules/reducers";
import {
  changeCurrentMemo,
  MemosActions,
  MemoContents,
  AddMemo,
  DeleteMemo,
  ArrangeMemo
} from "../modules/actions";
import { getCurrentMemo, getMemoIdList } from "../modules/selectors";
import { Dispatch } from "react";

interface DispatchFromProps {
  handleClickChangeCurrentMemo: (id: number) => void;
  handleClickAddMemo: (id: number) => void;
  handleClickDeleteMemo: (id: number) => void;
}
interface StateFromProps {
  currentMemo: MemoContents;
  MemoIdList: number[];
}

const mapDispatchToProps = (
  dispatch: Dispatch<MemosActions>
): DispatchFromProps => {
  return {
    handleClickChangeCurrentMemo: id => {
      dispatch(changeCurrentMemo(id));
    },
    handleClickAddMemo: id => {
      dispatch(AddMemo({ id: id, text: "" }));
    },
    handleClickDeleteMemo: id => {
      dispatch(DeleteMemo(id));
      dispatch(ArrangeMemo());
    }
  };
};

const mapStateToProps = (state: MemosState): StateFromProps => {
  return {
    currentMemo: getCurrentMemo(state),
    MemoIdList: getMemoIdList(state)
  };
};

const SwitchTabContainer = connect<StateFromProps, DispatchFromProps, {}>(
  mapStateToProps,
  mapDispatchToProps
)(SwitchTab);

export default SwitchTabContainer;
