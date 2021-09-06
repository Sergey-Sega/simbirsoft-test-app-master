import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";

import { fetchCompetitions } from "service/competitions";

interface CompetitionsProps {}

const Competitions: React.FC<CompetitionsProps> = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    (async function () {
      setIsLoading(true);
      try {
        const leagues = await fetchCompetitions({
          areas: [2011],
        });
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
      <Button color="secondary">Hello World</Button>
      {isLoading ? <div>...loading</div> : <div>huy</div>}
    </div>
  );
};

export default Competitions;
