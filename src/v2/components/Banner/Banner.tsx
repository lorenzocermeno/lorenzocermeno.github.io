import styled from "@emotion/styled";
import { HomeBannerLink } from "./BannerItem/HomeBannerLink";
import { Grid2 } from "@mui/material";

const StyledBanner = styled.div`
  background-size: cover;
  background-position: center;
  background-color: white;
  margin-bottom: 1em;
  padding: 1em;
`;

export const Banner = () => {
  return (
    <StyledBanner>
      <Grid2 container spacing={2}>
        <Grid2 size={{ xs: 8, md: 10 }}>
          <HomeBannerLink />
        </Grid2>
        <Grid2 size={{ xs: 4, md: 2 }}>Projects</Grid2>
      </Grid2>
    </StyledBanner>
  );
};
