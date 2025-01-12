import { ImageLink } from "../components/ImageLink/ImageLink";
import { PortfolioCard } from "../components/PortfolioCard/PortfolioCard";
import githubLogo from "../assets/github-logo.svg";
import { Grid2, Typography } from "@mui/material";
import npmLogo from "../assets/npm-logo.svg";
import globeLogo from "../assets/globe-logo.svg";
import robotHeadshot from "../assets/robot-headshot.png";

export const PortfolioView = (): JSX.Element => {
    return (
        <>
            <Typography>Portfolio</Typography>
            <Typography>Projects</Typography>
            <Grid2 container spacing={4} padding={4}>
                <Grid2 size={{ sm: 4 }}>
                    <PortfolioCard title={"AI Hotel Assistant"} description={"An application demonstrating the use of a chatbot to manage and perform hotel booking operations by textually interacting with the user."} repoLinks={<ImageLink
                        id={"Github"}
                        href={"https://github.com/lorenzocermeno/booking-assistant"}
                        imageSrc={githubLogo}
                        width="2"
                    />} />
                </Grid2>
                <Grid2 size={{ sm: 4 }}>
                    <PortfolioCard title={"POS Terminal Application"} description={"A simple POS terminal application, written in Rust to acquire a better understanding of the language."} repoLinks={<ImageLink
                        id={"Github"}
                        href={"https://github.com/lorenzocermeno/pos-terminal-app"}
                        imageSrc={githubLogo}
                        width="2"
                    />} />
                </Grid2>
                <Grid2 size={{ sm: 4 }}>
                    <PortfolioCard title={"Shoe (Brand) Size Converter"} description={"Convert a shoe size across brands, genders and systems."}
                        repoLinks={
                            <>
                                <ImageLink
                                    id={"Github"}
                                    href={"https://github.com/lorenzocermeno/shoe-size-converter"}
                                    imageSrc={githubLogo}
                                    width="2"
                                />
                                <ImageLink
                                    id={"npm"}
                                    href={"https://www.npmjs.com/package/shoe-converter"}
                                    imageSrc={npmLogo}
                                    width="2"
                                />
                            </>
                        } />
                </Grid2>
                <Typography>Publication</Typography>
                <Grid2 size={{ sm: 12 }}>
                    <Grid2>
                        <PortfolioCard title={"Digital Transformation Success Through Aligning the Organizational Structure: Case Study of Swedish Public Organizations"} description={"AMCIS 2022 Proceedings. 10"} repoLinks={<ImageLink
                            id={"Globe (Internet)"}
                            href={"https://aisel.aisnet.org/amcis2022/scudt/scuidt/10/"}
                            imageSrc={globeLogo}
                            width="2"
                        />} />
                    </Grid2>
                </Grid2>
            </Grid2>
        </>
    );
}