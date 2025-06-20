import styled from "@emotion/styled";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import { AboutView } from "./views/AboutView";
import { ContactView } from "./views/ContactView";
import { PortfolioView } from "./views/PortfolioView";
import { SkillsView } from "./views/SkillsView";


const StyledDiv = styled.div`
    padding: 0 0 1em 0;
`;

export const AppV3 = (): JSX.Element => {

    return (
        <Router>
            <StyledDiv>
                <div style={{ position: 'sticky', top: 0, zIndex: 1000 }}>
                    <NavigationBar />
                </div>
                <div id="about">
                    <AboutView />
                </div>
                <div id="skills">
                    <SkillsView />
                </div>
                <div id="portfolio">
                    <PortfolioView />
                </div>
                <div id="contact">
                    <ContactView />
                </div>
            </StyledDiv>
        </Router>
    );
};
