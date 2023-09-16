import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "../Footer/Link/Link";
import githubLogoDarkMode from "../../images/github-dark-mode.svg";
import githubLogoLightMode from "../../images/github-light-mode.svg";
import npmLogo from "../../images/npm.svg";
import typeScriptLogo from "../../images/typescript.svg";
import jestLogo from "../../images/jest.svg";
import Grid from "@mui/material/Grid";
import styled from "@emotion/styled";
import { FontSize } from "../../constants/constants";
import Divider from "@mui/material/Divider";
import { useTheme } from "@mui/material/styles";

interface IProject {
  id: string;
  text: string;
  title: string;
}

const SHOE_CONVERTER: IProject = {
  id: "shoe-converter",
  text: "Making it possible to convert the shoe size and gender of one brand to another.",
  title: "Shoe Converter",
} as const;

const StyledSection = styled.section`
  margin-bottom: 2em;
`;

const StyledSpan = styled.span`
  display: flex;
  justify-content: space-around;
`;

const StyledImg = styled.img`
  display: flex;
  align-items: center;
  width: 1.25em;
`;

const StyledDiv = styled.div`
  margin-bottom: 1em;
`;

export const Projects = (): JSX.Element => {
  const theme = useTheme();
  return (
    <StyledSection>
      <Typography
        variant="h2"
        color={"text.primary"}
        marginBottom={1}
        fontSize={FontSize.h2}
        fontWeight="bold"
      >
        Projects
      </Typography>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "text.primary" }} />}
          aria-controls={`${SHOE_CONVERTER.id}-content`}
          id={SHOE_CONVERTER.id}
          sx={{ backgroundColor: "background.default" }}
        >
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Typography
                variant="h3"
                fontSize={FontSize.h3}
                color="text.primary"
              >
                {SHOE_CONVERTER.title}
              </Typography>
            </Grid>
            <Grid
              item
              xs={4}
              sx={{ display: "flex", justifyContent: "space-evenly" }}
            >
              <StyledImg src={typeScriptLogo} alt="TypeScript logo" />
              <StyledImg src={jestLogo} alt="Jest logo" />
            </Grid>
          </Grid>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: "background.default" }}>
          <Typography
            variant="body1"
            fontSize={FontSize.p}
            marginBottom={2}
            color="text.primary"
          >
            {SHOE_CONVERTER.text}
          </Typography>
          <StyledDiv>
            <Divider variant="middle" sx={{ borderColor: "#414141" }} />
          </StyledDiv>
          <StyledSpan>
            <Link
              href="https://github.com/lorenzocermeno/shoe-converter"
              id="GitHub"
              src={
                theme.palette.mode === "dark"
                  ? githubLogoDarkMode
                  : githubLogoLightMode
              }
            />
            <Link
              href="https://www.npmjs.com/package/shoe-converter"
              id="npm"
              src={npmLogo}
            />
          </StyledSpan>
        </AccordionDetails>
      </Accordion>
    </StyledSection>
  );
};
