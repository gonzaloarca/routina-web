<template>
  <div class="RegisterUser">
    
      <v-card  class="registerUserCard" tile> 
        <v-card tile color="grey darken-1" height="12%" class="pa-3" style="align-items:center;">
          <h2 class="registerUserTitle">CREATE AN ACCOUNT</h2>
        </v-card>
       <v-row class="ma-0" style="position:relative; height:88%">
         <v-col class="ma-0 pa-0">
           <v-card tile color="grey darken-4" style="position:relative; height:100%;">
             hola
           </v-card>
         </v-col>
         <v-col class="ma-0 pa-0" >
           <v-card  tile color="white" style="position:relative; height:100%;">
             si
           </v-card>
         </v-col>
       </v-row>
      </v-card>
      <v-avatar
        size="70"
        color="black"
        class="position:relative position-x:50% position-y:64%"
      >
        <h4 class=" white--text">OR</h4>
      </v-avatar>
    
      <!-- <v-row class="grey darken-1" align-center justify-center>CREATE AN ACCOUNT</v-row>
                <v-row>
                    <v-column class="grey darken-2">
                        FirstName
                        <v-text-field  
                            placeholder="Email address"
                            solo
                            rounded
                            dense
                            light
                            clearable
                            hide-details
                            class="my-2"
                        ></v-text-field>
                        Last Name
                        <v-text-field  
                            placeholder="Email address"
                            solo
                            rounded
                            dense
                            light
                            clearable
                            hide-details
                            class="my-2"
                        ></v-text-field>
                        Email
                        <v-text-field  
                                placeholder="Email address"
                                solo
                                rounded
                                dense
                                light
                                clearable
                                hide-details
                                class="my-2"
                        ></v-text-field>
                        Password address
                         <v-text-field  
                                placeholder="Email address"
                                solo
                                rounded
                                dense
                                light
                                clearable
                                hide-details
                                class="my-2"
                        ></v-text-field>
                    </v-column>
                    <v-column class="white">
                        white
                    </v-column>
                </v-row> -->
                
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "RegisterUser",
};
</script>

<style scoped lang="scss">
@import "../sass/variables";
.RegisterUser {
  position: relative;
  height: 100vh;
  background-color: green;
  display: flex;
  justify-content: center;
  align-items: center;
}

.registerUserCard{
  position:absolute;
  height:60%;
  width:70%;
  align-items: center;
  justify-content: center;
  align-content: center;
  justify-self:center;
  margin:auto;
  
}

.registerUserTitle{
  color: black;
  font-weight: bold;
  align-content: center;
  text-align: center;
  text-justify: center;
  font-size:120%;
  font-weight: 600;
 
}

</style>


