import React from 'react';

const About = () => {
  return (
    <section className="about h-screen flex items-center justify-start bg-cover bg-center text-white px-10" style={{ backgroundImage: "url('/bg-about.jpeg')" }}>
      <div className="bg-black bg-opacity-80 p-8 rounded-lg w-full max-w-5xl mx-auto text-3xl ">
        <h2 className="text-4xl font-bold mb-4 text-center">About Us</h2>
        <p className='text-[#9DADAE] text-center'>Welcome to <b>CAR UNIVERSE</b>, your trusted source for all things
             automotive. We provide expert reviews, in-depth articles, and the latest
             news on cars, trucks, and SUVs. Whether you are looking for buying guides,
             maintenance tips, or the newest models, we are here to help you make informed
             decisions on your automotive journey.</p>
      </div>
    </section>
  );
};

export default About;