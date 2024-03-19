<template>
  <v-row class="ma-1 pa-1">
    <v-col cols="1">
      <v-img
        :src="require('@/assets/avatars/myavatar.svg')"
        style="border-radius: 50%;"
      />
    </v-col>
    <v-col cols="10" class="ma-1 pa-1">
      <v-row>
        <v-textarea
          v-model="tweet"
          rows="2"
          row-height="5"
          :rules="[countTweet]"
        />
      </v-row>
      <v-row>
        <v-col cols="1">
          <v-img :src="require('@/assets/icons/img-icon.svg')" class="iconos" />
        </v-col>
        <v-col cols="1">
          <v-img :src="require('@/assets/icons/gif.svg')" class="iconos" />
        </v-col>
        <v-col cols="1">
          <v-img :src="require('@/assets/icons/encuestas.svg')" class="iconos" />
        </v-col>
        <v-col cols="1">
          <v-img :src="require('@/assets/icons/reaction.svg')" class="iconos" />
        </v-col>
        <v-col cols="1">
          <v-img :src="require('@/assets/icons/date.svg')" class="iconos" />
        </v-col>
        <v-col>
          <v-row align="center" justify="end">
            <v-btn rounded color="primary">
              <span style="text-transform: none;">
                tweet
              </span>
            </v-btn>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data () {
    return {
      tweet: '',
      countTweet: [
        v => v.length < 260 || 'Max 259 Chars'
      ]
    }
  }
}
</script>

<style>
.iconos{
  width: 38px;
  height: 38px;
  padding: 1.6740014553070068 1.615497350692749 1.5134985446929932 1.5720016956329346;
}
</style>
