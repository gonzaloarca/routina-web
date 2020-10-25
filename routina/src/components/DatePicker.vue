<template>
  <div>
    <v-menu
      ref="menu"
      v-model="menu"
      :close-on-content-click="false"
      :return-value.sync="date"
      transition="scale-transition"
      offset-y
      min-width="290px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          v-model="date"
          append-icon="mdi-calendar"
          readonly
          v-bind="attrs"
          v-on="on"
          solo
          dense
          light
          rounded
          style="width: 250px"
          :rules="[required]"
        ></v-text-field>
      </template>
      <v-date-picker
        v-model="date"
        no-title
        scrollable
        color="primary"
        :max="new Date().toISOString().substr(0, 10)"
      >
        <v-spacer></v-spacer>
        <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
        <v-btn text color="primary" @click="$refs.menu.save(date); send()"> OK </v-btn>
      </v-date-picker>
    </v-menu>
  </div>
</template>
<script>
export default {
  name: "DatePicker",
  props: {
    dateNum: {
      type: Date,
      required: false,
    },
  },
  data() {
    return {
      menu: false,
      date: this.dateNum.toISOString().substr(0, 10),
      required: (value) => !!value || "Value cannot be empty.",
    };
  },
  methods:{
    send(){
      this.$emit('save',new Date(this.date));
    }
  }
};
</script>
<style scoped lang="scss">
@import "../sass/variables";
</style>