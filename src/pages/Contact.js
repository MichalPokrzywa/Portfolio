// src/pages/Contact.js
import React from 'react';

export default function Contact() {
  return (
    <section>
      <h2>Contact</h2>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Message:
          <textarea name="message"></textarea>
        </label>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}
