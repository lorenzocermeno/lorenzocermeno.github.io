import styled from "@emotion/styled";
import { Typography, useTheme } from "@mui/material";
import { FontSize } from "../../constants/constants";
import { StackAccordion } from "./common/StackAccordion";
import { Backend } from "./Backend/Backend";
import { Infrastructure } from "./Infrastructure/Infrastructure";
import { Frontend } from "./Frontend/Frontend";

const StyledSection = styled.section`
  margin-bottom: 2em;
`;

export const Stack = (): JSX.Element => {
  return (
    <StyledSection>
      <Typography
        variant="h2"
        color={"text.primary"}
        marginBottom={1}
        fontSize={FontSize.h2}
        fontWeight="bold"
      >
        Stack
      </Typography>
      <StackAccordion title={"Frontend"} content={<Frontend />} />
      <StackAccordion title={"Backend"} content={<Backend />} />
      <StackAccordion title={"Infrastructure"} content={<Infrastructure />} />
    </StyledSection>
  );
};
