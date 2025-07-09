<!-- <template>
  <div class="container">
    <div 
      class="circle" 
      @click="openWindow"
      :style="{ backgroundColor: circleColor }"
    ></div>

    <div 
      class="window" 
      v-if="isOpen"
      ref="window"
    >
      <div class="window-content">
        <h2>Привет, это окно!</h2>
        <p>Анимация как в Windows 11 / Linux — растягивание из угла.</p>
        <button @click="closeWindow">Закрыть</button>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";

export default {
  data() {
    return {
      isOpen: false,
      circleColor: "#4CAF50" 
    };
  },
  methods: {
    openWindow() {
      this.isOpen = true;
      this.$nextTick(() => {
        const window = this.$refs.window;
        
        gsap.fromTo(
          window,
          { 
            scale: 0,
            transformOrigin: "bottom right",
            opacity: 0,
            borderRadius: "100%"
          },
          { 
            scale: 1,
            opacity: 1,
            borderRadius: "8px",
            duration: 0.5,
            ease: "expo.out"
          }
        );
      });
    },
    closeWindow() {
      const window = this.$refs.window;
      
      gsap.to(window, {
        scale: 0,
        opacity: 0,
        borderRadius: "100%",
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          this.isOpen = false;
        }
      });
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.circle {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.2s;
}

.circle:hover {
  transform: scale(1.1);
}

.window {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  background: white;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  padding: 20px;
  border-radius: 8px;
}

.window-content {
  text-align: center;
}

button {
  margin-top: 15px;
  padding: 8px 16px;
  background: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style> -->
<template>
  <data class="widget-chat-container">
    <div v-if="!openWidget" class="circle-widget" @click="openWindow"></div>
    <div v-else class="chat-container" ref="widgetChat">
      <ChatHeader @closeWidget="closeWindow"/>
    </div>
  </data>
</template>

<script>
import { gsap } from "gsap";
import ChatHeader from "./components/ChatHeader.vue";
export default {
  components:{
    ChatHeader
  },
  data(){
    return{
      openWidget: false
    }
  },
  methods: {
    openWindow() {
      this.openWidget = true;
      this.$nextTick(() => {
        const window = this.$refs.widgetChat;
        gsap.fromTo(
          window,
          { 
            scale: 0,
            transformOrigin: "bottom right",
            opacity: 0,
            borderRadius: "100%"
          },
          { 
            scale: 1,
            opacity: 1,
            borderRadius: "8px",
            duration: 0.5,
            ease: "expo.out"
          }
        );
      });
    },
    closeWindow() {
      const window = this.$refs.widgetChat;
      gsap.to(window, {
        scale: 0,
        opacity: 0,
        borderRadius: "100%",
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          this.openWidget = false;
        }
      });
    }
  }
}
</script>

<style>
*{
  box-sizing: border-box;
}


:root {
  /* ===== Светлая тема (по умолчанию) ===== */
  --color-bg: #f8f5f2;               /* Мягкий бежево-серый фон */
  --color-text: #333333;             /* Тёмно-серый текст */
  --color-primary: #6d8b74;          /* Приглушённый зелёный */
  --color-secondary: #a7beae;        /* Светлый зелёно-серый */
  --color-accent: #d0b8a8;           /* Тёплый бежевый */
  --color-border: #e0d5c8;           /* Мягкая граница */
  --color-card: #ffffff;             /* Карточки белые */
  --color-shadow: rgba(0, 0, 0, 0.08); /* Лёгкая тень */
  --color-hover: #f0e6dd;            /* Тёплый hover */
  --color-disabled: #d3d3d3;         /* Серый для disabled */
  --color-text-light: #5a5a5a;       /* Вторичный текст */
  --color-link: #7a9cc6;             /* Мягкий синий для ссылок */

  /* ===== Тёмная тема (активируется классом .dark-theme) ===== */
  --color-bg-dark: #3a3a3a;          /* Тёмно-серый фон */
  --color-text-dark: #e0e0e0;        /* Светло-серый текст */
  --color-primary-dark: #6d8b74;     /* Тот же зелёный, но в темноте */
  --color-secondary-dark: #4a5d63;   /* Приглушённый сине-серый */
  --color-accent-dark: #a78a7f;      /* Тёплый коричнево-бежевый */
  --color-border-dark: #3a3a3a;      /* Граница темнее фона */
  --color-card-dark: #242424;        /* Карточки чуть светлее фона */
  --color-shadow-dark: rgba(0, 0, 0, 0.3); /* Более насыщенная тень */
  --color-hover-dark: #2e2e2e;       /* Тёмный hover */
  --color-disabled-dark: #555555;    /* Серый для disabled */
  --color-text-light-dark: #b0b0b0;  /* Вторичный текст */
  --color-link-dark: #8ab4f8;        /* Яркий, но не режущий синий */
}

/* ===== Применение светлой темы (по умолчанию) ===== */
body {
  --bg: var(--color-bg);
  --text: var(--color-text);
  --primary: var(--color-primary);
  --secondary: var(--color-secondary);
  --accent: var(--color-accent);
  --border: var(--color-border);
  --card: var(--color-card);
  --shadow: var(--color-shadow);
  --hover: var(--color-hover);
  --disabled: var(--color-disabled);
  --text-light: var(--color-text-light);
  --link: var(--color-link);
  margin: 0%;
  padding: 0%;
}

/* ===== Применение тёмной темы (если есть класс .dark-theme) ===== */
body.dark-theme {
  --bg: var(--color-bg-dark);
  --text: var(--color-text-dark);
  --primary: var(--color-primary-dark);
  --secondary: var(--color-secondary-dark);
  --accent: var(--color-accent-dark);
  --border: var(--color-border-dark);
  --card: var(--color-card-dark);
  --shadow: var(--color-shadow-dark);
  --hover: var(--color-hover-dark);
  --disabled: var(--color-disabled-dark);
  --text-light: var(--color-text-light-dark);
  --link: var(--color-link-dark);
}

#app{
  height: 100vh;
  width: 100%;
  background-color: #3a3a3a;
}

.widget-chat-container {
  position: fixed;
  z-index: 9999;
  bottom: 10%;
  right: 40px;
}

.circle-widget{
  cursor: pointer;
  width: 85px;
  height: 85px;
  border-radius: 100%;
  background: var(--bg);   
  box-shadow: 0 4px 16px var(--shadow);
  transition: all 0.5s ease-in-out;
}

/* .circle-widget:hover{
  
} */

.chat-container{
  width: 350px;               
  height: 500px;              
  max-height: 80vh;           
  background: var(--bg);      
  border-radius: 12px;
  box-shadow: 0 4px 16px var(--shadow);
  border: 1px solid var(--border);
  overflow: hidden;           
  display: flex;
  flex-direction: column;
  position: relative;
}

</style>
