<template>
  <div class="Settings">
    <RoutinesBanner banner-image-url="settings.jpg" banner-title="Settings" />
    <div class="settings-content">
      <v-card class="content-container" tile>
        <div class="tab-format">
          <v-tabs vertical v-model="tabs">
            <v-tab>
              <v-icon left>mdi-account</v-icon>
              <h3>Edit profile</h3>
            </v-tab>
            <v-tab>
              <v-icon left>mdi-lock</v-icon>
              <h3>Security</h3>
            </v-tab>
          </v-tabs>
        </div>
        <div class="items-container">
          <v-tabs-items v-model="tabs">
            <v-tab-item>
              <v-card tile flat>
                <div class="light-grey-card">
                  <div class="pa-5">
                    <h2>Avatar</h2>
                  </div>

                  <div class="centered-div pa-4">
                    <v-avatar size="150" color="white" class="my-4">
                      <img :src="user.avatarUrl" />
                    </v-avatar>
                  </div>
                  <div class="centered-div pa-4">
                    <div style="width: 250px; margin-bottom: 30px">
                      <v-file-input
                        v-model="selectedFile"
                        filled
                        v-on:change="uploadImage"
                        dense
                        label="Upload new image"
                        prepend-icon="mdi-camera"
                        hide-details
                        background-color="grey darken-4"
                      ></v-file-input>
                    </div>
                  </div>
                </div>
                <div class="dark-grey-card">
                  <div class="pa-5">
                    <h2 class="py-1">Profile Data</h2>
                  </div>
                  <div
                    style="
                      width: fit-content;
                      margin: auto;
                      padding-bottom: 30px;
                    "
                  >
                    <div class="centered-div">
                      <span class="mx-5">
                        <h3>Full name</h3>
                        <div style="width: 250px">
                          <v-text-field
                            clearable
                            v-model="user.fullName"
                            solo
                            dense
                            rounded
                            light
                            :rules="[required]"
                          >
                          </v-text-field>
                        </div>
                      </span>
                      <span class="mx-5">
                        <h3>Gender</h3>
                        <v-select
                          style="width: 250px"
                          v-model="user.gender"
                          :items="genders"
                          single-line
                          light
                          dense
                          rounded
                          solo
                          :menu-props="{ light: true }"
                        ></v-select>
                      </span>
                    </div>
                    <div class="centered-div">
                      <span>
                        <h3>Birth date</h3>
                        <DatePicker :key="rerender" v-on:save="date => saveDate(date)" :dateNum="user.birthdate" />
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  class="centered-div light-grey-card pa-4"
                  style="gap: 20px"
                >
                  <v-btn v-on:click="save" color="primary" class="black--text" rounded
                    ><h4>Save Changes</h4></v-btn
                  >
                  <v-btn
                    outlined
                    color="primary"
                    class="black"
                    style="border-width: 2px; border-color: #ff8000 !important"
                    rounded
                    v-on:click="$router.go(-1)"
                    ><h4>Discard Changes</h4></v-btn
                  >
                </div>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card tile flat>
                <div class="light-grey-card pa-5">
                  <h2 class="pb-4">Change password</h2>
                  <v-row>
                    <v-col cols="5">
                      <div style="width: 300px; margin: auto">
                        <h4>Current password</h4>
                        <v-text-field
                          :type="showCurrPassword ? 'text' : 'password'"
                          placeholder="Enter current password"
                          class="textFieldForm pb-3"
                          solo
                          rounded
                          min-height="10px"
                          height="20px"
                          dense
                          light
                          clearable
                          :append-icon="
                            showCurrPassword ? 'mdi-eye' : 'mdi-eye-off'
                          "
                          @click:append="showCurrPassword = !showCurrPassword"
                        ></v-text-field>
                      </div>
                      <div style="width: 300px; margin: auto">
                        <h4>New password</h4>
                        <v-text-field
                          :type="showNewPassword ? 'text' : 'password'"
                          placeholder="Enter new password"
                          class="textFieldForm pb-3"
                          solo
                          rounded
                          min-height="10px"
                          height="20px"
                          dense
                          light
                          clearable
                          :append-icon="
                            showNewPassword ? 'mdi-eye' : 'mdi-eye-off'
                          "
                          @click:append="showNewPassword = !showNewPassword"
                        ></v-text-field>
                      </div>
                      <div class="centered-div">
                        <v-btn color="primary" class="black--text" rounded
                          ><h4>Save Changes</h4></v-btn
                        >
                      </div>
                    </v-col>
                    <v-col cols="2">
                      <div
                        style="
                          margin: auto;
                          height: 90%;
                          width: 2px;
                          background-color: grey;
                        "
                      ></div>
                    </v-col>
                    <v-col cols="5">
                      <div style="width: 300px">
                        <h3>Forgot password?</h3>
                        <br />
                        <h4 class="pa-7">
                          An e-mail will be sent to the address linked to this
                          account with the steps necessary to restore your
                          password
                        </h4>
                        <div class="centered-div">
                          <v-btn color="primary" class="black--text" rounded
                            ><h4>Restore password</h4></v-btn
                          >
                        </div>
                      </div>
                    </v-col>
                  </v-row>
                </div>
                <div class="dark-grey-card pa-5">
                  <h2 class="mb-5">Change e-mail address</h2>
                  <div
                    class="centered-div"
                    style="flex-direction: column; gap: 20px"
                  >
                    <h4 style="width: 450px; text-align: center">
                      An e-mail will be sent to the address linked to this
                      account with the steps necessary to change your e-mail
                      address
                    </h4>
                    <v-btn color="primary" class="black--text" rounded
                      ><h4>Change email</h4></v-btn
                    >
                  </div>
                </div>
                <div class="light-grey-card pa-5">
                  <h2>Delete account</h2>
                  <div
                    class="centered-div"
                    style="flex-direction: column; gap: 20px"
                  >
                    <h4 style="width: 400px; text-align: center">
                      Keep in mind that once you click the
                      <span class="red--text">Delete Account</span>
                      button, your account will be
                      <span class="red--text">deleted forever</span>
                    </h4>
                    <v-btn color="red" class="black--text" rounded
                      ><h4>Delete account</h4></v-btn
                    >
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
import RoutinesBanner from "../components/RoutinesBanner";
import DatePicker from "../components/DatePicker";
import {UserApi} from "../services/user.js";
import {Images} from "../services/images.js";

