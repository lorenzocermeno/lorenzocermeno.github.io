import { Divider, List, Typography } from "@mui/material";
import rustLogo from "../../assets/rust.svg";
import typescriptLogo from "../../assets/typescript.svg";
import githubLogo from "../../assets/github-dark-mode.svg";
import npmLogo from "../../assets/npm.svg";
import springLogo from "../../assets/spring.svg";
import reactLogo from "../../assets/react.svg";
import javaLogo from "../../assets/java.svg";
import ollamaLogo from "../../assets/ollama.svg";
import langchain4jLogo from "../../assets/langchain4j.svg";
import globeLogo from "../../assets/globe.svg";
import { Project } from "./Project/Project";
import { ImageLink } from "../../components/ImageLink/ImageLink";

export const Portfolio = (): JSX.Element => {

  const heading = (text: string) => {
    return (<><Typography variant="h2" color="white" marginLeft={2}>{text}</Typography >
      <Divider sx={{
        backgroundImage: "linear-gradient(to right, rgba(171, 71, 188, 1), rgba(171, 71, 188, 0))",
        height: "2px",
        border: "none",
        marginLeft: "1em",
      }} /></>)
  };
  return (<>
    {heading("Projects")}
    <List>
      <Project
        imgProps={{ imgSrc: [springLogo, javaLogo, reactLogo, typescriptLogo, langchain4jLogo, ollamaLogo], alt: ["Spring logo", "Java logo", "React Logo", "TypeScript logo", "LangChain4j Logo", "Ollama logo"] }}
        primaryText={"AI Hotel Booking Assistant"}
        secondaryText="An application demonstrating the use of a chatbot to manage and perform hotel booking operations by textually interacting with the user."
        links={
          <ImageLink
            id={"Github"}
            href={"https://github.com/lorenzocermeno/booking-assistant"}
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
    </List >
    {heading("Publications")}
    < List >
      <Project
        primaryText={"Digital Transformation Success Through Aligning the Organizational Structure: Case Study of Swedish Public Organizations"}
        secondaryText="AMCIS 2022 Proceedings. 10"
        links={
          <ImageLink
            id={"Globe"}
            href={"https://aisel.aisnet.org/amcis2022/scudt/scuidt/10/"}
            imageSrc={globeLogo}
            width="2"
          />
        }
      />
    </List >
  </>
  );
};
