import React from 'react';
import './Campus.css';
import gallery_1 from '../../assets/gallery-1.png';
import gallery_2 from '../../assets/gallery-2.png';
import gallery_3 from '../../assets/gallery-3.png';
import gallery_4 from '../../assets/gallery-4.png';
import white_arrow from '../../assets/white-arrow.png';
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


const Campus = () => {
    return(
        <motion.div className='campus'
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}>
            <div className='gallery'>
                <motion.img src={gallery_1} alt="galley-photo" variants={cardVariants}/>
                <motion.img src={gallery_2} alt="galley-photo" variants={cardVariants}/>
                <motion.img src={gallery_3} alt="galley-photo" variants={cardVariants}/>
                <motion.img src={gallery_4} alt="galley-photo" variants={cardVariants}/>
            </div>
            <motion.button className='btn dark-btn' variants={cardVariants}>See more here<img src={white_arrow} alt="button-image" /></motion.button>
        </motion.div>
    )
}

export default Campus