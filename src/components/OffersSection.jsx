import { useState } from 'react';
import { motion } from 'framer-motion';

const OffersSection = () => {
  const [hoveredRow, setHoveredRow] = useState(null);

  const services = [
    {
      label: 'Office of multiple interest content',
      title: 'Colaborative & partnership',
    },
    {
      label: 'The hanger US Air force digital experimental',
      title: 'We talk about our weight',
    },
    {
      label: 'Delta faucet content, social, digital',
      title: 'Piloting digital confidence',
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 relative"
        >
          <h2 className="font-[Syne] font-bold text-4xl md:text-5xl lg:text-[56px]">
            What we{' '}
            <span className="bg-[#5CE65C] px-2 rounded-full">can</span> offer you!
            <span className="block text-left text-[#FF2D8A] text-2xl mt-2">offer</span>
          </h2>

          {/* Pink curved tail */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-32">
            <svg viewBox="0 0 150 40" fill="none">
              <path
                d="M10 20Q40 5 75 20Q110 35 140 15"
                stroke="#FF2D8A"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </motion.div>

        {/* Services List */}
        <div className="mt-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onMouseEnter={() => setHoveredRow(index)}
              onMouseLeave={() => setHoveredRow(null)}
              className={`py-6 md:py-8 border-b border-gray-200 cursor-pointer transition-colors ${
                hoveredRow === index ? 'bg-gray-50' : ''
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <span className="text-xs font-[DM Sans] text-gray-500 block mb-1">
                    {service.label}
                  </span>
                  <h3 className={`font-[Syne] font-bold text-xl md:text-2xl transition-colors ${
                    hoveredRow === index ? 'text-[#FF2D8A]' : 'text-[#0D0D0D]'
                  }`}>
                    {service.title}
                  </h3>
                </div>
                <motion.div
                  animate={{ x: hoveredRow === index ? 8 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-2xl md:text-3xl"
                >
                  →
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OffersSection;