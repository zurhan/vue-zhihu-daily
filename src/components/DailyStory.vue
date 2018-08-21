<template>
<div>
  <!-- 防止获取知乎日报的图片时报403，图片盗链 -->
  <meta name="referrer" content="never">
  <link rel="stylesheet" v-bind:href="story.css">
  <div class="box">
    <a style="font-size: 26px">{{ story.title }}</a>
    <div v-html="story.body">
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      story: '',
      zhtml: '',
      zcss: ''
    }
  },
  mounted: function () {
    var url = this.HOME + '/api/4/news/' + this.$route.params.id
    this.$axios({
      method: 'GET',
      url: url
    }).then(rsp => {
      this.story = rsp.data
      this.zhtml = rsp.data.body
      this.zcss = rsp.data.css[0]
    }).catch(function (err) {
      console.log(err)
    })
  }
}
</script>

<style scoped>
.box {
  width: 900px;
  margin: 0 auto;
  padding: 65px
}
.inner {
  padding: 65px;
  position: relative;
}
.img-place-holder {
  height: 0px;
}
</style>
