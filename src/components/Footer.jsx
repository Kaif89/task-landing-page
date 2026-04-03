import { motion } from 'framer-motion';

const Footer = () => {
  const footerLinks = {
    company: ['Home', 'Studio', 'Service', 'Blog'],
    terms: ['Privacy Policy', 'Terms & Conditions', 'Explore', 'Accessibility'],
    social: ['Instagram', 'LinkedIn', 'Youtube', 'Twitter'],
  };

  return (
    <footer className="bg-white px-4 py-12 md:py-16 border-t">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Column 1 - Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-[Syne] font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm font-[DM Sans] text-[#0D0D0D] no-underline hover:underline transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 2 - Terms & Policies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-[Syne] font-bold mb-4">Terms & Policies</h3>
            <ul className="space-y-2">
              {footerLinks.terms.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                    className="text-sm font-[DM Sans] text-[#0D0D0D] no-underline hover:underline transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3 - Follow Us */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-[Syne] font-bold mb-4">Follow Us</h3>
            <ul className="space-y-2">
              {footerLinks.social.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm font-[DM Sans] text-[#0D0D0D] no-underline hover:underline transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4 - Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="font-[Syne] font-bold mb-4">Contact</h3>
            <address className="not-italic text-sm font-[DM Sans] text-[#0D0D0D] space-y-2">
              <p>1498w Fluton ste, STE 2D Chicago, IL 63867.</p>
              <p>(123 456789000</p>
              <p>info@elamantum.com</p>
            </address>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm font-[DM Sans]">
            ©2023 Elementum. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;