import React from "react";
import styles from "./Interests.module.css";

type InterestsProps = {
  interests: string[];
};

const Interests: React.FC<InterestsProps> = ({ interests }) => {
  return (
    <section className={styles.interests}>
      <h2 className={styles.title}>Intereses</h2>
      <ul className={styles.list}>
        {interests.length > 0 ? (
          interests.map((interest, index) => (
            <li key={index} className={styles.item}>
              {interest}
            </li>
          ))
        ) : (
          <span className={styles.noItemText}>No hay intereses</span>
        )}
      </ul>
    </section>
  );
};

export default Interests;
