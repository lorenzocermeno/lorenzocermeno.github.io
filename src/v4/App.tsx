import styled from "@emotion/styled";
import { useState } from "react";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Projects } from "./components/Projects/Projects";
import { CustomText } from "./components/common/CustomText";

const retroFont = `'Press Start 2P', cursive`;

const StyledWrapperDiv = styled.div`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StyledContainerDiv = styled.div`
    background: #222;
    border: 4px solid #1e13ba;
    border-radius: 10px;
    font-family: ${retroFont};
    color: #fff;
    box-shadow: 0 0 20px #1e13ba;
    margin: 0 2em
`;

const StyledTab = styled.button`
    minWidth: 320;
    background: #222;
    border: 4px solid #1e13ba;
    borderRadius: 10;
    font-family: ${retroFont};
    color: #fff;
    boxShadow: 0 0 20px #1e13ba;
    padding: 20 0;
`;

const StyledScrollButton = styled.button`
    background: #333;
    color: #fff;
    border: none;
    font-size: 16px;
    padding: 0 10px;
    cursor: pointer;
    font-family: ${retroFont};
    text-shadow: 2px 2px 0 #ab47bc, 0 0 6px #ab47bc88;
    padding-bottom: 4px;
`;

const tabs = ["About", "Projects", "Contact"];

export const App = (): JSX.Element => {
    const [activeTab, setActiveTab] = useState(0);
    const [startIdx, setStartIdx] = useState(0);

    return (
        <StyledWrapperDiv>
            <StyledContainerDiv>
                <div style={{ display: "flex", marginBottom: 20 }}>
                    {(() => {
                        const isMobile = window.innerWidth <= 600;
                        const visibleTabs = isMobile ? 2 : tabs.length;
                        const canScrollLeft = isMobile && startIdx > 0;
                        const canScrollRight = isMobile && startIdx + visibleTabs < tabs.length;

                        const handleScrollLeft = (e: React.MouseEvent) => {
                            e.stopPropagation();
                            setStartIdx((idx) => Math.max(0, idx - 1));
                        };
                        const handleRight = (e: React.MouseEvent) => {
                            e.stopPropagation();
                            setStartIdx((idx) => Math.min(tabs.length - visibleTabs, idx + 1));
                        };

                        return (
                            <>
                                {canScrollLeft && (
                                    <StyledScrollButton
                                        onClick={handleScrollLeft}
                                        aria-label="Scroll left"
                                    >
                                        ◀
                                    </StyledScrollButton>
                                )}
                                {tabs.slice(isMobile ? startIdx : 0, isMobile ? startIdx + visibleTabs : tabs.length).map((tab, idx) => {
                                    const realIdx = isMobile ? startIdx + idx : idx;
                                    return (
                                        <button
                                            key={tab}
                                            onClick={() => setActiveTab(realIdx)}
                                            style={{
                                                flex: 1,
                                                background: activeTab === realIdx ? "#1e13ba" : "#333",
                                                color: "#fff",
                                                border: "none",
                                                borderBottom: activeTab === realIdx ? "4px solid #fff" : "4px solid transparent",
                                                fontFamily: retroFont,
                                                fontSize: 14,
                                                padding: "10px 0",
                                                cursor: "pointer",
                                                transition: "background 0.2s, border-bottom 0.2s",
                                            }}
                                        >
                                            <CustomText text={tab} />
                                        </button>
                                    );
                                })}
                                {canScrollRight && (
                                    <StyledScrollButton
                                        onClick={handleRight}
                                        aria-label="Scroll right"
                                    >
                                        ►
                                    </StyledScrollButton>
                                )}
                            </>
                        );
                    })()}
                </div>
                <div style={{ minHeight: 60, textAlign: "center" }}>
                    {activeTab === 0 && <About />}
                    {activeTab === 1 && <Projects />}
                    {activeTab === 2 && <Contact />}
                </div>
            </StyledContainerDiv>
        </StyledWrapperDiv>
    );
}