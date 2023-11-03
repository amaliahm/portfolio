import React from 'react';
import { SectionWrapper } from "../hoc";
import { styles } from '../styles';
import { textVariant } from '../utils/motion';
import { motion } from 'framer-motion';
import {TextShpere} from '../components/TextShpere';
import { technologies } from '../constants';

const Tech = () => {

  return (
    <>
    <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>What i use</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Technologies</h2>
      </motion.div>
    <div className='h-auto flex flex-row flex-wrap justify-center gap-10 mt-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <img src={technology.image} />
          <p className={`${styles.sectionSubText} text-center p-3`}> {technology.name} </p>
        </div>
      ))}
      <TextShpere />
    </div>
      </>
  )
}

export default SectionWrapper(Tech, "");