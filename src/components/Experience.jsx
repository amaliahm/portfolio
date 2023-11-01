import React, {useState, useEffect} from 'react'
import { VerticalTimeline,VerticalTimelineElement } from 'react-vertical-timeline-component'
import {motion} from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { textVariant } from '../utils/motion'
import { findExperiences } from '../firebase.mjs'

const ExperienceCard = ({experience}) => {
  return (
    <VerticalTimelineElement 
      contentStyle={{
        background: "#1d1836",
        color: "#fff"
      }}
      contentArrowStyle={{borderRight: "7px solid  #232631"}}
      date={experience.date}
      iconStyle={{background: '#383E56'}}
      icon= {
        <div className='flex justify-center items-center w-full h-full'>
        </div>
      }>
        <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
      </div>
      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point.stringValue}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  )
}

const Experience = () => {
  const [experiences, setExperiences] = useState([])
  const fetchData = async () => {
    const ex = await findExperiences()
    setExperiences([...ex])
  }
  useEffect(() => {
    fetchData()
  }, [])
  console.log(experiences)
  return (
    <div className=' relative pt-100'>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I did until now
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Experience
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  )
}

export default SectionWrapper(Experience, "work");