import { Grid2, Typography } from "@mui/material";
import githubLogo from "../../assets/github-dark-mode.svg";
import linkedinLogo from "../../assets/linkedin-dark-mode.svg";
import npmLogo from "../../assets/npm.svg";
import { ImageLink } from "../common/ImageLink/ImageLink";
import styled from "@emotion/styled";

const StyledSection = styled.section`
  margin-bottom: 2em;
`;

export const Contact = () => {
  return (
    <StyledSection>
      <Grid2 container spacing={2}>
        <Grid2 size={{ xs: 12 }}>
          <Typography fontSize="100" textAlign={"center"} color="white">
            Contact and socials
          </Typography>
        </Grid2>
        <Grid2 size={{ xs: 4 }}>
          <ImageLink
            id={"LinkedIn"}
            href={"https://www.linkedin.com/in/lorenzo-cermeno/"}
            imageSrc={linkedinLogo}
          />
        </Grid2>
        <Grid2 size={{ xs: 4 }}>
          <ImageLink
            id={"Github"}
            href={"https://github.com/lorenzocermeno"}
            imageSrc={githubLogo}
          />
        </Grid2>
        <Grid2 size={{ xs: 4 }}>
          <ImageLink
            id={"npm"}
            href={"https://www.npmjs.com/~lorenzocermeno"}
            imageSrc={npmLogo}
          />
        </Grid2>
      </Grid2>
    </StyledSection>
  );
};
