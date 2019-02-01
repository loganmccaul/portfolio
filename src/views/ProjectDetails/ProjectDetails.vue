<template>
  <div class="section project-details">
      <router-link class="project-details__breadcrumb" to="/projects">Projects /</router-link>
      <div class="project-details__head">
      <h2 class="section__head">
        <span class="project-details__category-name" v-if="project.category">
          {{project.category}} </span>
        {{project.name}}
      </h2>
      <div>
        <a
        class="project-details__link"
        target="_blank"
        :href="project.liveLink"
        v-if="project.liveLink">View live</a>
        <a
        class="project-details__link"
        target="_blank"
        :href="project.codeLink"
        v-if="project.codeLink">View code</a>
      </div>
    </div>
    <img
    class="project-details__image"
    :src="`/assets/${project.image}`"
    :alt="`Screenshot of ${project.category || ''} ${project.name}`"
    />
  </div>
</template>

<script>
// List of all projects
import projects from '@/projects';

// Styles
import './ProjectDetails.scss';

export default {
  name: 'ProjectDetails',
  data() {
    return { project: projects.find(project => project.id === this.$route.params.project) };
  },
};
</script>
