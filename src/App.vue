<template>
  <div id="app">
    <DailyHeader></DailyHeader>
    <transition>
      <router-view/>
    </transition>
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
