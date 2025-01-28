"use client";

import React from 'react';
import Link from 'next/link'

const HomeContent = () => {

  return (
    <section className="hero h-screen flex items-center text-xl bg-cover bg-center" style={{ backgroundImage: "url('/background3.jpg')" }}>
      <div className="pl-0 md:pl-16 text-white text-center w-full max-w-4xl mx-auto">
        <h1 className="text-6xl font-bold drop-shadow-md">Wellcome to Car Universe</h1>
        <p className="text-2xl mt-4 text-[#FFC404]">Where Your Driving Aspirations Meet <br />Reality, Drive and Dream</p>
        <button className="mt-6 px-6 py-3 bg-[#3a0507] hover:bg-[#200a0a] rounded-md font-bold"><Link href="/cars"> See Your Dream Cars</Link></button>
      </div>
    </section>
  );
};

export default HomeContent;