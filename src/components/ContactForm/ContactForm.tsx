"use client";

import React, { useRef, useState } from "react";
import styles from "./ContactForm.module.css";
import { submitForm } from "@/actions/submitForm";
import Alert from "../Alert/Alert";
import type { AlertType } from "@/app/types";

const ContactForm: React.FC = () => {
  const [alert, setAlert] = useState<{
    type: AlertType;
    message: string;
  } | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (formData: FormData) => {
    const formFields = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    try {
      const result = await submitForm(formFields);
      console.log(result);

      if (result.success) {
        setAlert({ type: "success", message: "Mensaje enviado exitosamente" });
      } else {
        setAlert({
          type: "error",
          message: result.errors?.message[0] || "Error al enviar el formulario",
        });
      }
      formRef.current?.reset();
    } catch (error) {
      setAlert({
        type: "error",
        message: "Error inesperado al enviar el formulario",
      });
      formRef.current?.reset();
    }
  };

  return (
    <section className={styles.contactForm}>
      <h2 className={styles.title}>Contacto</h2>

      {alert && (
        <Alert
          type={alert.type}
          message={alert.message}
          onClose={() => setAlert(null)}
        />
      )}

      <form action={handleSubmit} className={styles.form} ref={formRef}>
        <div className={styles.field}>
          <label htmlFor="name" className={styles.label}>
            Nombre
          </label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Ingresa tu nombre"
            className={styles.input}
            required
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Ingresa tu email"
            className={styles.input}
            required
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="message" className={styles.label}>
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Escribe tu mensaje"
            className={styles.textarea}
            rows={5}
            required
          ></textarea>
          <p className={styles.helperText}>
            El mensaje debe contener al menos 10 caracteres
          </p>
        </div>
        <button type="submit" className={styles.button}>
          Enviar
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
