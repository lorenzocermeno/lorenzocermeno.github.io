import { Footer } from "./components/Footer/Footer";
import { Projects } from "./components/Projects/Projects";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Experience } from "./components/Experience/Experience";
import { Header } from "./components/Header/Header";
import { About } from "./components/About/About";
import { useMemo, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ColorModeContext } from "./context/context";
import { PaletteMode, useMediaQuery } from "@mui/material";

const StyledDiv = styled.div`
  background-color: black;
  margin-top: 4em;
`;

export const App = (): JSX.Element => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const [mode, setMode] = useState<PaletteMode>(
    prefersDarkMode ? "dark" : "light"
  );
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <StyledDiv>
          <Container sx={{ width: { xs: "auto", sm: "46em" } }}>
            <Box
              sx={{
                bgcolor: "background.default",
                height: { xs: "auto", sm: "auto" },
                padding: "4em 2em 1em 2em",
                borderRadius: "1em",
                minWidth: "260px",
              }}
            >
              {/* <Header />
              <About />
              <Experience />
              <Projects />
              <Footer /> */}
            </Box>
          </Container>
        </StyledDiv>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
