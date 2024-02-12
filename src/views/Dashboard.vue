<template>
    <div class="dashboard">
        <h1>USERLIST</h1>
        <h2>All existing users</h2>
        <ul>
            <li v-for="user in users" :key="user.id">{{ user.email }}</li>
        </ul>
    </div>
</template>
  
<script setup>
import { onMounted, ref } from 'vue';
import { db } from '../main'; // Make sure db is exported from main.js
import { collection, getDocs } from 'firebase/firestore';

const users = ref([]);

onMounted(async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    users.value = querySnapshot.docs.map(doc => doc.data());
});
</script>
  