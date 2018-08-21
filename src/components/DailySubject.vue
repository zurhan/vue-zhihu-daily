<template>
  <div>
    <meta name="referrer" content="never">
  </div>
</template>

<script>
export default {
  data () {
    return {
      themes: ''
    }
  },
  mounted: function () {
    var url = '/api' + '/api/4/themes'
    this.$axios({
      method: 'GET',
      url: url
    }).then(rsp => {
      this.themes = rsp.data.others
    })
  }
}
</script>

<style>

</style>
