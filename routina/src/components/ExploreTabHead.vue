<template>
  <div>
    <div class="tab-head" tile>
      <span class="tab-icon">
        <v-icon left class="form-icon">{{ icon }}</v-icon>
      </span>
      <span height="100%" class="cont-text" :style="textWidth">
        <h3>{{ name }}</h3>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: "ExploreTabhead",
  props: {
    name: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
    },
  },
  computed: {
    textWidth() {
      if (this.name === "all")
        return {
          width: "100%",
        };

      return {
        width: "75%",
      };
    },
  },
};
</script>


<style scoped lang="scss">
@import "~vuetify/src/styles/styles.sass";
$light-grey: #575757;
$dark-grey: #1d1d1d;
.tab-head {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 40px;
}
.tab-icon {
  position: absolute;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25%;
  height: 100%;
}

.form-icon {
  position: relative;
  width: 90%;
  color: white;
}

.cont-text {
  position: absolute;
  width: 75%;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
