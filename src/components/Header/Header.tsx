import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { FontSize } from "../../constants/constants";
import { ProfilePicture } from "./ProfilePicture/ProfilePicture";
import { StyledSection } from "../StyledSection";

export const Header = (): JSX.Element => {
  return (
    <StyledSection>
      <Grid container spacing={4} sx={{ paddingLeft: "2em" }}>
        <Grid
          xs={12}
          sm={2}
          sx={{
            justifyContent: "center",
            display: { xs: "flex" },
            alignItems: { xs: "center" },
          }}
        >
          <ProfilePicture />
        </Grid>
        <Grid
          xs={12}
          sm={10}
          sx={{
            display: { sm: "flex" },
            alignItems: { sm: "center" },
            justifyContent: { sm: "center" },
          }}
        >
          <Typography
            variant="body1"
            color={"text.primary"}
            fontSize={FontSize.h1}
            fontWeight="bold"
            sx={{
              marginLeft: { sm: "0.5em" },
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            Lorenzo Cermeno
          </Typography>
        </Grid>
      </Grid>
    </StyledSection>
  );
};
