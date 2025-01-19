<script setup>
import { ref, onMounted } from 'vue';

import MainMenu from './components/MainMenu.vue';
import Preloader from './components/Preloader.vue';
import Cards from './components/Cards.vue';
import BiggerLogo from './components/BiggerLogo.vue';
import ContactUs from './components/ContactUs.vue';
import Marquee from './components/Marquee.vue';
import Footer from './components/Footer.vue';

const showPreloader = ref(true);
const showMainContent = ref(false);

function scrollToSection(id) {
    const section = document.querySelector(`#${id}`);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'end',
        });
    }
}

function scrollToDetails(id) {
    const section = document.querySelector(`#${id}`);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }
}

onMounted(() => {

  // Логика показа контента
  setTimeout(() => {
    showPreloader.value = false;
    setTimeout(() => {
      showMainContent.value = true;
    }, 50);
  }, 2800);
});

</script>

<template>
  <div class="noselect" >
    <Preloader v-if="showPreloader"/>

    <MainMenu class="p-5" v-if="showMainContent" @scrollToSection="scrollToSection" @scrollToDetails="scrollToDetails"/>
    
    <BiggerLogo v-if="showMainContent" />

    <section id="top-section" v-if="showMainContent" class="position-relative">
      <div class="helped mx-5 mb-5" style="width: 7%;">
        <img class="img-fluid" src="@/assets/fsi.png" alt="ФСИ">
      </div>
      <a class="scroll-to-explore animate-scroll" @click="scrollToSection('hero')">Узнать подробнее ↓</a>
    </section>

    <main style="background-color: #fff;">
      <section id="main" class="main-section" v-if="showMainContent">
        <Marquee />
      </section>

      <section id="hero" class="hero-section" v-if="showMainContent">
        <div class="hero-image hero-image-left" data-aos-duration="800" data-aos-delay="100" data-aos="fade-up-right">
          <img src="https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_65c193e4ea871767c4c7cc89_65c194d67ae3cc5968ca2f20/scale_1200" alt="Left happy person" />
        </div>
        <div class="hero-content" data-aos="fade-up">
          <h2 class="hero-subtitle">О проекте</h2>
          <h1 class="hero-title">Инновационный аромаингалятор для восстановления обоняния и улучшения когнитивных функций</h1>
          <p class="hero-description">
            Аромаингалятор направлен на решение актуальных проблем, таких как потеря обоняния после инфекций, включая COVID-19, и когнитивная усталость. Компактный, портативный и удобный в использовании, он сочетает терапевтические эффекты натуральных аромамасел с уникальным дизайном, подходящим для реабилитационных клиник и индивидуального использования.
          </p>
        </div>
        <div class="hero-image hero-image-right" data-aos-duration="800" data-aos-delay="100" data-aos="fade-down-left">
          <img src="https://avatars.mds.yandex.net/i?id=73fc9861c1ddd9ee13121bd80b9d6668_l-5247417-images-thumbs&n=13" alt="Right happy person" />
        </div>
      </section>

      <section id="product-section" class="product-section" v-if="showMainContent">
        <div class="product-container">
          <!-- Картинка продукта -->
          <div class="product-image-container" data-aos="fade-right" data-aos-offset="0">
            <div class="leaf">
              <img
                src="@/assets/ai.png"
                alt="Product Image"
                data-aos="zoom-out-right"
                class="product-image"
              />
            </div>
          </div>
          <div class="product-info" data-aos="fade-left">
            <h2 class="product-title">Инновационный аромаингалятор</h2>
            <p class="product-subtitle">
              Восстановление обоняния и улучшение когнитивных функций в одном устройстве.
            </p>

            <ul class="product-features">
              <li>
                <i class="pi pi-check-circle feature-icon"></i>
                Компактный и портативный дизайн
              </li>
              <li>
                <i class="pi pi-check-circle feature-icon"></i>
                Сменные картриджи
              </li>
              <li>
                <i class="pi pi-check-circle feature-icon"></i>
                Терапевтический эффект
              </li>
              <li>
                <i class="pi pi-check-circle feature-icon"></i>
                Безопасность и удобство
              </li>
            </ul>

            <button class="product-action-button" @click="scrollToDetails('product-details')">
              Узнать больше
            </button>
          </div>
        </div>
      </section>

      <section id="product-details" v-if="showMainContent">
        <div data-aos="zoom-in">
          <Cards />
        </div>
      </section>

      <section id="contact-us" v-if="showMainContent">
        <ContactUs />
      </section> 

      <section id="footer" v-if="showMainContent">
        <div data-aos="slide-up" data-aos-offset="500">
          <Footer @scrollToSection="scrollToSection" @scrollToDetails="scrollToDetails" />
        </div>
      </section>
    </main>

  </div>
