import React from "react";
import Banner from "../banner/Bannar";
import JobCategoryList from "../jobCategoryList/JobCategoryList";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <h2>This is Home Components</h2>
      <JobCategoryList></JobCategoryList>
    </div>
  );
};

export default Home;
