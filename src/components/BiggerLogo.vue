<template>
    <section class="bigger__logo">
        <img style="width: 60vw;" src="../assets/shape2.webp" alt="">
    </section>

</template>

<script setup>

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