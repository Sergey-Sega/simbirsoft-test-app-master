import React, { useEffect, useState } from "react";
import { Box, Grid } from "@material-ui/core";

import { fetchCompetitions } from "service/competitions";
import { LeaguesCardItem } from "components/LeaguesCardItem";
import { Link, generatePath } from "react-router-dom";
import { Routes } from "constants/Routes";

interface leagueProps {
  id: number;
  area: {
    name: string;
    ensignUrl: string;
  };
  name: string;
}

const Competitions: React.FC = () => {
  const [leaguesValue, setLeaguesValue] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    (async function () {
      setIsLoading(true);
      try {
        const leagues = (await fetchCompetitions({
          // areas: [2011],
          plan: "TIER_ONE",
        })) as any;
        const leaguesArray = Object.values(leagues);
        const neededLeaguesValue = leaguesArray[2];
        setLeaguesValue(neededLeaguesValue as any);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);
  console.log(leaguesValue);
  return (
    <Grid container justifyContent="space-around">
      {isLoading ? (
        <div>...loading</div>
      ) : (
        leaguesValue.map((league: leagueProps) => (
          <Grid key={league.id} item>
            <Box m={1} style={{ width: 300, height: 300 }}>
              <Link to={generatePath(Routes.TEAMS, { teamsId: league.id })}>
                <LeaguesCardItem
                  countryName={league.area.name}
                  leagueName={league.name}
                  url={league.area.ensignUrl}
                  alt={league.name}
                />
              </Link>
            </Box>
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default Competitions;
