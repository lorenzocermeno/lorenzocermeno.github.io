import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ReactNode } from "react";
import { FontSize } from "../../../constants/constants";

interface IProps {
  title: string;
  content: ReactNode;
}

export const StackAccordion = (props: IProps): JSX.Element => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: "text.primary" }} />}
        aria-controls={`${props.title}-content`}
        id={props.title}
        sx={{ backgroundColor: "background.default" }}
      >
        <Typography variant="h3" fontSize={FontSize.h3} color="text.primary">
          {props.title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ backgroundColor: "background.default" }}>
        {props.content}
      </AccordionDetails>
    </Accordion>
  );
};
