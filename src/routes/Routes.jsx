import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home/Home";
import AllEvent from "../Pages/All-Event/AllEvent";
import Committee from "../Pages/Committee/Committee";
import PhotoGallery from "../Pages/PhotoGallery/PhotoGallery";

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
        {
            path: 'committee',
            element: <Committee></Committee>
        },
        {
            path: 'photo',
            element: <PhotoGallery></PhotoGallery>
        },
     ]
    },
  ]);
export default router ;