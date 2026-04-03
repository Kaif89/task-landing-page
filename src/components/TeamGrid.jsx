import { useState } from 'react';
import { motion } from 'framer-motion';

const TeamGrid = () => {
  const [hoveredMember, setHoveredMember] = useState(null);

  const teamMembers = [
    { id: 1, name: 'Yash Mishra', size: 130, top: '10%', left: '5%', seed: 101 },
    { id: 2, name: 'Sarah Chen', size: 80, top: '5%', left: '25%', seed: 102 },
    { id: 3, name: 'Marcus Johnson', size: 100, top: '35%', left: '10%', seed: 103 },
    { id: 4, name: 'Emily Davis', size: 70, top: '15%', left: '45%', seed: 104 },
    { id: 5, name: 'Alex Rivera', size: 110, top: '50%', left: '25%', seed: 105 },
    { id: 6, name: 'Jordan Lee', size: 60, top: '25%', left: '70%', seed: 106 },
    { id: 7, name: 'Taylor Kim', size: 90, top: '55%', left: '55%', seed: 107 },
    { id: 8, name: 'Casey Morgan', size: 75, top: '40%', left: '80%', seed: 108 },
  ];

  return (
    <section className="py-16 md:py-24 px-4 relative">
      <div className="max-w-4xl mx-auto">
        {/* Yellow border frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-2 border-[#D4AF37] p-8 md:p-12 min-h-[300px] md:min-h-[400px] relative"
        >
          {/* Staggered circular avatars */}
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="absolute cursor-pointer group"
              style={{
                top: member.top,
                left: member.left,
                width: member.size,
                height: member.size,
              }}
              onMouseEnter={() => setHoveredMember(member.id)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              <img
                src={`https://picsum.photos/seed/${member.seed}/200/200`}
                alt={member.name}
                className="w-full h-full rounded-full object-cover"
              />

              {/* Tooltip */}
              {hoveredMember === member.id && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-[#FF2D8A] text-white px-3 py-1 rounded-full text-sm whitespace-nowrap z-20"
                >
                  {member.name}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#FF2D8A] rotate-45" />
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamGrid;