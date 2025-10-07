import React from "react";
import "../styles/HeroSection.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoOpenOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import CV from "../data/MUHAMMAD SUHAIM_CV.pdf";

const HeroSection = ({ nav, handleNav }) => {

	const heroVariants = {
		hidden: {
			opacity: 0,
			y: "-50%",
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 1.4,
			},
		},
	};

	const contactVariants = {
		hidden: {
			opacity: 0,
			x: "-50%",
		},
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 1.4,
			},
		},
	};

	const menuVariants = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
			scale: [1, 1.2, 1.5, 1.2, 1],
			rotate: [0, 0, 360, 360, 360],
			borderRadius: ["50%", "50%", "50%", "50%", "50%"],
			transition: {
				duration: 1,
			},
		},
	};

	return (
		<div className='hero-section' name='home' id='home'>
			<div className='hero-overlay'></div>
			<motion.div
				// viewport={{ once: true }}
				variants={menuVariants}
				initial='hidden'
				whileInView='visible'
				onClick={handleNav}
				className='menu-icon'>
				{nav ? <FaTimes /> : <FaBars />}
			</motion.div>
			<motion.div
				variants={heroVariants}
				initial='hidden'
				whileInView='visible'
				className='hero-content'>
				<p className='hero-intro'>
					<span>Muhammad</span> <span>Suhaim</span>
				</p>
				<p className='hero-desc'>
					I'm a <span className='hero-desc-sub'>Full Stack Web Developer.</span>
				</p>
			</motion.div>
			<motion.span
				variants={contactVariants}
				initial='hidden'
				whileInView='visible'>
				<a href={CV} target='_blank' rel='noreferrer noopener' className='hero-contact'>
					<span>View CV</span> <IoOpenOutline className='cv-icon' />
				</a>
			</motion.span>
		</div>
	);
};

export default HeroSection;
