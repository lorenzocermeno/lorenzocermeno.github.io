import Typography from "@mui/material/Typography";
import { FontSize } from "../../../constants/constants";

export const Education = (): JSX.Element => {
  return (
    <>
      <Typography
        fontWeight="bold"
        marginBottom="0.5em"
        color={"text.primary"}
        fontSize={FontSize.p}
      >
        Stockholm University <br />
        <Typography fontWeight={"regular"}>
          Stockholm, 2017 - 2020 <br />
          B.Sc., Computer and Systems Science <br />
        </Typography>
      </Typography>
      <Typography
        fontWeight="bold"
        marginBottom="0.5em"
        color={"text.primary"}
        fontSize={FontSize.p}
      >
        Uppsala University <br />
        <Typography fontWeight={"regular"}>
          Uppsala, 2015 - 2016 <br />
          Course, Media and Communications Science <br />
        </Typography>
      </Typography>
    </>
  );
};
