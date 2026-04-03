import { motion } from 'framer-motion';

const TomorrowSection = () => {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-[Syne] font-bold text-3xl md:text-4xl lg:text-[44px] leading-tight mb-6">
              <span className="italic">Tomorrow</span> should be better than today
            </h2>
            <p className="text-sm font-[DM Sans] text-gray-600 mb-6 max-w-md">
              We are a team of strategists, designers communicators, researchers. Together, we believe that progress only happens when you refuse to play things safe.
            </p>
            <a
              href="#read-more"
              className="inline-flex items-center text-sm font-[DM Sans] text-[#0D0D0D] no-underline hover:underline group"
            >
              Read more
              <span className="ml-2 inline-block w-16 h-[2px] bg-[#0D0D0D] group-hover:w-24 transition-all" />
            </a>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center"
          >
            {/* Decorative red triangles */}
            <div className="absolute -top-4 -right-4 md:-right-8">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                <path d="M30 5L55 55H5L30 5Z" fill="#FF5C5C" />
              </svg>
            </div>
            <div className="absolute bottom-12 -left-2 md:-left-6">
              <svg width="35" height="35" viewBox="0 0 35 35" fill="none">
                <path d="M17.5 3L32 32H3L17.5 3Z" fill="#FF5C5C" />
              </svg>
            </div>

            {/* Curved squiggle */}
            <div className="absolute -bottom-8 -right-4">
              <svg width="80" height="40" viewBox="0 0 80 40" fill="none">
                <path
                  d="M5 20C15 5 25 35 40 20C55 5 65 25 75 15"
                  stroke="#FF5C5C"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Main image */}
            <div className="relative z-10">
              <img
                src="https://picsum.photos/seed/meeting/400/400"
                alt="Business meeting"
                className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover"
              />
              {/* Label */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 border-2 border-[#FF2D8A] px-3 py-1">
                <span className="text-xs font-[DM Sans]">raviswamiii</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TomorrowSection;