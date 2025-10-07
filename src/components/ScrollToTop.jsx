import React, { useState, useEffect } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { animateScroll as scroll } from "react-scroll";
import { motion } from "framer-motion";
import "../styles/ScrollToTop.css";

const ScrollToTop = () => {
	const scrollToTop = () => {
		scroll.scrollToTop({ 
			duration: 1000,
			smooth: "easeInOutQuart"
		});
	};

	const [visible, setVisible] = useState(false);

	const toggleVisible = () => {
		const scrolled = document.documentElement.scrollTop;
		if (scrolled > 300) {
			setVisible(true);
		} else if (scrolled <= 300) {
			setVisible(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", toggleVisible);
		return () => {
			window.removeEventListener("scroll", toggleVisible);
		};
	}, []);

	const buttonVariants = {
		hidden: {
			opacity: 0,
			scale: 0.8,
		},
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				duration: 0.3,
				ease: "easeOut"
			},
		},
	};

	return (
		<motion.button
			variants={buttonVariants}
			initial="hidden"
			animate={visible ? "visible" : "hidden"}
			className={visible ? "scroll-to-top show" : "scroll-to-top hide"}
			onClick={scrollToTop}
			aria-label="Scroll to top"
		>
			<AiOutlineArrowUp />
		</motion.button>
	);
};

export default ScrollToTop;
