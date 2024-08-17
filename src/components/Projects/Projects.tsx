import Typography from "@mui/material/Typography";
import { Link } from "../Footer/Link/Link";
import githubLogoDarkMode from "../../images/github-dark-mode.svg";
import githubLogoLightMode from "../../images/github-light-mode.svg";
import npmLogo from "../../images/npm.svg";
import typeScriptLogo from "../../images/typescript.svg";
import jestLogo from "../../images/jest.svg";
import rustLogo from "../../images/rust.svg";
import styled from "@emotion/styled";
import { FontSize } from "../../constants/constants";
import { useTheme } from "@mui/material/styles";
import dockerLogo from "../../images/docker.svg";
import reactLogo from "../../images/react.svg";
import springLogo from "../../images/spring.svg";
import mongoDbLogo from "../../images/mongodb.svg";
import { Project } from "./Project/Project";

interface IProject {
  id: string;
  text: string;
  title: string;
}

const StyledSection = styled.section`
  margin-bottom: 2em;
`;

const StyledImg = styled.img`
  display: flex;
  align-items: center;
  width: 1.25em;
`;

export const Projects = (): JSX.Element => {
  const theme = useTheme();
  return (
    <StyledSection>
      <Typography
        variant="h2"
        color={"text.primary"}
        marginBottom={1}
        fontSize={FontSize.h2}
        fontWeight="bold"
      >
        Projects
      </Typography>
      <Project
        id={"shoe-converter"}
        text={
          "Making it possible to convert the shoe size and gender of one brand to another."
        }
        title={"Shoe Converter"}
        imageRow={
          <>
            <StyledImg src={typeScriptLogo} alt="TypeScript logo" />
            <StyledImg src={jestLogo} alt="Jest logo" />
          </>
        }
        footer={
          <>
            <Link
              href="https://github.com/lorenzocermeno/shoe-converter"
              id="GitHub"
              src={
                theme.palette.mode === "dark"
                  ? githubLogoDarkMode
                  : githubLogoLightMode
              }
            />
            <Link
              href="https://www.npmjs.com/package/shoe-converter"
              id="npm"
              src={npmLogo}
            />
          </>
        }
      />
      <Project
        id={"cli-point-of-sale-app"}
        text={
          "Incredibly simple application, made with the purpose of familiarizing myself with Rust."
        }
        title={"CLI Point of Sale Application"}
        imageRow={
          <>
            <StyledImg src={rustLogo} alt="Rust logo" />
          </>
        }
        footer={
          <Link
            href="about:blank"
            id="GitHub"
            src={
              theme.palette.mode === "dark"
                ? githubLogoDarkMode
                : githubLogoLightMode
            }
          />
        }
      />
      <Project
        id={"todo-list"}
        text={"A fullstack todo list application."}
        title={"Todo List [Work in progress]"}
        imageRow={
          <>
            <StyledImg src={reactLogo} alt="React logo" />
            <StyledImg src={springLogo} alt="Spring Boot logo" />
            <StyledImg src={mongoDbLogo} alt="MongoDb logo" />
            <StyledImg src={dockerLogo} alt="Docker logo" />
          </>
        }
        footer={
          <>
            <Link
              href="https://github.com/lorenzocermeno/shoe-converter"
              id="GitHub"
              src={
                theme.palette.mode === "dark"
                  ? githubLogoDarkMode
                  : githubLogoLightMode
              }
            />
            <Link
              href="https://www.npmjs.com/package/shoe-converter"
              id="docker"
              src={dockerLogo}
            />
          </>
        }
      />
    </StyledSection>
  );
};
