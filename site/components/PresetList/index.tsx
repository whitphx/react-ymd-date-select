import styled from "@emotion/styled";
import IFrame from "./IFrame";

const SideBySideContainer = styled.div`
  display: flex;
  width: 100%;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

const SampleContainer = styled.div`
  width: 100%;
`;

function PresetList() {
  return (
    <div>
      <IFrame src="/site/components/PresetList/samples/vanilla/index.html" />
      <SideBySideContainer>
        <SampleContainer>
          <h3>Chakra UI</h3>
          <IFrame src="/site/components/PresetList/samples/chakra/index.html" />
        </SampleContainer>
        <SampleContainer>
          <h3>Material UI</h3>
          <IFrame src="/site/components/PresetList/samples/mui/index.html" />
        </SampleContainer>
      </SideBySideContainer>
    </div>
  );
}

export default PresetList;
