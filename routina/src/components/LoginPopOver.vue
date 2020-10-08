<template>
  <div class="text-center">
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
        <v-layout-row-wrap>
            <v-spacer></v-spacer>
            <v-icon small>mdi-close</v-icon>
        </v-layout-row-wrap>
        <v-card-text> 
         <v-text-field 
                class="mt-1"  
                placeholder="account"
                solo
                rounded
                light
          ></v-text-field>
          <v-text-field
                class="mt-1"   
                placeholder="password"
                solo
                rounded
                light
                append-icon="mdi-eye"
          ></v-text-field> 
        </v-card-text>   
        
       
        <v-card-text>
        
        
        <v-divider></v-divider>

        
        <v-checkbox
          
          light
          label='Stay logged in?'>
        </v-checkbox>
        <v-btn v-if='options.isLoggingIn' @click.prevent='' block type='submit'> Sign in</v-btn>
        <div v-if='options.isLoggingIn'>
              Don't have an account?
              <v-btn 
                light
                @click='options.isLoggingIn = false'
               > Sign up</v-btn>
        </div> 
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            text
            @click="menu = false"
          >
            Cancel
          </v-btn>
          <v-btn
            color="primary"
            text
            @click="menu = false"
          >
            Save
          </v-btn>
        </v-card-actions>

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
