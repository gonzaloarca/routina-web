<template>
<div class="GenericProfile">
  <ProfileBanner :user="usr" :current="false"/>
  <div class="profile-content">
      <v-card v-for="sg in slidegroups" :key="sg.name" class="content-container">
        <h1>{{sg.name}}<div style="width:10px;"></div>{{usr.name}}</h1>
        <RoutineSlideGroup />
      </v-card>
  </div>
</div>  
</template>
<script>
import ProfileBanner from "../components/ProfileBanner";
import RoutineSlideGroup from "../components/RoutineSlideGroup";
import {UserApi} from "../services/user.js";
export default {
    name:"GenericProfile",
    components:{ProfileBanner, RoutineSlideGroup},
    data(){
      return{
        id:this.$route.params.id,
        usr:{},  
        slidegroups:[
          {name:"Routines created by "}, 
          {name:"Exercises created by "}],
      }
    },
    created(){
        UserApi.getUser(this.id).then(function(data){
            this.usr=data.body;
        });
    },

};
</script>
<style scoped lang="scss">
  @import "../sass/variables";


  .profile-content {
  max-width: $content-container-width;
  margin: auto;
  padding: 30px 30px 30px 30px;
}

.content-container {
  max-width: $content-container-width - 150px;
  align-content: center;
  margin: 0 auto 30px;
  padding: 30px 30px 30px 30px;
}

.GenericProfile{
  background-color:black;
}
</style>
