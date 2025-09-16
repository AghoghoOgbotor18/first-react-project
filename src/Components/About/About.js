import React from 'react';
import { motion } from 'framer-motion';   //Import motion
import './About.css';
import about_image from '../../assets/graduant.jpg';
import play_icon from '../../assets/play-icon.png';
const About = ({setPlayState}) => {
    return(
        <motion.div className='about' 
            initial={{ opacity: 0, y: 50 }}              // Start hidden
            whileInView={{ opacity: 1, y: 0 }}          // Fade & move up
            transition={{ duration: 1.5 }}
            viewport={{ once: true, amount: 0.3 }}>
            <motion.div className='about-left'
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}>
                <img src={about_image} alt="about-image" className="about-img" />
                <img src={play_icon} alt="play-icon" className='play-icon' onClick={() => {setPlayState(true)}} />
            </motion.div>
            <motion.div className='about-right'
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}>
                <h3>About University</h3>
                <h2>Nurturing Tommorow's Leaders today</h2>
                <p>Embark on a transformative educational journey with our university's comprehensive education programs. Our cutting-edge 
                    curriculum is designedto empower students with the knowledge, skills, and experiences needed to excel in the diynamic field of education.
                </p>
                <p>
                    With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.
                </p>
                <p>
                    Whether  you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.
                </p>
            </motion.div>
        </motion.div>
    )
}

export default About