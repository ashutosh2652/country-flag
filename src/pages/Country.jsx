import { useEffect, useTransition, useState } from "react";
import { getCountryData } from "../api/PostApi";
import { PropagateLoader } from "react-spinners";
import { CountryCard } from "../component/ui/CountryCard";

export const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setcountry] = useState([]);
  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      setcountry(res.data);
    });
  }, []);
  if (isPending)
    return (
      <div className="h-screen w-screen flex items-center justify-center">
        <PropagateLoader color="gray" />;
      </div>
    );
  return (
    <div className="m-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-2 place-items-center">
      {countries.map((country, ind) => (
        <CountryCard
          key={ind}
          photo={country["flags"]["png"]}
          population={country["population"]}
          region={country["region"]}
          capital={country["capital"][0]}
          name={country["name"]["common"]}
        />
      ))}
    </div>
  );
};
