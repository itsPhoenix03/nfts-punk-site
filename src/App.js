import { useEffect, useState } from "react";
import axios from "axios";
import "./styles/App.css";
import Header from "./components/Header.js";
import PunkList from "./components/PunkList";

function App() {
  const [punkList, setPunkList] = useState([]);
  useEffect(() => {
    const getNfts = async () => {
      const openSeaData = await axios.get(
        `https://testnets-api.opensea.io/assets?asset_contract_address=0xB97Cd2B406b0282f4da0Af148CcB7dDc139Da0cd&order_direction=asc`
      );

      setPunkList(openSeaData.data.assets);
    };

    return getNfts();
  }, []);

  return (
    <div className="app">
      <Header />
      <PunkList punkList={punkList} />
    </div>
  );
}

export default App;
