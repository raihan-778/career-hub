import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppliedJobs from "./components/appliedJobs/AppliedJobs";
import Blogs from "./components/blogs/Blogs";
import ErrorPage from "./components/errorPage/ErrorPage";
import Home from "./components/home/Home";
import JobDetails from "./components/jobDetails/JobDetails";
import Jobs from "./components/jobs/Jobs";
import Root from "./components/root/Root";
import Statistics from "./components/statistics/Statistics";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/jobs",
        element: <Jobs></Jobs>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/applied",
        element: <AppliedJobs></AppliedJobs>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/job/:id",
        element: <JobDetails></JobDetails>,
        loader:()=>fetch(`jobs.json`)

      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
