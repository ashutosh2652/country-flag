import { useEffect, useTransition, useState } from "react";
import { getCountryData } from "../api/PostApi";
import { PropagateLoader } from "react-spinners";
import { CountryCard } from "../component/ui/CountryCard";
import { SearchFilter } from "../component/ui/SearchFilter";

export const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setcountry] = useState([]);
  const [search, setsearch] = useState("");
  const [filter, setfilter] = useState("all");
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
  console.log(search);

  const searchcountry = (country) => {
    if (search)
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    return country;
  };
  const filterregion = (country) => {
    if (filter === "all") return country;
    return country.region === filter;
  };
  const filtercountries = countries.filter(
    (country) => searchcountry(country) && filterregion(country)
  );
  return (
    <div className="min-h-[28.3rem] mt-10 flex flex-col gap-10">
      <SearchFilter
        filter={filter}
        setfilter={setfilter}
        search={search}
        setsearch={setsearch}
        country={countries}
        setcountry={setcountry}
      />
      <div className="m-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-2 place-items-center">
        {filtercountries.map((country, ind) => (
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
    </div>
  );
};
