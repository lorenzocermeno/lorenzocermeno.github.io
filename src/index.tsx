import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { About } from "./components/About/About";
import { Links } from "./components/Links/Links";
import { Projects } from "./components/Projects";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Experience } from "./components/Experience/Experience";

const StyledDiv = styled.div`
  background-color: black;
  margin-top: 4em;
`;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <StyledDiv>
      <Container sx={{ maxWidth: "800px" }}>
        <Box
          sx={{
            bgcolor: "#141414",
            height: { xs: "34em", sm: "30em" },
            padding: "4em 2em 1em 2em",
            borderRadius: "1em",
            minWidth: "260px",
          }}
        >
          {/* <About />
          <Experience />
          <Projects />
          <Links /> */}
        </Box>
      </Container>
    </StyledDiv>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
