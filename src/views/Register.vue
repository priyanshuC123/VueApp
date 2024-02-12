<template>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card">
            <div class="card-header">Register</div>
            <div class="card-body">
              <div v-if="error" class="alert alert-danger">{{error}}</div>
              <form action="#" @submit.prevent="Register">
                <div class="form-group row mb-5">
                  <label for="email" class="col-md-4 col-form-label text-md-right">Email</label>
  
                  <div class="col-md-6 ">
                    <input
                      id="email"
                      type="email"
                      class="form-control"
                      name="email"
                      value
                      required
                      autofocus
                      v-model="email"
                    />
                  </div>
                </div>
  
                <div class="form-group row mb-5">
                  <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>
  
                  <div class="col-md-6">
                    <input
                      id="password"
                      type="password"
                      class="form-control"
                      name="password"
                      required
                      v-model="password"
                    />
                  </div>
                </div>
  
                <div class="form-group row mb-8">
                  <div class="col-md-8  offset-md-3">
                    <button class="btn btn-outline-primary">Register</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  
  <script setup>
  import { doc, setDoc } from 'firebase/firestore';
  import { ref } from 'vue'
  import { createUserWithEmailAndPassword } from 'firebase/auth';
  import {useRouter} from 'vue-router'
  import { auth} from '../main'
  import {db} from '../main'
  const email = ref('');
  const password=ref('');
  const router = useRouter()
  const error = ref(null);

  const Register = async () => {
    
        try {
          const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
          const user = userCredential.user;
          await setDoc(doc(db, "users",user.uid), {
             email: user.email,
          });
          alert("successfully register");
          router.push('/dashboard');
        }catch (err) {
          console.error(err);
          error.value = err.message;
       }
   }
  
  
  </script>