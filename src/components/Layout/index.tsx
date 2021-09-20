import React from "react";
import { AppBar, Box, CssBaseline, Grid, Typography } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import { ButtonGroup } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Routes } from "constants/Routes";
import { useStyles } from "./styles";

export const Layout: React.FC = ({ children }) => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <Box>
        <AppBar>
          <Toolbar>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item>
                <Typography>Footbal statistics</Typography>
              </Grid>
              <Grid item>
                <ButtonGroup aria-label="outlined button group">
                  <Link to={Routes.ROOT} className={classes.link}>
                    <Button className={classes.button}>HOME PAGE</Button>
                  </Link>

                  <Link to={Routes.COMPETITION} className={classes.link}>
                    <Button className={classes.button}>Календарь лиги</Button>
                  </Link>
                  <Link to={Routes.TEAM} className={classes.link}>
                    <Button className={classes.button}>
                      Календарь одной команды
                    </Button>
                  </Link>
                </ButtonGroup>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
      <Box>{children}</Box>
    </>
  );
};
