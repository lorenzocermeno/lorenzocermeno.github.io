import { Typography } from "@mui/material";

interface IProps {
    text: string;
    fontSize?: number;
    link?: {
        url: string;
    }
}

export const CustomText = (props: IProps): JSX.Element => {
    const fontSize = props.fontSize ? `${props.fontSize}px` : "16px";
    return (
        <Typography
            fontSize={fontSize}
            fontFamily='"Press Start 2P", cursive'
            sx={props.link && {
                element: 'a',
                href: props.link.url,
                color: 'inherit',
                cursor: 'pointer',
                transition: 'color 0.2s',
                '&:hover': {
                    color: 'purple',
                },
            }}
        >
            {props.text}
        </Typography>
    );
};

