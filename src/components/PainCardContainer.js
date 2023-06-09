import React from "react";
import PainCard from "./PainCard";
import painItems from "../data/painItems.json";

const PainCardContainer = () => {
  return (
    <div className="mt-32 text-center">
      <h1 className="text-4xl">Describe your pain</h1>
      <div className="m-auto mt-8 grid max-w-7xl grid-cols-1 gap-4 self-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {painItems.map((painItem) => (
          <PainCard painItem={painItem} />
        ))}
      </div>
    </div>
  );
};

export default PainCardContainer;
