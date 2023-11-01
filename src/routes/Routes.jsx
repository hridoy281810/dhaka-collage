import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home/Home";
import AllEvent from "../Pages/All-Event/AllEvent";

const router = createBrowserRouter([
    {
      path: "/",
     element: <Layout></Layout>,
     children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: 'allEvent',
            element: <AllEvent></AllEvent>
        },
     ]
    },
  ]);
export default router ;