</template>

<style scoped>
.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}
.scroll-to-explore {
  position: absolute;
  bottom: 0rem;
  right: 0%;
  transform: translateX(-50%);
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;
  /* animation: bounce 0.8s infinite; */
  cursor: pointer;
}

.helped {
  animation: helped 0.3s ease-out forwards;
}

.animate-scroll {
  animation: scroll-appear 0.3s ease-out forwards, bounce 0.6s infinite 0.5s;
}

@keyframes scroll-appear {
  0% {
    transform: translateX(-50%) translateY(-50px) scale(0.8);
    opacity: 0;
  }
  100% {
    transform: translateX(-50%) translateY(0) scale(1);
    opacity: 1;
  }
}

@keyframes helped {
  0% {
    transform: scale(0.4);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes bounce {
    0%, 100% {
        transform: translateX(-50%) translateY(0);
    }
    50% {
        transform: translateX(-50%) translateY(-6px);
    }
}

main {
  border-radius: 32px 32px 0 0;
  
}
.main-section {
  background-color: #fff; 
  overflow: hidden;
  border-radius: 32px 32px 0 0;
  animation: scrollAppear 0.3s ease-out forwards;
}

@keyframes scrollAppear  {
  0% {
    transform: translateY(100px);
  }
  100% {
    transform: translateY(0);
  }
}

.hero-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 7.5rem 2rem;
  background: #fff;
  overflow: hidden;
}
.hero-image {
  position: relative;
  width: 50%;
  max-width: 400px;
  height: auto;

}
.hero-image img {
  width: 100%;
  height: 250px;
  object-fit: fill;
  clip-path: inset(2% 30px 1rem round 40px 10%);
}

.hero-image-left img {
  transform: scale(1.5) translate(10%, 0);
}
.hero-image-right img {
  transform: scale(1.5) translate(-10%, 0);
}

.hero-content {
  width: 40%;
  text-align: center;
}

.hero-subtitle {
  font-size: 1rem;
  font-weight: 600;
  color: #999;
  margin-bottom: 10px;
  text-transform: uppercase;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 1.5rem;
}

.hero-description {
  font-size: 1.25rem;
  color: #444;
}

.product-section {
  background: #fff;
  
}

/* Основной контейнер */
.product-container {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  padding: 2rem 2.5rem;
}

/* Левая часть – картинка */
.product-image-container {
  max-width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* padding: 5rem 0; */
  background: #fcee77;
  border-radius: 24px;
  position: sticky;
}

.leaf {
  background: url('https://cdn.vectorstock.com/i/500p/19/92/green-flying-leaves-on-long-white-banner-leaf-vector-39271992.jpg');
  mix-blend-mode: darken;
}
.product-image {
  max-width: 100%;
  filter: drop-shadow(-3.5rem 2rem 1.5rem rgba(0, 0, 0, 0.5 )) brightness(130%);
  animation: pulse 2.5s ease-out infinite;
}

@keyframes pulse {
    0%, 100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.05);
    }
}

.product-info {
  max-width: 45%;
  padding: 5rem;
  background: #f8f8f8;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.product-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 1rem;
}

.product-subtitle {
  font-size: 1.5rem;
  color: #555;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.product-features {
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
}

.product-features li {
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  color: #444;
  margin-bottom: 0.75rem;
}

.feature-icon {
  font-size: 1.25rem;
  color: #71d1b4;
  margin-right: 0.75rem;
}

.product-action-button {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  background: #71d1b4;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.product-action-button:hover {
  background: #5ab399;
}


</style>
