import * as React from "react";
import styled from "styled-components";

interface MemoAreaProps {
  text: string;
}

const StyledMemoArea = styled.textarea`
  width: 300px;
  height: 500px;
`;

export const MemoArea = (props: MemoAreaProps) => {
  const [text, updateText] = React.useState(props.text);
  const handleUpdateText = React.useCallback(
    e => {
      if (text !== e.target.value) {
        updateText(e.target.value);
      }
    },
    [updateText]
  );

  return (
    <StyledMemoArea name="memo" value={text} onChange={handleUpdateText} />
  );
};
