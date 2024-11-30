import {
  Divider,
  Grid2,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import styled from "@emotion/styled";
import { ReactNode } from "react";

interface IProps {
  imgSrc: string[];
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
    <>
      <ListItem>
        <Grid2 container>
          <Grid2
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
          >
            {props.imgSrc.map((i) => (
              <ListItemIcon sx={{ marginBottom: "0.5em" }}>
                <StyledImg src={i} alt="" />
              </ListItemIcon>
            ))}
          </Grid2>
          <Grid2>
            <ListItemText
              primaryTypographyProps={{ color: "primary" }}
              secondaryTypographyProps={{ color: "secondary" }}
              primary={props.primaryText}
              secondary={props.secondaryText ? props.secondaryText : ""}
            />
          </Grid2>
        </Grid2>
      </ListItem>
      <StyledLinksSpan>{props.links}</StyledLinksSpan>
      <Divider sx={{ backgroundColor: "white", opacity: "30%" }} />
    </>
  );
};
