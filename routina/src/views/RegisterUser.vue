<template>
  <div class="RegisterUser">
    <RoutinesBanner
      banner-image-url="banner-2.jpg"
      banner-title="Create an Account"
    />

    <div :class="login ? 'registerBoxLog' : 'registerBox'">
      <v-row>
        <v-col class="pa-0">
          <div
            :class="login ? 'formsContainerLog' : 'formsContainer'"
            color="grey darken-5"
          >
            <div class="divForm">
              <span v-if="!login" class="textFieldLabels">Full Name *</span>
              <v-text-field
                ref="?"
                v-if="!login"
                placeholder="i.e. 'Julian Sicardi'"
                class="textFieldForm"
                prepend-inner-icon="mdi-account"
                solo
                rounded
                dense
                :rules="[() => !!fullName || 'This field is required']"
                light
                clearable
                v-model="fullName"
              ></v-text-field>
            </div>
            <div class="divForm">
              <span class="textFieldLabels">Username *</span>
              <v-text-field
                ref="userTf"
                placeholder="i.e. 'julisicardi' "
                prepend-inner-icon="mdi-account"
                class="textFieldForm"
                solo
                rounded
                dense
                :rules="[() => !!username || 'This field is required']"
                light
                clearable
                v-model="username"
              ></v-text-field>
            </div>
            <div class="divForm">
              <span v-if="!login" class="textFieldLabels">Email Address *</span>
              <v-text-field
                ref="mailTf"
                v-if="!login"
                placeholder="i.e. 'jdoe@mymail.com' "
                prepend-inner-icon="mdi-email"
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
                :type="showPassword ? 'text' : 'password'"
                placeholder="Password"
                prepend-inner-icon="mdi-lock"
                class="textFieldForm pb-1 ma-0"
                solo
                rounded
                dense
                :rules="[() => !!password || 'This field is required']"
                light
                clearable
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPassword = !showPassword"
              ></v-text-field>
            </div>
            <div class="divForm">
              <span v-if="!login" class="textFieldLabels">Gender *</span>
              <v-select
                v-if="!login"
                :items="genderItems"
                ref="?"
                v-model="gender"
                placeholder="Select a gender"
                prepend-inner-icon="fa-venus-mars"
                class="textFieldForm pb-1 ma-0"
                solo
                rounded
                dense
                :rules="[() => !!gender || 'This field is required']"
                light
              ></v-select>
            </div>
            <div class="divForm">
              <span v-if="!login" class="textFieldLabels">Birth Date *</span>
              <v-menu
                v-if="!login"
                ref="menu"
                v-model="dateMenu"
                :close-on-content-click="false"
                :return-value.sync="birthDate"
                transition="scale-transition"
                offset-y
                min-width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="birthDate"
                    prepend-inner-icon="mdi-calendar"
                    readonly
                    placeholder="Select your birth date"
                    v-bind="attrs"
                    v-on="on"
                    solo
                    dense
                    light
                    rounded
                    :rules="[() => !!birthDate || 'This field is required']"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="birthDate"
                  no-title
                  scrollable
                  color="primary"
                >
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="dateMenu = false">
                    Cancel
                  </v-btn>
                  <!-- esto se queda o no? -->
                  <v-btn
                    text
                    color="primary"
                    @click="$refs.menu.save(birthDate)"
                  >
                    OK
                  </v-btn>
                </v-date-picker>
              </v-menu>
            </div>
            <div class="pa-2" width="100%">
              <div
                style="
                  display: flex;
                  align-items: center;
                  justify-content: center;
                "
              >
                <v-btn
                  rounded
                  width="50%"
                  color="orange darken-3"
                  light
                  class="button font-weight-bold pa-3"
                  v-on:click="createAccount"
                  router
                  :to="login ? 'register' : 'verify-email'"
                  style="z-index: 2"
                >
                  <span v-if="!login">Continue</span>
                  <span v-else>Log in</span>
                </v-btn>
              </div>
              <div
                width="100%"
                style="
                  display: flex;
                  align-items: center;
                  justify-content: center;
                "
              >
                <span v-if="!login" class="textFieldLabels ma-1"
                  >Already have an account?</span
                >
                <span v-else class="textFieldLabels ma-1"
                  >Don't have an account?</span
                >
                <v-btn
                  v-if="!login"
                  @click="login = !login"
                  text
                  class="textFieldLabels light-blue--text ma-0 pa-0"
                  style="z-index: 2; text-decoration: underline"
                  >Log in</v-btn
                >
                <v-btn
                  v-else
                  text
                  @click="login = !login"
                  class="textFieldLabels light-blue--text ma-0 pa-0"
                  style="z-index: 2; text-decoration: underline"
                  >Sign up</v-btn
                >
              </div>
            </div>
          </div>
        </v-col>
        <v-col class="pa-0">
          <v-card tile color="white" class="vCardProvs">
            <div class="buttonsContainer">
              <div
                class="logInService pa-1"
                v-for="prov in signInProvs"
                :key="prov.name"
              >
                <v-btn
                  :color="prov.color"
                  rounded
                  w
                  style="overflow: hidden; z-index: 2"
                  width="300px"
                  @click="provError = true"
                >
                  <div class="logoContainer">
                    <img
                      :src="require(`../assets/${prov.icon}`)"
                      :alt="prov.name"
                      style="height: 55%; position: absolute"
                    />
                  </div>

                  <span class="textFieldLabels ml-5"
                    >Continue with {{ prov.name }}</span
                  >
                </v-btn>
              </div>
              <span
                v-if="provError"
                class="textFieldLabels red--text"
                style="text-align: center"
                ><p>Unavailable at the moment</p></span
              >
            </div>
          </v-card>
        </v-col>
      </v-row>

      <div class="orAvatar">
        <v-avatar size="70" color="black">
          <h4 class="white--text">OR</h4>
        </v-avatar>
      </div>
    </div>
    <v-footer color="black" height="50"></v-footer>
  </div>
