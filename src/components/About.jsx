import React, {useState , useEffect} from 'react';
import { Tilt } from 'react-tilt';
import { motion } from "framer-motion";
import { services } from '../constants';
import {SectionWrapper} from "../hoc";
import { fadeIn, textVariant } from '../utils/motion';
import { styles } from '../styles';
import { findOverview } from '../firebase.mjs';
import '../index.css'

const About = () => {

  const [loading, setLoading] = useState(false)
  const [overview, setOverview] = useState([])
  const fetchData = async () => {
    setLoading(true)
    const res = await findOverview()
    setOverview([...res])
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])


  return (
    <>
    <motion.div variants={textVariant()}>
    <p className={`${styles.sectionSubText} text-center mt-10`}>
          Who am I
        </p>
      <h2 className={`${styles.sectionHeadText} text-center`}>Overview</h2>
    </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] ml-10'
      >
        {overview}
      </motion.p>
      <div className='mt-10 flex flex-wrap gap-10 container'>
        {services.map((service, index) => (
          <div key={service.title} className='service'> 
            <p> {service.title}  </p>
          </div>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")