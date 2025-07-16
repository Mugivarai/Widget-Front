import { defineStore } from "pinia";
import { nextTick } from "vue";
import { WebSocketService } from "@/services/websocket";

export const useChatStore = defineStore("chat", {
    state: () => ({
        scrollElement: null,
        socketService: null,
        isConnected: false,
        messages: [
            {
                sendler: "ai",
                messages: [
                    {
                        text: "Привет! Как я могу вам помочь?",
                        time: "12:30",
                    },
                ],
            },
            {
                sendler: "user",
                messages: [
                    {
                        text: "Мне нужна помощь с моим заказом",
                        time: "12:32",
                    },
                ],
            },
            {
                sendler: "employee",
                messages: [
                    {
                        text: "Как я могу вам помочь?",
                        time: "12:35",
                    },
                    {
                        text: "Спрашивайте и не стеняйтесь",
                        time: "12:36",
                    },
                ],
            },
            {
                sendler: "user",
                messages: [
                    {
                        text: "Сколько будет стоить мой заказ?",
                        time: "12:37",
                    },
                ],
            },
        ],
    }),
    actions: {
        async addMessage(textMessage, sendler, time) {
            if (
                this.messages.length === 0 ||
                this.messages[this.messages.length - 1].sendler !== sendler
            ) {
                this.messages.push({
                    sendler: sendler,
                    messages: [
                        {
                            text: textMessage,
                            time: time,
                        },
                    ],
                });
                await nextTick();
                this.scrollToBottom();
                return;
            }
            let last = this.messages[this.messages.length - 1];
            if (last.sendler === sendler) {
                last.messages.push({
                    text: textMessage,
                    time: time,
                });
            }
            await nextTick();
            this.scrollToBottom();
            return;
        },
        setScrollElement(element) {
            this.scrollElement = element;
        },
        scrollToBottom() {
            if (this.scrollElement) {
                this.scrollElement.scrollTop = this.scrollElement.scrollHeight;
            }
        },
        initializeWebSocket(url = process.env.VUE_APP_WEBSOCKET_URL) {
            console.log(url);
            console.log('WS URL:', process.env.VUE_APP_WEBSOCKET_URL);
            this.socketService = new WebSocketService(url, {
                onOpen:  () => { this.isConnected = true; },
                onClose: () => { this.isConnected = false; }
            });
        },
        sendWebSocketMessage(message) {
            if (this.socketService) {
                this.socketService.send(message);
            }
        },
        closeWebSocket() {
            if (this.socketService) {
                this.socketService.close();
                this.isConnected = false;
            }
        },
    },
});
