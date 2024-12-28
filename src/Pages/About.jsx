import React from "react";
import image1 from "./Image/Nnamdi.jpg";
import image2 from "./Image/chakra.png";
import image3 from "./Image/github.png";
import image4 from "./Image/css3.png";
import image5 from "./Image/react.png";
import image6 from "./Image/javaScript.png";
import image7 from "./Image/html.png";
import { motion as m } from "framer-motion";

function About() {
  return (
    <m.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
      exit={{ opacity: 1 }}
      className="about"
    >
      <m.div
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        transition={{ delay: 1, duration: 1 }}
        className="intro mb"
      >
        <img src={image1} alt="Me" className="img" />
        <m.div
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          transition={{ delay: 1, duration: 1 }}
          className="card name"
        >
          <h1 className="mb">Hello!!</h1>
          <p>
            I am an enthusiastic and skilled Software Developer with expertise
            in HTML, CSS, JavaScript, TypeScript, and React.js. I specialize in
            crafting responsive, accessible, and visually appealing web
            applications that deliver exceptional user experiences. With
            hands-on experience in modern frontend tools like Tailwind CSS,
            ChakraUI, and Material UI, I build scalable and dynamic interfaces.
            Throughout my journey, I have worked on impactful projects, and
            scalable web solutions. My commitment to clean code,
            problem-solving, and collaboration ensures the delivery of
            high-quality software. Passionate about innovation, I am eager to
            contribute to forward-thinking teams, leveraging my technical and
            creative skills to bring ideas to life. Let's build something
            extraordinary together!
          </p>
        </m.div>
      </m.div>
      <m.div
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        transition={{ delay: 1, duration: 1 }}
        className="underline mb"
      ></m.div>
      <div className="skill-mission flex mb">
        <m.div
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          transition={{ delay: 1, duration: 1 }}
          className="skills card"
        >
          <h1 className="mb">Skills</h1>
          <ul className="ul">
            <li>
              <span className="span">React Development:</span>
              Proficient in crafting
              <br />
              dynamic and responsive user interfaces using React.Js
            </li>
            <br />
            <li>
              <span className="span">WordPress Development:</span> Skilled in
              creating
              <br />
              customizeable and feature-rich websites with wordpress
            </li>
            <br />
            <li>
              <span className="span">Quality Assurance:</span> Served as a
              Quality Assurance
              <br />
              Tester at Zealight Innovation Labs during my one year compulsory{" "}
              <br />
              National Youth Service Corps (NYSC), <br />
              ensuring the delivery of high-quality software products.
            </li>
            <br />
          </ul>
        </m.div>
        <m.div
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          transition={{ delay: 1, duration: 1 }}
          className="mission card"
        >
          <h1 className="mb">Mission</h1>
          <p>
            My mission is to collaborate with innovative companies and clients
            to create impactful, user-centered digital solutions that drive
            growth and deliver exceptional value. I aim to leverage my skills in
            modern frontend technologies to build scalable, responsive, and
            visually stunning web applications that not only meet but exceed
            user expectations. I am dedicated to solving complex challenges,
            optimizing user experiences, and ensuring every project aligns with
            the client’s goals and vision. With a strong emphasis on clean code,
            accessibility, and innovation, I strive to make a meaningful
            contribution to every team and project I am part of, turning ideas
            into seamless digital realities.
          </p>
        </m.div>
      </div>
      <m.div
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        transition={{ delay: 1, duration: 1 }}
        className="underline mb"
      ></m.div>
      <div className="skill-image">
        <m.h1
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          transition={{ delay: 1, duration: 1 }}
          className="mb"
        >
          My Skills
        </m.h1>
        <m.div
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          transition={{ delay: 1, duration: 1 }}
        >
          <img className="img" src={image7} alt="html-logo" />
          <img className="img" src={image4} alt="css-logo" />
          <img className="img" src={image6} alt="javaScript-logo" />
          <img className="img" src={image5} alt="react-logo" />
          <img className="img" src={image2} alt="chakra-logo" />
          <img className="img" src={image3} alt="github-logo" />
        </m.div>
      </div>
    </m.div>
  );
}

export default About;
