// frontend/src/components/Home.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Home.css";
import image1 from "../../assets/images1.jpg";
import image2 from "../../assets/images2.jpg";
import image3 from "../../assets/images3.jpg";

const images = [image1, image2, image3];

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Auto slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const quranQuotes = [
    {
      urdu: "وَأَقِيمُوا الصَّلَاةَ وَآتُوا الزَّكَاةَ",
      eng: "Establish prayer and give charity. (Quran 2:43)",
    },
    {
      urdu: "الَّذِينَ يُنْفِقُونَ أَمْوَالَهُمْ فِي سَبِيلِ اللَّهِ",
      eng: "Those who spend their wealth in the way of Allah. (Quran 2:262)",
    },
    {
      urdu: "وَمَا تُنفِقُوا مِنْ خَيْرٍ فَإِنَّ اللَّهَ بِهِ عَلِيمٌ",
      eng: "Whatever good you spend, Allah knows it well. (Quran 2:273)",
    },
    {
      urdu: "وَأَنفِقُوا فِي سَبِيلِ اللَّهِ",
      eng: "And spend in the cause of Allah. (Quran 2:195)",
    },
    {
      urdu: "مَثَلُ الَّذِينَ يُنفِقُونَ أَمْوَالَهُمْ ...",
      eng: "The example of those who spend in Allah’s cause is like a seed that grows seven ears. (Quran 2:261)",
    },
  ];

  return (
    <div className="home-container">
      {/* Hero Slider Section */}
      <section className="hero-section">
        <AnimatePresence>
          <motion.div
            key={currentImage}
            className="hero-bg"
            style={{ backgroundImage: `url(${images[currentImage]})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>

        <div className="hero-overlay">
          <motion.h1
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Al Infaq Trust
          </motion.h1>
          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            Helping those in need, together we can make a difference.
          </motion.p>
          <motion.button
            className="cta-button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Donate Now
          </motion.button>
        </div>
      </section>

      {/* About Section */}
      <motion.section
        className="about-section green-bg"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>About Us</h2>
        <p>
          Al Infaq Trust is dedicated to supporting underprivileged communities
          by providing food, education, and medical aid. Join us in spreading
          hope and kindness.
        </p>
      </motion.section>

      {/* Quran Quotes Section */}
      <motion.section
        className="quotes-section gold-bg"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Quranic Inspiration (الإنفاق)</h2>
        <div className="quotes-grid">
          {quranQuotes.map((q, i) => (
            <motion.div
              key={i}
              className="quote-card"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <p className="urdu-text">{q.urdu}</p>
              <p className="eng-text">{q.eng}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Meaning of Al-Infaq */}
      <motion.section
        className="infaq-meaning green-bg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2>What is Al-Infaq?</h2>
        <p>
          <b>Al-Infaq</b> (الإنفاق) means “spending in the way of Allah” —
          whether it is wealth, time, or effort. The Quran repeatedly mentions
          Al-Infaq as a virtue that purifies the heart and strengthens society.
        </p>
      </motion.section>
    </div>
  );
};

export default Home;
