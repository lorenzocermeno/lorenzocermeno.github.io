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
          Stockholm, 2022 - current <br />
          Full Stack Developer <br />
          Main responsibility within the bank's card internet services and
          integration. Developing the website, internal systems and APIs.
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
          Stockholm, 2021 - 2022 <br />
          DevOps Engineer <br />
          Analyzing and developing the infrastructure for easier administration,
          testing and deployment with a focus on CI/CD, leveraging automation
          within the P&C domain.
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
          Stockholm, 2020 - 2021 <br />
          Junior DevOps Engineer <br />
          Trainee programme within the P&C domain, working and attending related
          educational courses in parallel.
        </Typography>
      </Typography>
    </>
  );
};
