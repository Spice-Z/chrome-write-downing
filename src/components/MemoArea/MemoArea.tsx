import * as React from "react";

interface MemoAreaProps {}

export const MemoArea = (props: MemoAreaProps) => {
  return <textarea name="memo" id="1" cols={30} rows={10} />;
};
