import styled from "@emotion/styled";
import {Grid2} from "@mui/material";
import {CustomText} from "../../common/CustomText";

const StyledDiv = styled.div`
    margin-bottom: 2em;
    width: 100%;
`;

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
    function getLinkText(): string {
        const length = props?.links?.length ?? 0;
        if (length > 1) {
            return "Links";
        }
        return "Link";
    }

    return (
        <StyledDiv>
            <Grid2
                size={{xs: 12}}
                marginBottom={2}
                display="flex"
                justifyContent="center"
                role="heading"
                aria-level={2}
            >
                <CustomText text={props.heading} fontSize={14} heading/>
            </Grid2>
            <Grid2 size={{xs: 12}} marginBottom={2}>
                <CustomText text={props.description} fontSize={12}/>
            </Grid2>
            {props?.links &&
                <Grid2 size={{xs: 12}} marginBottom={0.5}>
                    <CustomText text={getLinkText()} fontSize={12} color="#e8df3a"/>
                </Grid2>
            }
            {props?.links?.map((link) => (
                <Grid2 key={link.url} size={{xs: 12}} margin={0.5}>
                    <CustomText text={link.name} fontSize={12} link={{url: link.url}}/>
                </Grid2>
            ))}
        </StyledDiv>
    );
};
