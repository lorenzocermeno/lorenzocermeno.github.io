import { Box, Card, CardActions, CardContent, CardMedia, Fade, Popper, Typography } from "@mui/material";
import { ReactNode, useState } from "react";

interface IProps {
    title: string;
    description: string;
    repoLinks: ReactNode;
}

export const PortfolioCard = (props: IProps): JSX.Element => {
    return (
        <Card sx={{ maxWidth: 285, borderRadius: '2rem' }}>
            <CardContent sx={{ minHeight: 175 }}>
                <Typography gutterBottom variant="h5" component="div">
                    {props.title}                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {props.description}                </Typography>
            </CardContent>
            <CardActions sx={{ display: 'flex', justifyContent: 'space-evenly', marginBottom: '1rem' }}>
                {props.repoLinks}
            </CardActions>
        </Card>
    );
}