<script setup lang="ts">
const inputName = ref<string | undefined>(undefined)
const name = useName()
const setName = () => {
    name.value = inputName.value
}   
</script>
<template>
  <div>
    <div v-if="!name">
        <label for="name">input your name</label>
        <form @submit.prevent="setName">
            <input type="text" name="name" id="name" v-model="inputName" placeholder="Type your name here" />
            <button type="submit">Submit Name</button>
        </form>
    </div>
    <WebSocket v-else />
  </div>
</template>
