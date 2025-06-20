import styled from "@emotion/styled";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Tabs } from "./components/Tabs/Tabs";
import { COLOR } from "./constants/constants";

const StyledDiv = styled.div`
  padding: 0em 0em 1em 0em;
`;

export const AppV2 = (): JSX.Element => {
  const theme = createTheme({
    palette: {
      primary: {
        main: COLOR.PRIMARY,
      },
      secondary: {
        main: COLOR.SECONDARY,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <StyledDiv>
        <Tabs />
      </StyledDiv>
    </ThemeProvider>
  );
};
