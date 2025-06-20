import { Grid2 } from "@mui/material";

interface IProps {
    children: JSX.Element | JSX.Element[];
}

export const GridTabContentWrapper = (props: IProps): JSX.Element => {
    return (
        <Grid2 container marginBottom={2}>
            {props.children}
        </Grid2>
    )
};