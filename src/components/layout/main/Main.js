import React from 'react';
import data from 'json/data.json';
import Deck from 'components/decks/Deck';

const Main = () => {
  const decks = data.map((deck, index) => (
    <Deck key={index} dataIndex={index} {...deck}></Deck>
  )); 
  return decks;
}

export default Main;
