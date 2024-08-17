import githubLogoDarkMode from "../../images/github-dark-mode.svg";
import npmLogo from "../../images/npm.svg";
import linkedInLogoDarkMode from "../../images/linkedin-dark-mode.svg";
import { Link } from "./Link/Link";
import styled from "@emotion/styled";
import { PaletteMode, useTheme } from "@mui/material";
import githubLogoLightMode from "../../images/github-light-mode.svg";
import linkedInLogoLightMode from "../../images/linkedin-light-mode.svg";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-around;
`;

export const Footer = () => {
  const theme = useTheme();
  return (
    <StyledFooter>
      <Link
        href="https://github.com/lorenzocermeno"
        id="GitHub"
        src={
          theme.palette.mode === "dark"
            ? githubLogoDarkMode
            : githubLogoLightMode
        }
      />
      <Link
        href="https://www.linkedin.com/in/lorenzo-cermeno/"
        id="LinkedIn"
        src={
          theme.palette.mode === "dark"
            ? linkedInLogoDarkMode
            : linkedInLogoLightMode
        }
      />
    </StyledFooter>
  );
};
