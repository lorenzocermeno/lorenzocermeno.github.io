import { ReactNode, useState } from "react";
import Box from "@mui/material/Box";
import { Tab, Tabs } from "@mui/material";
import { COLOR } from "../../constants/constants";
import styled from "@emotion/styled";
import { Contact } from "../../views/Contact/Contact";
import { Projects } from "../../views/Projects/Projects";
import { Home } from "../../views/Home/Home";

const StyledSection = styled.section`
  padding: 1em;
`;

interface CustomTabPanelProps {
  children?: ReactNode;
  value: number;
  index: number;
}

function CustomTabPanel(props: CustomTabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
}

function _Tabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          variant="fullWidth"
          aria-label="tabs"
        >
          <Tab label="Home" {...a11yProps(0)} sx={{ color: COLOR.PRIMARY }} />
          <Tab
            label="Projects"
            {...a11yProps(1)}
            sx={{ color: COLOR.PRIMARY }}
          />
          <Tab
            label="Contact"
            {...a11yProps(2)}
            sx={{ color: COLOR.PRIMARY }}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <StyledSection>
          <Home />
        </StyledSection>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <StyledSection>
          <Projects />
        </StyledSection>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <StyledSection>
          <Contact />
        </StyledSection>
      </CustomTabPanel>
    </Box>
  );
}

export { _Tabs as Tabs };
