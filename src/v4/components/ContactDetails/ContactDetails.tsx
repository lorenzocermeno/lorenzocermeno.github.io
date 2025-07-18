import { GridTabContentWrapper } from "../common/GridTabContentWrapper";
import { Contact } from "./Contact/Contact";

export const ContactDetails = (): JSX.Element => {
  return (
    <GridTabContentWrapper>
      <Contact
        heading="LinkedIn"
        linkText="Lorenzo Cermeno"
        href="https://www.linkedin.com/in/lorenzo-cermeno"
      />
      <Contact
        heading="Github"
        linkText="lorenzocermeno"
        href="https://github.com/lorenzocermeno"
      />
      <Contact
        heading="npm"
        linkText="lorenzocermeno"
        href="https://www.npmjs.com/~lorenzocermeno"
      />
    </GridTabContentWrapper>
  );
};
