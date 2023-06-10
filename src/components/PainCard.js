import React from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

const PainCard = ({ painItem }) => {
  return (
    <div className="mb-3.5 flex flex-col items-center rounded bg-white p-10">
      <div className="lottieAnimation">
        <Player
          //autoplay
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
      <div className="painType">{painItem.type}</div>
    </div>
  );
};

export default PainCard;
