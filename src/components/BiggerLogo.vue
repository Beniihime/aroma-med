<template>
    <section class="bigger__logo">
        <img src="../assets/shape2.webp" alt="logo">
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

.bigger__logo img{
  width: 62vw;
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

@media (max-width: 768px){
  .bigger__logo {
    height: 55vh;
  }
  .bigger__logo img{
    width: 100vw;
  }
}
</style>