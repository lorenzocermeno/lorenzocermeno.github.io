import { List } from "@mui/material";
import rustLogo from "../../assets/rust.svg";
import typescriptLogo from "../../assets/typescript.svg";
import githubLogo from "../../assets/github-dark-mode.svg";
import npmLogo from "../../assets/npm.svg";
import { Project } from "./Project/Project";
import { ImageLink } from "../../components/ImageLink/ImageLink";

export const Projects = (): JSX.Element => {
  return (
    <List>
      <Project
        imgSrc={[rustLogo]}
        primaryText={"POS Terminal Application"}
        secondaryText="A simple POS terminal application."
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
        imgSrc={[typescriptLogo]}
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
