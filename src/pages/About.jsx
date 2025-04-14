import Card from "../component/ui/Card";
import countryfact from "../api/CountryData.json";
export const AboutUs = () => {
  return (
    <div>
      <h1 className="font-extrabold text-gray-400 mx-auto w-96 text-2xl text-center mt-8">
        Here is the Interesting Facts we're proud of
      </h1>
      <div className="grid justify-center  gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 m-12 place-items-center">
        {countryfact.map((countries) => (
          <Card
            country={countries.country}
            city={countries.city}
            fact={countries.interesting_facts}
            population={countries.population}
            key={countries.id}
          />
        ))}
      </div>
    </div>
  );
};
