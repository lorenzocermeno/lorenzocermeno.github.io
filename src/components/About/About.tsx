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
      <Grid container spacing={4} sx={{ paddingLeft: "2em" }}>
        <Grid
          xs={12}
          sm={4}
          container
          sx={{
            justifyContent: "center",
          }}
        >
          <ProfilePicture />
        </Grid>
        <Grid
          xs={12}
          sm={8}
          sx={{
            display: { sm: "flex" },
            alignItems: { sm: "center" },
          }}
        >
          <Typography
            variant="body1"
            color={"white"}
            fontSize={FontSize.h1}
            fontWeight="bold"
            sx={{
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            Lorenzo Cermeno
          </Typography>
        </Grid>
        <Grid xs={12}>
          <Typography
            variant="h2"
            color={"white"}
            fontSize={FontSize.h2}
            fontWeight="bold"
            marginTop="1em"
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
