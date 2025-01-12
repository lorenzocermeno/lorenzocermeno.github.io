import styled from "@emotion/styled";

interface IImgProps {
  width: string;
}
const StyledImg = styled.img<IImgProps>`
  width: ${(props) => props.width}em;
`;

interface IProps {
  id: string;
  href: string;
  imageSrc: string;
  width: "2" | "3" | "5";
}

export const ImageLink = (props: IProps) => {
  return (
    <a
      className={`${props.id}__link`}
      id={props.id}
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <StyledImg
        src={props.imageSrc}
        alt={`${props.id} logo`}
        width={props.width}
      />
    </a>
  );
};
