import { Grid2 } from "@mui/material";
import { CustomText } from "../common/CustomText";
import { GridTabContentWrapper } from "../common/GridTabContentWrapper";

export const Contact = (): JSX.Element => {
  return (
    <GridTabContentWrapper>
      <Grid2 size={{ xs: 12 }} marginBottom={2}>
        <CustomText text="LinkedIn" fontSize={14} color="#fff" heading />
        <CustomText
          text="Lorenzo Cermeno"
          fontSize={12}
          link={{ url: "https://www.linkedin.com/in/lorenzo-cermeno/" }}
        />
      </Grid2>

      <Grid2 size={{ xs: 12 }} marginBottom={2}>
        <CustomText text="Github" fontSize={14} color="#fff" heading />
        <CustomText
          text="lorenzocermeno"
          fontSize={12}
          link={{ url: "https://github.com/lorenzocermeno" }}
        />
      </Grid2>
      <Grid2 size={{ xs: 12 }} marginBottom={2}>
        <CustomText text="npm" fontSize={14} color="#fff" heading />
        <CustomText
          text="lorenzocermeno"
          fontSize={12}
          link={{ url: "https://www.npmjs.com/~lorenzocermeno" }}
        />
      </Grid2>
    </GridTabContentWrapper>
  );
};
