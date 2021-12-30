import React from "react";
import CollectionCard from "./CollectionCard.js";
import "../styles/PunkList.css";
const PunkList = ({ punkList }) => {
  console.log(punkList);
  return (
    <div className="punkListContainer">
      {punkList.map((item) => {
        return (
          <div>
            <CollectionCard
              key={item.token_id}
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