export default {
  name: "Settings",
  components: { RoutinesBanner, DatePicker },
  async mounted(){
    let user = await UserApi.getCurrentUser();
    this.user=user;
    this.user.birthdate = new Date(this.user.birthdate);
    this.rerender++;
  },
  data() {
    return {
      tabs: null,
      rerender:0,
      selectedFile:{},
      user: {
        fullName: "El Beto",
        gender: "Male",
        //ojo que el mes empieza en cero
        birthdate: new Date("2000", "10", "01"),
      },
      genders: ["male", "female", "other"],
      required: (value) => !!value || "Value cannot be empty.",
      showCurrPassword: false,
      showNewPassword: false,
    };
  },
  methods:{

    saveDate(date){
      this.user.birthdate=date;
    },
    save(){
      this.user.birthdate = this.user.birthdate.getTime();
      UserApi.updateCurrentUser(this.user);
      this.$router.replace("/");
      //this.user.username, this.user.fullName,this.user.gender,this.
    },

    uploadImage:async function(){
      try{
        const res = await Images.uploadImage(this.selectedFile);
        const res2 = await res.text();
        
        const data = JSON.parse(res2).secure_url;
        this.user.avatarUrl=data;
        return data;
        //RoutinesApi.createCycleExercise(routineId,cycleId,new Exercise(name,detail,type,duration,repetitions),controller);
      }catch(e){
        console.log(e);
      }
    },
    
  }
};
</script>

<style scoped lang="scss">
@import "../sass/variables";

.Settings {
  background-color: black;
}

.light-grey-card {
  background-color: rgb(46, 45, 45);
}

.dark-grey-card {
  background-color: rgb(29, 29, 29);
  margin-bottom: 10px;
}
.tab-format {
  width: 200px;
  background-color: rgb(15, 15, 15);
}

.settings-content {
  min-width: $content-container-width - 200px;
  margin: auto;
  padding: 30px 30px 30px 30px;
}

.content-container {
  width: $content-container-width - 300px;

  display: flex;
  margin: 0 auto 30px;
}

.title-cont {
  width: fit-content;
}

.centered-div {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 10px 10px 10px;
}

.items-container {
  width: 100%;
}
</style>
