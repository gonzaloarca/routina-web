<template>
  <div>
    <h1>Register User</h1>
    <h1>HOLAAA PROBANDO PROBANDO</h1>
    <v-container >
                <v-row class="grey darken-1" align-center justify-center>CREATE AN ACCOUNT</v-row>
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
                </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "RegisterUser",
};
</script>

<style scoped>
</style>
