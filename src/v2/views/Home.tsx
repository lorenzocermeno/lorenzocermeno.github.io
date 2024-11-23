import styled from "@emotion/styled";
import { Banner } from "../components/Banner/Banner";
import { PresentationText } from "../components/PresentationText/PresentationText";
import { Contact } from "../components/Contact/Contact";
import { Projects } from "../components/Projects/Projects";

const StyledDiv = styled.div`
  padding: 0em 0em 1em 0em;
`;

const StyledSection = styled.section`
  padding: 1em;
`;

export const Home = (): JSX.Element => {
  return (
    <StyledDiv>
      <Banner />
      <StyledSection>
        <PresentationText />
        <Contact />
        <Projects />
      </StyledSection>
    </StyledDiv>
  );
};
