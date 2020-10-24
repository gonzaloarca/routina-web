<template>
  <div>
    <div class="routine-container">
      <v-card class="routine-card" v-on:click="clickEvent" tile>
        <div class="routine-info">
          <p class="text-uppercase mb-0">
            <span class="type-label grey--text my-0"
              >ROUTINE TYPE</span
            >{{ routineData.type}}
          </p>
          <p class="my-0">
            <span class="type-label grey--text my-0"
              >DURATION</span
            >
            <v-icon dense>mdi-timer-outline</v-icon>{{ routineData.duration }}
          </p>
          <p class="text-uppercase mb-0">
            <span class="type-label grey--text  my-0"
              >MUSCLE GROUP</span
            >
            {{ routineData.muscleGroup }}
          </p>

          <div>
            <span class="type-label grey--text my-0"
              >DIFFICULTY</span
            >
            <DifficultyLevel
              class="difficulty-level white--text text-h6"
              :difficulty="2"
            />
          </div>
          <div>
            <span class="type-label grey--text my-0">
              RATING
            </span>
            <v-rating
              class="rating"
              :length="5"
              :size="10"
              dense
              background-color="white"
              color="white"
              :readonly="true"
              :value="routineData.rating"
            ></v-rating>
          </div>
        </div>
        <img :src="routineData.image" class="card-image" />
        <div class="card-title white--text">
          <p class="my-0 text-uppercase">{{ routineData.name }}</p>
          <p class="user-label my-0">
            by <span class="primary--text">{{ routineData.creator.username }}</span>
          </p>
        </div>
      </v-card>
    </div>
    <div v-if="editable" class="editable">
      <v-btn class="red darken-3" tile small><v-icon>mdi-delete</v-icon></v-btn
      ><v-btn router to="edit-routine" tile small
        ><v-icon>mdi-pencil</v-icon></v-btn
      >
    </div>
    <RoutineOverlay
      :routine-data="routineData"
      v-if="withOverlay"
      v-on:close-overlay="overlay = false"
      :overlay="overlay"
    />
  </div>
</template>

<script>
import DifficultyLevel from "./DifficultyLevel.vue";
import RoutineOverlay from "./RoutineOverlay.vue";
export default {
  name: "RoutineCard",
  data() {
    return {
      overlay: false,
    };
  },
  components: { DifficultyLevel, RoutineOverlay },
  props: {
    routineData: {
      type: Object,
      required: true,
    },
    withOverlay: {
      type: Boolean,
      default: false,
    },
    editable: {
      type: Boolean,
    },
  },
  computed: {
    formatTime() {
      let hours = Math.floor(this.routineData.time / 60);
      let minutes = this.routineData.time % 60;
      return `${hours !== 0 ? hours + "h" : ""} ${
        minutes !== 0 ? minutes + "'" : ""
      }`;
    },
  },
  methods: {
    clickEvent(event) {
      this.overlay = true;
      this.$emit("click", event);
    },
  },
};
</script>

<style lang="scss">
$card-height: 150px;

.v-slide-group__wrapper {
  contain: none !important;
  padding-top: $card-height/2;
  padding-bottom: $card-height/2;
  margin-bottom: -$card-height/2;
  margin-top: -$card-height/2;
}
</style>

<style scoped lang="scss">
@import "~vuetify/src/styles/styles.sass";
$card-height: 170px;
$card-width: 170px;
$card-title-height: 34px;
$card-title-mult: 1.5;
$routine-info-width: 80px;

.editable {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: 10px;
  margin-bottom: -20px;
}

.routine-container {
  height: $card-height;
  width: $card-width;
}

.routine-card {
  z-index: 1;
  height: $card-height;
  width: $card-width;
  overflow: hidden;
  position: absolute;
  display: grid;
  transition-duration: 200ms;
  transition-property: width, height, transform !important;
  font-weight: 600 !important;
  .type-label {
    display: block;
    visibility: hidden;
    opacity: 0;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: -3px !important;
    max-height: 0;
    transition-duration: 200ms;
    transition-property: letter-spacing, max-height, visibility, opacity !important;
  }
}

.routine-card:hover {
  $w-mult: 1.2;
  $h-mult: 1.67;
  $center-dx: $card-width * $w-mult * 0.5 - $card-width * 0.5;
  $center-dy: $card-height * $h-mult * 0.5 - $card-height * 0.5;

  position: absolute;
  z-index: 2;
  height: $card-height * $h-mult;
  width: $card-width * $w-mult;
  transform: translate(-$center-dx, -$center-dy);

  .routine-info {
    width: $routine-info-width * 1.4;
    height: $card-height * $h-mult - $card-title-height * $card-title-mult;
    font-weight: 600 !important;
    .type-label {
      opacity: 1;
      visibility: visible;
      letter-spacing: 0px !important;
      max-height: 20px;
    }

    .rating {
      margin-top: -5px;
    }
  }
  .card-image {
    width: $card-width * $w-mult;
    height: $card-height * $h-mult - $card-title-height * $card-title-mult;
  }
  .card-title {
    height: $card-title-height * $card-title-mult;
    .user-label {
      visibility: visible;
      opacity: 1;
      max-height: 20px;
    }
  }
}
.routine-info {
  position: absolute;
  right: 0px;
  z-index: 1;
  font-size:12px;
  height: $card-height - $card-title-height;
  width: $routine-info-width;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(3px);
  padding: 5px;
  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  transition-duration: 200ms;
  transition-property: height, width !important;
}
.card-image {
  position: absolute;
  height: ($card-height - $card-title-height) * 1.4;
  width: $card-width;
  object-fit: cover;
  object-position: right;
  transition-duration: 200ms;
  transition-property: height, width !important;
}
.card-title {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: $card-title-height;
  padding: 5px 0 5px 0;
  background-color: #333333;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition-duration: 200ms;
  transition-property: height !important;
  font-weight: 600;
}

.difficulty-level {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

.user-label {
  visibility: hidden;
  opacity: 0;
  max-height: 0;
  transition-duration: 200ms;
  transition-property: max-height, visibility, opacity !important;
  font-size: 80%;
}

.rating {
  margin-top: -3px;
  transition-duration: 200ms;
  transition-property: margin-top !important;
}
</style>