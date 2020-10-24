<template>
  <div class="verify-email">
    <RoutinesBanner
      banner-image-url="banner-2.jpg"
      banner-title="Create an Account"
    />
    <div class="verify-container">
      <h1>Verify your e-mail address</h1>
      <img src="@/assets/email.png" class="email-image" />
      <h3 class="verify-text">
        An e-mail has been sent to
        <span class="primary--text">xxxxx@mymail.com</span>
        with a link for verifying your account. Please follow the link in order
        to access your account.
      </h3>
    </div>
  </div>
</template>

<script>
import RoutinesBanner from "@/components/RoutinesBanner";
export default {
  name: "VerifyEmail",
  components: { RoutinesBanner },
};
</script>

<style scoped lang="scss">
@import "../sass/variables";
.verify-email {
  height: 1000px;
  background-color: black;

  .verify-container {
    width: $content-container-width - 100px;
    margin: auto;
    margin-top: 20px;
    padding: 85px;
    height: 600px;
    background-color: #1e1e1e;
    text-align: center;

    .email-image {
      margin-top: 30px;
      margin-bottom: 30px;
      height: 200px;
      width: 200px;
    }

    .verify-text {
      width: 500px;
      margin: auto;
    }
  }
}
</style>