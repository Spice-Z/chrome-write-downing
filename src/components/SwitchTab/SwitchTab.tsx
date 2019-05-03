import * as React from "react";
import { MemoContents } from "../../modules/actions";

export interface SwitchTabProps {
  currentMemo: MemoContents;
  MemoIdList: number[];
  handleClickChangeCurrentMemo(id: number): void;
}

export const SwitchTab = (props: SwitchTabProps) => {
  const handleClickChangeCurrentMemo = (id, e) => {
    props.handleClickChangeCurrentMemo(id);
  };

  return (
    <div>
      {props.MemoIdList.map(el => {
        if (el === props.currentMemo.id) {
          return <span>!!</span>;
        } else {
          return (
            <span onClick={e => handleClickChangeCurrentMemo(el, e)}>{el}</span>
          );
        }
      })}
    </div>
  );
};
