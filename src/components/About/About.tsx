import Typography from "@mui/material/Typography";
import { FontSize } from "../../constants/constants";
import Grid from "@mui/material/Grid";
import { StyledSection } from "../StyledSection";
import { ThemeSwitch } from "../ThemeSwitch/ThemeSwitch";

export const About = () => {
  return (
    <StyledSection>
      <Grid container spacing={2}>
        <Grid item xs={10} sm={8}>
          <Typography
            variant="h2"
            color={"text.primary"}
            fontSize={FontSize.h2}
            fontWeight="bold"
            marginBottom={"0.25em"}
          >
            About
          </Typography>
          <Typography
            variant="body1"
            color={"text.primary"}
            fontSize={FontSize.p}
          >
            Developer from Stockholm 🇸🇪
          </Typography>
        </Grid>
        <Grid item xs={2} sm={4}>
          <ThemeSwitch />
        </Grid>
      </Grid>
    </StyledSection>
  );
};
