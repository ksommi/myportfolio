import contactSVG from "/public/svg/contact.svg";
import Image from "next/image";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [seeMessage, setSeeMessage] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zgbif37",
        "template_if4m97m",
        form.current,
        "S-Tk5VnWoExDHxOys"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("mensaje enviado");
          form.current.name.value = "";
          form.current.email.value = "";
          form.current.message.value = "";
          setSeeMessage(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contactContainer">
      <h2>Contacto</h2>
      <div className="contactSubContainer">
        <div className="formContainer">
          <form ref={form} onSubmit={sendEmail} className="formContainer">
            <label htmlFor="name">Nombre y apellido</label>
            <input type="text" id="name" name="name" required />
            <span></span>
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" name="email" required />
            <span></span>
            <label htmlFor="message">Mensaje</label>
            <textarea id="message" name="message" required />
            <span></span>
            {seeMessage && <p>El mensaje fue enviado!</p>}
            <button type="submit">Enviar</button>
          </form>
        </div>
        <Image
          src={contactSVG}
          alt="Ilustración animada de una persona mandando un e-mail."
        />
      </div>
    </div>
  );
};

export default Contact;
