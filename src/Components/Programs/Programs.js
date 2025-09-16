import React from 'react';
import './Programs.css';
import program_1 from '../../assets/graduate-1.jpg';
import program_2 from '../../assets/graduate-2.jpg';
import program_3 from '../../assets/graduate-3.jpg';
import program_icon_1 from '../../assets/program-icon-1.png';
import program_icon_2 from '../../assets/program-icon-2.png';
import program_icon_3 from '../../assets/program-icon-3.png';
import { motion } from 'framer-motion';

//Variants for the container (stagger children)
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,   // delay each child by 0.4s
    },
  },
};

//Variants for each card
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 1 } },
};


const Programs = () => {
    return (
        <motion.div className='programs'
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}>
            <motion.div className="program" variants={cardVariants}>
                <img src={program_1} alt="program image" />
                <div className='caption'>
                    <img src={program_icon_1} alt="first icon" />
                    <p>Graduation Degree</p>
                </div>
            </motion.div>
            <motion.div className="program" variants={cardVariants}>
                <img src={program_2} alt="program image" />
                <div className='caption'>
                    <img src={program_icon_2} alt="second icon" />
                    <p>Masters Degree</p>
                </div>
            </motion.div>
            <motion.div className="program"  variants={cardVariants}>
                <img src={program_3} alt="program image" />
                <div className='caption'>
                    <img src={program_icon_3} alt="third icon" />
                    <p>Post Graduation</p>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default Programs