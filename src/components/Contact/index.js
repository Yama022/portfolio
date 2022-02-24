import React, { useState } from "react";
import { FiMail } from 'react-icons/fi';
import { BsGlobe2 } from 'react-icons/bs';
import { BsTelephone } from 'react-icons/bs';
import './styles.scss';

const Contact = () => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const isEmail = () => {
    let mail = document.getElementById('not-mail');
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (email.match(regex)) {
      mail.style.display = 'none';
      return true;
    } else {
      mail.style.display = 'block';
      mail.style.animation = 'dongle 1s';
      setTimeout(() => {
        mail.style.animation = 'none';
      }, 1000);
      return false;
    }
  };

  const failMessage = (message) => {
    let formMess = document.querySelector('.form-message');

    formMess.innerHTML = message;
    formMess.style.opacity = '1';
    formMess.style.background = 'rgb(253,87,87)';

    document.getElementById('name').classList.add('error');
    document.getElementById('email').classList.add('error');
    document.getElementById('message').classList.add('error');
  };

  const succesMessage = () => {
    let formMess = document.querySelector('.form-message');

    formMess.innerHTML = 'Votre message a bien été envoyé';
    formMess.style.opacity = '1';
    formMess.style.background = 'rgb(0,255,0)';

    document.getElementById('name').classList.remove('error');
    document.getElementById('email').classList.remove('error');
    document.getElementById('message').classList.remove('error');

    setTimeout(() => {
      formMess.style.opacity = '0';
    }, 5000)
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && isEmail() && message) {
      sendFeedback("template_zekz4yc", {
        name,
        company,
        phone,
        email,
        message,
      });
      succesMessage();
    } else {
      failMessage("Merci de remplir le(s) champ(s) requis");
    }
  };

  const sendFeedback = (templateId, variables) => {

    window.emailjs
      .send("gmail", templateId, variables)
      .then((res) => {
        console.log('success !');
        setName("");
        setCompany("");
        setPhone("");
        setEmail("");
        setMessage("");
      })
      .catch(
        (err) => {
          failMessage("Une erreur s'est produite, veuillez réessayer.");
        })
  };

  return (
    <div className="contact-form">
      <form>
      
      <div className="form-content">
        <input
          type="text"
          id="name"
          name="name"
          onChange={(e) => setName(e.target.value)}
          placeholder="nom *"
          value={name}
          autoComplete="off"
        />
        <input
          type="text"
          id="company"
          name="company"
          onChange={(e) => setCompany(e.target.value)}
          placeholder="société"
          value={company}
        />
        <input
          type="text"
          id="phone"
          name="phone"
          onChange={(e) => setPhone(e.target.value)}
          placeholder="téléphone"
          value={phone}
        />
        <div className="email-content">
          <label id="not-mail">Email non valide</label>
          <input
            type="mail"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email *"
            value={email}
            autoComplete="off"
          />
        </div>
        <textarea
          id="message"
          name="message"
          onChange={(e) => setMessage(e.target.value)}
          placeholder="message *"
          value={message}
        />
      </div>
      <input
        className="buttonForm"
        type="button"
        value="Envoyer"
        onClick={handleSubmit}
      />
      <div className="form-message"></div>
      </form>
      <div className="contact-form__elements">

        <div className="contact-form__elements__localization">
          <div className="contact-form__elements--icon">
            <BsGlobe2 /> <h3>Paris, France</h3>
          </div>
        </div>
        <div className="contact-form__elements__mail">
          <div className="contact-form__elements--icon">
            <FiMail /> <h3>rjacquemin019@gmail.com</h3>
          </div>
        </div>
        <div className="contact-form__elements__telephone">
          <div className="contact-form__elements--icon">
            <BsTelephone /> <h3>06.01.06.19.68</h3>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
