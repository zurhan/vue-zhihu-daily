<template>
<div>
  <!-- 防止获取知乎日报的图片时报403，图片盗链 -->
  <meta name="referrer" content="never">
  <link rel="stylesheet" v-bind:href="story.css">
  <div class="box">
    <div style="position: relative; height: 400px">
      <img v-bind:src="story.image" class="img-cover">
      <span style="position: absolute; left: 10px; bottom:40px; color: #d3dce6;font-size: 30px"><strong>{{story.title}}</strong></span>
      <span style="position: absolute; left: 10px; bottom:10px; color: #d3dce6;font-size: 12px">图片：{{ story.image_source }}</span>
    </div>
    <div style="position: relative;" v-html="story.body">
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      story: '',
    }
  },
  mounted: function () {
    var url = '/api/4/news/' + this.$route.params.id
    // let url = 'http://localhost:8071/news/' + this.$route.params.id
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
  height: auto;
  margin: 0 auto;
  padding: 65px
}
.inner {
  padding: 65px;
  position: relative;
}
.content-image{
  size: auto;
}
.img-place-holder {
  height: 10px;
}
.img-cover {
  width: 100%;
  height: auto;
  top:20%;
  -webkit-transform: translateY(-40%);
  -ms-transform: translateY(-40%);
  -moz-transform: translateY(-40%);
  position: relative;
}
</style>
