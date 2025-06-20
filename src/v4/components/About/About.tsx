import { Grid2 } from "@mui/material";
import { CustomText } from "../common/CustomText";
import { GridTabContentWrapper } from "../common/GridTabContentWrapper";

export const About = (): JSX.Element => {
    return (
        <GridTabContentWrapper>
            <Grid2
                size={{ xs: 12 }}
                marginBottom={2}
            >
                <CustomText text={"Hi, welcome to my page!"} />
            </Grid2 >
            <Grid2 size={{ xs: 12 }}>
                <CustomText text="I'm Lorenzo, a full stack developer from Sweden, based in Stockholm." />
            </Grid2>
        </GridTabContentWrapper>
    )

};

