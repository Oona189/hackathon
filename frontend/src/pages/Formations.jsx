import React, { useState, useEffect } from 'react';
import FormationCard from '../components/FormationCard';


const Formations = () => {
  const [formationsList, setFormationsList] = useState([]);
  const [sortedFormations, setSortedFormations] = useState(null);
  const [isAscending, setIsAscending] = useState(true);

  const getFormations = async () => {
    try {
      const result = await fetch('http://127.0.0.1:3001/formation', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!result.ok) {
        throw new Error(`Error fetching formations: ${result.status}`);
      }

      const body = await result.json();

      setFormationsList(body);
    } catch (error) {
      console.error('Error fetching formations:', error.message);
    }
  };

  const sortFormationsByDate = () => {
    const sortedFormationsCopy = [...formationsList];
    const orderMultiplier = isAscending ? 1 : -1;

    const sortedFormations = sortedFormationsCopy.sort(
      (a, b) => orderMultiplier * (new Date(a.datedebut) - new Date(b.datedebut))
    );

    setSortedFormations(sortedFormations);
    setIsAscending(!isAscending);
  };

  useEffect(() => {
    getFormations();
  }, []);


  return (
    <div className="flex-col space-y-5 w-[90%] m-auto my-[60px] ">
      <div className='flex w-[98%] justify-between m-auto mb-[60px] items-center'>
        <h2 className="text-3xl font-bold leading-7 text-gray-900">Formations</h2>
        <button onClick={sortFormationsByDate}>
          <div className='flex items-center gap-4'>
            <h3>Date</h3>
            {isAscending ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
            </svg>
            }
          </div>
        </button>
      </div>
      
      {sortedFormations
        ? sortedFormations.map((formation, index) => (
          <FormationCard key={index} formation={formation} />
        ))
        : formationsList.map((formation, index) => (
          <FormationCard key={index} formation={formation} />
        ))}
    </div>
  );
};

export default Formations;