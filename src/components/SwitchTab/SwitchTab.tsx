import * as React from "react";
import { MemoContents } from "../../modules/actions";
import styled from "styled-components";

export interface SwitchTabProps {
  currentMemo: MemoContents;
  MemoIdList: number[];
  handleClickChangeCurrentMemo(id: number): void;
}

const SwitchTabSpan = styled.span`
padding:10px;
`

export const SwitchTab = (props: SwitchTabProps) => {
  const handleClickChangeCurrentMemo = (id, e) => {
    props.handleClickChangeCurrentMemo(id);
  };
  return (
    <div>
      {props.MemoIdList.map(el => {
        if (el === props.currentMemo.id) {
          return <SwitchTabSpan>!!</SwitchTabSpan>;
        } else {
          return (
            <SwitchTabSpan onClick={e => handleClickChangeCurrentMemo(el, e)}>{el}</SwitchTabSpan>
          );
        }
      })}
    </div>
  );
};
