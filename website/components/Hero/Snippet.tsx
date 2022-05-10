import { useCallback, useRef } from "react";
import styled from "@emotion/styled";

const Code = styled.code`
  display: inline-block;
  padding: 8px 16px;
  border-radius: 5px;
  border: #ddd solid 1px;
  background: rgba(20, 20, 20, 0.4);
  color: #eee;

  /* Ref: https://github.com/chakra-ui/chakra-ui/blob/b77acf36688abb696fd1ec2a7898a7de43a91e37/packages/css-reset/src/css-reset.tsx#L43 */
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 1em;
`;

interface SnippetProps {
  children: string;
}
function Snippet(props: SnippetProps) {
  const ref = useRef<HTMLElement | null>(null);
  const handleClick = useCallback<React.MouseEventHandler>((e) => {
    if (e.detail !== 2) {
      return;
    }

    const elem = ref.current;
    if (elem == null) {
      return;
    }

    // With double click, select all the text.
    const range = new Range();
    range.setStart(elem, 0);
    range.setEnd(elem, 1);
    document.getSelection()?.removeAllRanges();
    document.getSelection()?.addRange(range);
  }, []);

  return (
    <Code ref={ref} onClick={handleClick}>
      {props.children}
    </Code>
  );
}

export default Snippet;
