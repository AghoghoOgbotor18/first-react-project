import React from 'react';
import './Contact.css';
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';
import white_arrow from '../../assets/white-arrow.png';
import { motion } from 'framer-motion';

function Contact(){
    return(
        <motion.div className='contact'
            initial={{ opacity: 0, y: 50 }}              // Start hidden
            whileInView={{ opacity: 1, y: 0 }}          // Fade & move up
            transition={{ duration: 1.5 }}
            viewport={{ once: true, amount: 0.3 }}>
            <motion.div className='contact-col'
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}>
                <h3>Send us a Message<img src={msg_icon} alt="message icon" /></h3>
                <p>
                    Feel free to reach out through contact form or find our contact information below.
                    Your feedback, questions, and suggestions are important to us as we strive to provide exceptional services to our university community.
                </p>
                <ul>
                    <li><img src={mail_icon} alt="mail icon" />Learnify@School.com</li>
                    <li><img src={phone_icon} alt="phone icon" />+234 81-6897-3060</li>
                    <li><img src={location_icon} alt="location icon" />22. Adebayo Street, Ibadan<br/>MA 02139, Nigeria</li>
                </ul>
            </motion.div>
            <motion.div className='contact-col'
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}>
                <form>
                    <label>Your Name</label>
                    <input type="text" name="name" placeholder="Enter your Name" required />
                    <label>Phone Number</label>
                    <input type="tel" name="phone" placeholder="Enter your phone number" required />
                    <label>Write Your Message Here</label>
                    <textarea name="message" rows="5" placeholder="Enter your message"></textarea>
                    <button type="submit" className="btn dark-btn">Submit Now<img src={white_arrow} alt="white-arrow button" /></button>
                    <span></span>

                </form>
            </motion.div>
        </motion.div>
    )
}

export default Contact