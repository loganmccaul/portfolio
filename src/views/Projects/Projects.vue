<template>
  <div class="projects">
    <section class="section" :key="section.id" v-for="section in projects">
      <h2 class="section__head">{{section.name}}</h2>
      <Card v-for="project in section.projects" :key="project.id" :project="project" />
    </section>
  </div>
</template>

<script>
// List of all projects
import projects from '@/projects';

// Components
import Card from '@/components/Card/Card.vue';

export default {
  name: 'Projects',
  components: {
    Card,
  },
  data: () => (
    {
      projects,
    }
  ),
};
</script>
