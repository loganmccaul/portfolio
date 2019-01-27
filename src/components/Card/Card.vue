<template>
  <div class="card">
    <div class="card__description">
      <div>
        <h3 class="card__title">
          <span class="card__category-name" v-if="project.category">{{project.category}} </span>
          {{project.Name}}
        </h3>
        <p class="card__text">
          {{project.cardDescription}}
        </p>
      </div>
      <div class="card__links">
        <router-link class="card__link" :to="`/projects/${project.id}`">View details</router-link>
        <a class="card__link" :href="project.liveLink" v-if="project.liveLink">View live</a>
        <a class="card__link" :href="project.codeLink" v-if="project.codeLink">View live</a>
      </div>
    </div>
    <picture class="card__image">
      <img
        :style="project.cardImageTranslation"
        :src="require(`../../assets/${project.image}`)"
        :alt="`Screenshot of ${project.category} ${project.name}`"
      />
    </picture>
  </div>
</template>

<script>
import './Card.scss';

export default {
  name: 'Card',
  props: {
    project: Object,
  },
};
</script>
