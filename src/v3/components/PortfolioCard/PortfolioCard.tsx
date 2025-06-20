import { Card, CardActions, CardContent, Chip, Grid2, Stack, Typography } from "@mui/material";
import React, { ReactNode } from "react";

interface IChip {
    image?: React.ReactElement;
    text: string;
}

interface IProps {
    title: string;
    description?: string;
    repoLinks?: ReactNode;
    chip?: IChip[];
}

export const PortfolioCard = (props: IProps): JSX.Element => {
    return (
        <Card sx={{
            minWidth: "275px",
            borderRadius: '2rem',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <CardContent>
                <Typography gutterBottom variant="h4" color="white" textAlign={"center"}>
                    {props.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "white" }}>
                    {props.description}
                </Typography>
            </CardContent>
            <CardActions sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
                marginBottom: '1rem',
                marginTop: 'auto',
                width: '100%'
            }}>
                <Grid2 container spacing={1} alignItems="flex-end">
                    <Grid2 size={{ xs: 12 }} marginBottom={props.repoLinks ? 2 : 0}>
                        {props.chip &&
                            <Stack direction="column" spacing={1} display={"flex"} justifyContent={"center"}>
                                {props.chip.map((chip, index) => (
                                    <Chip key={index} icon={chip?.image}
                                        label={<Typography color="white">{chip.text}</Typography>} />))}
                            </Stack>}
                    </Grid2>
                    {props.repoLinks &&
                        <Grid2 size={{ xs: 12 }} marginBottom={1} display={"flex"} justifyContent={"space-evenly"}>
                            {props.repoLinks}
                        </Grid2>}
                </Grid2>
            </CardActions>
        </Card>
    );
}
