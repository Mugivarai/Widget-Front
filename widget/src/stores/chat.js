import { defineStore } from 'pinia'
import { nextTick } from 'vue'

export const useChatStore = defineStore('chat', {
    state: () => ({
        scrollElement: null,
        messages: [
                {
                    'sendler': 'ai',
                    'messages': [
                        {
                            text: "Привет! Как я могу вам помочь?",
                            time: "12:30"
                        }
                    ]
                },
                {
                    'sendler': 'user',
                    'messages': [
                        {
                            text: "Мне нужна помощь с моим заказом",
                            time: "12:32",
                        }
                    ]
                },
                {
                    'sendler': 'employee',
                    'messages': [
                        {
                            text: "Как я могу вам помочь?",
                            time: "12:35",
                        },
                        {
                            text: "Спрашивайте и не стеняйтесь",
                            time: "12:36",
                        }
                    ]
                },
                {
                    'sendler': 'user',
                    'messages': [
                        {
                            text: "Сколько будет стоить мой заказ?",
                            time: "12:37",
                        }
                    ]
                },
            ]
    }),
    actions: {
        async addMessage(textMessage,sendler,time){
            if(this.messages.length === 0 || this.messages[this.messages.length-1].sendler !== sendler){
                this.messages.push({
                    'sendler': sendler,
                    'messages': [
                        {
                            'text': textMessage,
                            'time': time
                        }
                    ]
                });
                await nextTick();
                this.scrollToBottom();
                return;
            }
            let last = this.messages[this.messages.length-1];
            if( last.sendler === sendler){
                last.messages.push({
                    'text': textMessage,
                    'time': time
                });
            }
            await nextTick();
            this.scrollToBottom();
            return;
        },
        setScrollElement(element) {
            this.scrollElement = element
        },
        scrollToBottom() {
            if (this.scrollElement) {
                this.scrollElement.scrollTop = this.scrollElement.scrollHeight
            }
        }
    }
})