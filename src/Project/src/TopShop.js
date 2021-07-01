import React, { useState } from 'react';
import Top from '../Data/TopData';
import Card from '../Card';

const Shop = () => {
  // eslint-disable-next-line no-unused-vars
  const [cloth, clothState] = useState(Top);
  return (
    <div className="bigContainer">
      <div className="container">
        {cloth.map((num, i) => {
          return <Card cloth={num} key={i} />;
        })}
      </div>
    </div>
  );
};

export default Shop;