import * as React from "react";
import { MemoContents } from "../../modules/actions";
import styled from "styled-components";

export interface SwitchTabProps {
  currentMemo: MemoContents;
  MemoIdList: number[];
  handleClickChangeCurrentMemo(id: number): void;
  handleClickAddMemo(id: number): void;
}

const SwitchTabContainer = styled.div`
  margin: 10px 0;
`;

const SwitchTabSpan = styled.span`
  display: inline-block;
  width: 50px;
  height: 50px;
  box-sizing: border-box;
  border: 2px #292929 solid;
  border-radius: 5px;
  text-align: center;
  vertical-align:middle;
  color: #292929;
`;

const SwitchTabSpanSelected = styled(SwitchTabSpan)`
  background: #292929;
  border: none;
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
    <SwitchTabContainer>
      <SwitchTabSpan onClick={e => handleClickAddMemo(e)}>
        [[+]]
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
    </SwitchTabContainer>
  );
};
