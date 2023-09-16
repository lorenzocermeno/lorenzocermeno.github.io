import { useTheme } from "@mui/material/styles";
import { ColorModeContext } from "../../context/context";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import styled from "@emotion/styled";
import { useContext } from "react";

const StyledSpan = styled.span`
  display: flex;
  justify-content: flex-end;
`;

export const ThemeSwitch = (): JSX.Element => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <StyledSpan>
      <IconButton
        sx={{ ml: 1, color: theme.palette.mode === "dark" ? "white" : "black" }}
        onClick={colorMode.toggleColorMode}
      >
        {theme.palette.mode === "dark" ? (
          <Brightness4Icon />
        ) : (
          <Brightness7Icon />
        )}
      </IconButton>
    </StyledSpan>
  );
};
