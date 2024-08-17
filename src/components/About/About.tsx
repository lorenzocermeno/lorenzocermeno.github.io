import Typography from "@mui/material/Typography";
import { FontSize } from "../../constants/constants";
import Grid from "@mui/material/Grid";
import { StyledSection } from "../StyledSection";
import { ThemeSwitch } from "../ThemeSwitch/ThemeSwitch";
import { LanguageSwitch } from "../LanguageSwitch/LanguageSwitch";

export const About = () => {
  return (
    <StyledSection>
      <Grid container spacing={2}>
        <Grid item xs={8}>
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
            Fullstack developer from Stockholm 🇸🇪
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <LanguageSwitch />
        </Grid>
        <Grid item xs={2}>
          <ThemeSwitch />
        </Grid>
      </Grid>
    </StyledSection>
  );
};
