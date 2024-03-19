import Vue from 'vue'

import uiLogin from '@/components/users/ui-login.vue'
import uiHappening from '@/components/twitter/ui-happening.vue'
import uiTweet from '~/components/twitter/ui-tweet.vue'
import uiTweets from '@/components/twitter/ui-tweets.vue'

Vue.component('UiLogin', uiLogin)
Vue.component('UiHappening', uiHappening)
Vue.component('UiTweet', uiTweet)
Vue.component('UiTweets', uiTweets)
