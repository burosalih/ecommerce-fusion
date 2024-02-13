import React from "react";

import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="h-[800px] bg-no-repeat bg-cover bg-center py-20" style={{
      backgroundImage: `url("https://images.unsplash.com/photo-1592399668789-6432393d5761?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <div className="container mx-auto flex justify-around h-full">
        <div className="flex flex-col justify-center">
          <h1 className="uppercase text-[55px] md:text-[70px] leading-[1.1] font-semibold mb-4">
            FusionBelle
            <br />
            <span className="font-light">Shop</span>
          </h1>
          <Link
            to={"/"}
            className="self-start uppercase font-semibold border-b-2 border-primary"
          >
            LEARN MORE
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
