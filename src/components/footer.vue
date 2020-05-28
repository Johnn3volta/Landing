<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__desktop">
        <div class="footer__preview">
          <div class="footer__text">
           Lorem ipsum <br> dolor.
          </div>
          <div class="footer__wrap">
            <div class="footer__faded footer__copyright">
              © 2020 Lorem ipsum dolor.
            </div>
            <div @click="showPolitic" class="footer__faded footer__politic">
              Lorem ipsum.
            </div>
          </div>
        </div>
        <div class="license footer__license">
          <div class="license__list">
            <div class="license__item">
              <div class="license__name">
                Lorem ipsum.
              </div>
              <div class="license__content">
                <img alt="lorem" src="https://via.placeholder.com/106x32"/>
              </div>
            </div>
            <div class="license__item">
              <div class="license__name">
                Lorem ipsum.
              </div>
              <div class="license__content">
                <img alt="lorem" src="https://via.placeholder.com/96x30"/>
              </div>
            </div>
            <div class="license__item">
              <div class="license__name">
                Lorem ipsum.
              </div>
              <div class="license__content">
                <img alt="lorem" src="https://via.placeholder.com/194x24"/>
              </div>
            </div>
          </div>
        </div>
        <div class="contaccts footer__contacts">
          <img alt="lorem" src="https://via.placeholder.com/197x92"/>
        </div>
      </div>
      <div class="mobile footer__mobile">
        <div class="footer__text">
          Lorem ipsum <br> dolor.
        </div>
        <div class="mobile__licenses">
          <img alt="lorem" src="https://via.placeholder.com/318x182">
        </div>
        <div class="mobile__contacts">
          <img alt="contacts" src="https://via.placeholder.com/316x88">
        </div>
        <div class="footer__wrap">
          <div class="footer__faded footer__copyright">
            © 2020 Lorem ipsum dolor.
          </div>
          <div @click="showPolitic" class="footer__faded footer__politic">
           Lorem ipsum.
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
    export default {
        name: 'Bot',
        methods: {
            showPolitic() {
                this.$store.dispatch('changer', { show: true, name: 'politic' });
            }
        }
    };
</script>

<style lang="scss"></style>
