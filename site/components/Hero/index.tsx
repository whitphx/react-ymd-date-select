import styled from "@emotion/styled";

const HeroContainer = styled.div`
  margin: 0;
  background: #46c9e5; /* fallback color */
  background: linear-gradient(150deg, #46c9e5 0%, #d26ac2 100%);
  height: 300px;
  width: 100%;
  text-align: center;

  @media (max-width: 640px) {
    height: 150px;
  }
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

function Hero() {
  return (
    <HeroContainer>
      <div>
        <Title>react-ymd-date-select</Title>
      </div>
    </HeroContainer>
  );
}

export default Hero;
