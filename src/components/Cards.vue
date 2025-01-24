<template>
    <main>
        <h3 
            ref="header" 
            :class="{ 'position-sticky': isSticky }"
            class="mb-4"
            style="top: 20px; text-align: left;"
        >
            Наши преимущества
        </h3>
        <ul id="cards" ref="cards">
            <li class="card" id="card-1" style="--index: 1;">
                <div class="card__content">
                    <div>
                        <h2>Компактный и портативный</h2>
                        <p>Размер устройства всего 7х3 см. Благодаря своему компактному дизайну, аромаингалятор легко носить с собой, обеспечивая терапевтический эффект в любое время и в любом месте.</p>
                    </div>
                    <figure>
                        <img style="" src="../assets/ai2.webp" alt="Компактный аромаингалятор">
                    </figure>
                </div>
            </li>
            <li class="card" id="card-2" style="--index: 2;">
                <div class="card__content">
                    <div>
                        <h2>Сменные картриджи</h2>
                        <p>Картриджи на основе морской или английской соли с индивидуальными композициями масел. Каждый картридж рассчитан на использование более трёх месяцев.</p>
                    </div>
                    <figure>
                        <img src="../assets/ai3.webp" alt="Сменные картриджи">
                    </figure>
                </div>
            </li>
            <li class="card" id="card-3" style="--index: 3;">
                <div class="card__content">
                    <div>
                        <h2>Терапевтический эффект</h2>
                        <p>Седативные и стимулирующие композиции масел. Эффективное улучшение обонятельной функции и поддержка при когнитивной усталости.</p>
                    </div>
                    <figure>
                        <img src="../assets/card3.webp" alt="Терапевтический эффект">
                    </figure>
                </div>
            </li>
            <li class="card" id="card-4" style="--index: 4;">
                <div class="card__content">
                    <div>
                        <h2>Безопасность и удобство</h2>
                        <p>Сменные носики обеспечивают защиту от пыли, бактерий и других загрязнений. Простота в использовании и отсутствие необходимости готовить раствор.</p>
                    </div>
                    <figure>
                        <img src="../assets/card4.webp" alt="Безопасность и удобство">
                    </figure>
                </div>
            </li>
        </ul>
    </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const header = ref(null);
const cards = ref(null);
const isSticky = ref(true);

const handleScroll = () => {
    if (header.value && cards.value) {
        const cardsRect = cards.value.getBoundingClientRect();
        // Заголовок становится нефиксационным, если карточки полностью скрыты
        isSticky.value = cardsRect.bottom > window.innerHeight;
    }
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Убедимся, что состояние корректно при загрузке
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>


<style scoped>
main {
    width: 90vw;
    margin: 0 auto;
    text-align: center;
}
main * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
main h2 {
    font-weight: bold;
    font-size: 2rem;
    margin-bottom: 1em;
}
h3 {
    font-size: 2rem;
    margin-bottom: 1rem;
}
main p {
    font-weight: 400;
    line-height: 1.5;
    font-size: 1.2rem;
}

@supports (animation-timeline: view()) {
    #cards {
        --numcards: 4;
        view-timeline-name: --cards-element-scrolls-in-body;
    }
    .card {
        --index0: calc(var(--index) - 1);
        --reverse-index: calc(var(--numcards) - var(--index0));
        --reverse-index0: calc(var(--reverse-index) - 1);
    }
    .card__content {
        --start-range: calc(var(--index0) / var(--numcards) * 100%);
        --end-range: calc((var(--index)) / var(--numcards) * 100%);
        animation: linear scale forwards;
        animation-timeline: --cards-element-scrolls-in-body;
        animation-range: exit-crossing var(--start-range) exit-crossing var(--end-range);
    }
}

@keyframes scale {
  to {
    transform: scale(calc(1.1 - calc(0.1 * var(--reverse-index))));
  }
}

#cards {
    list-style: none;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(var(--numcards), var(--card-height));
    gap: var(--card-margin);

    padding-bottom: calc(var(--numcards) * var(--card-top-offset));
    /* margin-bottom: var(--card-margin); */
}

.card {
  position: sticky;
  top: 4em;
  border: none;
  background: transparent;
  padding-top: calc(var(--index) * var(--card-top-offset));
}

.card__content {
  box-shadow: 0 0.2em 1em rgba(0, 0, 0, 0.1), 0 1em 2em rgba(0, 0, 0, 0.1);
  background: #f0f1f1;
  color: rgb(10, 5, 7);
  border-radius: 2em;
  overflow: hidden;

  display: grid;
  grid-template-areas: "text img";
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  
  align-items: stretch;
  transform-origin: 50% 0%;
  will-change: transform;
}

.card__content > div {
  grid-area: text;
  width: 80%;
  place-self: center;
  text-align: left;
  gap: 1em;
  place-items: start;
}
#card-1 > .card__content > figure {
    background-color: #d1f3e5;
}
#card-2 > .card__content > figure {
    background-color: #fde8d0;
}
.card__content > figure {
    grid-area: img;
    overflow: hidden;
}
.card__content > figure > img {
    width: 100%;
    height: 100%;
    filter: brightness(130%) drop-shadow(0 0 20px rgba(0, 0, 0, 0.5));
    object-fit: contain;
}
#card-3 > .card__content > figure > img,
#card-4 > .card__content > figure > img {
    filter: brightness(110%);
    object-fit: cover;
}

@media (max-width: 768px) {
    h3 {
        font-size: 1.5rem;
        text-align: center;
    }
    main h2 {
        font-size: 1.2rem;
    }
    main p {
        font-size: 1rem;
    }
    .card {
        /* top: 2em; */
        padding-top: calc(var(--index) * 15px);
    }
    .card__content {
        grid-template-columns: 1fr; /* ✅ Одна колонка вместо двух */
        grid-template-areas:
            "img"
            "text";
        text-align: center;
    }
    .card__content > div {
        padding: 15px;
    }
    
}
</style>