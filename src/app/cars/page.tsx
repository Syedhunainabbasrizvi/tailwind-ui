import Image from 'next/image';
import React from 'react';

const Car = () => {
    const carData = [
        {id: 1, name: 'Sportage', Image: '/sportagee.jpeg'},
        {id: 2, name: 'Corolla', Image: '/corolla.jpg'},
        {id: 3, name: 'H6-Haval', Image: '/h-h6.jpg'},
        {id: 4, name: 'Mercedes', Image: '/mercedes.png'},
        {id: 5, name: 'MG-HS', Image: '/Mg-hs.jpg'},
        {id: 6, name: 'Sonata', Image: '/sonata.png'}
      ]

  return (
    <div className="car grid grid-cols-1 md:grid-cols-3 gap-10 px-10 my-10">
      {carData.map(car => (
        <div key={car.id} className="car-card bg-white p-5 rounded-md shadow-md text-center">
          <Image src={car.Image} alt={car.name} className="w-full rounded-md transition-transform duration-300 transform hover:scale-110" />
          <h3 className="mt-4 text-2xl font-bold">{car.name}</h3>
          <p className="text-gray-500"></p>
          <button className="mt-4 px-4 py-3 text-lg bg-[#27a8ff] hover:bg-[#02609E] text-black rounded-md">See More</button>
        </div>
      ))}
    </div>
  );
};

export default Car;