import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { ColorModeContext } from "../../context/context";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Typography from "@mui/material/Typography";
import { FontSize } from "../../constants/constants";
import styled from "@emotion/styled";

const StyledSpan = styled.span`
  display: flex;
  align-items: center;
`;

export const ThemeSwitch = (): JSX.Element => {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <StyledSpan>
      <Typography variant="body1" color={"text.primary"} fontSize={FontSize.p}>
        {theme.palette.mode} mode
      </Typography>
      <IconButton
        sx={{ ml: 1 }}
        onClick={colorMode.toggleColorMode}
        color="inherit" //HERE!
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
