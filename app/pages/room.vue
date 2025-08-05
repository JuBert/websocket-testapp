<template>
    <div>
        <button class="leave-btn" @click="navigateTo({path: '/'})">← Leave</button>
        <ChatRoom />
    </div>
</template>

<style scoped>
.leave-btn {
    margin: 1rem 0 1.5rem 0;
    padding: 0.5rem 1.5rem;
    border-radius: 10px;
    border: none;
    background: #e0e0e0;
    color: #444;
    cursor: pointer;
    font-size: 1rem;
    transition: background 0.2s;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}
.leave-btn:hover {
    background: #bdbdbd;
}
</style>