import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { FontSize } from "../../constants/constants";
import styled from "@emotion/styled";
import { ExperienceBase } from "./ExperienceBase/ExperienceBase";

const StyledSection = styled.section`
  margin-bottom: 2em;
`;

export const Experience = () => {
  function education() {
    return { duration: "2017-2020", title: "Stockholm University" };
  }
  return (
    <StyledSection>
      <Grid container spacing={4} sx={{ paddingLeft: "2em" }}>
        <Grid container xs={12}>
          <Typography
            variant="h2"
            color={"white"}
            fontSize={FontSize.h2}
            fontWeight="bold"
            marginTop="1em"
          >
            Experience
          </Typography>
        </Grid>
        <Grid
          container
          xs={12}
          sm={6}
          sx={
            {
              // justifyContent: "center",
            }
          }
        >
          <ExperienceBase
            education={true}
            heading="Education"
            entries={[
              {
                duration: "2017-2020",
                title: "Stockholm University",
                body: "Placeholder",
              },
            ]}
          />
        </Grid>
        <Grid
          container
          xs={12}
          sm={6}
          sx={
            {
              // display: { sm: "flex" },
              // alignItems: { sm: "center" },
            }
          }
        >
          <ExperienceBase
            education={false}
            heading="Work"
            entries={[
              {
                duration: "2022- current",
                title: "Job",
                body: "Placeholder",
              },
            ]}
          />
        </Grid>
      </Grid>
    </StyledSection>
  );
};
