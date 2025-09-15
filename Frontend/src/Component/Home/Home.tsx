"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Home.css";
import image1 from "../../assets/images1.jpg";
import image2 from "../../assets/images2.jpg";
import image3 from "../../assets/images3.jpg";

const images = [image1, image2, image3];

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [age, setAge] = useState("");
  const [missedPrayers, setMissedPrayers] = useState<number | null>(null);
  const [prayedYears, setPrayedYears] = useState("");
  const [dailyExtra, setDailyExtra] = useState<number | null>(null);
  // Auto slider

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Namaz calculation logic
  const handleCalculate = () => {
    if (
      !age ||
      !prayedYears ||
      isNaN(Number(age)) ||
      isNaN(Number(prayedYears))
    )
      return;

    const totalPrayersPerYear = 5 * 365; // 5 daily prayers per year
    const validPrayedYears =
      Number(prayedYears) > Number(age) ? Number(age) : Number(prayedYears);

    const remainingYears = Number(age) - validPrayedYears;
    const missed = remainingYears * totalPrayersPerYear;

    setMissedPrayers(missed);

    // daily extra prayers calculation
    const lifeExpectancy = 70; // maan lo 70 years average life
    const yearsLeft = lifeExpectancy - Number(age);

    if (missed > 0 && yearsLeft > 0) {
      const extra = Math.ceil(missed / (yearsLeft * 365));
      setDailyExtra(extra);
    } else {
      setDailyExtra(0);
    }
  };

  // Quran quotes related to Infaq
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
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 1.2 }}
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
            whileHover={{ scale: 1.1, backgroundColor: "#facc15" }}
            whileTap={{ scale: 0.95 }}
          >
            Donate Now
          </motion.button>
        </div>
      </section>

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
              whileHover={{ scale: 1.08, rotate: 1 }}
              transition={{ duration: 0.3 }}
            >
              <p className="urdu-text">{q.urdu}</p>
              <p className="eng-text">{q.eng}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Namaz Calculator Section */}
      <motion.section
        className="calculator-section green-bg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2>Missed Namaz Calculator</h2>
        <p>
          Enter your age and the number of years you have been praying
          regularly.
        </p>
        <div className="calc-box">
          <input
            type="number"
            placeholder="Enter your age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <input
            type="number"
            placeholder="Years you prayed"
            value={prayedYears}
            onChange={(e) => setPrayedYears(e.target.value)}
          />

          <button onClick={handleCalculate}>Calculate</button>
        </div>
        {missedPrayers !== null && (
          <motion.div
            className="calc-result"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <p>
              {missedPrayers > 0
                ? `You may have missed around ${missedPrayers.toLocaleString()} prayers.`
                : "No missed prayers calculated."}
            </p>
          </motion.div>
        )}
        {dailyExtra !== null && dailyExtra > 0 && (
          <motion.div
            className="calc-result"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <p>
              Agar aap roz ke 5 fard ke saath <b>{dailyExtra}</b> extra namaz
              padhenge, to InshaAllah aap apne missed prayers complete kar
              lenge.
            </p>
          </motion.div>
        )}
      </motion.section>

      {/*  */}
      <motion.section
        className="namaz-quotes gold-bg"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Quran on Salah (نماز)</h2>
        <div className="quotes-grid">
          <motion.div
            className="quote-card"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <p className="urdu-text">
              وَأَقِيمُوا الصَّلَاةَ وَآتُوا الزَّكَاةَ
            </p>
            <p className="eng-text">
              Establish prayer and give zakah. (Quran 2:43)
            </p>
          </motion.div>

          <motion.div
            className="quote-card"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <p className="urdu-text">
              إِنَّ الصَّلَاةَ كَانَتْ عَلَى الْمُؤْمِنِينَ كِتَابًا مَّوْقُوتًا
            </p>
            <p className="eng-text">
              Indeed, prayer has been decreed upon the believers a decree of
              specified times. (Quran 4:103)
            </p>
          </motion.div>

          <motion.div
            className="quote-card"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <p className="urdu-text">
              حَافِظُوا عَلَى الصَّلَوَاتِ وَالصَّلَاةِ الْوُسْطَىٰ
            </p>
            <p className="eng-text">
              Guard strictly the prayers, especially the middle prayer. (Quran
              2:238)
            </p>
          </motion.div>
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
