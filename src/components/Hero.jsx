import { motion } from 'framer-motion';

const Hero = () => {
  const headline = "The thinkers and doers were changing the status Quo with";

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 pt-16 relative overflow-hidden">
      {/* Decorative SVG shapes */}
      {/* Purple teardrop - top right */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute top-24 right-8 md:right-16 w-16 h-20 md:w-24 md:h-32"
      >
        <svg viewBox="0 0 100 130" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M50 0C50 0 100 60 100 90C100 115 75 130 50 130C25 130 0 115 0 90C0 60 50 0 50 0Z"
            fill="#7B5EA7"
          />
        </svg>
      </motion.div>

      {/* Pink swirly arc - bottom left */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="absolute bottom-24 left-4 md:left-12 w-32 h-32 md:w-48 md:h-48"
      >
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20 150C20 150 60 180 100 150C140 120 180 100 180 60"
            stroke="#FF2D8A"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <path
            d="M30 160C30 160 65 185 100 160C135 135 170 115 170 80"
            stroke="#FF2D8A"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="10 10"
          />
        </svg>
      </motion.div>

      {/* Yellow dashed rectangle - behind team grid area */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-64 h-40 md:w-96 md:h-48 border-2 border-dashed border-[#F5E642] rotate-[-5deg]"
      />

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="font-[Syne] font-bold text-4xl md:text-6xl lg:text-7xl leading-tight text-center max-w-4xl mx-auto relative z-10"
      >
        {headline.split(' ').map((word, index) => {
          let className = "inline-block mx-1 ";
          if (word === 'thinkers') {
            className += "bg-[#F5E642] px-2 rounded-lg relative ";
          } else if (word === 'changing') {
            className += "bg-[#FF2D8A] text-white px-2 rounded-lg ";
          } else if (word === 'status') {
            className += "bg-[#5CE65C] px-2 rounded-lg ";
          }

          return (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
              className={className}
            >
              {word}
            </motion.span>
          );
        })}
      </motion.h1>

      {/* Subtitle */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="mt-8 md:mt-12 max-w-md mx-auto"
      >
        <div className="border border-black rounded-full px-6 py-4 text-center">
          <p className="text-sm font-[DM Sans] text-[#0D0D0D]">
            We are a team of strategists, designers communicators, researchers. Togeather, we belive that progress only hghappens when you refuse to play things safe.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;