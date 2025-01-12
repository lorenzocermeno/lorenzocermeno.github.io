import styled from "@emotion/styled";
import { Grid2 } from "@mui/material";
import envelope from "../assets/envelope.svg";
import githubLogo from "../assets/github-logo.svg";
import linkedin from "../assets/linkedin-logo.svg";
import npmLogo from "../assets/npm-logo.svg";
import { ContactCard } from "../components/ContactCard/ContactCard";
import { SectionHeading } from "../components/SectionHeading/SectionHeading";

interface IImgProps {
    width: string;
}
const StyledImg = styled.img<IImgProps>`
  width: ${(props) => props.width}em;
`;

export const ContactView = (): JSX.Element => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100vh' }}>
            <SectionHeading text="Contact" level="h2" />
            <Grid2 container spacing={2} padding={4} display={"flex"} justifyContent={"center"}>
                <Grid2 size={{ sm: 3 }} display={"flex"} justifyContent={"center"}>
                    <ContactCard title={"E-mail"} description={"lorenzocermeno@gmail.com"} href="mailto:lorenzocermeno@gmail.com" img={<StyledImg src={envelope} alt="Envelope" width="4" />} />
                </Grid2>
                <Grid2 size={{ sm: 3 }} display={"flex"} justifyContent={"center"}>
                    <ContactCard title={"LinkedIn"} description={"Lorenzo Cermeno"} href="https://www.linkedin.com/in/lorenzo-cermeno" img={<StyledImg src={linkedin} alt="LinkedIn logo" width="4" />} />
                </Grid2>
                <Grid2 size={{ sm: 3 }} display={"flex"} justifyContent={"center"}>
                    <ContactCard title={"GitHub"} description={"lorenzocermeno"} href="https://github.com/lorenzocermeno" img={<StyledImg src={githubLogo} alt="GitHub logo" width="4" />} />
                </Grid2>
                <Grid2 size={{ sm: 3 }} display={"flex"} justifyContent={"center"}>
                    <ContactCard title={"npm"} description={"lorenzocermeno"} href="https://www.npmjs.com/~lorenzocermeno" img={<StyledImg src={npmLogo} alt="npm logo" width="4" />} />
                </Grid2>
            </Grid2>
        </div>)
};