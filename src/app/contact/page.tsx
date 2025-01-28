import React from 'react';

const Contact = () => {
  return (
    <section className="contact-form border max-w-3xl mx-auto my-20 p-8 bg-white shadow-md rounded-md bg-cover h-full ">
      <h2 className="text-4xl font-bold mb-6 text-center">Contact Us</h2>
      <form>
        <input type="text" placeholder="Full Name" className="w-full mb-4 px-4 py-2 border border-black rounded-md" required />
        <input type="email" placeholder="Email Address" className="w-full mb-4 px-4 py-2 border border-black rounded-md" required />
        <input type="text" placeholder="Phone Number" className="w-full mb-4 px-4 py-2 border border-black rounded-md" />
        <textarea placeholder="Your Message" className="w-full mb-4 px-4 py-2 border border-black rounded-md" rows={5} required></textarea>
        <button type="submit" className="w-full bg-[#35a6f1] hover:bg-[#02609E] text-white py-2 rounded-md">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;