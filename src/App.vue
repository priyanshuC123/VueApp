<template >
  <div class="wrapper">

<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <RouterLink class="navbar-brand" to="/">Brand</RouterLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <RouterLink class="nav-link " to="/">Home</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink v-if="isLoggeIn" class="nav-link active" to="/Dashboard">Dashboard</RouterLink>
        </li>
      </ul>
      <ul class="navbar-nav">
        <li class="nav-item">
          <RouterLink v-if="!isLoggeIn"  class="nav-link active" to="/signin">Login</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink v-if="!isLoggeIn"  class="nav-link active" to="/register">Register</RouterLink>
        </li>
          
      </ul>
      <button class="btn btn-outline-primary" @click="HandleSignout" v-if="isLoggeIn">Log out</button>
    </div>
    
  </div>
</nav>
</div>
 <router-view/>
</template>


<script setup>
   import { onMounted,ref } from 'vue';
   import {auth} from './main'
   import { onAuthStateChanged,signOut } from 'firebase/auth';
   import { useRouter } from 'vue-router';

   const isLoggeIn = ref(false);
   onMounted(()=>{
    onAuthStateChanged(auth,(user)=>{
      if(user){
        isLoggeIn.value=true;
      }else{
        isLoggeIn.value=false;
      }
    });
   });
   
   const router = useRouter();

   const HandleSignout= async ()=>{
     try {
     await signOut(auth);
    router.push('/signin'); // Redirect to sign-in page after sign-out
  } catch (error) {
    console.error('Sign out error:', error);
    // Handle errors here, such as showing an error message to the user
  }
   };
</script>

<style scoped>
  .r-link{

    padding-left: 5%;
    text-decoration: none;
    color: black;
    font-size: large;

  }
  .nav{
    margin-top: 10%;
    margin-bottom: 10%;
    background-color:bisque;
  }
</style>
