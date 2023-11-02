import { useState } from "react";
import swedishFlag from "../../images/sweden-flag.svg";
import unitedKingdomFlag from "../../images/united-kingdom-flag.svg";
import IconButton from "@mui/material/IconButton/IconButton";
import styled from "@emotion/styled";

const StyledImg = styled.img`
  display: flex;
  width: 1em;
  border-radius: 0.1em;
`;

interface IFlagProps {
  src: string;
  alt: string;
}

export const LanguageSwitch = () => {
  const swedish: IFlagProps = { src: swedishFlag, alt: "Swedish flag" };
  const english: IFlagProps = { src: unitedKingdomFlag, alt: "UK flag" };
  const [flag, setFlag] = useState<IFlagProps>(swedish);

  const handleOnClick = () => {
    setFlag(flag === swedish ? english : swedish);
    console.log(flag);
  };

  return (
    <IconButton onClick={handleOnClick}>
      <StyledImg src={flag.src} alt={flag.alt} />
    </IconButton>
  );
};
