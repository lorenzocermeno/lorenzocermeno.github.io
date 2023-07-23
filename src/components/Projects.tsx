import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "./Links/Link/Link";
import gitHubLogo from "../images/github.svg";
import npmLogo from "../images/npm-2.svg";
import styled from "@emotion/styled";
import { FontSize } from "../constants/constants";

interface IProject {
  ID: string;
  HREF: string;
  TEXT: string;
  TITLE: string;
}

const SHOE_CONVERTER: IProject = {
  ID: "shoe-converter",
  HREF: "_blank",
  TEXT: "A shoe converter, lorem ipsum",
  TITLE: "Shoe Converter",
} as const;

const StyledSection = styled.section`
  margin-bottom: 2em;
`;

const StyledSpan = styled.span`
  display: flex;
  justify-content: space-around;
`;

export const Projects = (): JSX.Element => {
  return (
    <StyledSection>
      <Typography
        variant="h2"
        color={"black"}
        marginBottom={1}
        fontSize={FontSize.h2}
      >
        Projects
      </Typography>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`${SHOE_CONVERTER.ID}-content`}
          id={SHOE_CONVERTER.ID}
        >
          <Typography variant="h3" fontSize={FontSize.h3}>
            {SHOE_CONVERTER.TITLE}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" fontSize={FontSize.p} marginBottom={1}>
            {SHOE_CONVERTER.TEXT}
          </Typography>
          <StyledSpan>
            <Link href="https://www.github.com" id="GitHub" src={gitHubLogo} />
            <Link href="https://www.npm.com" id="npm" src={npmLogo} />
          </StyledSpan>
        </AccordionDetails>
      </Accordion>
    </StyledSection>
  );
};
