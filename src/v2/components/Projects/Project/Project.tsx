import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import styled from "@emotion/styled";

interface IProps {
  imgSrc: string[];
  primaryText: string;
  secondaryText?: string;
}

const StyledImg = styled.img`
  width: 2em;
`;

export const Project = (props: IProps): JSX.Element => {
  return (
    <ListItem>
      <ListItemIcon>
        {props.imgSrc.map((i) => (
          <StyledImg src={i} alt="" />
        ))}
      </ListItemIcon>
      <ListItemText
        primary={props.primaryText}
        secondary={props.secondaryText ? props.secondaryText : ""}
        sx={{ color: "white" }}
      />
    </ListItem>
  );
};
