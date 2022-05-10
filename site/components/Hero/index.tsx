import styled from "@emotion/styled";
import { Link } from "@chakra-ui/react";
import Snippet from "./Snippet";

const HeroContainer = styled.div`
  position: relative;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #46c9e5; /* fallback color */
  background: linear-gradient(150deg, #46c9e5 0%, #d26ac2 100%);
  height: 300px;
  width: 100%;

  @media (max-width: 640px) {
    height: 200px;
  }
`;

const TitleContainer = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  color: #efefef;
  text-transform: uppercase;
  display: block;
  font-size: 3em;

  @media (max-width: 640px) {
    font-size: 1.5em;
  }
`;

const Subtitle = styled.h2`
  color: #efefef;
  display: block;
  font-size: 1em;
`;

const BodyContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  text-align: center;
  color: #eee;
`;

const SnippetBlockContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 16px auto 0;

  @media (max-width: 640px) {
    display: none;
  }
`;

const SnippetContainer = styled.p`
  margin-bottom: 4px;
`;

const FooterContainer = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
`;

const Footer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 8px 8px;
  text-align: right;
`;

const GitHubLink = styled(Link)`
  display: inline-block;
  margin-top: 8px;
  color: #eee;
`;

function Hero() {
  return (
    <HeroContainer>
      <TitleContainer>
        <Title>react-ymd-date-select</Title>
        <Subtitle>
          Helper hooks and components for Y-M-D dropdowns with React
        </Subtitle>
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

      <FooterContainer>
        <Footer>
          <GitHubLink
            href="https://github.com/whitphx/react-ymd-date-select"
            isExternal
          >
            See on GitHub
          </GitHubLink>
        </Footer>
      </FooterContainer>
    </HeroContainer>
  );
}

export default Hero;
