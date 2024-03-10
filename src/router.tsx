import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Detail from "./components/character/Detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/character/:id",
    element: <Detail />,
  },
]);

export default router;
