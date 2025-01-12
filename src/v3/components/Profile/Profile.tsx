import { Grid2, Typography } from "@mui/material";
import profilePicture from "../../assets/profile.jpg";
import linkedinLogo from "../../assets/linkedin-logo.svg";
import githubLogo from "../../assets/github-logo.svg";
import { ImageLink } from "../ImageLink/ImageLink";
import profilePicture2 from "../../assets/IMG_3480.jpg";

export const Profile = (): JSX.Element => {
    return (
        <Grid2 container spacing={1} padding={4}>
            <Grid2
                size={{ sm: 6 }}
                display={"flex"}
                justifyContent={"center"}
            >
                <img src={profilePicture2} alt="profile" style={{ borderRadius: "50%", width: "60%", height: "auto", objectFit: "cover" }} />
            </Grid2>
            <Grid2
                size={{ sm: 6 }}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
            >
                <Typography variant="h3" marginBottom={1}>Lorenzo Cermeno</Typography>
                <Typography variant="h4" marginBottom={2}>Full Stack Developer</Typography>
                <Grid2
                    size={{ sm: 12 }}
                    display={"flex"}
                    justifyContent={"space-evenly"}
                >
                    <ImageLink id={"Github"} href={"https://github.com/lorenzocermeno"} imageSrc={githubLogo} width={"3"} />
                    <ImageLink id={"LinkedIn"} href={"https://www.linkedin.com/in/lorenzo-cermeno"} imageSrc={linkedinLogo} width={"3"} />
                </Grid2>
            </Grid2>
        </Grid2>
    );
};