import { Grid2 } from "@mui/material";
import githubLogo from "../../assets/github-dark-mode.svg";
import linkedinLogo from "../../assets/linkedin-dark-mode.svg";
import npmLogo from "../../assets/npm.svg";
import paperPlane from "../../assets/paper-plane.svg";
import styled from "@emotion/styled";
import { ImageLink } from "../../components/ImageLink/ImageLink";

const StyledSection = styled.section`
  margin-bottom: 2em;
`;

export const Contact = () => {
  return (
    <StyledSection>
      <Grid2 container spacing={4} marginTop={4}>
        <Grid2
          size={{ xs: 12, sm: 3 }}
          display={"flex"}
          justifyContent={"center"}
        >
          <ImageLink
            id={"LinkedIn"}
            href={"https://www.linkedin.com/in/lorenzo-cermeno/"}
            imageSrc={linkedinLogo}
            width="5"
          />
        </Grid2>
        <Grid2
          size={{ xs: 12, sm: 3 }}
          display={"flex"}
          justifyContent={"center"}
        >
          <ImageLink
            id={"Github"}
            href={"https://github.com/lorenzocermeno"}
            imageSrc={githubLogo}
            width="5"
          />
        </Grid2>
        <Grid2
          size={{ xs: 12, sm: 3 }}
          display={"flex"}
          justifyContent={"center"}
          width="5"
        >
          <ImageLink
            id="E-mail"
            href="mailto:lorenzocermeno@gmail.com"
            imageSrc={paperPlane}
            width="5"
          />
        </Grid2>
        <Grid2
          size={{ xs: 12, sm: 3 }}
          display={"flex"}
          justifyContent={"center"}
        >
          <ImageLink
            id={"npm"}
            href={"https://www.npmjs.com/~lorenzocermeno"}
            imageSrc={npmLogo}
            width="5"
          />
        </Grid2>
      </Grid2>
    </StyledSection>
  );
};
