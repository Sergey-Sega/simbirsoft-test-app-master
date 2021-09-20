import { createStyles, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) =>
  createStyles({
    button: {
      paddingRight: theme.spacing(1),
      color: "#fff",
      "&:hover":{
          borderBottom:"2px solid #fff",
      },
    },
    link:{
        textDecoration: "none", 
    }
  })
);
