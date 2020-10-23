<template>
  <div class="create-exercise">
    <RoutinesBanner
      banner-image-url="myroutbanner.jpg"
      banner-title="Create an Exercise"
    />
    <div class="create-container">
      <div class="left-create">
        <div class="exercise-name">
          <h2>Exercise name*</h2>
          <div class="tfield-container">
            <div style="width: 400px; margin-top: 20px">
              <v-text-field
                class="name-field"
                filled
                counter
                single-line
                maxlength="100"
                background-color="grey darken-4"
                label="i.e. 'Squats'"
                :rules="[required]"
              ></v-text-field>
            </div>
          </div>
        </div>
        <div class="description-container">
          <h2 class="mb-3">Description</h2>
          <div class="exercise-description">
            <div style="width: 400px">
              <v-textarea
                filled
                label="Add description"
                solo
                background-color="grey darken-3"
                counter
                no-resize
                maxlength="150"
              ></v-textarea>
            </div>
          </div>
        </div>
        <div class="exercise-media" style="background-color: #3b3b3b">
          <h2>Exercise image</h2>
          <div class="media-container">
            <img
              class="exercise-image"
              src="@/assets/exercise-default.jpg"
              alt="Exercise image"
            />
            <div style="width: 300px">
              <v-file-input
                filled
                dense
                label="Upload image"
                prepend-icon="mdi-camera"
                background-color="grey darken-4"
              ></v-file-input>
            </div>
          </div>
        </div>
        <div class="exercise-media" style="background-color: #1e1e1e">
          <h2>Instructive video</h2>
          <div class="media-container">
            <div class="video-player">
              <v-icon x-large>mdi-play</v-icon>
            </div>
            <div style="width: 300px">
              <v-file-input
                filled
                dense
                disabled
                label="Upload video"
                prepend-icon="mdi-movie"
                background-color="grey darken-3"
              ></v-file-input>
            </div>
          </div>
        </div>
        <div class="button-container">
          <v-btn rounded class="primary black--text font-weight-bold"
            >Create exercise</v-btn
          >
          <v-btn
            rounded
            outlined
            class="black font-weight-bold primary--text"
            style="border-width: 3px; border-color: #ff8000 !important"
            >Discard exercise</v-btn
          >
        </div>
      </div>
    </div>
    <v-footer color="black"></v-footer>
  </div>
</template>

<script>
import RoutinesBanner from "@/components/RoutinesBanner";
export default {
  name: "CreateExercise",
  components: { RoutinesBanner },
  data() {
    return {
      required: (value) => !!value || "Required.",
    };
  },
};
</script>

<style scoped lang="scss">
@import "../sass/variables";
.create-exercise {
  background-color: black;

  .create-container {
    width: $content-container-width - 150px;
    margin: auto;
    margin-top: 20px;

    .exercise-name {
      padding: 20px;
      height: 200px;
      background-color: #3b3b3b;
      .tfield-container {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    .exercise-media {
      padding: 20px;

      height: 400px;
      .media-container {
        display: flex;
        flex-direction: column;
        gap: 30px;
        padding: 20px;
        align-items: center;
        justify-content: center;
        .exercise-image {
          $ratio: 4/3;
          $image-height: 200px;
          height: $image-height;
          width: $image-height * $ratio;
        }
        .video-player {
          display: flex;
          justify-content: center;
          align-items: center;
          $ratio: 16/9;
          $video-height: 200px;
          height: $video-height;
          width: $video-height * $ratio;
          background-color: black;
        }
      }
    }
    .button-container {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 10px;
      background-color: #3b3b3b;
      height: 100px;
      margin-bottom: 20px;
    }

    .description-container {
      padding: 20px;
      height: 260px;
      background-color: #1e1e1e;
      .exercise-description {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
}
</style>