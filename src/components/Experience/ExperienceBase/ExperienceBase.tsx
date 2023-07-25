import { Typography } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import Grid from "@mui/material/Grid";

interface IEntries {
  duration: string;
  title: string;
  body: string;
}

interface IProps {
  education: boolean;
  heading: string;
  entries: IEntries[];
}

export const ExperienceBase = (props: IProps): JSX.Element => {
  return (
    <>
      {props.education ? (
        <SchoolIcon sx={{ color: "white", marginRight: "0.2em" }} />
      ) : (
        <WorkIcon sx={{ color: "white", marginRight: "0.2em" }} />
      )}
      {console.log(props.entries)}
      <Typography fontWeight="bold" marginBottom="0.2em" color="white">
        {props.heading}
      </Typography>
      {props.entries.map((entry, index) => (
        <Grid key={index} container>
          <Grid item xs={4} md={4}>
            <Typography color={"white"}>{entry.duration}</Typography>
          </Grid>
          <Grid item xs={8} md={8}>
            <Typography color={"white"}>{entry.title}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color={"white"}>{entry.body}</Typography>
          </Grid>
        </Grid>
      ))}
    </>
  );
};
