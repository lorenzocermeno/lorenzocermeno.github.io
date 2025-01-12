import styled from "@emotion/styled";
import { Grid2 } from "@mui/material";
import githubLogo from "../assets/github-logo.svg";
import globeLogo from "../assets/globe-logo.svg";
import javaLogo from "../assets/java-logo.svg";
import langchain4jLogo from "../assets/langchain4j-logo.svg";
import npmLogo from "../assets/npm-logo.svg";
import ollamaLogo from "../assets/ollama-logo.svg";
import reactLogo from "../assets/react-logo.svg";
import rustLogo from "../assets/rust-logo.svg";
import springLogo from "../assets/spring-logo.svg";
import typescriptLogo from "../assets/typescript-logo.svg";
import { ImageLink } from "../components/ImageLink/ImageLink";
import { PortfolioCard } from "../components/PortfolioCard/PortfolioCard";
import { SectionHeading } from "../components/SectionHeading/SectionHeading";

interface IImgProps {
    width: string;
}
const StyledImg = styled.img<IImgProps>`
  width: ${(props) => props.width}em;
`;

export const PortfolioView = (): JSX.Element => {
    return (
        <>
            <SectionHeading text="Portfolio" level="h2" />
            <SectionHeading text="Projects" level="h3" />
            <Grid2 container spacing={4} padding={4}>
                <Grid2 size={{ sm: 4 }} display={"flex"} justifyContent={"center"}>
                    <PortfolioCard title={"AI Hotel Booking Assistant"} description={"An application demonstrating the use of a chatbot to manage and perform hotel booking operations by textually interacting with the user."} repoLinks={<ImageLink
                        id={"Github"}
                        href={"https://github.com/lorenzocermeno/booking-assistant"}
                        imageSrc={githubLogo}
                        width="2"
                    />}
                        chip={[{ image: <StyledImg src={javaLogo} alt="Java logo" width="1.5" />, text: "Java" },
                        { image: <StyledImg src={springLogo} alt="Spring logo" width="1.5" />, text: "Spring" },
                        { image: <StyledImg src={langchain4jLogo} alt="LangChain4j logo" width="1.5" />, text: "LangChain4j" },
                        { image: <StyledImg src={ollamaLogo} alt="Ollama logo" width="1" />, text: "Ollama" },
                        { image: <StyledImg src={typescriptLogo} alt="TypeScript logo" width="1.5" />, text: "TypeScript" },
                        { image: <StyledImg src={reactLogo} alt="React logo" width="1.5" />, text: "React" }
                        ]}
                    />
                </Grid2>
                <Grid2 size={{ sm: 4 }} display={"flex"} justifyContent={"center"}>
                    <PortfolioCard title={"POS Terminal Application"} description={"A simple POS terminal application, written in Rust to acquire a better understanding of the language."} repoLinks={<ImageLink
                        id={"Github"}
                        href={"https://github.com/lorenzocermeno/pos-terminal-app"}
                        imageSrc={githubLogo}
                        width="2"
                    />} chip={[{ image: <StyledImg src={rustLogo} alt="Rust logo" width="2" />, text: "Rust" }]} />
                </Grid2>
                <Grid2 size={{ sm: 4 }} display={"flex"} justifyContent={"center"}>
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
                        }
                        chip={[{ image: <StyledImg src={typescriptLogo} alt="Typescript logo" width="1.5" />, text: "TypeScript" }]} />
                </Grid2>
            </Grid2>

            <SectionHeading text="Publication" level="h3" />
            <Grid2 container spacing={4} padding={4}>
                <Grid2 size={{ sm: 12 }} display={"flex"} justifyContent={"center"}>
                    <PortfolioCard title={"Digital Transformation Success Through Aligning the Organizational Structure: Case Study of Swedish Public Organizations"} description={"AMCIS 2022 Proceedings. 10"} repoLinks={<ImageLink
                        id={"Globe (Internet)"}
                        href={"https://aisel.aisnet.org/amcis2022/scudt/scuidt/10/"}
                        imageSrc={globeLogo}
                        width="2"
                    />}
                    />
                </Grid2>
            </Grid2>
        </>
    );
}