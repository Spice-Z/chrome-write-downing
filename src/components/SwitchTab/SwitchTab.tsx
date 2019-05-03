import * as React from "react";
import { MemoContents } from "../../modules/actions";
import styled from "styled-components";

export interface SwitchTabProps {
  currentMemo: MemoContents;
  MemoIdList: number[];
  handleClickChangeCurrentMemo(id: number): void;
  handleClickAddMemo(id: number): void;
}

const SwitchTabSpan = styled.span`
  display: inline-block;
  padding: 10px;
  color: #292929;
`;

const SwitchTabSpanSelected = styled(SwitchTabSpan)`
  background: #292929;
  color: #f8f8f8;
`;

export const SwitchTab = (props: SwitchTabProps) => {
  const handleClickChangeCurrentMemo = (id, e) => {
    props.handleClickChangeCurrentMemo(id);
  };
  const handleClickAddMemo = e => {
    props.handleClickAddMemo(props.MemoIdList.length);
  };

  return (
    <div>
      <SwitchTabSpan onClick={e => handleClickAddMemo(e)}>
        [[ADD]]
      </SwitchTabSpan>
      {props.MemoIdList.map(el => {
        if (el === props.currentMemo.id) {
          return <SwitchTabSpanSelected>[{el}]</SwitchTabSpanSelected>;
        }
        return (
          <SwitchTabSpan onClick={e => handleClickChangeCurrentMemo(el, e)}>
            {el}
          </SwitchTabSpan>
        );
      })}
    </div>
  );
};
