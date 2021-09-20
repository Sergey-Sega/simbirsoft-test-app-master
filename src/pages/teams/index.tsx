import React, { useState, useEffect } from "react";
import { fetchTeams } from "service/teams";
import { useLocation } from "react-router";
 import { Table } from "components/Table";
//interface TeamsProps {}

const Teams: React.FC = () => {
  const [teamsValue, setTeamsValue] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { pathname } = useLocation();
  const leagueId = pathname.slice(7);

  useEffect(() => {
    (async function () {
      setIsLoading(true);
      try {
        const teams = (await fetchTeams(+leagueId)) as any;
         const teamsArray = Object.values(teams);
    
         const neededTeamsValue = teamsArray[4];
         setTeamsValue(neededTeamsValue as any);
        
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);
  console.log(teamsValue)
  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
           {/* <Table id={teamsValue}/> */}
        </div>
      )}
    </>
  );
};

export default Teams;
