import { useChatStore } from "@/stores/chat";

export class WebSocketService {
    constructor(url) {
        this.url = url;
        this.socket = null;
        this.chatStore = useChatStore();
        this.reconnectAttempts = 0;
        this.maxReconnectAttempts = 5;
        this.reconnectDelay = 1000;
        this.isManualClose = false;

        this.connect();
    }

    connect() {
        this.socket = new WebSocket(this.url);

        this.socket.onopen = () => {
            console.log("WebSocket connected");
            this.reconnectAttempts = 0;
        };

        this.socket.onmessage = (event) => {
            let data = {};
            try {
                data.sender = 'ai';
                data.content = event.data;
                data.type = 'message';
                // data = JSON.parse(event.data);
            } catch (err) {
                console.error("Error parsing WebSocket message:", err);
                return;
            }
            this.handleMessage(data);
        };

        this.socket.onclose = (event) => {
            if (this.isManualClose) return;
            console.log(
                `WebSocket closed. Code: ${event.code}, Reason: ${event.reason}`
            );

            if (this.reconnectAttempts < this.maxReconnectAttempts) {
                this.reconnectAttempts += 1;
                const delay =
                    this.reconnectDelay * Math.pow(2, this.reconnectAttempts - 1);
                console.log(
                    `Reconnecting (${this.reconnectAttempts}/${this.maxReconnectAttempts}) in ${delay}ms…`
                );
                setTimeout(() => this.connect(), delay);
            }
        };

        this.socket.onerror = (err) => {
            console.error("WebSocket error:", err);
        };
    }

    handleMessage(data) {
        if (data.type === "message") {
            const now = new Date();
            const timeString = now.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
            });
            this.chatStore.addMessage(data.content, data.sender || "ai", timeString);
        }
    }

    send(message) {
        if (!this.socket || this.socket.readyState !== WebSocket.OPEN) {
            return;
        }
        const payload =
            typeof message === "string" ? message : JSON.stringify(message);
        this.socket.send(payload);
    }

    close() {
        this.isManualClose = true;
        if (this.socket) {
            this.socket.close(1000, "Closed by client");
        }
    }

    get status() {
        return this.socket ? this.socket.readyState : WebSocket.CLOSED;
    }
}
