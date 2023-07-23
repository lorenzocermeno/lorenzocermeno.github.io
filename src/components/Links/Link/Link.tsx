import styled from "@emotion/styled";

interface IProps {
  className?: string;
  href: string;
  id: string;
  src: string;
  width?: number;
}

const StyledImg = styled.img`
  width: 2em;
`;

export const Link = (props: IProps): JSX.Element => {
  return (
    <a
      className={`${props.id}-link`}
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <StyledImg src={props.src} alt={`${props.id} logo`} />
    </a>
  );
};
