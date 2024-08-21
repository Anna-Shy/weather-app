import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { HomePage } from "./pages/HomePage/HomePage";
import { CityDetailPage } from "./pages/CityDetailPage/CityDetailPage";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage";

import "./styles/global.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/citydetails/:city",
    element: <CityDetailPage />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
