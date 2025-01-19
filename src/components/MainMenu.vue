<template>
    <div class="main-menu">
        <div class="menu-row">
            <!-- Логотип -->
            <div class="menu-logo">
                <Logo />
            </div>

            <!-- Навигация -->
            <div class="menu-navigation">
                <div @click="$emit('scrollToSection', 'hero')">О проекте</div>
                <div @click="$emit('scrollToDetails', 'product-section')">Наш продукт</div>
                <div @click="$emit('scrollToDetails', 'product-details')">Преимущества</div>
            </div>

            <!-- Дополнительные кнопки -->
            <div class="menu-actions">
                <div class="contact-button" :class="{ 'animated': isAnimated }" @click="$emit('scrollToDetails', 'contact-us')">
                    <span class="button-text">Связаться с нами</span>
                    <span class="arrow">→</span>
                </div>

            </div>
            
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import Logo from '@/assets/logo.svg';

const isAnimated = ref(false);

onMounted(() => {
    setTimeout(() => {
        isAnimated.value = true; // Запуск анимации через 200 мс
    }, 200);
});
</script>

<style scoped>
.main-menu {
    background-color: #000;
    font-family: "SF Pro Rounded";
    color: #fff;
    position: sticky;
}
.menu-row {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    width: 100%;
}
.menu-logo svg {
    width: 300px;
    fill: #fff !important;
    opacity: 0;
    transform: translateY(50%);
    animation: fadeIn 0.3s ease-out forwards;
}
.menu-navigation {
    display: flex;
    gap: 2rem;
    font-size: 1.2rem;
    font-weight: 500;
    position: relative;
}
.menu-navigation div {
    opacity: 0;
    cursor: pointer;
    transform: translateY(10px);
    animation: fadeIn 0.4s ease-out forwards;
    position: relative;
    padding-bottom: 5px;
}
.menu-navigation div:hover::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: #71d1b4;
    animation: slideIn 0.3s ease-out forwards;
}
@keyframes slideIn {
    from {
        width: 0;
    }
    to {
        width: 100%;
    }
}
.menu-navigation div:hover {
    color: #71d1b4;
}
.menu-navigation div:nth-child(1) {
    animation-delay: 0.1s;
}
.menu-navigation div:nth-child(2) {
    animation-delay: 0.2s;
}
.menu-navigation div:nth-child(3) {
    animation-delay: 0.3s;
}
.menu-navigation div:nth-child(4) {
    animation-delay: 0.4s;
}

@keyframes fadeIn {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
.menu-actions {
    display: flex;
    gap: 1rem;
}
.contact-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 0.5rem 1.5rem;

    font-size: 1rem;
    font-weight: bold;
    color: #fff;
    border-radius: 20px;
    border: 1px solid transparent;
    
    background: transparent;
    cursor: pointer;
    overflow: hidden;

    clip-path: circle(0% at center);
    transition: clip-path 1.1s ease-out, background-color 0.3s ease-out, color 0.3s ease-out, transform 0.3s ease-out, box-shadow 0.3s ease-out;
}
.contact-button.animated {
    clip-path: circle(150% at center); /* Круг становится большим */
    background: #71d1b4;
}
.button-text {
    position: relative;
    z-index: 1; /* Текст остаётся на месте */
}
.contact-button:hover {
    color: #71d1b4;
    background: #000;
    border: 1px solid #71d1b4;
}
.arrow {
    position: relative;
    color: #fff;
    z-index: 1; /* Стрелка остаётся видимой */
    transition: all 0.3s ease-out;
    opacity: 0;
    transform: translateX(-20px); /* Начальное положение стрелки */
}
.contact-button.animated .arrow {
    opacity: 1; /* Стрелка становится видимой */
    transform: translateX(5px); /* Стрелка сдвигается вправо */
}

.contact-button:hover > .arrow {
    transform: translateX(10px); /* Дополнительный сдвиг при наведении */
    color: #71d1b4;
}
.menu-button {
    display: none;
}

@keyframes dropdownFade {
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@media (max-width: 768px) {
    .menu-navigation {
        display: none;
    }

    .menu-actions {
        gap: 0.5rem;
    }

    .menu-button {
        display: block;
        font-size: 0.7rem;
    }
    .contact-button {
        font-size: 0.7rem;
    }
    .menu-logo svg {
        width: 100px;
    }
    .main-menu {
        padding: 0.5rem;
    }
}
</style>