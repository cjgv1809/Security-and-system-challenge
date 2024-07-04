"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./Header.module.css";

type HeaderProps = {
  name: string;
  imageUrl: string;
};

const Header: React.FC<HeaderProps> = ({ name, imageUrl }) => {
  return (
    <header className={styles.header}>
      <Image
        src={imageUrl}
        alt={name}
        className={styles.profileImage}
        width={100}
        height={100}
        quality={95}
        priority
      />
      <motion.h1
        className={styles.name}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {name}
      </motion.h1>
    </header>
  );
};

export default Header;
