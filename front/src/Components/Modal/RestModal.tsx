import React, { BaseSyntheticEvent } from "react";
import { RiCloseLine } from "react-icons/ri";
import { MdAlarm } from 'react-icons/md';
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
    <div className="restModal">
        <RiCloseLine
          className="closeCategoryIconTimer"
          onClick={() => {
            setRestModal(false);
            setEndRestModal(false);
          }}
        />
      <MdAlarm className="alarm"></MdAlarm>
      <div className="modalTitle">
        <h1>{title}</h1> 
      </div>
    
    </div>
  );
};

export default RestModal;
