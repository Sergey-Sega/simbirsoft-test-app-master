import { createStyles, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() =>
  createStyles({
    root: {
      maxWidth: 260,
      marginTop: "30%",
      maxHeight: 340,
      textAlign: "center",
      borderBottom: "10px solid #536591",
    },
    media: {
      paddingTop: "10%",
      marginTop: "15%",
      width: 240,
      height: 220,
      marginLeft: "5%",
      backgroundSize: "contain",
    },
  })
);
