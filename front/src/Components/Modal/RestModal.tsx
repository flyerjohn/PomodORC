import React, { BaseSyntheticEvent } from "react";
import { RiCloseLine } from "react-icons/ri";
import "./style.css";

const RestModal = ({
  setRestModal,
  title,
  setEndRestModal,
}: {
  setRestModal: Function;
  title: string;
  setEndRestModal: Function;
}) => {
  return (
    <div className="taskModal">
      <div className="modalTitle">
        <h1>{title}</h1>
      </div>
      <RiCloseLine
        className="closeCategoryIcon"
        onClick={() => {
          setRestModal(false);
          setEndRestModal(false);
        }}
      />
    </div>
  );
};

export default RestModal;
