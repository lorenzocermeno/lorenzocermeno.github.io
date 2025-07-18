import { Link, Typography } from "@mui/material";

interface IProps {
  text: string;
  fontSize?: number;
  heading?: boolean;
  link?: {
    url: string;
  };
  color?: string;
}

export const CustomText = (props: IProps): JSX.Element => {
  const fontSize = props.fontSize ? `${props.fontSize}px` : "16px";
  return (
    <>
      {props.link ? (
        <Link
          fontFamily='"Press Start 2P", cursive'
          fontSize={fontSize}
          href={props.link.url}
          underline="always"
          color={props.color || "#fff"}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            cursor: "pointer",
            transition: "color 0.2s, background 0.2s",
            px: 1.5,
            py: 0.5,
            borderRadius: "4px",
            "&:hover": {
              backgroundColor: "#e8df3a",
              color: "#fff",
            },
          }}>
          {props.text}
        </Link>
      ) : (
        <Typography
          fontSize={fontSize}
          fontFamily='"Press Start 2P", cursive'
          color={props.color || "#fff"}
          sx={{
            ...(props.heading && {
              borderRadius: "4px",
              backgroundColor: "#1e13ba",
            }),
          }}>
          {props.text}
        </Typography>
      )}
    </>
  );
};
