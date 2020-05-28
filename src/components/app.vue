<template>
  <main class="main">
    <div class="main__wrap">
      <div class="main__part main__part--left">
        <h1 class="main__title">
          Lorem ipsum dolor sit amet, consectetur adipisicing.
        </h1>
        <div class="main__annotation">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </div>
        <div
            @click="showForm"
            class="button main__button main__button--desktop">
          <span>
              lorem
          </span>
        </div>
      </div>
      <div class="main__part main__part--right">
        <slider></slider>
        <div
            @click="showForm"
            class="button main__button  main__button--mobile">
          <span>
              lorem
          </span>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
    import Slider from '../components/slider.vue';

    export default {
        components: {
            Slider
        },
        data: () => ({}),
        methods: {
            showForm() {
                this.$store.dispatch('changer', { show: true, name: 'callback' });
            }
        }
    };
</script>
