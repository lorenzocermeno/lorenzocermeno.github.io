import { useState } from "react";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Projects } from "./components/Projects/Projects";
import { CustomText } from "./components/common/CustomText";

const tabs = ["About", "Projects", "Contact"];

export const App = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div style={{ display: "flex", marginBottom: 20 }}>
        {(() => {
          return (
            <>
              {tabs.map((tab, idx) => {
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(idx)}
                    style={{
                      flex: 1,
                      background: activeTab === idx ? "#1e13ba" : "#333",
                      color: "#fff",
                      border: "none",
                      borderBottom:
                        activeTab === idx
                          ? "4px solid #fff"
                          : "4px solid transparent",
                      padding: "10px 0",
                      cursor: "pointer",
                      transition: "background 0.2s, border-bottom 0.2s",
                    }}>
                    <CustomText text={tab} fontSize={12} />
                  </button>
                );
              })}
            </>
          );
        })()}
      </div>
      <div style={{ minHeight: 60, textAlign: "center" }}>
        {activeTab === 0 && <About />}
        {activeTab === 1 && <Projects />}
        {activeTab === 2 && <Contact />}
      </div>
    </div>
  );
};
