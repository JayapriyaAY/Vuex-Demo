<template>
  <div id="app">
    <app-header></app-header>
      
    <div class="container">
      <notifications-list></notifications-list>
       <router-view></router-view>
    </div>
  
 
  </div>
</template>

<script>

import AppHeader from './components/AppHeader.vue'
import NotificationsList from './components/NotificationsList.vue'
export default {
  name: 'App',
  components: {
    AppHeader,
    NotificationsList,
  }
}
</script>

