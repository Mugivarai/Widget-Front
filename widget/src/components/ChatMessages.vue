<template>
    <main class="main-container" ref="mainScroll">
        <div class="message-container">
            <div class="subsection" v-for="(value, key) in chatStore.messages" :key="key">
                <div v-if="value['sendler'] !== 'user'" class="two-column">
                    <div class="icon-image">
                        <span class="ai-icon" v-if="value.sendler==='ai'">
                            <svg viewBox="0 0 512 512" version="1.1">
                                <title>ai</title>
                                <g id="Page-1" stroke="none" stroke-width="1" fill-rule="evenodd">
                                    <g id="icon" transform="translate(64.000000, 64.000000)">
                                        <path
                                            d="M320,64 L320,320 L64,320 L64,64 L320,64 Z M171.749388,128 L146.817842,128 L99.4840387,256 L121.976629,256 L130.913039,230.977 L187.575039,230.977 L196.319607,256 L220.167172,256 L171.749388,128 Z M260.093778,128 L237.691519,128 L237.691519,256 L260.093778,256 L260.093778,128 Z M159.094727,149.47526 L181.409039,213.333 L137.135039,213.333 L159.094727,149.47526 Z M341.333333,256 L384,256 L384,298.666667 L341.333333,298.666667 L341.333333,256 Z M85.3333333,341.333333 L128,341.333333 L128,384 L85.3333333,384 L85.3333333,341.333333 Z M170.666667,341.333333 L213.333333,341.333333 L213.333333,384 L170.666667,384 L170.666667,341.333333 Z M85.3333333,0 L128,0 L128,42.6666667 L85.3333333,42.6666667 L85.3333333,0 Z M256,341.333333 L298.666667,341.333333 L298.666667,384 L256,384 L256,341.333333 Z M170.666667,0 L213.333333,0 L213.333333,42.6666667 L170.666667,42.6666667 L170.666667,0 Z M256,0 L298.666667,0 L298.666667,42.6666667 L256,42.6666667 L256,0 Z M341.333333,170.666667 L384,170.666667 L384,213.333333 L341.333333,213.333333 L341.333333,170.666667 Z M0,256 L42.6666667,256 L42.6666667,298.666667 L0,298.666667 L0,256 Z M341.333333,85.3333333 L384,85.3333333 L384,128 L341.333333,128 L341.333333,85.3333333 Z M0,170.666667 L42.6666667,170.666667 L42.6666667,213.333333 L0,213.333333 L0,170.666667 Z M0,85.3333333 L42.6666667,85.3333333 L42.6666667,128 L0,128 L0,85.3333333 Z"
                                            id="Combined-Shape">
                                        </path>
                                    </g>
                                </g>
                            </svg>
                        </span>
                        <span class="operator-icon" v-else>
                            <svg viewBox="0 0 32 32">
                                <path
                                    d="M16 15.503A5.041 5.041 0 1 0 16 5.42a5.041 5.041 0 0 0 0 10.083zm0 2.215c-6.703 0-11 3.699-11 5.5v3.363h22v-3.363c0-2.178-4.068-5.5-11-5.5z" />
                            </svg>
                        </span>
                    </div>
                    <div class="column-messages">
                        <div v-for="(v, k) in value['messages']" :key="k" class="no-user-message">
                            <p>{{ v['text'] }}</p>
                            <span>{{ v['time'] }}</span>
                        </div>
                    </div>
                </div>
                <div v-else class="column-messages one-column">
                    <div v-for="(v, k) in value['messages']" :key="k" class="user-message">
                        <p>{{ v['text'] }}</p>
                        <span>{{ v['time'] }}</span>
                    </div>
                </div>
            </div>
        </div>
    </main>
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
  mounted(){
    this.chatStore.setScrollElement(this.$refs.mainScroll);
    this.chatStore.initializeWebSocket();
  },
  unmounted(){
    this.chatStore.closeWebSocket();
  }
}
</script>

<style scoped>
.main-container {
    width: 100%;
    flex: 1;
    overflow-y: scroll;
    scrollbar-width: none;
}

.main-container::-webkit-scrollbar {
    width: 0;
    height: 0;
}

.message-container {
    width: 100%;
    height: 100%;
    font-family: 'Google Sans', sans-serif;
    font-size: 14px;
    padding: 5px;
}

.subsection {
    width: 100%;
    height: auto;
    display: flex;
    padding: 10px 0px;
    flex-direction: column;
}

.two-column {
    display: flex;
    gap: 5px;
}

.one-column{
    align-self: flex-end;
}

.two-column img {
    width: 100%;
    height: 100%;
}

.icon-image {
  padding: 2px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--message-icon-bg);
  /* flex-shrink: 0; */
}

.icon-image svg {
  width: 100%;
  height: 100%;
  fill: var(--message-icon-color);
}

.ai-icon {
    fill: var(--text);
}

.operator-icon {
    fill: var(--text);
}

.no-user-message {
  max-width: 85%;
  align-self: flex-start;
  background: var(--no-user-message-bg);
  color: var(--no-user-message-text);
  padding: 12px 16px;
  border-radius: 0 var(--border-radius) var(--border-radius) var(--border-radius);
  position: relative;
  box-shadow: var(--message-shadow);
}

.no-user-message p {
  margin: 0 0 4px 0;
  font-size: 14px;
  line-height: 1.4;
}

.no-user-message span {
  font-size: 11px;
  color: var(--message-meta-color);
  display: block;
  text-align: right;
}

.user-message {
  max-width: 85%;
  align-self: flex-end;
  background: var(--user-message-bg);
  color: var(--user-message-text);
  padding: 12px 16px;
  border-radius: var(--border-radius) 0 var(--border-radius) var(--border-radius);
  position: relative;
  box-shadow: var(--message-shadow);
}

.user-message p {
  margin: 0 0 4px 0;
  font-size: 14px;
  line-height: 1.4;
}

.user-message span {
  font-size: 11px;
  color: var(--user-message-meta);
  display: block;
  text-align: right;
}

.column-messages {
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-grow: 1;
}

.no-user-message, .user-message {
  animation: messageAppear 0.3s ease-out;
}

@keyframes messageAppear {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>