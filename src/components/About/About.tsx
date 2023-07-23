import { ProfilePicture } from "./ProfilePicture/ProfilePicture";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { FontSize } from "../../constants/constants";

export const About = () => {
  return (
    <section>
      <Grid container spacing={4}>
        <Grid xs={4}>
          <ProfilePicture />
        </Grid>
        <Grid xs={8}>
          <Typography
            variant="h2"
            color={"black"}
            fontSize={FontSize.h2}
            textAlign="left"
          >
            About
            <Typography variant="body1" color={"black"} fontSize={FontSize.p}>
              Lorem ipsum ...
            </Typography>
          </Typography>
        </Grid>
      </Grid>
    </section>
  );
};
