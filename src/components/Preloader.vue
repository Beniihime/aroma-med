<template>
    <div class="preloader">
        <div class="logo-container">
            <!-- <Logo class="logo"/> -->
            <video autoplay muted playsinline class="background-video">
                <source src="../assets/preloader.mp4" type="video/mp4"/>
            </video>
        </div>
        <div class="progress-container">
            <span 
                class="progress__num"
                :class="{ 'animate-exit': progress === 100 }"
            >{{ progress }}</span>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const progress = ref(0); // Значение прогресса

onMounted(() => {
    const interval = setInterval(() => {
        if (progress.value < 100) {
            progress.value++;
        } else {
            clearInterval(interval);
        }
    }, 25); // Скорость увеличения прогресса
});
</script>

<style scoped>
.preloader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    transition: opacity 0.5s ease-in-out;
}
.background-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
}
.logo {
    width: 600px;
    height: 600px;
    fill: #fff;
}
.progress-container {
    position: absolute;
    bottom: 3rem;
    left: 50%;
    transform: translateX(-50%);
    color: #fff;
    overflow: hidden;
}
.progress__num {
    display: inline-block;
    text-align: center;
    font-size: 1.25rem;
    transition: transform 0.5s ease, opacity 0.3s ease;
}
.animate-exit {
    transform: translateY(100%);
    opacity: 0;
}
@keyframes logo-animation {
    0%, 100% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.1);
    }
}
</style>