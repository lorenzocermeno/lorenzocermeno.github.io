import { Typography } from "@mui/material";

interface IProps {
    text: string;
    level: "h2" | "h3"
}

export const SectionHeading = (props: IProps) => {
    return (<Typography variant={props.level} marginBottom={props.level === "h2" ? 2 : 0} color="white" display={"flex"} justifyContent={"center"}>{props.text}</Typography>
    )
};