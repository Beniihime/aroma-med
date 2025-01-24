<template>
    <main>
        <!-- Контейнер для формы и дополнительной информации -->
        <section class="contact-container">
            <!-- Форма обратной связи -->
            <div class="contact-form">
                <h3>Связаться с нами</h3>
                <form @submit.prevent="sendForm">
                    <div class="input-group">
                        <input type="text" placeholder="Ваше имя" v-model="form.name" required />
                    </div>
                    <div class="input-group">
                        <input type="email" placeholder="Ваш email" v-model="form.email" required />
                    </div>
                    <div class="input-group">
                        <textarea placeholder="Ваше сообщение" v-model="form.message" required></textarea>
                    </div>

                    <vue-recaptcha
                        ref="recaptcha"
                        :sitekey="siteKey"
                        @verify="onCaptchaVerified"
                        @expired="onCaptchaExpired"
                        size="normal"
                        class="mb-3"
                        style="display: flex; justify-content: center;"
                    ></vue-recaptcha>

                    <button type="submit" class="submit-button">Отправить</button>
                </form>
            </div>

            <!-- Блок с дополнительной информацией -->
            <div class="info-section">
                <div class="info-card">
                    <i class="pi pi-envelope"></i>
                    <h4>Email</h4>
                    <p>AROMAMED2024@YANDEX.RU</p>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import vueRecaptcha from "vue3-recaptcha2"

const form = ref({
    name: '',
    email: '',
    message: ''
});

const siteKey = "6LfugLsqAAAAAI7z1bRSurhNkgV9mfItEmRUIhdE";

const captchaToken = ref("");
const recaptcha = ref(null);

const onCaptchaVerified = (token) => {
    captchaToken.value = token;
};
const onCaptchaExpired = () => {
  captchaToken.value = "";
};

const sendForm = async () => {
    if (!captchaToken.value) {
        alert("Подтвердите, что вы не робот!");
        return;
    }

    try {
        const response = await axios.post("https://api.aroma-med.ru/send-email", {
            ...form.value,
            captcha: captchaToken.value
        });

        if (response.data.success) {
            alert("Сообщение успешно отправлено!");
            form.value = { name: "", email: "", message: "" };
            captchaToken.value = "";
            recaptcha.value.reset();
        } else {
            alert("Ошибка при отправке сообщения.");
        }
    } catch (error) {
        console.error("Ошибка:", error);
        alert("Не удалось отправить сообщение.");
    }
};
</script>

<style scoped>
/* Основные стили */
main {
    width: 90vw;
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
    padding: 3rem 0;
    position: relative;
}

/* Заголовок */
h2 {
    font-weight: bold;
    font-size: 2.5rem;
}

/* Контейнер формы и информации */
.contact-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #f4f5f5;
    padding: 2rem;
    border-radius: 20px;
    box-shadow: 0 0.2em 1em rgba(0, 0, 0, 0.1), 0 1em 2em rgba(0, 0, 0, 0.1);
    flex-wrap: wrap;
    gap: 2rem;
}

/* Форма */
.contact-form {
    flex: 1;
    min-width: 300px;
    max-width: 500px;
    padding: 2rem;
    text-align: left;
}

.contact-form h3 {
    font-size: 2rem;
    margin-bottom: 2rem;
    font-weight: bolder;
}

/* Поля формы */
.input-group {
    margin: 1rem 0;
}

.input-group input,
.input-group textarea {
    width: 100%;
    padding: 0.8rem;
    border: 2px solid #ddd;
    border-radius: 12px;
    font-size: 1rem;
    transition: all 0.3s ease-in-out;
    background: white;
    outline: none;
}

.input-group textarea {
    height: 100px;
    resize: none;
}

/* Анимация границы */
.input-group input:focus,
.input-group textarea:focus {
    border-color: #71d1b4;
    box-shadow: 0 0 8px rgba(137, 236, 220, 0.3);
}

/* Кнопка */
.submit-button {
    width: 100%;
    padding: 1rem;
    background: #71d1b4;
    color: white;
    font-size: 1.2rem;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    transition: background 0.3s ease-in-out;
}

.submit-button:hover {
    background: #5ab399;
}

/* Информационные карточки */
.info-section {
    flex: 1;
    min-width: 250px;
    max-width: 400px;
}
.info-card {
    background: #fff;
    padding: 1.5rem;
    border-radius: 12px;
    text-align: center;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}
.info-card i {
    font-size: 2rem;
    color: #71d1b4;
    margin-bottom: 0.5rem;
}
.info-card h4 {
    font-size: 1.2rem;
    font-weight: bold;
}
.info-card p {
    font-size: 1rem;
    color: #555;
}


@media (max-width: 768px) {
    .contact-container {
        flex-direction: column;
        align-items: center;
        padding: 1.5rem;
    }

    .contact-form,
    .info-section {
        max-width: 100%;
        width: 90%;
        text-align: center;
    }

    .contact-form h3 {
        font-size: 1.8rem;
    }

    .input-group input,
    .input-group textarea {
        font-size: 1rem;
        padding: 0.7rem;
    }

    .submit-button {
        font-size: 1rem;
        padding: 0.8rem;
    }
}
</style>