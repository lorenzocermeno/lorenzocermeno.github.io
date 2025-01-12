import styled from "@emotion/styled";
import { HomeView } from "./v3/views/HomeView";
import { PortfolioView } from "./v3/views/PortfolioView";
import { ContactView } from "./v3/views/ContactView";
import NavigationBar from "./v3/components/NavigationBar/NavigationBar";

const StyledDiv = styled.div`
  padding: 0em 0em 1em 0em;
`;

export const AppV3 = (): JSX.Element => {

    return (
        <>
            <StyledDiv>
                <div style={{ position: 'sticky', top: 0, zIndex: 1000 }}>
                    <NavigationBar />
                </div>
                <HomeView />
                <PortfolioView />
                <ContactView />
            </StyledDiv>
        </>
    );
};