import * as React from "react";
import styled from "styled-components";
import { MemoContents } from "../../modules/actions";

export interface MemoAreaProps {
  currentMemo: MemoContents;
}

const StyledMemoArea = styled.textarea`
  width: 300px;
  height: 500px;
`;

export const MemoArea = (props: MemoAreaProps) => {
  const [text, updateText] = React.useState(props.currentMemo.text);
  React.useEffect (() => {
    updateText(props.currentMemo.text);
  },
  [props.currentMemo]);

  const handleUpdateText = React.useCallback(
    e => {
      if (text !== e.target.value) {
        updateText(e.target.value);
      }
    },
    [props.currentMemo, updateText]
  );

  return (
    <StyledMemoArea name="memo" value={text} onChange={handleUpdateText} />
  );
};
