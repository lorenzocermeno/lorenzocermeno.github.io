import { Typography } from "@mui/material";
import { useTypewriter } from "../../hooks/useTypewriter";
import styled from "@emotion/styled";

const StyledSection = styled.section`
  margin-bottom: 2em;
`;

export const PresentationText = () => {
  const firstLine = useTypewriter("Hi!👋");
  const secondLine = useTypewriter(
    "I'm Lorenzo Cermeno, a full stack developer based in Stockholm, Sweden 🇸🇪"
  );

  return (
    <StyledSection>
      <Typography color={"white"} fontSize={"48"}>
        {firstLine}
      </Typography>
      <Typography color={"white"}>{secondLine}</Typography>
    </StyledSection>
  );
};
