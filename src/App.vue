<template>
  <div id="app">
    <DailyHeader></DailyHeader>
    <router-view/>
  </div>
</template>

<script>
import DailyList from '@/components/DailyList'
import DailyHeader from '@/components/DailyHeader'

export default {
  name: 'App',
  components: { DailyHeader, DailyList }
}
</script>

<style>
</style>
