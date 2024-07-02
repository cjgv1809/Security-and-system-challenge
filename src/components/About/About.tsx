import React from "react";
import styles from "./About.module.css";

type AboutProps = {
  description: string;
};

const About: React.FC<AboutProps> = ({ description }) => {
  return (
    <section className={styles.about}>
      <h2 className={styles.title}>Sobre mí</h2>
      <p className={styles.description}>{description}</p>
    </section>
  );
};

export default About;
