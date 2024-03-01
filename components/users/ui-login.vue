<template>
  <v-card class="loginCard">
    <v-row align="center" justify="center" class="mt-2">
      <a href="http://www.twitter.com" tarjet="_blank">
        <img src="@/assets/icons/twitter.svg" alt="" >
      </a>
    </v-row>
    <v-row align="center" justify="center">
      <span class="tittleCard">Bienvenido a Twitter</span>
    </v-row>
    <v-row align="center" justify="center">
      <v-btn
        outlined
        rounded
        class="mt-2"
      >
        <img src="@/assets/icons/google.svg" alt="">
        <span style="text-transform: none;">
          Login with Google
        </span>
      </v-btn>
    </v-row>
    <v-row align="center" justify="center">
      <v-btn
        outlined
        rounded
        class="mt-2"
      >
        <img src="@/assets/icons/apple.svg" alt="">
        <span style="text-transform: none;">
          Login with Apple
        </span>
      </v-btn>
    </v-row>
    <v-row align="center" justify="center">
      <span style="color: #FFF;">
      Nomas pa que se vea espacio
    </span>
    </v-row>
    <v-row align="center" justify="center">
      <span style="color: #1E1E1E;">
      <v-col justify="center">
        <img src="@/assets/icons/line.svg" alt="" class="mb-1"> or <img src="@/assets/icons/line.svg" alt="" class="mb-1">
      </v-col>
    </span>
    </v-row>
    <v-row justify="center" align="center">
      <input
        type="text"
        placeholder="email or user"
        class="inputClass"
      >
    </v-row>

    <v-row align="center" justify="center">
      <v-btn
        outlined
        rounded
        class="mt-2"
        style="background-color: #1E1E1E;"
      >
        <span style="text-transform: none; width: 200px; color: #FFF;">
          Log In
        </span>
      </v-btn>
    </v-row>
    <v-row align="center" justify="center">
      <v-btn
        outlined
        rounded
        class="mt-2"
        >
        <span style="text-transform: none; width: 200px;">
          Register
        </span>
      </v-btn>
    </v-row>
    <v-row justify="center" align="center">
      <span>have already account? <a href="">Register</a></span>
    </v-row>
  </v-card>
</template>

<script>
export default {
}
</script>

<style scoped>
.loginCard {
  width: 40vw;
  height: 60vh;
  background-color: #FFF;
  border-radius: 16px;
}
.tittleCard {
  font-family: Chirp;
  font-size: 31px;
  font-weight: 700;
  line-height: 37px;
  letter-spacing: 0em;
  text-align: left;
}
.inputClass {
  width: 303px;
  height: 56px;
  border: 1px;
  text-align: center;
}
</style>
