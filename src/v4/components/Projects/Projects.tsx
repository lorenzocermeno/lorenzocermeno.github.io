import { GridTabContentWrapper } from "../common/GridTabContentWrapper";
import { Project } from "./Project/Project";

export const Projects = (): JSX.Element => {
    return (
        <GridTabContentWrapper>
            <Project heading={"AI Hotel Booking Assistant"} description={"An application demonstrating the use of a chatbot to manage and perform hotel booking operations by textually interacting with the user."} links={[{ name: "Github", url: "git" }]} />
            <Project heading={"POS Terminal Application"} description={"A simple POS terminal application, written in Rust to acquire a better understanding of the language."} links={[{ name: "Github", url: "git" }]} />
            <Project heading={"Shoe (Brand) Size Converter"} description={"Convert a shoe size across brands, genders and systems."} links={[{ name: "Github", url: "git" }, { name: "npm", url: "git" }]} />
        </GridTabContentWrapper>
    );
};

