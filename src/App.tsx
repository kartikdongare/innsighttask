/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import CardList from "./Component/CardList";
import {dataType} from './type'
function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<dataType[]>([]);
  const [newCardId, setNewCardId] = useState<number>(0);
  const fetchData = async () => {
    try {
      const res = await axios.get("https://swapi.dev/api/people");
      setData(res.data.results.slice(0, 3));
      const len=res.data.results.slice(0,3).length;
      setNewCardId(len)
      if (res.status === 200) {
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      
    }
    
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleAddCard = async () => {
    const res:dataType = await axios.get(
      `https://swapi.dev/api/people/${newCardId+1}/`
    );
    setData([...data, res.data]);
    setNewCardId(data.length+1);
  };

  const handleCardClose = (id:number) => {
    const updatedCardData = data.filter(
      (item:dataType, index:number) => index !== id
    );
    setData(updatedCardData);
    setNewCardId(updatedCardData.length);
  };
  return (
    <div className="App">
      <h1>Star Wars Characters</h1>
      <div className="main-button">
      <button onClick={handleAddCard}>Add Card</button>
      </div>
      {loading ? (
        <div className="fetch-data">.....Fetching Data</div>
      ) : (
        <CardList
          data={data}
          onCardClose={handleCardClose}
          newCardId={newCardId}
        />
      )}
    </div>
  );
}

export default App;
