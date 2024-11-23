import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Project } from "./Project/Project";
import rustLogo from "../../assets/rust.svg";
import githubLogo from "../../assets/github-dark-mode.svg";
import typescriptLogo from "../../assets/typescript.svg";

export const Projects = (): JSX.Element => {
  return (
    <List sx={{ borderColor: "white" }}>
      <Project
        imgSrc={[rustLogo]}
        primaryText={"POS Terminal Application"}
        secondaryText="d"
      />
      <Project
        imgSrc={[typescriptLogo]}
        primaryText={"Shoe (Brand) Size Converter"}
        secondaryText="d"
      />
      <Project
        imgSrc={[typescriptLogo, rustLogo]}
        primaryText={"Shoe (Brand) Size Converter"}
        secondaryText="d"
      />
    </List>
  );
};
