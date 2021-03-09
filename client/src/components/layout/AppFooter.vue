<template>
  <q-footer>
    <q-tabs>
      <q-route-tab
        v-for="route in tabRoutes"
        :key="route.name"
        :to="{ name: route.name }"
        :name="route.name"
        :icon="route.icon"
        :label="$q.screen.sm || $q.screen.md || $q.screen.lg || $q.screen.xl ? route.name : null"
        exact
        replace
      />
    </q-tabs>
  </q-footer>
</template>

<script>
export default {
  name: 'AppFooter',
  computed: {
    tabRoutes () {
      return this.$router.options.routes[1].children.filter(route => route.name !== 'MQrReader' && route.name !== 'PinCheck')
    }
  }
}
</script>

<style>

</style>
