import React from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

const PainAnimation = ({ painItem }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div>
        <Player
          // autoplay
          loop
          hover
          src={`${process.env.PUBLIC_URL}${painItem.lottie}`}
        >
          <Controls
            visible={false}
            buttons={["play", "repeat", "frame", "debug"]}
          />
        </Player>
      </div>
      <div className="mt-4 text-2xl font-medium">{painItem.type}</div>
    </div>
  );
};

export default PainAnimation;
