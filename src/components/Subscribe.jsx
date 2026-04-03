import { motion } from 'framer-motion';

const Subscribe = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-[#D6E8D4] relative overflow-hidden">
      {/* Decorative red hand-drawn arrow/squiggle above */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="absolute top-8 left-1/2 -translate-x-1/2 w-32"
      >
        <svg viewBox="0 0 120 50" fill="none">
          <path
            d="M10 40L50 10L90 40"
            stroke="#FF5C5C"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M60 10L50 10L50 25"
            stroke="#FF5C5C"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>

      {/* Purple teardrop - bottom right */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="absolute bottom-8 right-8 w-16 h-20 md:w-24 md:h-32"
      >
        <svg viewBox="0 0 100 130" fill="none">
          <path
            d="M50 0C50 0 100 60 100 90C100 115 75 130 50 130C25 130 0 115 0 90C0 60 50 0 50 0Z"
            fill="#7B5EA7"
          />
        </svg>
      </motion.div>

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-[Syne] font-bold text-4xl md:text-5xl lg:text-[64px] mb-4"
        >
          Subscribe to our newsletter
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm font-[DM Sans] text-gray-700 mb-8"
        >
          To make your stay special and even more memorable
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-black text-white font-[DM Sans] font-medium px-8 py-3 rounded-full w-40 md:w-[150px] hover:bg-gray-800 transition-colors"
        >
          Subscribe Now
        </motion.button>
      </div>
    </section>
  );
};

export default Subscribe;