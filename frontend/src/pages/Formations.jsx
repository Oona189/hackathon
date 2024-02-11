import React from 'react';
import FormationCard from '../components/FormationCard';

const cardData = [
  // Add your data for each card here
  { name: "1" },
  { name: "2" },
  { name: "3" },
  // Add data for other cards
];

const Formations = () => {
  return (
    <div className='flex-col space-y-5'>
      {cardData.map((data, index) => (
        <FormationCard key={index} data={data} />
      ))}
    </div>
  );
};

export default Formations;