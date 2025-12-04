// src/pages/Contact.js
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { HiOutlineMail } from 'react-icons/hi';
import { FaGithub,FaLinkedin } from 'react-icons/fa';

const contactLinks = [
  {
    id: 'email',
    label: 'michael.pokrzywa01@gmail.com',      
    href: 'mailto:michael.pokrzywa01@gmail.com', 
    icon: HiOutlineMail,
    external: false,
  },
  {
    id: 'github',
    label: '@MichalPokrzywa',                   
    href: 'https://github.com/MichalPokrzywa',  
    icon: FaGithub,
    external: true,
  },
    {
    id: 'linkedin',
    label: 'Michał Pokrzywa',                   
    href: 'https://www.linkedin.com/in/michał-pokrzywa/',  
    icon: FaLinkedin,
    external: true,
  },
];

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleSubmit = (event) => {
    event.preventDefault();

    setStatus('sending');

    emailjs
      .sendForm(
        'service_cyrez_gmail',   
        'template_030d20o',  
        formRef.current,
        'e9MKGLFNX0pt28ZfH'  
      )
      .then(() => {
        setStatus('success');
        if (formRef.current) {
          formRef.current.reset();
        }
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        setStatus('error');
      });
  };

  return (
    <section className="section">
      <div className="section__header fade-in">
        <h1 className="section__title">Contact</h1>
        <p className="section__subtitle">
          Have questions, want to collaborate or ask about code?
        </p>
      </div>

      <div className="contact-grid fade-in">
        <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
          <label className="field">
            <span>Name</span>
            <input
              type="text"
              name="from_name"          
              placeholder="Your name"
              required
            />
          </label>

          <label className="field">
            <span>E-mail</span>
            <input
              type="email"
              name="from_email"        
              placeholder="example@gmail.com"
              required
            />
          </label>

          <label className="field">
            <span>Message</span>
            <textarea
              name="message"          
              rows="5"
              placeholder="Write message here..."
              required
            />
          </label>

          <button
            type="submit"
            className="btn btn--primary btn--full"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'success' && (
            <p style={{ marginTop: '10px', color: '#4ade80', fontSize: '0.9rem' }}>
              ✅ A Message has been send. Thank you!
            </p>
          )}
          {status === 'error' && (
            <p style={{ marginTop: '10px', color: '#f97373', fontSize: '0.9rem' }}>
              ❌ Something went wrong. Try again later.
            </p>
          )}
        </form>

        <div className="contact-info">
          <h2>You can also find me here:</h2>
          <div className="contact-links">
            {contactLinks.map(({ id, label, href, icon: Icon, external }) => (
              <a
                key={id}
                href={href}
                className="contact-link"
                {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
              >
                <span className="contact-link__icon">
                  <Icon />
                </span>
                <span className="contact-link__label">{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
