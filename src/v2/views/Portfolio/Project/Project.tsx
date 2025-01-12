import {
  Divider,
  Grid2,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import styled from "@emotion/styled";
import { ReactNode } from "react";

interface IProgrammingLanguage {
  imgSrc: string[];
  alt: string[];
}
interface IProps {
  imgProps?: IProgrammingLanguage;
  primaryText: string;
  secondaryText?: string;
  links: ReactNode;
}

const StyledImg = styled.img`
  width: 2em;
`;

const StyledLinksSpan = styled.span`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 0.5em;
`;

export const Project = (props: IProps): JSX.Element => {
  return (
    <ListItem>
      <Grid2 container sx={{ width: "100%" }}>
        <Grid2 size={{ xs: 12 }}>
          {props.imgProps?.imgSrc.map((k, i) => (
            <ListItemIcon key={i} sx={{ marginBottom: "0.5em" }}>
              <StyledImg src={k} alt={props.imgProps?.alt[i]} />
            </ListItemIcon>
          ))}
        </Grid2>
        <Grid2 size={{ xs: 12 }} marginBottom={1}>
          <ListItemText
            primaryTypographyProps={{ color: "primary" }}
            secondaryTypographyProps={{ color: "secondary" }}
            primary={props.primaryText}
            secondary={props.secondaryText ? props.secondaryText : ""}
          />
        </Grid2>
        <Grid2 size={{ xs: 12 }}>
          <StyledLinksSpan>{props.links}</StyledLinksSpan>
          <Divider sx={{ backgroundColor: "white", opacity: "30%" }} />
        </Grid2>
      </Grid2>
    </ListItem>
  );
};
