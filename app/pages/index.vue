<script setup lang="ts">
const inputName = ref<string | undefined>(undefined)
const name = useName()
const setName = () => {
    name.value = inputName.value
}   
</script>

<template>
  <div class="index-container">
    <div v-if="!name" class="centered-form">
        <label for="name" class="form-label">Enter your name</label>
        <form @submit.prevent="setName" class="name-form">
            <input type="text" name="name" id="name" v-model="inputName" placeholder="Type your name here" class="name-input" />
            <button type="submit" class="primary-btn">Submit Name</button>
        </form>
    </div>
    <div v-else class="centered-form">
        <p>{{ `Welcome ${name}` }}</p>
        <button class="primary-btn" @click="navigateTo({path: '/room'})">Enter chat room</button>
    </div>
  </div>
</template>

<style scoped>
.index-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f7fafc;
  padding: 2rem 1rem;
}

.centered-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 350px;
  background: #fff;
  padding: 2rem 1.5rem;
  border-radius: 16px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.07);
}

.form-label {
  font-size: 1.1rem;
  color: #444;
  margin-bottom: 1rem;
  font-weight: 500;
  letter-spacing: 0.01em;
}

.name-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
}

.name-input {
  padding: 0.7rem 1rem;
  border-radius: 20px;
  border: 1px solid #ccc;
  font-size: 1rem;
  outline: none;
  width: 100%;
  box-sizing: border-box;
}

.primary-btn {
  padding: 0.7rem 1.5rem;
  border-radius: 20px;
  border: none;
  background: #25d366;
  color: #fff;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  width: 100%;
}

.primary-btn:hover {
  background: #128c7e;
}

.centered-form p {
  font-size: 1.5rem;
  color: #1dbb57;
  font-weight: 600;
  margin-bottom: 1.5rem;
  letter-spacing: 0.01em;
  text-align: center;
  border-radius: 12px;
  padding: 0.7rem 1rem;
  width: 100%;
  box-sizing: border-box;
}

@media (max-width: 600px) {
  .centered-form {
    max-width: 100%;
    padding: 1.5rem 0.5rem;
  }
  .index-container {
    padding: 1rem 0.2rem;
  }
}
</style>
