import { Typography } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import Grid from "@mui/material/Grid";
import { FontSize } from "../../constants/constants";
import styled from "@emotion/styled";
import { Work } from "./Work/Work";
import { Education } from "./Education/Education";
import { StyledSection } from "../StyledSection";

const StyledSpan = styled.span`
  display: flex;
  align-items: center;
`;

export const Experience = (): JSX.Element => {
  return (
    <StyledSection>
      <>
        <Typography
          fontWeight="bold"
          color="text.primary"
          fontSize={FontSize.h2}
          variant="h2"
          marginBottom={"0.25em"}
        >
          Experience
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <StyledSpan>
              <SchoolIcon
                sx={{ color: "text.primary", marginRight: "0.5em" }}
              />
              <Typography
                fontWeight="bold"
                color="text.primary"
                fontSize={FontSize.h3}
                variant="h3"
              >
                Education
              </Typography>
            </StyledSpan>
            <Education />
          </Grid>
          <Grid item xs={12} sm={6}>
            <StyledSpan>
              <WorkIcon sx={{ color: "text.primary", marginRight: "0.5em" }} />
              <Typography
                fontWeight="bold"
                color="text.primary"
                fontSize={FontSize.h3}
                variant="h3"
              >
                Work
              </Typography>
            </StyledSpan>
            <Work />
          </Grid>
        </Grid>
      </>
    </StyledSection>
  );
};
