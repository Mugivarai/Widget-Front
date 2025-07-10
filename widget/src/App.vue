<template>
  <data class="widget-chat-container">
    <div v-if="!openWidget" class="circle-widget" @click="openWindow"></div>
    <div v-else class="chat-container" ref="widgetChat">
      <ChatHeader @closeWidget="closeWindow"/>
      <ChatMessages />
      <ChatInputMessage />
    </div>
  </data>
</template>

<script>
import { gsap } from "gsap";
import ChatHeader from "./components/ChatHeader.vue";
import ChatMessages from "./components/ChatMessages.vue";
import ChatInputMessage from "./components/ChatInputMessage.vue";
import 'google-sans/index.css';
export default {
  components:{
    ChatHeader,
    ChatMessages,
    ChatInputMessage
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
  --height-widget-header: 50px;
  --border-radius: 12px;
  /* ===== Светлая тема (по умолчанию) ===== */
  --color-bg: #f8f5f2;               /* Мягкий бежево-серый фон */
  --color-text: #333333;             /* Тёмно-серый текст */
  --color-primary: #6d8b74;          /* Приглушённый зелёный */
  --color-secondary: #a7beae;        /* Светлый зелёно-серый */
  --color-accent: #d0b8a8;           /* Тёплый бежевый */
  --color-border: #e0d5c8;           /* Мягкая граница */
  --color-card: #ffffff;             /* Карточки белые */
  --color-shadow: rgba(0, 0, 0, 0.08); /* Лёгкая тень */
  --color-textarea-shadow: rgba(0,0,0,0.4);
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
  --color-dark-textarea-shadow: rgba(255, 255, 255, 0.4);
  --color-hover-dark: #2e2e2e;       /* Тёмный hover */
  --color-disabled-dark: #555555;    /* Серый для disabled */
  --color-text-light-dark: #b0b0b0;  /* Вторичный текст */
  --color-link-dark: #8ab4f8;        /* Яркий, но не режущий синий */
}

/* ===== Применение светлой темы (по умолчанию) ===== */
body {
  --bg: var(--color-bg);
  --inverse-bg: var(--color-bg-dark);
  --inverse-text: var(--color-text-dark);
  --text: var(--color-text);
  --primary: var(--color-primary);
  --secondary: var(--color-secondary);
  --accent: var(--color-accent);
  --border: var(--color-border);
  --card: var(--color-card);
  --shadow: var(--color-shadow);
  --textarea-shadow: var(--color-textarea-shadow);
  --hover: var(--color-hover);
  --disabled: var(--color-disabled);
  --text-light: var(--color-text-light);
  --link: var(--color-link);
  --no-user-message-bg: #f0f4f8;
  --no-user-message-text: #243b53;
  --user-message-bg: #3d7aed;
  --user-message-text: #ffffff;
  --user-message-meta: rgba(255, 255, 255, 0.7);
  --message-meta-color: rgba(36, 59, 83, 0.6);
  --message-icon-bg: #e0e7ff;
  --message-icon-color: #4f46e5;
  --ai-icon-color: #10b981;
  --operator-icon-color: #6366f1;
  --message-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  margin: 0%;
  padding: 0%;
}

/* ===== Применение тёмной темы (если есть класс .dark-theme) ===== */
body.dark-theme {
  --bg: var(--color-bg-dark);
  --inverse-bg: var(--color-bg);
  --inverse-text: var(--color-text);
  --text: var(--color-text-dark);
  --primary: var(--color-primary-dark);
  --secondary: var(--color-secondary-dark);
  --textarea-shadow: var(--color-dark-textarea-shadow);
  --accent: var(--color-accent-dark);
  --border: var(--color-border-dark);
  --card: var(--color-card-dark);
  --shadow: var(--color-shadow-dark);
  --hover: var(--color-hover-dark);
  --disabled: var(--color-disabled-dark);
  --text-light: var(--color-text-light-dark);
  --link: var(--color-link-dark);
  --no-user-message-bg: #2d3748;
  --no-user-message-text: #f7fafc;
  --user-message-bg: #4f46e5;
  --user-message-text: #f3f4f6;
  --user-message-meta: rgba(243, 244, 246, 0.7);
  --message-meta-color: rgba(247, 250, 252, 0.6);
  --message-icon-bg: #3730a3;
  --message-icon-color: #a5b4fc;
  --ai-icon-color: #34d399;
  --operator-icon-color: #818cf8;
  --message-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
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
  border-radius: var(--border-radius);
  box-shadow: 0 4px 16px var(--shadow);
  border: 1px solid var(--border);
  overflow: hidden;           
  display: flex;
  flex-direction: column;
  position: relative;
}

</style>
