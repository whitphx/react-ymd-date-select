import styled from "@emotion/styled";
import Snippet from "./Snippet";

const HeroContainer = styled.div`
  margin: 0;
  background: #46c9e5; /* fallback color */
  background: linear-gradient(150deg, #46c9e5 0%, #d26ac2 100%);
  height: 300px;
  width: 100%;

  @media (max-width: 640px) {
    height: 150px;
  }
`;

const TitleContainer = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  color: #efefef;
  text-transform: uppercase;
  display: inline-block;
  margin-top: 60px;
  font-size: 3em;

  @media (max-width: 640px) {
    font-size: 1.5em;
  }
`;

const BodyContainer = styled.div`
  margin: 32px auto 0;
  max-width: 960px;
`;

const SnippetBlockContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #eee;
  text-align: center;
  margin: 0 auto;
`;

const SnippetContainer = styled.p`
  margin-bottom: 4px;
`;

function Hero() {
  return (
    <HeroContainer>
      <TitleContainer>
        <Title>react-ymd-date-select</Title>
      </TitleContainer>

      <BodyContainer>
        <SnippetBlockContainer>
          <SnippetContainer>
            <Snippet>npm install --save react-ymd-date-select</Snippet>
          </SnippetContainer>
          <SnippetContainer>
            <Snippet>yarn add react-ymd-date-select</Snippet>
          </SnippetContainer>
        </SnippetBlockContainer>
      </BodyContainer>
    </HeroContainer>
  );
}

export default Hero;
