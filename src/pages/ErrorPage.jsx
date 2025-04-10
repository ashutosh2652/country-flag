import { NavLink, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <>
      <h1>OOPS an error occured!</h1>
      {err && <p>{err.data}</p>}
      <NavLink to="/">
        <button>Go Home</button>
      </NavLink>
    </>
  );
};
