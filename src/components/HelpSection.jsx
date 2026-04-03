import { motion } from 'framer-motion';

const HelpSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center order-2 md:order-1"
          >
            {/* Red coral triangle behind image */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-8">
              <svg width="200" height="180" viewBox="0 0 200 180" fill="none">
                <path d="M100 10L190 170H10L100 10Z" fill="#FF5C5C" fillOpacity="0.3" />
              </svg>
            </div>

            <img
              src="https://picsum.photos/seed/laptops/400/400"
              alt="People working on laptops"
              className="w-64 h-64 md:w-72 md:h-72 rounded-full object-cover relative z-10"
            />
          </motion.div>

          {/* Right Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 md:order-2"
          >
            <h2 className="font-[Syne] font-bold text-3xl md:text-4xl leading-tight mb-6">
              <span className="relative">
                See
                <span className="absolute -bottom-1 left-0 w-full h-3 border-2 border-[#0D0D0D] rounded opacity-30" />
              </span>{' '}
              how we can help you progress
            </h2>
            <p className="text-sm font-[DM Sans] text-gray-600 mb-6 max-w-md">
              We add a layer of fearless insights and action that allows change makers to accelerate their progress in areas such as brand, design digital, comms and social research.
            </p>
            <a
              href="#read-more"
              className="inline-flex items-center text-sm font-[DM Sans] text-[#0D0D0D] no-underline hover:underline group"
            >
              Read more
              <span className="ml-2 inline-block w-16 h-[2px] bg-[#0D0D0D] group-hover:w-24 transition-all" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HelpSection;