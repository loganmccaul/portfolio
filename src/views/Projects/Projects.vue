<template>
  <div class="projects">
    <section class="section">
      <h2 class="section__head">Work</h2>
      <Card v-for="project in workProjects" :key="project.id" :project="project" />
      <p class="section__footer">* Live code exists on IBM Cloud. An IBM Cloud account is required. You can create a free account through <a href="https://cloud.ibm.com/registration">IBM Cloud Registration.</a></p>
    </section>
    <section class="section">
      <h2 class="section__head">Fun</h2>
      <Card v-for="project in funProjects" :key="project.id" :project="project" />
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
      workProjects: projects.filter(project => project.section === 'work'),
      funProjects: projects.filter(project => project.section === 'fun'),
    }
  ),
};
</script>
