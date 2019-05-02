import * as React from "react";

interface MemoAreaProps {
  text: string
}

export const MemoArea = (props: MemoAreaProps) => {
  const [text, updateText] = React.useState(props.text);
  const handleUpdateText = React.useCallback(
    e => {
      console.log('updated');
      if (text !== e.target.value) {
        updateText(e.target.value);
      }
    },
    [updateText]
  );

  return <textarea name="memo" value={text} onChange={handleUpdateText} />;
};
