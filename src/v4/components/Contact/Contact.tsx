import { Grid2 } from "@mui/material";
import { CustomText } from "../common/CustomText";
import { Divider } from "../common/Divider";
import { GridTabContentWrapper } from "../common/GridTabContentWrapper";

export const Contact = (): JSX.Element => {
  return (
    <GridTabContentWrapper>
      <Grid2 size={{ xs: 12 }} marginBottom={0.5}>
        <CustomText text={"LinkedIn"} fontSize={14} color="#e8df3a" />
        <CustomText
          text={"Lorenzo Cermeno"}
          fontSize={12}
          link={{ url: "https://www.linkedin.com/in/lorenzo-cermeno/" }}
        />
        <Divider />
      </Grid2>
      <Grid2 size={{ xs: 12 }} marginBottom={0.5}>
        <CustomText text={"Github"} fontSize={14} color="#e8df3a" />
        <CustomText
          text={"lorenzocermeno"}
          fontSize={12}
          link={{ url: "https://github.com/lorenzocermeno" }}
        />
        <Divider />
      </Grid2>
      <Grid2 size={{ xs: 12 }} marginBottom={0.5}>
        <CustomText text={"npm"} fontSize={14} color="#e8df3a" />
        <CustomText
          text={"lorenzocermeno"}
          fontSize={12}
          link={{ url: "https://www.npmjs.com/~lorenzocermeno" }}
        />
        <Divider />
      </Grid2>
    </GridTabContentWrapper>
  );
};
