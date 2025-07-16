<template>
    <footer class="main-container">
        <div class="input-wrapper">
            <textarea @input="resizeTextarea" v-model="textMessage" ref="textarea" rows="1" @scroll="onScroll"
                maxlength="5000"
                @keydown.enter.prevent="sendMessage"
                placeholder="Напишите сообщение..."></textarea>
            <button class="send-button" @click="sendMessage" :disabled="!textMessage.trim()">
                <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M11.5003 12H5.41872M5.24634 12.7972L4.24158 15.7986C3.69128 17.4424 3.41613 18.2643 3.61359 18.7704C3.78506 19.21 4.15335 19.5432 4.6078 19.6701C5.13111 19.8161 5.92151 19.4604 7.50231 18.7491L17.6367 14.1886C19.1797 13.4942 19.9512 13.1471 20.1896 12.6648C20.3968 12.2458 20.3968 11.7541 20.1896 11.3351C19.9512 10.8529 19.1797 10.5057 17.6367 9.81135L7.48483 5.24303C5.90879 4.53382 5.12078 4.17921 4.59799 4.32468C4.14397 4.45101 3.77572 4.78336 3.60365 5.22209C3.40551 5.72728 3.67772 6.54741 4.22215 8.18767L5.24829 11.2793C5.34179 11.561 5.38855 11.7019 5.407 11.8459C5.42338 11.9738 5.42321 12.1032 5.40651 12.231C5.38768 12.375 5.34057 12.5157 5.24634 12.7972Z"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>
        </div>
    </footer>
</template>

<script>
import { useChatStore } from '@/stores/chat';
export default {
    data() {
        return {
            textMessage: ''
        }
    },
    methods: {
        resizeTextarea() {
            this.$refs.textarea.style.height = 'auto';
            this.$refs.textarea.style.height = this.$refs.textarea.scrollHeight + 'px';
        },
        onScroll() {
            const el = this.$refs.textarea;
            el.classList.toggle('has-shadow', el.scrollTop > 0);
        },
        sendMessage() {
            if (this.textMessage.trim()) {
                let data = new Date();
                let time = `${data.getHours()}:${data.getMinutes()}`;
                useChatStore().addMessage(this.textMessage.trim(),'user',time);
                useChatStore().sendWebSocketMessage(this.textMessage.trim());
                this.textMessage = ''
                this.$refs.textarea.style.height = '40px'
            }
        }
    }
}
</script>

<style scoped>
.main-container {
    width: 100%;
    padding: 12px 16px;
    background: var(--card);
    border-top: 1px solid var(--border);
    box-sizing: border-box;
}

.input-wrapper {
    position: relative;
    display: flex;
    align-items: flex-end;
}

textarea {
    width: 100%;
    min-height: 42px;
    max-height: 120px;
    resize: none;
    overflow-y: auto;
    border-radius: var(--border-radius);
    padding: 10px 48px 10px 16px;
    font-size: 14px;
    line-height: 1.4;
    font-family: 'Google Sans', sans-serif;
    background: var(--card);
    color: var(--text);
    border: 1px solid var(--border);
    transition: all 0.3s ease;
    scrollbar-width: none;
    -ms-overflow-style: none;
}

textarea.has-shadow {
  box-shadow: inset 0 8px 8px -8px var(--textarea-shadow);
}

textarea::placeholder{
    color: var(--text);
}

textarea::-webkit-scrollbar {
    width: 0;
    height: 0;
}

textarea:focus {
    outline: none;
    border-color: var(--primary);
}

.send-button {
    position: absolute;
    overflow: hidden;
    right: 9px;
    bottom: 5px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background: var(--primary);
    transition: all 0.2s ease;
    --text-on-primary: var(--text-light);
}

.send-button:hover:not(:disabled) {
    background: var(--hover);
    transform: scale(1.05);
}

.send-button:active:not(:disabled) {
    transform: scale(0.95);
}

.send-button:disabled {
    background: var(--disabled);
    cursor: not-allowed;
    opacity: 0.7;
}

.dark-theme .send-button {
    --text-on-primary: var(--text);
}

.send-button svg path{
    stroke: var(--text);
}
</style>