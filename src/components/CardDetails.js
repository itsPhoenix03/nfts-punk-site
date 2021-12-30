import React, { useEffect, useState } from "react";
import "../styles/CardDetails.css";
import instaLogo from "../assets/owner/instagram.png";
import twitterLogo from "../assets/owner/twitter.png";
import moreLogo from "../assets/owner/more.png";

const CardDetails = ({ punkList, selectedPunk }) => {
  const [activePunk, setActivePunk] = useState(punkList[0]);

  useEffect(() => {
    setActivePunk(punkList[selectedPunk]);
  }, [punkList, selectedPunk]);

  return (
    <div className="showCardDetails">
      <img
        src={activePunk.image_original_url}
        alt={activePunk.name}
        className="punkImage"
      />
      <div className="details">
        <div className="upperSection">
          <div className="heading">
            <h2>{activePunk.name}</h2>
            <p>#{activePunk.token_id}</p>
          </div>
          <p className="punkDescription">{activePunk.description}</p>
        </div>
        <div className="lowerSection">
          <img
            src={activePunk.owner.profile_img_url}
            alt=""
            className="ownerImage"
          />
          <div className="ownerInfo">
            <p>{activePunk.owner.address}</p>
            <h3>@Phoenix3.0</h3>
          </div>
          <div className="socialMedia">
            <img src={instaLogo} alt="instagram" />
            <img src={twitterLogo} alt="twitter" />
            <img src={moreLogo} alt="more" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
