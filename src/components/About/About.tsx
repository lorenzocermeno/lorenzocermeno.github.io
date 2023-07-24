import { ProfilePicture } from "./ProfilePicture/ProfilePicture";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { FontSize } from "../../constants/constants";
import styled from "@emotion/styled";

const StyledSection = styled.section`
  margin-bottom: 2em;
`;

export const About = () => {
  return (
    <StyledSection>
      <Grid container spacing={4}>
        <Grid xs={8}>
          <Typography
            variant="body1"
            color={"white"}
            fontSize={FontSize.h1}
            textAlign="left"
            fontWeight="bold"
            paddingLeft={4} // Find a way to remove
          >
            Lorenzo Cermeno
          </Typography>
        </Grid>
        <Grid xs={4} container justifyContent="center">
          <ProfilePicture />
        </Grid>
        <Grid xs={8}>
          <Typography
            variant="h2"
            color={"white"}
            fontSize={FontSize.h2}
            textAlign="left"
            fontWeight="bold"
            paddingLeft={4} // Find a way to remove
          >
            About
            <Typography variant="body1" color={"white"} fontSize={FontSize.p}>
              Developer from Stockholm 🇸🇪
            </Typography>
          </Typography>
        </Grid>
      </Grid>
    </StyledSection>
  );
};
