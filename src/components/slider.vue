<template>
  <div :class="{ marginate: preview }" class="slider">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div
            :key="index"
            class="slide swiper-slide"
            v-for="index in 6"
        >
          <div class="slide__wrap">
            <transition name="fade">
              <div class="preview slide__text" v-if="preview">
                <div class="preview__wrap">
                  <div
                      @click="preview = false"
                      class="close preview__close"
                  >
                    <img
                        alt="close"
                        src="images/close.png"
                    />
                  </div>
                  <div class="preview__title">
                    Lorem ipsum dolor.
                  </div>
                  <div class="preview__author">
                    Lorem ipsum.
                  </div>
                  <div class="preview__description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequuntur deserunt eveniet fugit
                    ipsum iusto nisi recusandae repellendus unde. Corporis iure molestiae natus? Eligendi, facere nisi?
                    A aliquid, amet beatae consequuntur corporis cum est eveniet ex, excepturi, iste iure iusto laborum
                    laudantium nihil nostrum quibusdam voluptas voluptatum. Ad error, nemo?
                  </div>
                </div>
              </div>
            </transition>

            <div class="slide__img">
              <div class="slide__img-wrap">
                <div @click="preview = true" class="slide__hint"></div>
                <img
                    alt=" Lorem ipsum dolor."
                    src="https://via.placeholder.com/400x610"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-pagination slider__pagination"></div>
      <!-- If we need navigation buttons -->
      <div class="slider__navigation">
        <div
            class="slider__arrow slider__arrow--prev swiper-button-prev"
        ></div>
        <div
            class="slider__arrow slider__arrow--next swiper-button-next"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
    const Swiper = require('swiper/dist/js/swiper.js');

    export default {
        name: 'Slider',
        data: () => ({
            swiperOption: {
                autoplay: {
                    delay: 3500
                },
                grabCursor: true,
                touchMoveStopPropagation: true,
                shortSwipes: false,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                },
                breakpoints: {
                    600: {
                        spaceBetween: 20
                    }
                }
            },
            preview: false,
        }),
        mounted() {
            const slider = new Swiper('.swiper-container', this.swiperOption);

            $('.swiper-slide').hover(
                () => {
                    slider.autoplay.stop();
                },
                () => {
                    slider.autoplay.start();
                }
            );
        }
    };
</script>

<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
