<template>
  <header class="header">
    <h1 class="header__title">Logan McCaul</h1>
    <nav>
      <ul class="header__nav-list">
        <li class="header__nav-list-item">
          <router-link class="header__link" to="/">Projects</router-link>
        </li>
        <li class="header__nav-list-item">
          <router-link class="header__link" to="/about">About</router-link>
        </li>
        <li class="header__nav-list-item">
          <router-link class="header__link" to="/contact">Contact</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
  import './Header.scss';

  export default {
    name: 'Header',
  };
</script>
