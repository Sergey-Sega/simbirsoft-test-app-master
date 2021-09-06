import React, { useEffect, useState } from "react";
import { fetchCompetition } from "service/competitions";

interface CompetitionProps {}

const Competition: React.FC<CompetitionProps> = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    (async function () {
      setIsLoading(true);
      try {
        const leagues = await fetchCompetition(2000);
        console.log(leagues);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <div className="App-wrapper">
      {isLoading ? <div>...loading</div> : <div>loh</div>}
    </div>
  );
};

export default Competition;
