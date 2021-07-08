<template>
  <div class="notifications-list">
    <notification-message
      v-for="notification in notifications"
      :key="notification.id"
      :notification="notification"
    />
  </div>
</template>

<script>
import NotificationMessage from "./NotificationMessage";
import { mapState } from "vuex";

export default {
  components: {
    NotificationMessage
  },

  computed: mapState(["notifications"])
};
</script>

<style>
.notifications-list {
  position: fixed;
  top: 0;
  right: 500px;
  left:500px;
  margin-right: 15px;
  width: 320px;
}
</style>