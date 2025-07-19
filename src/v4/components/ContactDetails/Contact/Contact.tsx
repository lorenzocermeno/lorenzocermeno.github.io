import { Grid2 } from "@mui/material";
import { CustomText } from "../../common/CustomText";

interface IProps {
  heading: string;
  linkText: string;
  href: string;
}

export const Contact = (props: IProps): JSX.Element => {
  return (
    <>
      <Grid2
        size={{ xs: 12 }}
        display="flex"
        justifyContent="center"
        marginBottom={2}
        role="heading"
        aria-level={2}>
        <CustomText text={props.heading} fontSize={14} color="#fff" heading />
      </Grid2>
      <Grid2 size={{ xs: 12 }} marginBottom={4}>
        <CustomText
          text={props.linkText}
          fontSize={12}
          link={{ url: props.href }}
        />
      </Grid2>
    </>
  );
};
