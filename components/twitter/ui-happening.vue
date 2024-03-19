<template>
  <v-card>
    <v-card-title>
      Whats happening
    </v-card-title>
    <v-card-text>
      <v-col
        v-for="(item, i) in items"
        :key="i"
        cols="12"
      >
        <v-card elevation="0">
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title
                class="text-body-2 font-weight-medium-bold"
                style="word-break: break-word"
              >
                {{ item.title }}
              </v-card-title>
              <v-card-subtitle>
                {{ item.date }}
              </v-card-subtitle>
              <v-card-text>
                {{ item.description }}
              </v-card-text>
            </div>
            <v-avatar
              class="ma-3"
              size="90"
              tile
            >
              <v-img :src="item.img"></v-img>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
    </v-card-text>
  <v-card-actions>
      <v-btn elevation="0" plain>
        <span
          style="text-transform: none; color: #1DA1F2; font-weight: 500; font-size: 15px;"
        >
          Show more
        </span>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import happening from '@/assets/api/happening.json'
export default {
  data () {
    return {
      items: []
    }
  },
  mounted () {
    this.fetchHappening()
  },
  methods: {
    fetchHappening () {
      // const res = await this.$axios.get('http://localhost:3000/assest/api/happening.json')
      this.items = happening
      console.log('@@ items => ', this.items)
    }
  }
}
</script>
