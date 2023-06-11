import React from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { useTranslation } from "react-i18next";

const PainAnimation = ({ painItem, autoplay }) => {
  const { t, i18n } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center">
      <div>
        <Player
          autoplay={autoplay}
          loop
          hover={!autoplay}
          src={`${process.env.PUBLIC_URL}${painItem.lottie}`}
        >
          <Controls
            visible={false}
            buttons={["play", "repeat", "frame", "debug"]}
          />
        </Player>
      </div>
      {i18n.language !== "en" && (
        <div className="mt-4 text-2xl font-medium">{painItem.type}</div>
      )}
      <div className="mt-4 text-2xl font-medium">{t(`${painItem.type}`)}</div>
    </div>
  );
};

export default PainAnimation;
