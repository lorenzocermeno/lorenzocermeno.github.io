import styled from "@emotion/styled";

interface IProps {
  id: string;
  href: string;
  imageSrc: string;
}

const StyledImg = styled.img`
  width: 2em;
`;

export const ImageLink = (props: IProps) => {
  return (
    <a
      className={`${props.id}__link`}
      id={props.id}
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <StyledImg src={props.imageSrc} alt={`${props.id} logo`} />
    </a>
  );
};
