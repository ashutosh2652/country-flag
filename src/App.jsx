import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { AboutUs } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Country } from "./pages/Country";
import { AppLayout } from "./component/Layout/AppLayout";
import { ErrorPage } from "./pages/ErrorPage";
import { Rough } from "./pages/Rough";
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
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
        path: "rough",
        element: <Rough />,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
