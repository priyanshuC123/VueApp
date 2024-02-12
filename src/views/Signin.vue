<template>
    <div class="container">
      <div class="row justify-content-center ">
        <div class="col-md-8">
          <div class="card">
            <div class="card-header">Sign In to an Account</div>
            <div class="card-body">
              <form action="#" @submit.prevent="Register">
                <div class="form-group row mb-5">
                  <label for="email" class="col-md-4 col-form-label text-md-right">Email :</label>
  
                  <div class="col-md-6">
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
                  <label for="password" class="col-md-4 col-form-label text-md-right">Password :</label>
  
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
                <div v-if="errMsg" class="alert alert-danger">{{error}}</div>
                <div class="form-group row mb-0">
                  <div class="col-md-8 offset-md-3">
                    <button class="btn btn-primary">SignIn</button>
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
  import { ref } from 'vue'
  import { signInWithEmailAndPassword } from 'firebase/auth';
  import {useRouter} from 'vue-router'
  import { auth} from '../main'
  const email = ref('');
  const password=ref('');
  const errMsg = ref()
  const router = useRouter()
  
  const Register = async () => {
    const user = await signInWithEmailAndPassword(auth,email.value,password.value);
        try {
          alert("successfully LoggedIn");
          router.push('/dashboard');
        }catch (err) {
          console.log(err.code);
          switch(err.code){
            case "auth/invalid-email":
                errMsg.value="Invalid email";
                break;
            case "auth/user-not-found":
                errMsg.value="No account with that email was found";
                break; 
            case "auth/wrong-password":
                errMsg.value="Incorrect Password";
                break;
            default:
                errMsg.value = "Email or Password was incorrect";          
          }
       }
   }
  
  
  </script>