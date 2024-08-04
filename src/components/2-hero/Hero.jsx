import Lottie from "lottie-react";
import "./hero.css";
import devAnimation from "../../animation/dev.json";
import { useRef } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const lottieRef = useRef();

  return (
    <section className="hero flex">
      <div className="left-section  ">
        <div className="parent-avatar flex">
          
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            src="/public/Portfolio-modified.png"
            className="avatar"
            alt=""
          />
          <div className="icon-verified"></div>
        </div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="title"
        >
          Software Engineer, Full Stack, and Student in Computer Sciences .
        </motion.h1>

        <p className="sub-title">
          I’m Mohamed Sherif, a software Engineer and Contyent Creater YouTube Channel ,I have experince in teaching .
        </p>

        <div className="all-icons flex">
          <a href="https://twitter.com/MohamedYos16550" className="icon icon-twitter"></a>
          <a  href="https://www.instagram.com/m7hmed_yousry/?hl=en" className="icon icon-instagram"></a>
          <a href="https://github.com/mohamedsherif301" className="icon icon-github"></a>
          <a href="https://www.linkedin.com/in/mohamed-yousry-177863268/" className="icon icon-linkedin"></a>
        </div>
      </div>

      <div className="right-section animation ">
        <Lottie
          lottieRef={lottieRef}
          className=""
          onLoadedImages={() => {
            // @ts-ignore
            // https://lottiereact.com/
            lottieRef.current.setSpeed(0.5);
          }}
          animationData={devAnimation}
        />
      </div>
    </section>
  );
};

export default Hero;
