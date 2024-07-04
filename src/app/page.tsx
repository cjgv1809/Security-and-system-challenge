import React from "react";
import Header from "@/components/Header/Header";
import About from "@/components/About/About";
import Interests from "@/components/Interests/Interests";
import ContactForm from "@/components/ContactForm/ContactForm";
import Tabs, { Tab } from "@/components/Tabs/Tabs";
import styles from "./page.module.css";

export default function Home() {
  const userInfo = {
    name: "Carlos Gomes",
    imageUrl: "/user.png",
    description:
      "Soy un desarrollador web/mobile apasionado por crear experiencias digitales únicas.",
    interests: [
      "Desarrolo web",
      "Desarrollo móvil",
      "Análisis de datos",
      "Diseño UI/UX",
    ],
  };

  return (
    <main className={styles.main}>
      <Header name={userInfo.name} imageUrl={userInfo.imageUrl} />
      <Tabs>
        <Tab title="Sobre mí">
          <About description={userInfo.description} />
        </Tab>
        <Tab title="Intereses">
          <Interests interests={userInfo.interests} />
        </Tab>
        <Tab title="Contacto">
          <ContactForm />
        </Tab>
      </Tabs>
    </main>
  );
}
