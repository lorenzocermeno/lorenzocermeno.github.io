import { Typography } from "@mui/material";

interface IProps {
  text: string;
}

export const BannerText = (props: IProps) => {
  return (
    <Typography fontSize={"large"} color={"black"}>
      {props.text}
    </Typography>
  );
};
