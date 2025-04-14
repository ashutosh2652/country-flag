export const SearchFilter = ({
  search,
  setsearch,
  filter,
  setfilter,
  country,
  setcountry,
}) => {
  const handlesearch = (e) => {
    e.preventDefault();
    setsearch(e.target.value);
  };
  const handlesearchfilter = (e) => {
    e.preventDefault();
    setfilter(e.target.value);
  };
  const sortcountry = (value) => {
    const sortCountry = [...country].sort((a, b) => {
      return value === "asc"
        ? a.name.common.localeCompare(b.name.common)
        : b.name.common.localeCompare(a.name.common);
    });
    setcountry(sortCountry);
  };
  return (
    <div className="flex justify-around">
      <div className="flex px-4 py-3 rounded-md border-2 border-blue-500 overflow-hidden max-w-md ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 192.904 192.904"
          width="16px"
          className="fill-gray-600 mr-3 rotate-90"
        >
          <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
        </svg>
        <input
          type="text"
          value={search}
          onChange={handlesearch}
          placeholder="Search"
          className="w-full outline-none bg-transparent text-gray-600 text-sm font-bold"
        />
      </div>
      <div className="flex gap-10">
        <button
          className="text-center h-full mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-gray-800 text-white  border-gray-600 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50 disabled:pointer-events-none"
          onClick={() => {
            sortcountry("asc");
          }}
        >
          Asc
        </button>
        <button
          className="text-center h-full mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-gray-800 text-white  border-gray-600 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50 disabled:pointer-events-none"
          onClick={() => {
            sortcountry("desc");
          }}
        >
          Desc
        </button>
      </div>
      <div className="flex justify-center">
        <select
          value={filter}
          onChange={handlesearchfilter}
          className="px-4  text-base font-medium bg-gray-800 text-white border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
        >
          <option value="all">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
};
