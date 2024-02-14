import React, { useEffect, useState } from "react";

const Hero = ({ scrollToProducts }) => { 
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButtons(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const scrollToFooter = () => {
    const footer = document.getElementById("footer");
    footer.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      className="h-[800px] bg-no-repeat bg-cover bg-center py-20 relative"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1592398289517-d9437d109bc2?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Div za pozadinu sa zamućenjem */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1592398289517-d9437d109bc2?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "blur(10px)" // Dodajemo zamućenje samo na pozadinsku sliku
        }}
      ></div>

      <div className="container mx-auto flex justify-around h-full relative">
        <div className="flex flex-col justify-center items-center text-center">
          <h1
            className={`uppercase text-6xl leading-[1.1] font-semibold mb-8 ${
              showButtons ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            } transition-opacity duration-1000 delay-200 text-white`}
          >
            Strast
            <br></br>
            <span className="font-light text-3xl">Mjesto za ispunjenje vaših najdubljih želja</span>
          </h1>
          {showButtons && (
            <div className="space-x-2 sm:space-x-8 mt-8 flex-col sm:flex-row">
              <button
                onClick={scrollToProducts}
                className="uppercase font-semibold border-b-2 border-primary px-8 py-3 text-lg text-green-500 hover:text-white hover:bg-green-500 transition-all duration-300 rounded-md bg-white"
              >
                Pogledaj artikle
              </button>
              <button
                onClick={scrollToFooter}
                className="uppercase font-semibold border-b-2 border-primary px-8 py-3 text-lg text-white hover:text-green-500 hover:bg-white transition-all duration-300 rounded-md bg-green-500 border-transparent"
              >
                Kontakt
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
