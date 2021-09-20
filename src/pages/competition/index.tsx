import React, { useEffect, useState } from "react";
import { fetchCompetition } from "service/competitions";

//interface CompetitionProps {}

const Competition: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [values, setValues] = useState({});
  useEffect(() => {
    (async function () {
      setIsLoading(true);
      try {
        const leagues: any = await fetchCompetition(2000);
        setValues(leagues);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);
  console.log(values);
  return (
    <div className="App-wrapper">
      {isLoading ? (
        <div>...loading</div>
      ) : (
        <pre>{JSON.stringify(values, null, 2)}</pre>
      )}
    </div>
  );
};

export { Competition as default };
