<template>
    <header>
        <div class="logo">
            <img :src="require('@/assets/ai-logo.png')" alt="logo">
            <div class="ai-status-container">
                <span>ИИ помощник</span>
                <div class="ai-status">
                    <div class="ai-status-bg">
                        <div :class="['ai-status-circle ', chatStore.isConnected ? 'online' : 'offline']"></div>
                        <span :class="['ai-status-title ', chatStore.isConnected ? 'online' : 'offline']">{{chatStore.isConnected?'Online':'Offline'}}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="setting-buttons">
            <button class="theme-toggle" @click="toggleTheme" aria-label="Сменить тему">
                <svg class="theme-icon sun" viewBox="0 0 24 24">
                    <path
                        d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z" />
                </svg>
                <svg class="theme-icon moon" viewBox="0 0 24 24">
                    <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1-8.313-12.454z" />
                </svg>
            </button>
            <button class="close-widget-button" @click="closeWidget"></button>
        </div>

    </header>
</template>

<script>
import { useChatStore } from '@/stores/chat'
export default {
    setup() {
        const chatStore = useChatStore()
        return {
            chatStore
        }
    },
    methods: {
        closeWidget() {
            this.$emit('closeWidget')
        },
        toggleTheme() {
            document.body.classList.toggle('dark-theme');
        }
    }
}
</script>

<style scoped>
header {
    width: 100%;
    height: var(--height-widget-header);
    background-color: var(--primary);
    padding: 0px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5px;
}

.close-widget-button {
    z-index: 10;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: none;
    padding: 0;
    background-color: var(--bg);
    color: var(--text);
    cursor: pointer;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    line-height: 1;
}

.close-widget-button::before {
    content: "×";
    display: block;
    color: inherit;
}

.close-widget-button:hover {
    background-color: var(--hover);
    transform: scale(1.1);
}

.close-widget-button:active {
    transform: scale(0.95);
}

.logo {
    font-family: 'Google Sans', sans-serif;
    font-weight: 400;
    color: white;
    display: flex;
    justify-content: center;
    height: 100%;
    align-items: center;
    gap: 5px;
}

.logo img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
}

.ai-status-container {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.ai-status-container>span {
    background-color: var(--bg);
    color: var(--text);
    border-radius: var(--border-radius);
    padding: 4px 8px;
    font-size: 12px;
    font-weight: 500;
}

.ai-status-circle {
    width: 8px;
    height: 8px;
    border-radius: 50%;
}

.ai-status-circle.online {
    background-color: #4ade80;
}

.ai-status-title.online {
    color: #4ade80;
}

.ai-status-title.offline {
    color: #de4a4a;
}

.ai-status-circle.offline {
    background-color: #de4a4a;
}

.ai-status-title {
    font-size: 10px;
    font-weight: 500;
}

.ai-status {
    display: flex;
}

.ai-status-bg {
    background-color: var(--bg);
    border-radius: var(--border-radius);
    padding: 4px 8px;
    display: flex;
    align-items: center;
    gap: 4px;
}

.theme-toggle {
    position: relative;
    width: 32px;
    height: 32px;
    background: var(--bg);
    border: none;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
}

.theme-toggle:hover {
    background: var(--hover);
    transform: scale(1.1);
}

.theme-icon {
    position: absolute;
    width: 20px;
    height: 20px;
    fill: var(--text);
    transition: opacity 0.3s ease, transform 0.6s cubic-bezier(0.68, -0.55, 0.27, 1.55);
}

.sun {
    opacity: 1;
    transform: rotate(0deg) scale(1);
}

.moon {
    opacity: 0;
    transform: rotate(-45deg) scale(0.5);
}

.dark-theme .sun {
    opacity: 0;
    transform: rotate(45deg) scale(0.5);
}

.dark-theme .moon {
    opacity: 1;
    transform: rotate(0deg) scale(1);
}

.theme-toggle:active {
    transform: scale(0.9);
}

.responder-switch {
    display: flex;
    align-items: center;
    height: 100%;
}

#responder-toggle {
    display: none;
}

.toggle-container {
    position: relative;
    width: 80px;
    height: 36px;
    border-radius: 18px;
    background-color: var(--bg);
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    padding: 0 6px;
}

.toggle-icon {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    z-index: 2;
}

.toggle-icon svg {
    width: 20px;
    height: 20px;
    stroke: var(--text-light);
}

.ai-icon {
    fill: var(--text);
    margin-right: auto;
}


.operator-icon {
    margin-left: auto;
    fill: var(--text);
}

.toggle-handle {
    position: absolute;
    left: 4px;
    width: 28px;
    height: 28px;
    background-color: var(--accent);
    border-radius: 50%;
    transition: all 0.3s ease-in-out;
    z-index: 1;
}

#responder-toggle:checked+.toggle-container .toggle-handle {
    transform: translateX(44px);
}

#responder-toggle:checked+.toggle-container .ai-icon svg {
    stroke: var(--text-light);
}

#responder-toggle:not(:checked)+.toggle-container .operator-icon svg {
    stroke: var(--text-light);
}

#responder-toggle:checked+.toggle-container .operator-icon svg,
#responder-toggle:not(:checked)+.toggle-container .ai-icon svg {
    stroke: var(--text);
}

.toggle-container:hover {
    background-color: var(--hover);
}

.toggle-container:hover .toggle-handle {
    transform: scale(1.1);
    transform-origin: center;
}

#responder-toggle:checked+.toggle-container:hover .toggle-handle {
    transform: translateX(44px) scale(1.1);
}

.setting-buttons {
    display: flex;
    gap: 5px;
    align-items: center;
}
</style>