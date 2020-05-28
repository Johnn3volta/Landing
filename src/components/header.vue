<template>
  <header class="header">
    <div class="header__wrap">
      <div class="header__left">
        <img src="https://via.placeholder.com/85x31" alt="">
        <div class="header__slogan">
         Lorem ipsum dolor sit amet, <br> consectetur adipisicing elit.
        </div>
      </div>
      <div class="header__right">
        <div @click="showForm" class="button header__button">
          <span>Lorem</span>
        </div>
        <div class="header__phone">
          <img alt="phone" class="phone" src="https://via.placeholder.com/139x21?text=Your phone"/>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
    export default {
        name: 'Top',
        methods: {
            showForm() {
                this.$store.dispatch('changer', { show: true, name: 'callback' });
            }
        }
    };
</script>

<style lang="scss"></style>
