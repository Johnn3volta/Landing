<template>
  <div class="thank">
    <div class="close thank__close" @click="hideThanks">
      <img
          alt="close"
          src="images/close.png"
      />
    </div>
    <div class="thank__title">
      Ваша заявка отправлена
    </div>
    <div class="thank__text">
      наши специалисты скоро с вами свяжутся
    </div>
  </div>
</template>

<script>
    export default {
        name: 'thanks',
        data: () => ({}),
        methods: {
            hideThanks() {
                this.$store.dispatch('changer', { show: false, name: '' });

            }
        }
    };
</script>

<style>

</style>
