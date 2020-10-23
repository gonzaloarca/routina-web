<template>
<div class="text-center">
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      
      offset-y
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon class="mr-1" v-bind="attrs"
          v-on="on">
        <v-icon >mdi-account</v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-list>
          <v-list-item v-for="opt in options" :key="opt.name" router :to="opt.route">
            <v-icon left class="pa-1">
              {{opt.icon}}
            </v-icon>
            <v-list-item-content>
              <v-list-item-title>{{opt.name}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>        
      </v-card>
    </v-menu>
</div>
</template>
<script>
export default {
    name:"LoggedInPopover",

    data(){
      return{
        options:[
          {name: "My Profile", icon:"mdi-account", route:"/profile"},
          {name: "Settings", icon:"mdi-cog", route:"/settings"},
          {name: "Log Out", icon:"mdi-exit-to-app", route:""},],
    
      }
    }
    
};
</script>

<style scoped lang="scss" >
@import "../sass/variables";


</style>
