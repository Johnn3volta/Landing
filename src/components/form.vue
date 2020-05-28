<template>
  <form @submit.prevent="formSend" class="form">
    <div @click="hideForm" class="close form__close">
      <img
          alt="close"
          src="images/close.png"
      />
    </div>
    <div class="form__title">
      Заполните форму
    </div>
    <div class="form__wrap">
      <input
          class="input form__input"
          placeholder="Имя"
          type="text"
          v-model="name"
      >
    </div>
    <div class="form__wrap">
      <input
          class="input form__input"
          placeholder="телефон"
          type="text"
          v-model="phone"
      >
    </div>
    <div class="form__wrap">
      <input
          class="input form__input"
          placeholder="E-mail"
          type="email"
          v-model="email"
      >
    </div>
    <div class="form__wrap form__wrap--checkbox">
      <input
          :checked="check"
          class="checkbox form__checkbox"
          id="checkbox"
          type="checkbox"
          v-model="check"
      >
      <label class="label" for="checkbox">Отправляя данную форму, вы подтверждаете свое согласие на обработку
        персональных данных</label>
    </div>
    <button
        :disabled="!check"
        class="button form__button"
    >Получить консультацию
    </button>
  </form>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'Form',
        data: () => ({
            check: true,
            name: '',
            phone: '',
            email: ''
        }),
        methods: {
            hideForm() {
                this.$store.dispatch('changer', { show: false, name: '' });

            },
            formSend() {
                let formData = new FormData(),
                    headers = { 'Content-Type': 'multipart/form-data' };

                formData.append(`name`, this.name);
                formData.append(`phone`, this.phone);
                formData.append(`email`, this.email);

                axios.post('/send.php', formData, { headers: headers })
                    .then(() => {
                        gtag('event', 'send_form', {
                            'event_category': 'click',
                            'event_label': 'lead'
                        });
                        ym(62131789, 'reachGoal', 'lead');
                        this.hideForm();
                        this.$store.dispatch('changer', { show: true, name: 'thanks' });

                        setTimeout(() => {
                            this.hideForm();
                        }, 2500);
                    });
            }
        }
    };
</script>

<style>

</style>
