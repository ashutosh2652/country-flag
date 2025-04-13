import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, AboutUs, Contact, Country, ErrorPage } from "./pages";
import { AppLayout } from "./component/Layout/AppLayout";
import { CountryDetails } from "./component/Layout/CountryDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "country",
        element: <Country />,
      },
      {
        path: "country/:countryname",
        element: <CountryDetails />,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
