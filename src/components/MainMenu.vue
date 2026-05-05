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

        </div>
    </div>
</template>
<script setup>
import Logo from '@/assets/logo.svg';
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
@keyframes fadeIn {
    to {
        opacity: 1;
        transform: translateY(0);
    }
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

    .menu-button {
        display: block;
        font-size: 0.7rem;
    }
    .menu-logo svg {
        width: 150px;
    }
    .main-menu {
        padding: 0.5rem;
    }
}
</style>
