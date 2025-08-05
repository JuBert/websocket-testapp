<script setup lang="ts">
const name = useName()
const { status, data, send, open, close } = useWebSocket(`ws://${location.host}/api/websocket`)

const history = useHistory()
watch(data, (newValue) => {
    history.value.push(`${newValue}`)
})

const message = ref('')
const sendData = () => {
    send(`${name.value}: ${message.value}`)
    history.value.push(`${name.value}: ${message.value}`)
    message.value = ''
}

const getSender = (msg: string) => msg.split(':')[0]
</script>

<template>
    <div class="chat-container">
        <div 
            class="chat-history" 
            ref="historyContainer"
        >
            <div 
                v-for="(entry, idx) in history" 
                :key="idx" 
                :class="[
                    'chat-message-wrapper',
                    getSender(entry) === name ? 'my-message-wrapper' : 'other-message-wrapper'
                ]"
            >
                <span 
                    class="chat-sender" 
                    :class="getSender(entry) === name ? 'my-sender' : 'other-sender'"
                >
                    {{ getSender(entry) }}
                </span>
                <p 
                    v-if="entry.split(':').slice(1).join(':').trim()" 
                    :class="[
                        'chat-message',
                        getSender(entry) === name ? 'my-message' : 'other-message'
                    ]"
                >
                    {{ entry.split(':').slice(1).join(':').trim() }}
                </p>
            </div>
        </div>
        <form 
            class="chat-input-form" 
            @submit.prevent="sendData"
        >
            <input 
                type="text" 
                v-model="message" 
                placeholder="Type your message here" 
                class="chat-input"
            />
            <button 
                type="submit" 
                class="chat-send-btn"
            >
                Send
            </button>
        </form>
    </div>
</template>

<style scoped>
html, body, #__nuxt {
    height: 100%;
    margin: 0;
    padding: 0;
}

body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

#app, #__nuxt {
    flex: 1;
    display: flex;
    flex-direction: column;
}

.chat-container {
    display: flex;
    flex-direction: column;
    height: 90vh;
    max-width: 500px;
    margin: 0 auto 0 auto;
    border: 1px solid #ddd;
    border-radius: 12px;
    background: #f9f9f9;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    justify-content: flex-end;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    margin-bottom: 20px;
}

.chat-history {
    flex: 1;
    overflow-y: auto;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.chat-message-wrapper {
    display: flex;
    flex-direction: column;
    max-width: 80%;
}

.my-message-wrapper {
    align-self: flex-end;
    text-align: right;
}

.other-message-wrapper {
    align-self: flex-start;
    text-align: left;
}

.chat-sender {
    font-size: 0.8rem;
    color: #888;
    margin-bottom: 2px;
    font-weight: 500;
    letter-spacing: 0.01em;
}

.my-sender {
    color: #5ad18b;
}

.other-sender {
    color: #aaa;
}

.chat-message {
    padding: 0.5rem 1rem;
    border-radius: 16px;
    word-break: break-word;
    margin-bottom: 0.25rem;
    display: inline-block;
}

.my-message {
    background: #25d366;
    color: #fff;
    align-self: flex-end;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 16px;
}

.other-message {
    background: #ececec;
    color: #222;
    align-self: flex-start;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 16px;
}

.chat-input-form {
    display: flex;
    padding: 1rem;
    border-top: 1px solid #eee;
    background: #fff;
    border-radius: 0 0 12px 12px;
}

.chat-input {
    flex: 1;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    border: 1px solid #ccc;
    font-size: 1rem;
    outline: none;
}

.chat-send-btn {
    margin-left: 0.5rem;
    padding: 0.5rem 1.5rem;
    border-radius: 20px;
    border: none;
    background: #25d366;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.2s;
}

.chat-send-btn:hover {
    background: #128c7e;
}
</style>
