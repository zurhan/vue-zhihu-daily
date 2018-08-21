<template>
  <div>
    <meta name="referrer" content="never">
    <a style="font-size: 120px">subject</a>
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
    var url = this.HOME + '/api/4/themes'
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
