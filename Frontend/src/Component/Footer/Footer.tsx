import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <motion.footer
      className="footer py-10 px-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Brand / Logo */}
        <div>
          <h2 className="footer-title">Al Infaq Trust</h2>
          <p className="footer-desc">
            Serving humanity with compassion, care, and commitment.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="footer-subtitle">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="footer-link">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="footer-link">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="footer-link">
                Contact
              </a>
            </li>
            <li>
              <a href="/donate" className="footer-link">
                Donate
              </a>
            </li>
          </ul>
        </div>

        {/* Social & Contact */}
        <div>
          <h3 className="footer-subtitle">Connect with us</h3>
          <div className="social-icons">
            <a href="#" className="social-link">
              <FaFacebook size={22} />
            </a>
            <a href="#" className="social-link">
              <FaTwitter size={22} />
            </a>
            <a href="#" className="social-link">
              <FaInstagram size={22} />
            </a>
            <a href="mailto:info@alinfaq.org" className="social-link">
              <FaEnvelope size={22} />
            </a>
          </div>
          <p className="footer-copy">
            © {new Date().getFullYear()} Al Infaq Trust
          </p>
        </div>
      </div>

      {/* Quranic Quote */}
      <motion.div
        className="footer-quote"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        <p className="quote-urdu">
          إِنَّ الصَّلَاةَ كَانَتْ عَلَى الْمُؤْمِنِينَ كِتَابًا مَّوْقُوتًا
        </p>
        <p className="quote-eng">
          Indeed, Salah (prayer) has been decreed upon the believers a decree of
          specified times. (Quran 4:103)
        </p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
