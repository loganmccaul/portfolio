<template>
  <div class="card">
    <div class="card__description">
      <div>
        <h3 class="card__title"><span class="card__category-name">IBM Cloud</span> Usage</h3>
        <p class="card__text">
          Love to play with owner's hair tie run outside as soon as door open for jumps
          off balcony gives owner dead mouse at present then poops in litter
          box snatches yarn and fights with dog cat chases laser then plays in grass
          finds tiny spot in cupboard and sleeps all day jumps in bathtub and meows.
        </p>
      </div>
      <div class="card__links">
        <router-link class="card__link" to="/projects/usage">View details</router-link>
        <a class="card__link" href="https://cloud.ibm.com/billing/usage">View live</a>
      </div>
    </div>
    <picture class="card__image">
      <img src="../../projects/usage/assets/screenshot.png" alt="Screenshot of IBM Cloud Usage"/>
    </picture>
  </div>
</template>

<script>
import './Card.scss';

export default {
  name: 'Card',
};
</script>
