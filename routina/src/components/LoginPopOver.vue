<template>
  <div class="text-center ma-2">
    <v-menu v-model="menu"
        :rounded="0"  
        :close-on-content-click="false"
        :nudge-width="200"
        offset-y
      >
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon class="mr-1" v-bind="attrs"
          v-on="on">
        <v-icon >mdi-account</v-icon>
        </v-btn>
      </template>

      <v-card color="grey darken-3" >
        <v-row  class="ma-2">
          <v-spacer></v-spacer>
          <v-col cols="auto">
            <v-icon small left @click.stop="menu=!menu">mdi-close</v-icon>
          </v-col>
        </v-row>
        <v-card-text class="px-2 ma-0"> 
         <v-text-field  
                placeholder="Email address"
                solo
                rounded
                dense
                light
                clearable
          ></v-text-field>
          <v-text-field
                :type="showPassword? 'text' : 'password'"   
                placeholder="Password"
                solo
                rounded
                dense
                light
                clearable
                :append-icon="showPassword? 'mdi-eye':'mdi-eye-off'"
                @click:append="showPassword=!showPassword"
          ></v-text-field> 
        </v-card-text>
        <v-container>
          <v-row align-start 
                  no-gutters
                  class="pa-0 ma-0">
            <v-row
            :align="start"
            no-gutters>
                <v-col align-baseline>
                  <v-checkbox
                    v-model="chbLogin"
                    color="orange darken-3"
                    dark
                    label='Stay logged in'>
                  </v-checkbox> 
                </v-col>
                <v-col  align-baseline>
                  <p class="blue--text">Forgot Password?</p>
                </v-col>
                
            </v-row>
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
            >Log in
            </v-btn>
          </div>
        </template>
        <v-row align-content="center">
          <v-col align="center  ">
            <p class="font-weight-medium">or continue with</p>  
          </v-col>
        </v-row>
        <v-row align="center"
               justify="center"
                no-gutters
                class="ma-1">
          <v-spacer></v-spacer>
          <v-col
            v-for="service in loginProvs"
            :key="service.name"
            align="center"
            class="ma-1"
          >
          <v-responsive :aspect-ratio="1/1">
              <v-btn
              align="center"
              justify="center"
              color="white"
              filled
              width="60"
              height="60"
              >
               <v-img :src="require(`../assets/${service.icon}`)" contain height="40px" width="40px"/>   
              </v-btn>
            </v-responsive>
          </v-col>
          <v-spacer></v-spacer>
          
        </v-row>  
        <v-card-text>
          <v-btn v-if='options.isLoggingIn' 
                @click.prevent='' 
                block type='submit'> Sign in</v-btn>
          <div v-if='options.isLoggingIn'>
                Don't have an account?
                <v-btn 
                  light
                  @click='options.isLoggingIn = false'
                > Sign up</v-btn>
          </div> 
        </v-card-text>
      </v-card>
    </v-menu>
  </div>
</template>


<script>

export default {
    data: ()  => ({
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
    }),
    offset:true,
    options:{
      shouldStayLoggedIn:true,
      isLoggingIn:true,
    },
}
</script>

<style scoped lang="scss" >
@import "../sass/variables";


</style>
