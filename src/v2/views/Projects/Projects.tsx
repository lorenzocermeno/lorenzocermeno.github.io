import { List } from "@mui/material";
import rustLogo from "../../assets/rust.svg";
import typescriptLogo from "../../assets/typescript.svg";
import githubLogo from "../../assets/github-dark-mode.svg";
import npmLogo from "../../assets/npm.svg";
import springLogo from "../../assets/spring.svg";
import reactLogo from "../../assets/react.svg";
import javaLogo from "../../assets/java.svg";
import ollamaLogo from "../../assets/ollama.svg";
import { Project } from "./Project/Project";
import { ImageLink } from "../../components/ImageLink/ImageLink";

export const Projects = (): JSX.Element => {
  return (
    <List>
      <Project
        imgProps={{ imgSrc: [springLogo, javaLogo, reactLogo, typescriptLogo, ollamaLogo], alt: ["Spring logo", "Java logo", "React Logo", "TypeScript logo", "Ollama logo"] }}
        primaryText={"AI Hotel Booking Assistant"}
        secondaryText="An application demonstrating the use of a chatbot, using LangChain4j and Ollama, to perform hotel booking operations by textually interacting with the user."
        links={
          <ImageLink
            id={"Github"}
            href={"https://github.com/lorenzocermeno/pos-terminal-app"}
            imageSrc={githubLogo}
            width="2"
          />
        }
      />
      <Project
        imgProps={{ imgSrc: [rustLogo], alt: ["Rust logo"] }}
        primaryText={"POS Terminal Application"}
        secondaryText="A simple POS terminal application, written in Rust to acquire a better understanding of the language."
        links={
          <ImageLink
            id={"Github"}
            href={"https://github.com/lorenzocermeno/pos-terminal-app"}
            imageSrc={githubLogo}
            width="2"
          />
        }
      />
      <Project
        imgProps={{ imgSrc: [typescriptLogo], alt: ["TypeScript logo"] }}
        primaryText={"Shoe (Brand) Size Converter"}
        secondaryText="Convert a shoe size across brands, genders and systems."
        links={
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
      />
    </List>
  );
};
