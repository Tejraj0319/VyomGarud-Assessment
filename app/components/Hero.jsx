// "use client";
// import { useState, useEffect } from "react";
// import "./Hero.css";

// export default function Hero() {
//   const headings = ["VYOMGARUD"];
//   const [lettersData, setLettersData] = useState([]);

//   useEffect(() => {
//     const data = headings.map((line) =>
//       line.split("").map((char) => {
//         const isFlicker = Math.random() < 0.4;
//         const delay = (Math.random() * 3).toFixed(2) + "s";
//         return { char, isFlicker, delay };
//       })
//     );
//     setLettersData(data);
//   }, []);

//   return (
//     <section className="relative flex flex-col items-center justify-center h-screen text-center px-6 overflow-hidden">
//       {/* Video background */}
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover -z-10"
//       >
//         <source src="/earthVideo.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* Hero Text */}
//       {lettersData.length > 0 &&
//         lettersData.map((line, idx) => (
//           <h1
//             key={idx}
//             className="text-5xl md:text-7xl font-bold text-white mb-4 md:mb-8 tracking-tight flex justify-center flex-wrap hero-text"
//           >
//             {line.map((letter, i) => (
//               <span
//                 key={i}
//                 className={`letter ${letter.isFlicker ? "flicker" : "instant"}`}
//                 style={{ animationDelay: letter.delay }}
//               >
//                 {letter.char}
//               </span>
//             ))}
//           </h1>
//         ))}
//       <p className="text-lg md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
//         Precision in the Sky. Power on the Ground.
//       </p>
//       <a
//         href="#about"
//         className="inline-block px-8 py-3 rounded-full bg-transparent border border-[#ff7b00] text-white font-semibold text-lg shadow-lg
//              hover:bg-gradient-to-r hover:from-[#fc8e27] hover:to-[#ff5e00] hover:text-white transition-all duration-300"
//       >
//         Explore Capabilities
//       </a>
//     </section>
//   );
// }


"use client";
import { useState, useEffect } from "react";
import "./Hero.css";
import Navbar from "./Navbar";

export default function Hero() {
  const headings = ["VYOMGARUD"];
  const [lettersData, setLettersData] = useState([]);

  useEffect(() => {
    const data = headings.map((line) =>
      line.split("").map((char) => {
        const isFlicker = Math.random() < 0.4;
        const delay = (Math.random() * 3).toFixed(2) + "s";
        return { char, isFlicker, delay };
      })
    );
    setLettersData(data);
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center h-screen text-center px-6 overflow-hidden" id="hero">
      
      {/* Navbar on top */}
      <Navbar />

      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover -z-20"
      >
        <source src="/earthVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Hero Text */}
      {lettersData.length > 0 &&
        lettersData.map((line, idx) => (
          <h1
            key={idx}
            className="text-5xl md:text-7xl font-bold text-white mb-4 md:mb-8 tracking-tight flex justify-center flex-wrap hero-text z-10 relative"
          >
            {line.map((letter, i) => (
              <span
                key={i}
                className={`letter ${letter.isFlicker ? "flicker" : "instant"}`}
                style={{ animationDelay: letter.delay }}
              >
                {letter.char}
              </span>
            ))}
          </h1>
        ))}
      <p className="text-lg md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto z-10 relative">
        Precision in the Sky. Power on the Ground.
      </p>
      <a
        href="#about"
        className="inline-block px-8 py-3 rounded-full bg-transparent border border-[#ff7b00] text-white font-semibold text-lg shadow-lg
             hover:bg-gradient-to-r hover:from-[#fc8e27] hover:to-[#ff7b00] hover:text-white transition-all duration-300 z-10 relative"
      >
        Explore Capabilities
      </a>
    </section>
  );
}
