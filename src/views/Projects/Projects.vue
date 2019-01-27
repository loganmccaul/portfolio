<template>
  <div class="projects">
    <section class="section">
      <h2 class="section__head">Work</h2>
      <Card />
    </section>
    <section class="section">
      <h2 class="section__head">Fun</h2>
    </section>
  </div>
</template>

<script>
import Card from '@/components/Card/Card.vue';

import './Projects.scss';

export default {
  name: 'Projects',
  components: {
    Card,
  },
};
</script>
