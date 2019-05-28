import * as React from "react";
import styled from "styled-components";
import { MemoContents } from "../../modules/actions";

export interface MemoAreaProps {
  currentMemo: MemoContents;
  isAfterDeleteAction: boolean;
  updateCurrentMemo(currentMemo: MemoContents): void;
}

const StyledMemoArea = styled.textarea`
  width: 300px;
  height: 500px;
  font-size: 16px;
`;

export const MemoArea = (props: MemoAreaProps) => {
  const [text, setText] = React.useState(props.currentMemo.text);
  const [id, setId] = React.useState(props.currentMemo.id);
  React.useEffect(() => {
    if (
      props.currentMemo.id !== id &&
      props.currentMemo.text !== text &&
      !props.isAfterDeleteAction
    ) {
      props.updateCurrentMemo({ id, text });
    }
    setId(props.currentMemo.id);
    setText(props.currentMemo.text);
  }, [props.currentMemo]);

  const handleUpdateText = React.useCallback(
    e => {
      setText(e.target.value);
    },
    [setText]
  );

  return <StyledMemoArea value={text} onChange={handleUpdateText} />;
};
