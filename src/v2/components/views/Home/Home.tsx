import Typewriter from "typewriter-effect";
import { COLOR } from "../../../constants/constants";
import styled from "@emotion/styled";

const firstLine = (fontSize: string) =>
  `<span style="color:${COLOR.SECONDARY};font-size:${fontSize}px;">Hi! 👋<br/></span>` as const;
const secondLine = (fontSize: string) =>
  `<span style="color: ${COLOR.PRIMARY};font-size:${fontSize}px;">I'm Lorenzo Cermeno, a full stack developer based in Stockholm 🇸🇪</span>`;

const StyledDiv = styled.div`
  color: ${COLOR.PRIMARY};
`;

export const Home = () => {
  return (
    <StyledDiv>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString(firstLine("100"))
            .pauseFor(Infinity)
            .start()
            .typeString(secondLine("50"))
            .pauseFor(Infinity)
            .start();
        }}
        options={{ cursor: "", delay: 50 }}
      />
    </StyledDiv>
  );
};
