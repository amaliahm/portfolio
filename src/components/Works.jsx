import React, {Suspense} from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { github, figma } from '../assets';
import { SectionWrapper } from '../hoc';
import { fadeIn } from '../utils/motion';
import { projects } from '../constants';
import CanvasLoader from './Loader'
import './work.js'

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  console.log(source_code_link)
  return (

    <motion.div variants={fadeIn('up', "spring" , index * 0.5, 0.75)} className='hover:cursor-pointer'>
      <div
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full card'
      >
        <div className='relative w-full h-[230px]'>
        <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
          <div
              onClick={() => source_code_link != 'none' ? window.open(source_code_link, "_blank") : null}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src= {source_code_link == 'none' ? figma : github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag, place) => (
            <p
              key={`${name}-${tag}`}
              className={`text-[14px] ${ place % 3 == 0 ? 'blue-text-gradient' : place % 3 == 1 ? 'green-text-gradient' : 'pink-text-gradient'}`}
            >
              #{tag}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div >
        <p className={`${styles.sectionSubText} text-center`}>What i did recently</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Projects</h2>
      </motion.div>
      <Suspense fallback={<CanvasLoader />}>
      </Suspense>
      <div className='cards'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "work");