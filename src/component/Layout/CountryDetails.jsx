import { useEffect, useState, useTransition } from "react";
import { useParams } from "react-router-dom";
import { getCountryIndData } from "../../api/PostApi";
import { PropagateLoader } from "react-spinners";

export const CountryDetails = () => {
  const countryname = useParams();
  const [isPending, startTransition] = useTransition();
  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    startTransition(async () => {
      try {
        const data = await getCountryIndData(countryname.countryname);
        setCountryData(data.data[0]);
      } catch (error) {
        console.error("Error fetching country data:", error);
        setCountryData(null);
      }
    });
  }, [countryname.countryname]);

  if (isPending || !countryData) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-gray-900">
        <PropagateLoader color="#3B82F6" />;
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Flag Image Section */}
          <div className="lg:w-1/2">
            <img
              src={countryData.flags?.svg}
              alt={`${countryData.name?.common} flag`}
              className="w-full h-auto object-cover rounded-lg shadow-xl max-w-[550px]"
            />
          </div>

          {/* Country Details Section */}
          <div className="lg:w-1/2">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              {countryData.name?.common}
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-4">
                <DetailItem
                  label="Native Names"
                  value={
                    countryData.name?.nativeName
                      ? Object.values(countryData.name.nativeName)
                          .map((native) => native.common)
                          .join(", ")
                      : "N/A"
                  }
                />
                <DetailItem
                  label="Population"
                  value={countryData.population?.toLocaleString() || "N/A"}
                />
                <DetailItem
                  label="Region"
                  value={countryData.region || "N/A"}
                />
                <DetailItem
                  label="Sub Region"
                  value={countryData.subregion || "N/A"}
                />
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                <DetailItem
                  label="Capital"
                  value={countryData.capital?.join(", ") || "N/A"}
                />
                <DetailItem
                  label="Top Level Domain"
                  value={countryData.tld?.join(", ") || "N/A"}
                />
                <DetailItem
                  label="Currencies"
                  value={
                    countryData.currencies
                      ? Object.values(countryData.currencies)
                          .map((currency) => currency.name)
                          .join(", ")
                      : "N/A"
                  }
                />
                <DetailItem
                  label="Languages"
                  value={
                    countryData.languages
                      ? Object.values(countryData.languages).join(", ")
                      : "N/A"
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Reusable DetailItem component
const DetailItem = ({ label, value }) => (
  <div>
    <span className="font-semibold text-blue-400">{label}: </span>
    <span className="text-gray-300">{value}</span>
  </div>
);
