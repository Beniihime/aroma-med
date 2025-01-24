<template>
    <div class="container-footer">
        <Marquee />
        <div class="footer-content">
            <div class="footer-section position-relative">
                <Logo class="logo"/>
                <img src="../assets/fsi.png" class="helped" alt="">
            </div>

            <div class="footer-section">
                <div class="footer-links">
                    <div>
                        <h4>Меню</h4>
                        <ul class="menu-navigation">
                            <li><div @click="$emit('scrollToSection', 'hero')">О проекте</div></li>
                            <li><div @click="$emit('scrollToDetails', 'product-section')">Наш продукт</div></li>
                            <li><div @click="$emit('scrollToDetails', 'product-details')">Преимущества</div></li>
                            <li><div @click="$emit('scrollToSection', 'contact-us')">Связаться с нами</div></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="footer-section">
                <div class="footer-links">
                    <div>
                        <h4>Контакты</h4>
                        <ul class="menu-navigation">
                            <li><div><a href="mailto:AROMAMED2024@YANDEX.RU">AROMAMED2024@YANDEX.RU</a></div></li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
        <div class="footer-bottom">
            <p>© ООО "АРОМАМЕД", 2025</p>
            <div @click="$emit('scrollToSection', 'top-section')" class="back-to-top">Вернуться наверх ↑</div>
        </div>
    </div>
</template>

<script setup>
import Marquee from './Marquee__black.vue';

import Logo from '../assets/logo.svg';
</script>

<style scoped>
.container-footer {
    background: #000;
    border-radius: 32px 32px 0 0;
    color: #fff;
}

.footer-content {
    display: flex;
    justify-content: space-around;
    gap: 40px;
    padding: 40px;
}

.footer-section {
    flex: 1;
}

.logo {
    width: 300px;
    margin: 10px 0;
    fill: #71d1b4;
}
.helped {
    position: absolute;
    top: 100px;
    left: 0;
    width: 180px;
}
.menu-navigation div {
    cursor: pointer;
    position: relative;
    width: fit-content;
    padding-bottom: 1px;
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
.footer-links {
    display: flex;
    gap: 40px;
}

.footer-links h4 {
    margin-bottom: 10px;
    color: #b1aeae;
}

.footer-links ul {
    list-style: none;
    padding: 0;
}

.footer-links li {
    margin-bottom: 5px;
}

.footer-links a {
    text-decoration: none;
    color: #fff;
}

.footer-bottom {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    opacity: 0.7;
    font-size: 14px;
    padding: 0 40px 40px 40px;
}
.footer-bottom p {
    margin: 0;
}
.back-to-top {
    text-decoration: none;
    color: #fff;
    cursor: pointer;
    font-size: 1rem;
}
</style>

