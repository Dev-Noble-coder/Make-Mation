import React from 'react';
import { motion } from 'framer-motion';

const AbtMovie = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className='mx-5 sm:mx-10 my-20 font-montserrat'>
      <motion.h1
        className='text-3xl font-semibold pb-2'
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        variants={fadeInUp}
      >
        GENRE: Drama, Coming-of-Age
      </motion.h1>

      <motion.h2
        className='text-2xl font-semibold pb-5'
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.1 }}
        variants={fadeInUp}
      >
        SUB-GENRE: Inspirational, Comedy, Subtle Romance
      </motion.h2>

      <motion.h3
        className='text-2xl font-semibold'
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.2 }}
        variants={fadeInUp}
      >
        SCREENPLAY written by:
      </motion.h3>

      <motion.p
        className='text-xl pb-5'
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.3 }}
        variants={fadeInUp}
      >
        Nengi Diri, Toyosi Akerele-Ogunsiji
      </motion.p>

      <motion.h3
        className='text-2xl font-semibold pb-5'
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.4 }}
        variants={fadeInUp}
      >
        LOGLINE:
      </motion.h3>

      {/* Logline paragraph */}
      <motion.p
        className='text-xl pb-3 leading-8'
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.5 }}
        variants={fadeInUp}
      >
        When enrolled in the most prestigious Tech School in the country, a poor, courageous teenage girl must prove her genius and save her family, despite the myriad challenges she faces.
      </motion.p>

      {/* Rest of the paragraphs */}
      <motion.p
        className='text-xl pb-3 leading-8'
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.6 }}
        variants={fadeInUp}
      >
        17-year-old Zara Sodangi isn’t having the best of times. Her welder father is a thorn in her flesh, and her akara-seller mother is barely bearing the burden of providing for the family. Zara’s friend in the hood challenges her to apply for a scholarship to Makemation.
      </motion.p>
      <motion.p
        className='text-xl pb-3 leading-8'
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.6 }}
        variants={fadeInUp}
      >
       Makemation is not only the most prestigious tech institute in the country because of its 7-figure fees, but the opportunities accessible to its students and alums, and its standards are rigorously high and only for the best brains. Zara is convinced that she doesn’t qualify, but things get worse at home with her sick father and distressed mom, so Zara is determined to get selected into the entrance assessment Ideathon, which in her mind, is certainly a wild goose chase. She’s beyond shocked to not just be given admission into Makemation’s yearlong program, which earns the top graduating student a huge monetary prize.
      </motion.p>
      <motion.p
        className='text-xl pb-3 leading-8'
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.6 }}
        variants={fadeInUp}
      >
         Zara is determined to win and reverse the fortunes of her family. But while Makemation is a beautiful campus with top-notch facilities and genius tutors, Zara’s classmates are standoffish to ‘the new poor girl.’ She struggles to fit in, hiding her poverty background and feigning a classy front. Soon, the mentorship of the good-natured and avant-garde Miss Zanzi, the school’s most loved and sought-after instructor, and of course, Zara’s sharp mind, helps her become the second smartest student. Gradually, she makes friends – but 20-year-old Anabelle Jenkins remains condescending to Zara.
      </motion.p>
      <motion.p
        className='text-xl pb-3 leading-8'
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.6 }}
        variants={fadeInUp}
      >
          As Zara pivots into the world of Product Design, Data Analytics & Artificial Intelligence, she deals with conflicts on many fronts: worsening conditions at home, the antagonism of some classmates, social profiling, fear that she won’t win the best student award, and the struggle to keep up with the demanding lectures and take-home assignments. She manages to weather the storms, learn new things – not just about academic work, but about herself and about life – coming into her own as a young woman. But just as things start to look up for her, a string of unfortunate incidents knock Zara down.
      </motion.p>
      <motion.p
        className='text-xl pb-3 leading-8'
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.6 }}
        variants={fadeInUp}
      >
         It is unclear if she can make it through the school and graduate. Zara, who has defeated many demons in the course of her journey, must look within to defeat the strongest one – a crippling lack of self-worth – if she’s to stand a chance of victory. But days to the end of the session, will Zara have the will or the time to accept herself for who she is and overcome?
      </motion.p>
     

      {/* Continue applying the animation for all other content */}
      <motion.h3
        className='text-2xl font-semibold pb-5'
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.9 }}
        variants={fadeInUp}
      >
        Summary:
      </motion.h3>

      <motion.p
        className='text-xl pb-3 leading-8'
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 1.0 }}
        variants={fadeInUp}
      >
         MAKEMATION is a coming-of-age drama that takes an emotional, thought-provoking, and humorous dive into the world of a poor young girl in rural Lagos, Nigeria, whose life is filled with so many twists and turns, but she’s brilliant, determined, and unstoppable.
      </motion.p>

      <motion.p
        className='text-xl pb-3 leading-8'
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 1.1 }}
        variants={fadeInUp}
      >
         This breakout 4-quadrant family tale explores fun set-pieces and a universal theme to convey a solid message of hope, showing us that, with innovation, poverty can become an old problem.
      </motion.p>

      <motion.p
        className='text-xl pb-3 leading-8'
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 1.2 }}
        variants={fadeInUp}
      >
        We see a strong intersection of the world of pure entertainment, science, and artificial intelligence, all forming the core of this high-tension, inspirational movie that may change the lives of many young people forever.
      </motion.p>
    </div>
  );
};

export default AbtMovie;
