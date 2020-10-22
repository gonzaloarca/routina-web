<template>
  <div class="RegisterUser">
    
      <v-card  class="registerUserCard" tile> 
        <v-card tile color="grey darken-1" height="12%" class="pa-3" style="align-items:center;">
          <h2 class="registerUserTitle">CREATE AN ACCOUNT</h2>
        </v-card>
       <v-row class="ma-0" style="position:relative; height:88%">
         <v-col class="ma-0 pa-0">
           <v-card tile color="grey darken-4" style="position:relative; height:100%;">
             <div class="divForm"
                v-for="tf in formTextfields"
                :key="tf.name">
                <span class="textFieldLabels">{{tf.name}}</span>
                <v-text-field  
                      :placeholder="tf.example"
                      class="textFieldForm"
                      solo
                      rounded
                      dense
                      hide-details
                      light
                      clearable
                ></v-text-field>
              </div>
              <div class="divForm">
                <span class="textFieldLabels">Password</span>
                <v-text-field
                      :type="showPassword? 'text' : 'password'"   
                      placeholder="Password"
                      class="textFieldForm pb-3 "
                      solo
                      rounded
                      min-height="10px"
                      height="20px"
                      dense
                      hide-details
                      light
                      clearable
                      :append-icon="showPassword? 'mdi-eye':'mdi-eye-off'"
                      @click:append="showPassword=!showPassword"
                ></v-text-field> 
                
              </div>
              <div class="pa-2" width="100%"  >
                <div width="100%" style="display:flex; align-items:center; justify-content:center;">
                  
                  <v-btn
                    rounded
                    width="50%"
                    color="orange darken-3"
                    light
                    class="button font-weight-bold pa-3"
                  >Continue
                  </v-btn>
                </div>
                <div width="100%" style="display:flex; align-items:center; justify-content:center;">
                  <span class="textFieldLabels ma-1">Already have an account?</span>
                  <span class="textFieldLabels light-blue--text">Log in</span>
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
                style="overflow:hidden;"
                width="230px"
                >
                 <div  class="logoContainer">
                      <img :src="require(`../assets/${prov.icon}`)" alt="prov.name" style="height:55%; position:absolute;">
                  </div>
                  
                  <span class="textFieldLabels ml-5">Continue with {{prov.name}}</span>
                </v-btn>
             </div>
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

export default {
  name: "RegisterUser",
  data: () => ({
    formTextfields: [
        { name: "First Name",example:"i.e 'John'" },
        { name: "Last Name", example:"i.e 'Doe'" },
        { name: "Email Address", example:"i.e 'jdoe@mymail.com' " },
      ],
    signInProvs: [
        { name: "Google", icon:"google.png", color:"blue darken-2" },
        { name: "Facebook", icon:"facebook.png", color:"blue darken-4" },
        { name: "Twitter", icon:"twitter.png", color:"light-blue darken-1"},
      ],
    showPassword:false,
  }),
  
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
  margin-top: 0px;
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


