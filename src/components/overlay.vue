<template>
  <transition name="overlay">
    <div class="overlay" v-if="show">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
    export default {
        props: {
            show: {
                type: Boolean
            }
        },
        name: 'Overlay'
    };
</script>
<style scoped>
  .overlay-enter-active,
  .overlay-leave-active{
    transition: opacity 0.5s;
  }

  .overlay-enter,
  .overlay-leave-to{
    opacity: 0;
  }
 </style>
