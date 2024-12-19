import React from "react";
import Banner from "../banner/Bannar";
import FeaturedJobs from "../featuredJobs/FeaturedJobs";
import JobCategoryList from "../jobCategoryList/JobCategoryList";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <h2>This is Home Components</h2>
      <JobCategoryList></JobCategoryList>
      <FeaturedJobs></FeaturedJobs>
    </div>
  );
};

export default Home;
