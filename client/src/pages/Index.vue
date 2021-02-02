<template>

  <q-page class="q-pa-sm">
    <HomeMain></HomeMain>
    <div class="row q-col-gutter-sm  q-py-sm">
        <CardPagination></CardPagination>
    </div>
   </q-page>
</template>

<script>
import HomeMain from "../components/HomeMain";
// import BasicCard from "../layouts/BasicCard";
import CardPagination from "../components/paginations/CardPagination";
 
import { mapState, mapActions } from "vuex";
// import { token } from '../services/messaging/messaging';

export default {
  name: 'PageIndex',
  components: {
    HomeMain,
    // BasicCard,
    CardPagination
  },
  data () {
    return {
      notifications: this.$store.state.notifications.pushToken !== null
    }
  },
  computed: {
    ...mapState({
      count: state => state.notifications.count
    })
  },
  mounted () {
    const data = {
      notifications: 0,
      messages: 0,
      total: 0
    } ;
      // store.dispatch('notifications/setNotificationCount', data)
    this.getToken();
    // this.$store.commit("enableNotifications")
    this.enableNoti();

    // messaging.requestPermission().then(response => {
    //   alert('You have successfully enabled push notifications')
    // }).catch(error => {
    //   alert('You wont receive push notifications in future')
    //   return error
    // }) ;
    // this.notifications(true)
  },
  watch: {
    
  },
  methods: {
    ...mapActions({
      getToken: "notifications/getToken",
      // enableNotifications: "notifications/enableNotifications"
    }),
    enableNoti() {
      this.$store.dispatch('notifications/enableNotifications').finally(() => this.$store.state.notifications.pushToken !== null)      
    },
    disableNoti() {
      this.$store.dispatch('notifications/disableNotifications').finally(() => this.$store.state.notifications.pushToken !== null)    
    }
    // notifications (val) {
    //   if (val) {
    //     this.$store.dispatch('notifications/enableNotifications').finally(() => this.$store.state.notifications.pushToken !== null)
    //   } else {
    //     this.$store.dispatch('notifications/disableNotifications').finally(() => this.$store.state.notifications.pushToken !== null)
    //   }
    // }
  }
  // data() {
  //           return {
  //               fireToken : ''
  //           }
  //       },
  // mounted: async function () {
  //           await this.token()
  //       },
  // methods : {
  //   token () {
  //     this.fireToken = token;
  //   }
  // }
  
}
</script>
