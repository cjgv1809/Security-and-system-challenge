"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./Tabs.module.css";

type TabProps = {
  title: string;
  children: React.ReactNode;
};

type TabsProps = {
  defaultIndex?: number; // Optional default active tab index
  children: React.ReactElement<TabProps>[]; // Tabs as children
};

const Tabs: React.FC<TabsProps> = ({ defaultIndex = 0, children }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(defaultIndex);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    tabRefs.current[activeTabIndex]?.focus();
  }, [activeTabIndex]);

  const handleClick = (index: number) => {
    setActiveTabIndex(index);
  };

  return (
    <div className={styles.tabs}>
      <ul className={styles.tabList} role="tablist" aria-label="Pestañas">
        {children.map((child, index) => (
          <li key={index} className={styles.tabItem}>
            <motion.button
              type="button"
              className={`${styles.tab} ${
                activeTabIndex === index ? styles.activeTab : ""
              }`}
              onClick={() => handleClick(index)}
              role="tab"
              id={`tab-${index}`}
              aria-selected={activeTabIndex === index}
              aria-controls={`tabpanel-${index}`}
              ref={(el) => {
                tabRefs.current[index] = el;
              }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              exit={{ opacity: 0, x: 20 }}
            >
              {child.props.title}
            </motion.button>
          </li>
        ))}
      </ul>
      <div className={styles.content}>
        {children.map((child, index) => {
          return (
            activeTabIndex === index && (
              <motion.div
                key={index}
                className={styles.activeContent}
                role="tabpanel"
                id={`tabpanel-${index}`}
                aria-labelledby={`tab-${index}`}
                hidden={activeTabIndex !== index}
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 }}
              >
                {child.props.children}
              </motion.div>
            )
          );
        })}
      </div>
    </div>
  );
};

export const Tab: React.FC<TabProps> = ({ children }) => <>{children}</>;

export default Tabs;
