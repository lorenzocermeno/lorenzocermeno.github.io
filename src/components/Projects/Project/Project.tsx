import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Grid,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import { FontSize } from "../../../constants/constants";
import styled from "@emotion/styled";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const StyledSpan = styled.span`
  display: flex;
  justify-content: space-around;
`;

const StyledDiv = styled.div`
  margin-bottom: 1em;
`;

interface IProps {
  id: string;
  text: string;
  title: string;
  imageRow: React.ReactNode;
  footer: React.ReactNode;
}

export const Project = (props: IProps) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: "text.primary" }} />}
        aria-controls={`${props.id}-content`}
        id={props.id}
        sx={{ backgroundColor: "background.default" }}
      >
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Typography
              variant="h3"
              fontSize={FontSize.h3}
              color="text.primary"
            >
              {props.title}
            </Typography>
          </Grid>
          <Grid
            item
            xs={4}
            sx={{ display: "flex", justifyContent: "space-evenly" }}
          >
            {props.imageRow}
          </Grid>
        </Grid>
      </AccordionSummary>
      <AccordionDetails sx={{ backgroundColor: "background.default" }}>
        <Typography
          variant="body1"
          fontSize={FontSize.p}
          marginBottom={2}
          color="text.primary"
        >
          {props.text}
        </Typography>
        <StyledDiv>
          <Divider variant="middle" sx={{ borderColor: "#414141" }} />
        </StyledDiv>
        <StyledSpan>{props.footer}</StyledSpan>
      </AccordionDetails>
    </Accordion>
  );
};
