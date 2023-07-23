import githubLogo from "../../images/github.svg";
import npmLogo from "../../images/npm-2.svg";
import linkedInLogo from "../../images/social-linkedin.svg";
import { Link } from "./Link/Link";
import styled from "@emotion/styled";

const StyledSection = styled.section`
  display: flex;
  justify-content: space-around;
`;

export const Links = () => {
  return (
    <StyledSection>
      <Link href="https://www.github.com" id="GitHub" src={githubLogo} />
      <Link href="https://www.npm.com" id="npm" src={npmLogo} />
      <Link href="https://www.linkedin.com" id="LinkedIn" src={linkedInLogo} />
    </StyledSection>
  );
};
