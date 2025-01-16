<template>
    <section class="bigger__logo">
        <!-- <div class="glass-effect blob1"></div> -->
        <!-- <Logo class="bigger__logo-svg"/> -->
        <img style="width: 80vw; height: 75vh;" src="../assets/shape1.png" alt="">
    </section>

</template>

<script setup>
import Logo from '../assets/logo.svg';
</script>

<style scoped>
.bigger__logo {
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  height: 62vh;
  animation: bigger__logo__zoom 0.3s ease-out forwards;
}

@keyframes bigger__logo__zoom {
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
</style>