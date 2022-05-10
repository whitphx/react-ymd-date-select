import styled from "@emotion/styled";
import { H3 } from "../Heading";
import IFrame from "./IFrame";
import ChakraSampleCode from "./samples/chakra-ui/Sample?raw";
import MuiSampleCode from "./samples/mui/Sample?raw";
import CollapseCodeBlock from "./CollapseCodeBlock";

const SideBySideContainer = styled.div`
  display: flex;
  width: 100%;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

const SampleContainer = styled.div`
  flex-grow: 1;
  flex-basis: 80px;
  width: 50%;

  @media (max-width: 640px) {
    width: 100%;
  }
`;

export function VanillaSample() {
  return (
    <IFrame src="/site/components/preset-samples/samples/vanilla/index.html" />
  );
}

export function VariantSamples() {
  return (
    <SideBySideContainer>
      <SampleContainer>
        <H3>Chakra UI</H3>
        <CollapseCodeBlock code={ChakraSampleCode} language="tsx">
          <IFrame src="/site/components/preset-samples/samples/chakra-ui/index.html" />
        </CollapseCodeBlock>
      </SampleContainer>
      <SampleContainer>
        <H3>Material UI</H3>
        <CollapseCodeBlock code={MuiSampleCode} language="tsx">
          <IFrame src="/site/components/preset-samples/samples/mui/index.html" />
        </CollapseCodeBlock>
      </SampleContainer>
    </SideBySideContainer>
  );
}
