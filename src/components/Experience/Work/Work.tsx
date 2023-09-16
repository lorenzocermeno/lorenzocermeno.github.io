import Typography from "@mui/material/Typography";
import { FontSize } from "../../../constants/constants";

export const Work = (): JSX.Element => {
  return (
    <>
      <Typography
        fontWeight="bold"
        marginBottom="0.5em"
        color="text.primary"
        fontSize={FontSize.p}
      >
        Handelsbanken <br />
        <Typography fontWeight={"regular"}>
          2022 - current <br />
          Software Developer <br />
          Description...
        </Typography>
      </Typography>
      <Typography
        fontWeight="bold"
        marginBottom="0.5em"
        color="text.primary"
        fontSize={FontSize.p}
      >
        Folksam <br />
        <Typography fontWeight={"regular"}>
          2021 - 2022 <br />
          DevOps Engineer <br />
          Description...
        </Typography>
      </Typography>
      <Typography
        fontWeight="bold"
        marginBottom="0.5em"
        color="text.primary"
        fontSize={FontSize.p}
      >
        Nexer Tech Talent @ Folksam <br />
        <Typography fontWeight={"regular"}>
          2020 - 2021 <br />
          Junior DevOps Engineer <br />
          Description...
        </Typography>
      </Typography>
    </>
  );
};
