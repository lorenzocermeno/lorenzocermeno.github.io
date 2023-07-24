import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "./Links/Link/Link";
import gitHubLogo from "../images/gitHub.svg";
import npmLogo from "../images/npm.svg";
import typeScriptLogo from "../images/typescript.svg";
import jestLogo from "../images/jest.svg";
import Grid from "@mui/material/Grid";
import styled from "@emotion/styled";
import { FontSize } from "../constants/constants";
import Divider from "@mui/material/Divider";

interface IProject {
  ID: string;
  TEXT: string;
  TITLE: string;
}

const SHOE_CONVERTER: IProject = {
  ID: "shoe-converter",
  TEXT: "Making it possible to convert the shoe size and gender of one brand to another.",
  TITLE: "Shoe Converter",
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
  return (
    <StyledSection>
      <Typography
        variant="h2"
        color={"white"}
        marginBottom={1}
        fontSize={FontSize.h2}
        fontWeight="bold"
      >
        Projects
      </Typography>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          aria-controls={`${SHOE_CONVERTER.ID}-content`}
          id={SHOE_CONVERTER.ID}
          sx={{ backgroundColor: "#000000e6" }}
        >
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Typography variant="h3" fontSize={FontSize.h3} color="white">
                {SHOE_CONVERTER.TITLE}
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
        <AccordionDetails sx={{ backgroundColor: "#000000e6" }}>
          <Typography
            variant="body1"
            fontSize={FontSize.p}
            marginBottom={2}
            color="white"
          >
            {SHOE_CONVERTER.TEXT}
          </Typography>
          <StyledDiv>
            <Divider variant="middle" sx={{ borderColor: "#414141" }} />
          </StyledDiv>
          <StyledSpan>
            <Link
              href="https://github.com/lorenzocermeno/shoe-converter"
              id="GitHub"
              src={gitHubLogo}
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
