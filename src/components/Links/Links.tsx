import githubLogo from "../../images/gitHub.svg";
import npmLogo from "../../images/npm.svg";
import linkedInLogo from "../../images/linkedIn.svg";
import { Link } from "./Link/Link";
import styled from "@emotion/styled";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-around;
`;

export const Links = () => {
  return (
    <StyledFooter>
      <Link
        href="https://github.com/lorenzocermeno"
        id="GitHub"
        src={githubLogo}
      />
      <Link
        href="https://www.npmjs.com/~lorenzocermeno"
        id="npm"
        src={npmLogo}
      />
      <Link
        href="https://www.linkedin.com/in/lorenzo-cermeno/"
        id="LinkedIn"
        src={linkedInLogo}
      />
    </StyledFooter>
  );
};
