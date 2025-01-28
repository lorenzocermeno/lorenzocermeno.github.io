import {SectionHeading} from "../components/SectionHeading/SectionHeading";
import {Grid2} from "@mui/material";
import {PortfolioCard} from "../components/PortfolioCard/PortfolioCard";
import javaLogo from "../assets/java-logo.svg";
import springLogo from "../assets/spring-logo.svg";
import langchain4jLogo from "../assets/langchain4j-logo.svg";
import ollamaLogo from "../assets/ollama-logo.svg";
import typescriptLogo from "../assets/typescript-logo.svg";
import jestLogo from "../assets/jest-logo.svg";
import styled from "@emotion/styled";
import reactLogo from "../assets/react-logo.svg";

interface IImgProps {
    width: string;
}

const StyledImg = styled.img<IImgProps>`
    width: ${(props) => props.width}em;
`;

export const SkillsView = (): JSX.Element => {

    return (
        <>
            <SectionHeading text="Skills" level="h2"/>
            <Grid2 container spacing={4} padding={4}>
                <Grid2 size={{sm: 4}} display={"flex"} justifyContent={"center"}>
                    <PortfolioCard title={"Infrastructure"}
                                   chip={[
                                       {
                                           image: <StyledImg src={langchain4jLogo} alt="LangChain4j logo" width="1.5"/>,
                                           text: "LangChain4j"
                                       },
                                       {
                                           image: <StyledImg src={ollamaLogo} alt="Ollama logo" width="1"/>,
                                           text: "Ollama"
                                       }]}
                    />
                </Grid2>
                <Grid2 size={{sm: 4}} display={"flex"} justifyContent={"center"}>
                    <PortfolioCard title={"Backend"}
                                   chip={[{
                                       image: <StyledImg src={javaLogo} alt="Java logo" width="1.5"/>,
                                       text: "Java"
                                   }, {
                                       image: <StyledImg src={springLogo} alt="Spring logo" width="1.5"/>,
                                       text: "Spring"
                                   }
                                   ]}/>
                </Grid2>
                <Grid2 size={{sm: 4}} display={"flex"} justifyContent={"center"}>
                    <PortfolioCard title={"Frontend"}
                                   chip={[{
                                       image: <StyledImg src={reactLogo} alt="React logo" width="1.5"/>,
                                       text: "React"
                                   }, {
                                       image: <StyledImg src={typescriptLogo} alt="Typescript logo" width="1.5"/>,
                                       text: "TypeScript"
                                   }, {
                                       image: <StyledImg src={jestLogo} alt="Jest logo" width="1.5"/>,
                                       text: "Jest"
                                   }]}/>
                </Grid2>
            </Grid2>
        </>
    )
}
