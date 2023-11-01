import React, { useState, useRef, useEffect } from 'react';
import { SectionWrapper } from "../hoc";
import { styles } from '../styles';
import { textVariant } from '../utils/motion';
import { motion } from 'framer-motion';
import { findTechImages } from '../firebase.mjs';
import {TextShpere} from '../components/TextShpere'

const Tech = () => {

  const [loading, setLoading] = useState(false)
  const [img, setImg] = useState([])
  const fetchData = async () => {
    setLoading(true)
    const images = await findTechImages()
    setImg([...images])
    setLoading(false)
  }
  
  useEffect(() => {
    fetchData()
  }, [])


  const imageName = []
  img.map((i) => {
    imageName.push({
      lien:i,
      name:i.split('/')[7].split('.')[0].substr(15,100)})});
  imageName.map((e) => e.name = e.name.charAt(0).toUpperCase() + e.name.slice(1))

  return (
    <>
    <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>What i use</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Technologies</h2>
      </motion.div>
    <div className='h-auto flex flex-row flex-wrap justify-center gap-10 mt-10'>
      {imageName.length > 0 && imageName.map((image) => (
        <div className='w-28 h-28' key={image.name}>
          <img src={image.lien} />
          <p className={`${styles.sectionSubText} text-center p-3`}> {image.name} </p>
        </div>
      ))}
      <TextShpere />
    </div>
      </>
  )
}

export default SectionWrapper(Tech, "");