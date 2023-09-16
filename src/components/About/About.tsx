import Typography from "@mui/material/Typography";
import { FontSize } from "../../constants/constants";
import Grid from "@mui/material/Grid";
import { StyledSection } from "../StyledSection";
import { ThemeSwitch } from "../ThemeSwitch/ThemeSwitch";

export const About = () => {
  return (
    <StyledSection>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={8}>
          <Typography
            variant="h2"
            color={"text.primary"}
            fontSize={FontSize.h2}
            fontWeight="bold"
          >
            About
            <Typography
              variant="body1"
              color={"text.primary"}
              fontSize={FontSize.p}
              marginTop={"0.25em"}
            >
              Developer from Stockholm 🇸🇪
            </Typography>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <ThemeSwitch />
        </Grid>
      </Grid>
    </StyledSection>
  );
};
