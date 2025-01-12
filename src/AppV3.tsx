import styled from "@emotion/styled";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NavigationBar from "./v3/components/NavigationBar/NavigationBar";
import { AboutView } from "./v3/views/AboutView";
import { ContactView } from "./v3/views/ContactView";
import { PortfolioView } from "./v3/views/PortfolioView";

const StyledDiv = styled.div`
  padding: 0em 0em 1em 0em;
`;

export const AppV3 = (): JSX.Element => {

    return (
        <StyledDiv>
            <div style={{ position: 'sticky', top: 0, zIndex: 1000 }}>
                <NavigationBar />
            </div>
            <AboutView />
            <PortfolioView />
            <ContactView />
            <Router>
                <Routes>
                    <Route path="/about" element={<AboutView />} />
                    <Route path="/portfolio" element={<PortfolioView />} />
                    <Route path="/contact" element={<ContactView />} />
                </Routes>
            </Router>
        </StyledDiv>
    );
};