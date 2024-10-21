import React from 'react';
import { motion, useInView } from 'framer-motion';
import toyosiImg from '../../../assets/toyosiImg2.jpg';

const Abtauthor = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  // Use the "useInView" hook to trigger animations when the sections come into view
  const sectionVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className='mx-2 sm:mx-10 my-10 font-montserrat'>
      <motion.div 
        className="p-6 space-y-8"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.2, delayChildren: 0.3 }}
      >
        {/* Name and Intro */}
        <motion.h1
          className="text-3xl font-bold leading-tight"
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
        >
          Toyosi Akerele-Ogunsiji
        </motion.h1>

        <motion.p
          className="text-xl leading-relaxed"
          transition={{ duration: 0.5, delay: 0.1 }}
        >
           Toyosi Akerele-Ogunsiji (born Oluwatoyosi Akerele, 8 November 1983) is a Nigerian social entrepreneur and human development expert whose work cuts across entrepreneurship, education, youth development, and public leadership. She is the founder and chief executive officer of Rise Networks, a Nigeria-based Youth Interest social enterprise.
        </motion.p>

        <motion.img 
          src={toyosiImg} 
          alt="toyosiImg" 
          className='w-full rounded-md block sm:hidden'
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.2 }}
        />

        {/* Early Life and Education */}
        <motion.div 
          className='grid grid-cols-1 lg:grid-cols-2 gap-5'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <motion.section>
            <h2 className="text-2xl font-semibold leading-snug">Early Life and Education</h2>
            <p className="leading-relaxed text-xl">
            Akerele-Ogunsiji was born to the family of James Ayodele and Felicia Mopelola Akerele in Lagos State, Nigeria. She attended Ebun Oluwa Nursery and Primary School, Oregun Lagos, and later headed to Lagos State Model College Kankon Badagry, Lagos for her Junior Secondary Education from 1994 to 1996. She then proceeded to Egbado College (now Yewa College) from 1998 until June 2000 for her Senior Secondary Education, where she graduated as the best student in the Essay Competition organised by the Aionian Group of Schools in Ogun State.
            </p>
            <p className="leading-relaxed  text-xl">
          She obtained a Second Class Upper Degree in Civil Law from the University of Jos in April 2007. Akerele-Ogunsiji is a Mason Fellow and Mid-Career Master in Public Administration alumnus of the Harvard University Kennedy School of Government.
        </p>
        <ul className="list-disc ml-5 leading-relaxed  text-xl">
          <li>Studied Strategic Management at Executive Level at Cambridge University’s Judge Business School.</li>
          <li>Obtained a Certificate in Youth Inclusive Financial Services from University of New Hampshire, Durham, United States.</li>
          <li>Holds a Certificate in Media Enterprise from the School of Media and Communication, Pan Atlantic University.</li>
          <li>Executive Masters’ Certificate in Project Management from The Project Management College, UK.</li>
          <li>Studied Digital Marketing Strategy at the UK Institute of Digital Marketing.</li>
        </ul>
          </motion.section>

          <motion.img 
            src={toyosiImg} 
            alt="toyosiImg" 
            className='w-full rounded-md hidden sm:block' 
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.4 }}
          />
        </motion.div>

        {/* Professional Career */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <h2 className="text-2xl font-semibold leading-snug">Professional Career</h2>
          <p className="leading-relaxed  text-xl">
          Akerele-Ogunsiji started her career in 2007 as a Corporate Communications and External Affairs Executive at Oando Oil and Gas PLC. She moved on to the Ministry of Youths and Social Development, Ogun State, Nigeria, where she served as the Special Assistant to the Honourable Commissioner on Youth Development before establishing Rise Human And Education Development Networks.
        </p>
        <p className="leading-relaxed  text-xl">
          She founded Passnownow in 2012, aimed at helping indigent and deprived secondary school children access curriculum-compliant education content through mobile devices. She also founded Printmagicng, a printing firm offering 24-hour low-cost printing services to small businesses via the Internet.
        </p>
        </motion.section>

        {/* Family */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <h2 className="text-2xl font-semibold leading-snug">Family</h2>
          <p className="leading-relaxed text-xl">
            In 2014, Akerele-Ogunsiji married Adekunle Ogunsiji, an ICT professional, in a low-key wedding at her family house in Ikeja, Lagos.
          </p>
        </motion.section>

        {/* Publications */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <h2 className="text-2xl font-semibold leading-snug">Publications</h2>
          <ul className="list-disc ml-5 leading-relaxed  text-xl">
          <li>Strate-Tricks: Strategies and Tricks, the Winning Formula for Emerging Businesses</li>
          <li>We Have to Belong: Why the Poor Majority of my Rich Country Cannot Wait Anymore (Launched at Harvard Kennedy School in May 2017)</li>
        </ul>
        </motion.section>

        {/* Awards, Appointments, and Recognition */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <h2 className="text-2xl font-semibold leading-snug">Awards, Appointments, and Recognition</h2>
          <ul className="list-disc ml-5 leading-relaxed space-y-2  text-xl">
          <li>Selected as one of 101 Young African Leaders by the African Business Forum in 2007.</li>
          <li>Alumni of the Prestigious International Visitor Leadership Program of the United States Government.</li>
          <li>Recognition by Crans Montana Forum in Europe as a New Leader of Tomorrow.</li>
          <li>Recipient of This Day Awards for Nigeria's Women of Distinction.</li>
          <li>Young Entrepreneur of the Year 2011 of Success Digest Entrepreneurial Awards.</li>
          <li>Recipient of the 2011 Excellence Awards of the School of Media and Communication, Pan African University.</li>
          <li>Recipient of the 2008 Future Africa Awards for Best Use of Advocacy Category.</li>
          <li>One of the honorees of the Top 100 Young Leaders Recognition at Nigeria's Centenary Celebrations.</li>
          <li>Honoured by 234 GIVE for encouraging donations to adopted charities.</li>
          <li>Selected for the Nigeria Leadership Initiative's Future Leaders Fellowship in May 2010.</li>
          <li>Appointed the Youngest Member of the Victims of Terrorism Funds Committee.</li>
          <li>Jury Member of the Get Started Africa Entrepreneurship Challenge initiated by NESCAFÉ.</li>
          <li>Mentor for the African Entrepreneurship Awards and Bank of Africa's Africa Entrepreneurship Awards.</li>
          <li>Named one of Nigeria's youngest achievers under 35 by Genevieve Magazine in 2016.</li>
          <li>Described by Michelle Obama as a personal inspiration during the Young African Women Leaders Forum.</li>
          <li>Named one of Forbes' 20 Most Powerful Young Women in Africa in 2014.</li>
        </ul>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default Abtauthor;
