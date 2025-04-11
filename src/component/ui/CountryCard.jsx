import { FaLongArrowAltRight } from "react-icons/fa";

export const CountryCard = ({ photo, population, name, region, capital }) => {
  return (
    <div className="min-w-[240px] min-h-full max-w-[330px] w-full flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70 ">
      <div className="flex w-full justify-center">
        <img
          className="w-2/3 h-2/3 rounded-t-xl min-w-[143px] min-h-[98px] max-h-[100px]"
          src={photo}
          alt="Card Image"
        />
      </div>
      <div className="p-4 md:p-5">
        <h1 className="text-lg font-bold text-gray-800 dark:text-white">
          {name}
        </h1>
        <p className="mt-1 text-gray-500 dark:text-neutral-400">
          Population: {population}
        </p>
        <p className="mt-1 text-gray-500 dark:text-neutral-400">
          Region: {region}
        </p>
        <p className="mt-1 text-gray-500 dark:text-neutral-400">
          Capital: {capital}
        </p>
        <button className="h-full">
          <a
            className="text-center h-full mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
            href="#"
          >
            <h3>Read More</h3>
            <FaLongArrowAltRight />
          </a>
        </button>
      </div>
    </div>
  );
};
