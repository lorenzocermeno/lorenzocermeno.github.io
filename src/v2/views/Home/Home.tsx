import Typewriter from "typewriter-effect";
import styled from "@emotion/styled";
import { COLOR } from "../../constants/constants";

const firstLine = (fontSize: string) =>
  `<span style="color:${COLOR.SECONDARY};font-size:${fontSize}rem;">Hi!<br/></span>` as const;
const secondLine = (fontSize: string) =>
  `<span style="color: ${COLOR.PRIMARY};font-size:${fontSize}rem;">I'm Lorenzo Cermeno, a full stack developer based in Stockholm</span>`;

const StyledDiv = styled.div`
  color: ${COLOR.PRIMARY};
`;

export const Home = () => {
  return (
    <StyledDiv>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString(firstLine("6.8"))
            .pauseFor(Infinity)
            .start()
            .typeString(secondLine("3.75"))
            .pauseFor(Infinity)
            .start();
        }}
        options={{ cursor: "", delay: 50 }}
      />
    </StyledDiv>
  );
};
