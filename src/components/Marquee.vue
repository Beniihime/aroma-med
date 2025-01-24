<template>
    <div class="marquee py-4">
        <div class="ticker__in">
            <span class="tag">/ Аромаингалятор</span>
            <span class="separator"><i class="pi pi-plus-circle"></i></span>
            <span class="tag">/ ВосстановлениеОбоняния</span>
            <span class="separator"><i class="pi pi-plus-circle"></i></span>
            <span class="tag">/ КогнитивнаяРеабилитация</span>
            <span class="separator"><i class="pi pi-plus-circle"></i></span>
            <span class="tag">/ ИнновационнаяМедтехника</span>
            <span class="separator"><i class="pi pi-plus-circle"></i></span>
            <span class="tag">/ Аносмия</span>
            <span class="separator"><i class="pi pi-plus-circle"></i></span>
            <span class="tag">/ Ароматерапия</span>
            <span class="separator"><i class="pi pi-plus-circle"></i></span>
            
            <span class="tag">/ Аромаингалятор</span>
            <span class="separator"><i class="pi pi-plus-circle"></i></span>
            <span class="tag">/ ВосстановлениеОбоняния</span>
            <span class="separator"><i class="pi pi-plus-circle"></i></span>
            <span class="tag">/ КогнитивнаяРеабилитация</span>
            <span class="separator"><i class="pi pi-plus-circle"></i></span>
            <span class="tag">/ ИнновационнаяМедтехника</span>
            <span class="separator"><i class="pi pi-plus-circle"></i></span>
            <span class="tag">/ Аносмия</span>
            <span class="separator"><i class="pi pi-plus-circle"></i></span>
            <span class="tag">/ Ароматерапия</span>
            <span class="separator"><i class="pi pi-plus-circle"></i></span>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.pi-plus-circle {
  color: #71d1b4;
}
.marquee {
  font-size: 32px;
  color: #000;
  width: 100vw;
  max-width: 2600px;
  overflow: hidden;
  position: relative;
}
.ticker__in {
  display: flex;
  align-items: center;
  width: fit-content;
  animation: scroll 12s linear infinite;
  -webkit-transform-style: preserve-3d /* Фикс */
}

.tag {
  white-space: nowrap;
  -webkit-backface-visibility: hidden; /* Фикс */
}

.separator {
  padding: 0 4rem;
  font-size: 24px;
  display: flex;
  align-items: center;
  white-space: nowrap;
  -webkit-backface-visibility: hidden; /* Фикс */
}

@keyframes scroll {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-50%, 0, 0);
  }
}

@media (max-width: 768px) {
  .marquee {
    font-size: 1.25rem;
  }
  .separator {
    font-size: 1rem;
    padding: 0 2rem;
  }
}
</style>