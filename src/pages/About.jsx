import Card from "../component/ui/Card";
import countryfact from "../api/CountryData.json";
export const AboutUs = () => {
  return (
    <div className="grid justify-center  gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 m-12 place-items-center">
      {countryfact.map((countries) => (
        <Card
          country={countries.country}
          city={countries.city}
          fact={countries.fact}
          population={countries.population}
        />
      ))}
    </div>
  );
};
