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
      <Container maxWidth="sm">
        <Box
          sx={{
            bgcolor: "#0d0d0d",
            height: "50vh",
            padding: "4em 2em",
            borderRadius: "1em",
          }}
        >
          <About />
          <Projects />
          <Links />
        </Box>
      </Container>
    </StyledDiv>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
