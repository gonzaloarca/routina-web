<template>
  <div class="difficulty-level">
    <v-icon v-for="i in difficulty" :key="i.id" class="active-fire">
      mdi-fire
    </v-icon>
    <v-icon v-for="i in 4 - difficulty" :key="i.id" class="not-active-fire">
      mdi-fire
    </v-icon>
  </div>
</template>

<script>
export default {
  name: "DifficultyLevel",
  props: {
    difficulty: {
      type: Number,
      required: true,
      validator(){
          return [1, 2, 3, 4].indexOf !== -1;
      }
    },
  },
};
</script>

<style scoped>
.difficulty-level{
display: flex;
}

.active-fire {
  color: inherit;
  font-size: inherit !important;
  width: 16px;
}

.not-active-fire {
  color: inherit;
  font-size: inherit !important;
  width: 16px;
  opacity: 0.5;
}
</style>