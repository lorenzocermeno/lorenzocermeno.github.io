import { Grid2 } from "@mui/material";
import { CustomText } from "../../common/CustomText";
import { Divider } from "../../common/Divider";

interface ILink {
    name: string;
    url: string;
}

interface IProps {
    heading: string;
    description: string;
    links: ILink[];
}

export const Project = (props: IProps): JSX.Element => {
    const linkText = props.links.length > 1 ? "Links" : "Link";

    return (
        <>
            <Grid2 size={{ xs: 12 }} marginBottom={2}>
                <CustomText text={props.heading} fontSize={14} />
            </Grid2>
            <Grid2 size={{ xs: 12 }} marginBottom={2}>
                <CustomText text={props.description} fontSize={12} />
            </Grid2>
            <Grid2 size={{ xs: 12 }} marginBottom={0.5}>
                <CustomText text={linkText} fontSize={12} color="#e8df3a" />
            </Grid2>
            {props.links.map((link) => (
                <Grid2 key={link.url} size={{ xs: 12 }} margin={0.5}>
                    <CustomText text={link.name} fontSize={12} link={{ url: link.url }} />
                </Grid2>
            ))}
            <Divider />
        </>
    );
};
