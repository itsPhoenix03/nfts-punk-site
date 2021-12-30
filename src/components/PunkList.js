import React from "react";
import CollectionCard from "./CollectionCard.js";
import "../styles/PunkList.css";
const PunkList = ({ punkList, setSelectedPunk }) => {
  return (
    <div className="punkListContainer">
      {punkList.map((item) => {
        return (
          <div
            key={item.token_id}
            onClick={() => setSelectedPunk(item.token_id)}
          >
            <CollectionCard
              id={item.token_id}
              name={item.name}
              description={item.description}
              image={item.image_original_url}
              price={item.traits[0].value}
            />
          </div>
        );
      })}
    </div>
  );
};

export default PunkList;
