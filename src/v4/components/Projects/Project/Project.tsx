import { Grid2 } from "@mui/material";
import { CustomText } from "../../common/CustomText";

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
                <CustomText text={props.heading} />
            </Grid2>
            <Grid2 size={{ xs: 12 }} marginBottom={2}>
                <CustomText text={props.description} fontSize={14} />
            </Grid2>
            <Grid2 size={{ xs: 12 }} marginBottom={0.5}>
                <CustomText text={linkText} />
            </Grid2>
            {props.links.map((link) => (
                <Grid2 key={link.url} size={{ xs: 12 }}>
                    <CustomText text={link.name} fontSize={14} link={{ url: link.url }} />
                </Grid2>
            ))}
            {/* //TODO: Add delimiter: ........... */}
        </>
    );
};
