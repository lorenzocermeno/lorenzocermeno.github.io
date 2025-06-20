import styled from "@emotion/styled";
import { Grid2 } from "@mui/material";
import javaLogo from "../assets/java-logo.svg";
import jestLogo from "../assets/jest-logo.svg";
import reactLogo from "../assets/react-logo.svg";
import springLogo from "../assets/spring-logo.svg";
import typescriptLogo from "../assets/typescript-logo.svg";
import { PortfolioCard } from "../components/PortfolioCard/PortfolioCard";
import { SectionHeading } from "../components/SectionHeading/SectionHeading";

interface IImgProps {
    width: string;
}

const StyledImg = styled.img<IImgProps>`
    width: ${(props) => props.width}em;
`;

export const SkillsView = (): JSX.Element => {

    return (
        <>
            <SectionHeading text="Skills" level="h2" />
            <Grid2 container spacing={4} padding={4}>
                <Grid2 size={{ sm: 4 }} display={"flex"} justifyContent={"center"}>
                    <PortfolioCard title={"Infrastructure"}
                        chip={[
                            {
                                text: "Red Hat Enterprise Linux"
                            },
                            {
                                text: "Kibana"
                            }, {
                                text: "Jenkins"
                            }, {
                                text: "SaltStack"
                            }, {
                                text: "OpenShift"
                            }, {
                                text: "SQL"
                            }]}
                    />
                </Grid2>
                <Grid2 size={{ sm: 4 }} display={"flex"} justifyContent={"center"}>
                    <PortfolioCard title={"Backend"}
                        chip={[{
                            image: <StyledImg src={javaLogo} alt="Java logo" width="1.5" />,
                            text: "Java"
                        }, {
                            image: <StyledImg src={springLogo} alt="Spring logo" width="1.5" />,
                            text: "Spring"
                        }, {
                            text: "Jakarta EE"
                        },
                        {
                            text: "Mockito"
                        }, {
                            text: "JUnit"
                        }, {
                            text: "Maven"
                        }, {
                            text: "OpenLiberty"
                        },
                        ]} />
                </Grid2>
                <Grid2 size={{ sm: 4 }} display={"flex"} justifyContent={"center"}>
                    <PortfolioCard title={"Frontend"}
                        chip={[{
                            image: <StyledImg src={reactLogo} alt="React logo" width="1.5" />,
                            text: "React"
                        }, {
                            image: <StyledImg src={typescriptLogo} alt="Typescript logo" width="1.5" />,
                            text: "TypeScript"
                        }, {
                            image: <StyledImg src={jestLogo} alt="Jest logo" width="1.5" />,
                            text: "Jest"
                        }]} />
                </Grid2>
                <Grid2 size={{ sm: 12 }} display={"flex"} justifyContent={"center"}>
                    <PortfolioCard title={"Tools"}
                        chip={[
                            {
                                text: "Git"
                            }, {
                                text: "Selenium"
                            }, {
                                text: "REST API"
                            },
                        ]}
                    />
                </Grid2>
            </Grid2>
        </>
    )
}
