<template>
  <q-header>
    <q-toolbar>
      <q-toolbar-title>
        <h6 class="q-ma-none">{{serviceTitle}}</h6>
      </q-toolbar-title>
      <div class="q-gutter-sm row items-center no-wrap">
          <q-btn round dense flat color="white" icon="qr_code_scanner" to="/Mobile/MQrReader" >
            <q-tooltip>QR Scan</q-tooltip>
          </q-btn>
          <q-btn round dense flat color="white" icon="notifications" @click="showNotif">
            <q-badge color="negative" text-color="white" floating>
              {{ $store.state.notifications.count.total }}
            </q-badge>
            <q-tooltip>Notifications</q-tooltip>
          </q-btn>
      </div>
    </q-toolbar>
  </q-header>
</template>

<script>
export default {
  name: 'AppHeader',
  // props: {
  //   content: {
  //     type: Object,
  //     required: true
  //   }
  // },
  data() {
    return {
      serviceTitle: 'Honey PASS'
    };
  },
  methods:{
    showNotif () {
      this.$q.notify({
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quisquam non ad sit assumenda consequuntur esse inventore officia. Corrupti reiciendis impedit vel, fugit odit quisquam quae porro exercitationem eveniet quasi.',
        color: 'primary',
        multiLine: true,
        avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
        actions: [
          // { label: 'Reply', color: 'yellow', handler: () => { /* ... */ } }
        ]
      })
    }
  }
}
</script>

