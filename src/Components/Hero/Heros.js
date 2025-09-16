import React from 'react';
import './Hero.css';
import { motion } from 'framer-motion';

import dark_arrow from '../../assets/dark-arrow.png'
const Hero = () => {

    const main = {
         hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
            staggerChildren: 0.4,   // delay each child by 0.4s
            },
    },
    };

    //Variants for each card
    const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 1 } },
    };


    return(
        <div className='hero'>
            <motion.div className='hero-text container'
                variants={main}
                initial= 'hidden'              // Start hidden
                whileInView= 'show'         // Fade & move up
                viewport={{ once: true, amount: 0.3 }}>
                <motion.h2 variants={item}>We ensure better education for a better world</motion.h2>
                <motion.p variants={item}>Our cutting-edge curriculum id designed to empower students with the knowledge, skills, and experiences needed to excel in the dynmamic field of education</motion.p>
                <motion.button variants={item} className='btn'>Expore More<img src={dark_arrow} alt="button arrow" /></motion.button>
            </motion.div>

        </div>
    )
}
export default Hero