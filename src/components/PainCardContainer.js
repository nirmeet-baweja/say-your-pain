import React from "react";
import LazyLoad from "react-lazy-load";
import PainCard from "./PainCard";
import painItems from "../data/painItems.json";
import { useTranslation } from "react-i18next";

const PainCardContainer = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-32 text-center">
      <h1 className="text-4xl">{t("Describe your pain")}</h1>
      <div className="m-12 grid max-w-7xl grid-cols-1 gap-4 self-center sm:grid-cols-2 lg:grid-cols-3 xl:mx-auto 2xl:grid-cols-4">
        {painItems.map((painItem) => (
          <LazyLoad height={510}>
            <PainCard painItem={painItem} key={painItem.type} />
          </LazyLoad>
        ))}
      </div>
    </div>
  );
};

export default PainCardContainer;
