<template>
  <div class="text-center" width="60%">
    <v-menu v-model="menu"
        :close-on-content-click="false"
        width="100%"
        offset-y
      >
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon class="mr-1" v-bind="attrs"
          v-on="on">
        <v-icon >mdi-account</v-icon>
        </v-btn>
      </template>

      <v-card color="grey darken-3" >
        <v-row>
          <v-spacer></v-spacer>
          <v-col cols="auto" class="py-0" >
            <v-icon small left @click.stop="menu=!menu">mdi-close</v-icon>
          </v-col>
        </v-row>
        <v-card-text class="px-2 py-0 ma-0"> 
          <div class="my-1 py-0">
         <v-text-field  
                placeholder="Username"
                solo
                rounded
                dense
                light
                clearable
                hide-details
                class="my-2"
                v-model="username"
          ></v-text-field>
          <v-text-field
                :type="showPassword? 'text' : 'password'"   
                placeholder="Password"
                solo
                rounded
                dense
                light
                clearable
                hide-details
                :append-icon="showPassword? 'mdi-eye':'mdi-eye-off'"
                @click:append="showPassword=!showPassword"
                class="my-2"
                v-model="password"
          ></v-text-field> 
          </div>
        </v-card-text>
        <v-container class="py-2">
          <v-row align-start 
                  no-gutters
                  class="py-1 px-2 ma-0">
            
                <v-col align-center>
                  <v-checkbox
                    v-model="chbLogin"
                    color="orange darken-3"
                    dark
                    label='Stay logged in'
                    class="ma-0 pa-0"
                    hide-details>
                  </v-checkbox> 
                </v-col>
                <v-col  align-center>
                  <p class="blue--text ma-0" style="text-align:center;">Forgot Password?</p>
                </v-col>
                
           
          </v-row>
        </v-container>   
        <template>
          <div class="text-center">
            <v-btn
              rounded
              width="50%"
              color="orange darken-3"
              light
              class="button font-weight-bold"
              v-on:click="login()"
            >Log in
            </v-btn>
            <v-btn
              rounded
              width="50%"
              color="orange darken-3"
              light
              class="button font-weight-bold"
              v-on:click="current()"
            >Current User
            </v-btn>
          </div>
        </template>
        <v-row align-content="center" >
          <v-col align="center" class="pa-1 mt-4">
            <p class="font-weight-medium ma-0">or continue with</p>  
          </v-col>
        </v-row>
        <v-row align="center"
               justify="center"
                no-gutters
                class= "pb-4"
                >
          <v-spacer></v-spacer>
          <v-col
            v-for="service in loginProvs"
            :key="service.name"
            align="center"
            class="ma-1"
            width="15%"
          >
            <v-btn
              align="center"
              justify="center"
              color="white"
              filled  
              class="pa-0" 
              width="100%"
                   
              >
               <img :src="require(`../assets/${service.icon}`)" height="20px"/>   
              </v-btn>
          </v-col>
          <v-spacer></v-spacer>
          
        </v-row>  
        <v-card-text class="grey darken-1" >

          <v-row align-center>
            <v-col align-center>
              <p v-if='options.isLoggingIn' class="black--text font-weight-regular ma-0" style="text-align:center;">
                No account?
              </p>
            </v-col>
            <v-col justify-center>
              <v-btn 
                  dark
                  outlined
                  rounded
                  width="80%"
                  @click='options.isLoggingIn = false'
              > Sign up
              </v-btn> 
            </v-col>
                
          </v-row> 
        </v-card-text>
      </v-card>
    </v-menu>
  </div>
</template>
 

<script>
import {UserApi,Credentials} from '../services/user.js'; 
export default {
    data: ()  => ({
      cred:"",
      fav: true,
      menu: false,
      message: false,
      hints: true,
      options:{
        shouldStayLoggedIn:true,
        isLoggingIn:true,
      },
      showPassword:false,
      loginProvs: [
        { name: "Google",icon:"google.png", route: "/" },
        { name: "Facebook", icon:"facebook.png", route: "/explore" },
        { name: "Twitter", icon:"twitter.png", route: "/routines" },
      ],
      username:"",
      password:"",
    }),
    offset:true,
    options:{
      shouldStayLoggedIn:true,
      isLoggingIn:true,
    },
    methods:{
      login:function(){
        console.log("username = "+this.username + "password = " + this.password);
        if(this.username!==null && this.username!=='' && this.password!==null && this.password!==''){
          let cred= new Credentials(this.username,this.password);
          console.log(UserApi.login(cred));
        }else{
          console.log("Error: username or password are empty");
        }
        
        
      },
      current:function(){
        console.log("CURRENT USER = " + UserApi.getCurrentUser());
      }
    }
    
}
</script>

<style scoped lang="scss" >
@import "../sass/variables";


</style>
