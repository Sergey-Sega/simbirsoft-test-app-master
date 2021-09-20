import React from "react";
import { CardContent, CardMedia, Card, Typography } from "@material-ui/core";
import { useStyles } from "./styles";

interface IProps {
  leagueName: string;
  countryName: string;
  url: string;
  alt: string;
}

export const LeaguesCardItem: React.FC<IProps> = ({
  leagueName,
  countryName,
  url,
  alt,
}) => {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.root}>
        <CardMedia className={classes.media} image={url} title={alt} />
        <CardContent>
          <Typography>{leagueName}</Typography>
          <Typography>{countryName}</Typography>
        </CardContent>
      </Card>
    </>
  );
};
