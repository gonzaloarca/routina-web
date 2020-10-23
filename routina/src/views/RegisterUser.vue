<template>
  <div class="RegisterUser">
    
      <v-card  class="registerUserCard" tile> 
        <v-card tile color="grey darken-1" height="12%" class="pa-3" style="align-items:center;">
          <h2 class="registerUserTitle" v-if="!login">CREATE AN ACCOUNT</h2>
          <h2 class="registerUserTitle" v-else>LOG IN</h2>
        </v-card>
       <v-row class="ma-0" style="position:relative; height:88%">
         <v-col class="ma-0 pa-0">
           <v-card tile color="grey darken-4" style="position:relative; height:100%;">
             <div class="divForm">
                <span v-if="!login" class="textFieldLabels">Username *</span>
                <v-text-field  
                      ref="userTf"
                      v-if="!login"
                      placeholder="i.e 'julisicardi' "
                      class="textFieldForm"
                      solo
                      rounded
                      dense
                      :rules="[() => !!username || 'This field is required']"
                      light
                      clearable
                      v-model="username"
                ></v-text-field>
                <span class="textFieldLabels">Email Address *</span>
                <v-text-field  
                      ref="mailTf"
                      placeholder="i.e 'jdoe@mymail.com' "
                      class="textFieldForm"
                      solo
                      rounded
                      dense
                      :rules="[() => !!email || 'This field is required']"
                      light
                      clearable
                      v-model="email"
                ></v-text-field>
              </div>
              <div class="divForm">
                <span class="textFieldLabels">Password *</span>
                <v-text-field
                      ref="passTf"
                      v-model="password"
                      :type="showPassword? 'text' : 'password'"   
                      placeholder="Password"
                      class="textFieldForm pb-1"
                      solo
                      rounded
                      min-height="10px"
                      height="20px"
                      dense
                      :rules="[() => !!password || 'This field is required']"
                      light
                      clearable
                      :append-icon="showPassword? 'mdi-eye':'mdi-eye-off'"
                      @click:append="showPassword=!showPassword"
                ></v-text-field> 
                
              </div>
              <div class="pa-2" width="100%"  >
                <div width="100%" style=" display:flex; align-items:center; justify-content:center;">
                  
                  <v-btn
                    rounded
                    width="50%"
                    color="orange darken-3"
                    light
                    class="button font-weight-bold pa-3 "
                    v-on:click="createAccount"
                    style="z-index:20;"
                  >
                  <span v-if="!login">Continue</span>
                  <span v-else>Log in</span>
                  </v-btn>
                </div>
                <div width="100%" style="display:flex; align-items:center; justify-content:center;">
                  <span v-if="!login" class="textFieldLabels ma-1">Already have an account?</span>
                  <span v-else class="textFieldLabels ma-1">Don't have an account?</span>
                  <v-btn v-if="!login" @click="login=!login" text class="textFieldLabels light-blue--text ma-0 pa-0" style="z-index:20; text-decoration:underline;">Log in</v-btn>
                  <v-btn v-else text @click="login=!login" class="textFieldLabels light-blue--text ma-0 pa-0" style="z-index:20; text-decoration:underline;">Sign up</v-btn>

                </div>
              </div>
              
           </v-card>
         </v-col>
         <v-col class="ma-0 pa-0" >
           <v-card  tile color="white" class="vCardProvs">
             
             <div>
               <div class="logInService pa-1" v-for="prov in signInProvs"
             :key="prov.name" >
             
                <v-btn 
                :color="prov.color"
                rounded
                small
                style="overflow:hidden; z-index:20;"
                width="230px"
                @click="provError=!provError"
                >
                 <div  class="logoContainer">
                      <img :src="require(`../assets/${prov.icon}`)" alt="prov.name" style="height:55%; position:absolute;">
                  </div>
                  
                  <span class="textFieldLabels ml-5">Continue with {{prov.name}}</span>
                </v-btn>
             </div>
             <span v-if="provError" class="textFieldLabels red--text" style="text-align:center;"><p>Unavailable at the moment</p></span>
             </div>
           </v-card>
         </v-col>
       </v-row>

      <div class="orAvatar">
        <v-avatar
        size="70"
        color="black"
        >
          <h4 class=" white--text">OR</h4>
        </v-avatar>
      </div>
      </v-card>

      
                
  </div>
</template>

<script>
// @ is an alias to /src
import {User,UserApi,Credentials} from "../services/user.js";
export default {
  name: "RegisterUser",
  data: () => ({
    signInProvs: [
        { name: "Google", icon:"google.png", color:"blue darken-2" },
        { name: "Facebook", icon:"facebook.png", color:"blue darken-4" },
        { name: "Twitter", icon:"twitter.png", color:"light-blue darken-1"},
      ],
    showPassword:false,
    username:"",
    usernamePlaceholder:"Username",
    usernameError:"",
    email:"",
    emailPlaceholder:"Email Address",
    emailError:"",
    password:"",
    passwordError:"",
    login:false,
    provError:false,
  }),
  methods:{
    createAccount:async function(){
      try {
        console.log(`username= ${this.username}, email = ${this.email}, password = ${this.password}`);
        if(this.username!=="" && this.email!=="" && this.password!==""){
          const cred= new Credentials(this.username,this.password);
          await UserApi.createUser(new User(cred,this.email));
        }else{
          if(this.username===""){
            this.usernameError="Username field is required";
            
          }
          if(this.email===""){
            this.emailError="Email field is required";
          }
          if(this.password===""){
            this.passwordError="Password field is required";
          }
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
  
};
</script>

<style scoped lang="scss">
@import "../sass/variables";

.RegisterUser {
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.registerUserCard{
  position:absolute;
  height:60%;
  width:65%;
  align-items: center;
  justify-content: center;
  align-content: center;
  justify-self:center;
  margin:auto;
  
}

.vCardProvs{
  position:relative; 
  height:100%;
  justify-content: center;
  align-items:center;
  vertical-align: center;
  display:flex;

}

.orAvatar{
  position:absolute; 
  height:88%; 
  width:100%; 
  bottom:0; 
  display: flex;
  justify-content: center; 
  align-items: center
}

.registerUserTitle{
  color: black;
  font-weight: bold;
  align-content: center;
  text-align: center;
  text-justify: center;
  font-size:120%;
  font-weight: 600;
  font-family:'Raleway',sans-serif;
 
}


.textFieldForm{
  position: relative;
  width: 100%;
  margin: auto;
  z-index: 50;
  
}

.divForm{
  position:relative;
  margin-left: 15%;
  margin-right: 15%;
  margin-top: 10px;
  margin-bottom: 0px;
}

.textFieldLabels{
 
  text-align: left;
  
  font-size: 14px;
  font-weight: 520;
  margin-bottom:0;  
  font-family: 'Raleway', sans-serif;
  text-transform: none !important;
}

.logInService{
  position:relative;
  align-content: center;
  align-items: center;
  text-align: center;
 
  text-justify: center;
  margin:auto;
  text-transform: lowercase;
}

.logoContainer{
  position: absolute;
  left: -13px;
  height: 200%;
  background-color: white;
  width: 16%;
  display: flex;
  justify-content: center;
  align-items: center;
}


</style>


