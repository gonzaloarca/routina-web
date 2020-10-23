<template>
  <div class="Settings">
    <SettingsBanner />
    <div class="settings-content">
      <v-card class="content-container" tile>
        <div class="tab-format">
          <v-tabs vertical v-model="tabs">
            <v-tab>
              <v-icon left>mdi-account</v-icon><h3>Edit profile</h3>
            </v-tab>
            <v-tab>
              <v-icon left>mdi-lock</v-icon><h3>Security</h3>
            </v-tab>
          </v-tabs>
        </div>
        <div class="items-container">
          <v-tabs-items v-model="tabs">
            <v-tab-item>
              <v-card tile flat>
                <div class="light-grey-card">
                  <div class="pl-5 ml-5">
                    <h1>Avatar</h1>
                  </div>

                  <div class="centered-div pa-4">
                      <v-avatar size="150" color="white" class="my-4">
                          <img :src="require(`../assets/avatar.jpg`)"/>
                      </v-avatar></div>
                  <div class="centered-div pa-4">
                      <v-btn color="grey darken-2" class="black--text" rounded><h4>Upload new image</h4></v-btn>
                  </div>
                </div>
                <div class="dark-grey-card">
                  <div class="pl-5 ml-5">
                    <h1 class="py-1">Profile Data</h1>
                  </div>
                   <div style="margin-left:30px;">
                       <div class="centered-div">
                           <span class="span-fmt">
                               <h3>First name</h3>
                               <v-text-field style="width:80%;"
                               :readonly="!editingFirstName"
                               :value="user.firstName"
                               append-icon="mdi-pencil"
                               @click:append="editingFirstName=!editingFirstName"
                               solo 
                               dense
                               rounded
                               light> 
                               </v-text-field>
                            </span>
                           <span class="span-fmt">
                               <h3>Gender</h3>
                               <v-select
                                style="width:80%"
                                v-model="user.gender"
                                :items="genders"
                                single-line
                                :readonly="!false"
                                append-outer-icon="mdi-pencil"
                                @click:append="editingGender=!editingGender"
                                :menu-props="{ offsetY: true, light }"
                                light
                                dense
                                filled
                                solo
                                ></v-select>
                           </span>
                       </div>
                       <div class="centered-div">
                           <span class="span-fmt">
                               <h3>Last name</h3>
                               <v-text-field style="width:80%;"
                               :readonly="!editingLastName"
                               :value="user.lastName"
                                append-icon="mdi-pencil"
                               @click:append="editingLastName=!editingLastName"
                               solo 
                               dense
                               rounded
                               light>
                               </v-text-field>
                            </span>
                           <span class="span-fmt"><h3>Birth date</h3></span>
                       </div>
                    </div>
                    <div class="centered-div light-grey-card pa-4">
                        <div class="pa-4" style="width:25%"><v-btn color="grey darken-3" class="black--text " rounded ><h4>Discard Changes</h4></v-btn></div>
                        <div class="pa-4" style="width:25%"><v-btn color="primary" class="white--text " rounded ><h4>Save Changes</h4></v-btn></div>
                    </div>
                      
                     
                </div>  
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card tile flat>
                  <div class="light-grey-card">
                  <div class="pl-5 ml-5">
                    <h1>Change password</h1>
                  </div>
                  <div style="margin-left:30px;">
                       
                    </div> 

                </div>
                <div class="dark-grey-card">
                  <div class="pl-5 ml-5">
                    <h1 class="py-1">Change email address</h1>
                  </div>
                   <div style="margin-left:30px;">
                       
                    </div> 
                </div>
                <div class="light-grey-card">
                  <div class="pl-5 ml-5">
                    <h1>Delete account</h1>
                  </div>
                  <div style="margin-left:30px;">
                       
                    </div> 

                </div>

                            
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SettingsBanner from "../components/SettingsBanner";

export default {
  name: "Settings",
  components: { SettingsBanner },
  data() {
    return {
      tabs: null,
      editingFirstName: false,
      editingLastName: false, 
      editingGender: false, 
      user:{
          firstName:"el",
          lastName:"Beto",
          gender:"Male"
      },
      genders:["Male", "Female", "Other"],

    };
  }
};
</script>

<style scoped lang="scss">
@import "../sass/variables";

.Settings {
  background-color: black;
}

.span-fmt{
    width:50%;
}

.light-grey-card{
    background-color: rgb(46, 45, 45);
}

.dark-grey-card{
    background-color: rgb(29, 29, 29);
}
.tab-format {
  width: 20%;
  background-color: rgb(15, 15, 15);
}



.settings-content {
  max-width: $content-container-width;
  margin: auto;
  padding: 30px 30px 30px 30px;

}

.content-container {
  max-width: $content-container-width - 300px;
  align-content: center;
  display: flex;
  margin: 0 auto 30px;
  
  
}

.title-cont {
  max-width: fit-content;
}

.centered-div {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 10px 10px 10px;
}

.items-container{
    width:100%;
}
</style>
