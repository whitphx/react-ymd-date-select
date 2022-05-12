import { useState, RefCallback, useCallback, useEffect, useRef } from "react";
import styled from "@emotion/styled";

const StyledIFrame = styled.iframe`
  display: block;
  width: 100%;
`;

export interface IFrameProps {
  src: string;
}

function IFrame(props: IFrameProps) {
  const [height, setHeight] = useState<number>();
  const ref = useRef<HTMLIFrameElement | null>(null);
  const refCallback = useCallback<RefCallback<HTMLIFrameElement>>((iframe) => {
    ref.current = iframe;

    if (iframe == null) {
      return;
    }

    iframe.onload = () => {
      // https://stackoverflow.com/questions/9975810/make-iframe-automatically-adjust-height-according-to-the-contents-without-using
      setHeight(iframe.contentWindow?.document?.documentElement?.scrollHeight);
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (ref.current == null) {
        return;
      }
      const iframe = ref.current;
      setHeight(iframe.contentWindow?.document?.documentElement?.scrollHeight);
    }, 200);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <StyledIFrame
      ref={refCallback}
      src={props.src}
      frameBorder="0"
      height={height}
    />
  );
}

export default IFrame;
