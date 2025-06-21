import { Grid2 } from "@mui/material";
import { CustomText } from "./CustomText";

export const Divider = (): JSX.Element => {
    return (
        <Grid2 size={{ xs: 12 }} marginBottom={0.5}>
            <CustomText text={"..............."} />
        </Grid2>
    )
};