import styled from "@emotion/styled";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import NavigationBar from "./v3/components/NavigationBar/NavigationBar";
import {AboutView} from "./v3/views/AboutView";
import {ContactView} from "./v3/views/ContactView";
import {PortfolioView} from "./v3/views/PortfolioView";
import {SkillsView} from "./v3/views/SkillsView";

const StyledDiv = styled.div`
    padding: 0 0 1em 0;
`;

export const AppV3 = (): JSX.Element => {

    return (
        <StyledDiv>
            <div style={{position: 'sticky', top: 0, zIndex: 1000}}>
                <NavigationBar/>
            </div>
            <AboutView/>
            <SkillsView/>
            <PortfolioView/>
            <ContactView/>
            <Router>
                <Routes>
                    <Route path="/about" element={<AboutView/>}/>
                    <Route path="/skills" element={<PortfolioView/>}/>
                    <Route path="/portfolio" element={<PortfolioView/>}/>
                    <Route path="/contact" element={<ContactView/>}/>
                </Routes>
            </Router>
        </StyledDiv>
    );
};
