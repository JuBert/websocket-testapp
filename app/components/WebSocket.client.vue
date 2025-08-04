<script setup lang="ts">
const name = useName()
const { status, data, send, open, close} = useWebSocket(`wss://${location.host}/api/websocket`)

const history = ref<string[]>([])
watch(data, (newValue) => {
    history.value.push(`${newValue}`)
})

const message = ref('')
const sendData = () => {
    send(`${name.value}: ${message.value}`)
    history.value.push(`${name.value}: ${message.value}`)
    message.value = ''
}

</script>

<template>
    <div>
        <form @submit.prevent="sendData">
            <input type="text" v-model="message" placeholder="Type your message here" />
            <button type="submit">Send</button>
        </form>
        <div>
            <p v-for="entry in history">
                {{ entry }}
            </p>
        </div>
    </div>
</template>