</template>

<script>
// @ is an alias to /src
import { User, UserApi, Credentials } from "../services/user.js";
import RoutinesBanner from "../components/RoutinesBanner";

export default {
  name: "RegisterUser",
  components: { RoutinesBanner },
  data: () => ({
    signInProvs: [
      { name: "Google", icon: "google.png", color: "blue darken-2" },
      { name: "Facebook", icon: "facebook.png", color: "blue darken-4" },
      { name: "Twitter", icon: "twitter.png", color: "light-blue darken-1" },
    ],
    showPassword: false,
    fullName: "",
    fullNamePlaceholder: "Full Name",
    fullNameError: "",
    username: "",
    usernamePlaceholder: "Username",
    usernameError: "",
    email: "",
    emailPlaceholder: "Email Address",
    emailError: "",
    password: "",
    passwordError: "",
    gender: "",
    genderPlaceholder: "Gender",
    genderError: "",
    dateMenu: false,
    birthDate: "",
    birthDatePlaceholder: "Birth Date",
    birthDateError: "",
    genderItems: ["Male", "Female", "Other"],
    login: false,
    provError: false,
  }),
  methods: {
    createAccount: async function () {
      try {
        console.log(
          `username= ${this.username}, email = ${this.email}, password = ${this.password}`
        );
        if (this.username !== "" && this.email !== "" && this.password !== "" && this.fullName!== null && this.gender!==null) {
          const cred = new Credentials(this.username, this.password);
          await UserApi.createUser(new User(cred,this.email,this.fullName,this.gender));
        } else {
          if (this.username === "") {
            this.usernameError = "Username field is required";
          }
          if (this.email === "") {
            this.emailError = "Email field is required";
          }
          if (this.password === "") {
            this.passwordError = "Password field is required";
          }
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import "../sass/variables";
$register-box-height: 700px;
$register-box-width: 1000px;

.RegisterUser {
  background-color: black;
  height: 1000px;
}

.registerBox {
  position: relative;
  height: $register-box-height;
  width: $register-box-width;
  margin: auto;
  margin-top: 20px;
}

.registerBoxLog {
  position: relative;
  height: $register-box-height/2;
  width: $register-box-width;
  margin: auto;
  margin-top: 20px;
}

.formsContainer {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  height: $register-box-height;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #292929;
}
.formsContainerLog {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  height: $register-box-height/2;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #292929;
}
.vCardProvs {
  position: relative;
  height: 100%;
  justify-content: center;
  align-items: center;
  vertical-align: center;
  display: flex;
}

.orAvatar {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.registerUserTitle {
  color: black;
  font-weight: bold;
  align-content: center;
  text-align: center;
  text-justify: center;
  font-size: 120%;
  font-weight: 600;
  font-family: "Raleway", sans-serif;
}

.textFieldForm {
  width: 100%;
  margin: auto;
  z-index: 50;
}

.divForm {
  margin-left: 15%;
  margin-right: 15%;
  z-index: 2;
}

.textFieldLabels {
  text-align: left;

  font-size: 14px;
  font-weight: 500;
  margin-bottom: 0;
  font-family: "Raleway", sans-serif;
  text-transform: none !important;
}

.buttonsContainer {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.logInService {
  position: relative;
  align-content: center;
  align-items: center;
  text-align: center;

  text-justify: center;
  margin: auto;
  text-transform: lowercase;
}

.logoContainer {
  position: absolute;
  left: -16px;
  height: 250%;
  background-color: white;
  width: 16%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>


