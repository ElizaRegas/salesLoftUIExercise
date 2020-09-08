import React from "react";
import BodyHeader from "./BodyHeader";
import CategoryHeader from "./CategoryHeader";
import EmailDisplay from "./EmailDisplay";

const Body = () => {
  return (
    <div id="bodySection">
      <BodyHeader />
      <CategoryHeader />
      <EmailDisplay />
    </div>
  );
};

export default Body;
