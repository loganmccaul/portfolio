<template>
  <div class="section contact">
    <form id="contact">
      <label class="contact__label" for="name">Name</label>
      <div class="contact__input-container">
        <input class="contact__input" type="text" id="name" placeholder="Dr. Seuss"/>
      </div>
      <label class="contact__label" for="email">Email</label>
      <div class="contact__input-container">
        <input
        class="contact__input"
        type="email"
        id="email"
        placeholder="therealdrseuss@aol.com"
        />
      </div>
      <label class="contact__label" for="subject">Subject</label>
      <div class="contact__input-container">
        <input
        class="contact__input"
        type="text"
        id="subject"
        placeholder="Oh, the Places You'll Go!"
        />
      </div>
      <label class="contact__label" for="message">Message</label>
      <textarea
      class="contact__text-area"
      id="message"
      placeholder="Congratulations!
Today is your day.
You're off to Great Places!
You're off and away!"
      />
      <button class="contact__button">Send</button>
    </form>
  </div>
</template>

<script>
// Styles
import './Contact.scss';

export default {
  name: 'Contact',
};
</script>
