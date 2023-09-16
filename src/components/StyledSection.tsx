import styled from "@emotion/styled";

interface IProps {
  children: JSX.Element;
}
const Section = styled.section`
  margin-bottom: 1em;
`;

export const StyledSection = (props: IProps): JSX.Element => {
  return <Section>{props.children}</Section>;
};
