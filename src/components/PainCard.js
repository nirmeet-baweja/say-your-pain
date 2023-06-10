import React, { useState } from "react";
import PainModal from "./PainModal";
import PainAnimation from "./PainAnimation";

const PainCard = ({ painItem }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div
      className="mb-3.5 flex cursor-pointer flex-col items-center rounded bg-white p-10"
      onClick={openModal}
    >
      <PainAnimation painItem={painItem} />
      <PainModal
        painItem={painItem}
        closeModal={closeModal}
        isModalOpen={isModalOpen}
      />
    </div>
  );
};

export default PainCard;
