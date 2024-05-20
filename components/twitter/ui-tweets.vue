<template>
  <div class="divTweets">
    <div
      v-for="(item, c) in tweets"
      :key="c"
      >
      <v-row class="ma-2 pa-2">
        <v-col cols="1">
          <v-img
            :src="item.user.profile_pic_url"
            style="border-radius: 50%;"
          />
        </v-col>
        <v-col cols="10" class="ma-1 pa-1">
          <v-row>
            <v-text>
              <span>
                <b>
                  {{ item.user.name }}
                </b>
              </span>
              <span style="color:gray;">
                @{{ item.user.username }}
              </span>
            </v-text>
          </v-row>
          <v-row>
            <v-text>
              <span>
                {{ item.text }}
              </span>
            </v-text>
          </v-row>
          <v-row style="width: 50%; align-items: center; align-content: center; justify-content: center;">
            <v-img v-if="Array.isArray(item.media_url) && item.media_url.length"
              :src="item.media_url[0]"
              style="border-radius: 15%;"
            />
          </v-row>
          <v-row>
            <v-col cols="1">
              <v-img :src="require('@/assets/icons/message.svg')" class="iconos" />
            </v-col>
            <v-col>
              {{ item.reply_count }}
            </v-col>
            <v-col cols="1">
              <v-img :src="require('@/assets/icons/retweet.svg')" class="iconos" />
            </v-col>
            <v-col>
              {{ item.retweet_count }}
            </v-col>
            <v-col cols="1">
              <v-img :src="require('@/assets/icons/heart.svg')" class="iconos" />
            </v-col>
            <v-col>
              {{ item.favorite_count }}
            </v-col>
            <v-col cols="1">
              <v-img :src="require('@/assets/icons/stadistic.svg')" class="iconos" />
            </v-col>
            <v-col>
              {{ item.views }}
            </v-col>
            <v-col cols="1">
              <v-img :src="require('@/assets/icons/upload.svg')" class="iconos" />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tweets: {
      type: Array,
      default: () => []
    }
  },
  mounted () {
    console.log(this.tweets)
  }
}
</script>

<style>
.iconos{
  width: 25px;
  height: 25px;
  padding: 2.6740014553070068 2.615497350692749 2.5134985446929932 2.5720016956329346;
}
.divTweets{
  width: 100%;
  padding: 0;
  margin: 0;
}
</style>
