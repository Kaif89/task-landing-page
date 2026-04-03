import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "Elementum delivered the site with in the timeline as they requested. In the end, the client found a 50% increase in traffic with in days since its launch. They also had an impressive ability to use technologies that the company hasnt used, which have also proved to be easy to use and reliable",
      author: "Client Testimonial",
    },
    {
      quote: "Working with Elementum transformed our digital presence completely. Their strategic approach and attention to detail exceeded all expectations. The team truly understands what it takes to stand out in today's competitive landscape.",
      author: "Marketing Director",
    },
    {
      quote: "The creativity and professionalism shown by the Elementum team is unmatched. They didn't just deliver a website - they created an experience that perfectly represents our brand values.",
      author: "CEO Startup Co.",
    },
  ];

  const avatarsLeft = [
    { size: 40, top: '10%', left: '2%', seed: 201 },
    { size: 60, top: '35%', left: '5%', seed: 202 },
    { size: 90, top: '60%', left: '8%', seed: 203 },
  ];

  const avatarsRight = [
    { size: 40, top: '15%', right: '2%', seed: 204 },
    { size: 60, top: '40%', right: '5%', seed: 205 },
    { size: 90, top: '65%', right: '8%', seed: 206 },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 md:py-24 px-4 relative overflow-hidden">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 relative z-10"
      >
        <h2 className="font-[Syne] font-bold text-3xl md:text-4xl">
          <span className="relative">
            What
            <span className="absolute -bottom-1 left-0 w-full h-6 border-2 border-[#0D0D0D] rounded opacity-20" />
          </span>{' '}
          our customer says{' '}
          <span className="relative">
            About Us
            <svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 120 20"
              fill="none"
            >
              <path
                d="M5 15Q30 5 60 15Q90 25 115 10"
                stroke="#F5E642"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h2>
      </motion.div>

      {/* Left avatars */}
      <div className="absolute left-4 md:left-16 top-1/2 -translate-y-1/2 hidden md:block">
        {avatarsLeft.map((avatar, index) => (
          <motion.img
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            src={`https://picsum.photos/seed/${avatar.seed}/100/100`}
            alt="Testimonial avatar"
            className="rounded-full object-cover absolute"
            style={{
              width: avatar.size,
              height: avatar.size,
              top: avatar.top,
              left: avatar.left,
            }}
          />
        ))}
      </div>

      {/* Right avatars */}
      <div className="absolute right-4 md:right-16 top-1/2 -translate-y-1/2 hidden md:block">
        {avatarsRight.map((avatar, index) => (
          <motion.img
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            src={`https://picsum.photos/seed/${avatar.seed}/100/100`}
            alt="Testimonial avatar"
            className="rounded-full object-cover absolute"
            style={{
              width: avatar.size,
              height: avatar.size,
              top: avatar.top,
              right: avatar.right,
            }}
          />
        ))}
      </div>

      {/* Quote Card */}
      <div className="max-w-lg mx-auto mt-16 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-2xl shadow-lg p-8 md:p-10"
          >
            {/* Opening quote mark */}
            <span className="font-[Syne] text-7xl md:text-8xl text-gray-200 absolute top-4 left-4">
              "
            </span>

            <p className="text-sm md:text-base font-[DM Sans] text-center relative z-10 mt-8 mb-6">
              {testimonials[currentIndex].quote}
            </p>

            {/* Closing quote mark */}
            <span className="font-[Syne] text-7xl md:text-8xl text-gray-200 absolute bottom-4 right-4">
              "
            </span>
          </motion.div>
        </AnimatePresence>

        {/* Navigation arrows */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={prevTestimonial}
            className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
            aria-label="Previous testimonial"
          >
            ←
          </button>
          <button
            onClick={nextTestimonial}
            className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
            aria-label="Next testimonial"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;