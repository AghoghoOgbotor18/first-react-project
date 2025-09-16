import React from 'react';
import { useRef } from 'react';
import './Testimonials.css';
import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';
import user_1 from '../../assets/user-1.png';
import user_2 from '../../assets/user-2.png';
import user_3 from '../../assets/user-3.png';
import user_4 from '../../assets/user-4.png';
import { motion } from 'framer-motion';

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;
    const slideForward = () => {
        if(tx > -50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    const slideBackward = () => {
        if(tx < 0){
            tx +=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    return(
        <motion.div className="testimonials"
            initial={{ opacity: 0, y: 50 }}              // Start hidden
            whileInView={{ opacity: 1, y: 0 }}          // Fade & move up
            transition={{ duration: 1.5 }}
            viewport={{ once: true, amount: 0.3 }}>
            <img src={next_icon} alt="next button" className='next-btn' onClick={slideForward} />
            <img src={back_icon} alt="next button" className='back-btn' onClick={slideBackward} />
            <div className='slider'>
                <ul ref={slider}>
                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={user_1} alt='user image' />
                                <div>
                                    <h3>Tessa Jackson</h3>
                                    <span>Learnify, Nigeria</span>
                                </div>
                            </div>
                            <p>
                                Choosing to pursue my degree was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectation.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={user_2} alt='user image' />
                                <div>
                                    <h3>Michael Jason</h3>
                                    <span>Learnify, Nigeria</span>
                                </div>
                            </div>
                            <p>
                                Choosing to pursue my degree was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectation.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={user_3} alt='user image' />
                                <div>
                                    <h3>Sarah Charles</h3>
                                    <span>Learnify, Nigeria</span>
                                </div>
                            </div>
                            <p>
                                Choosing to pursue my degree was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectation.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={user_4} alt='user image' />
                                <div>
                                    <h3>Michael Junior</h3>
                                    <span>Learnify, Nigeria</span>
                                </div>
                            </div>
                            <p>
                                Choosing to pursue my degree was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectation.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </motion.div>
    )
}

export default Testimonials