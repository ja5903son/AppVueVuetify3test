import router from './router'

import { createApp } from 'vue'

// Vuetify
import "@mdi/font/css/materialdesignicons.css"
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Components
import App from './App.vue'

const vuetify = createVuetify({
  components,
  directives,
  defaults:{
    VBtn:{variant: "outlined"},
    vTextField:{variant: "solo"}
  },
  theme:{
    defaultTheme: "dark"
  }
})

createApp(App).use(vuetify).use(router).mount('#app')