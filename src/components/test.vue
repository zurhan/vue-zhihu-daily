<template>
<div id="DailyList">
  <!-- 防止获取知乎日报的图片时报403，图片盗链 -->
  <meta name="referrer" content="never">
  <div class="box">
    <h1>List</h1>
    <nav class="inner">
      <div><p>这是一个测试页面</p></div>
    <div class="card" v-for="story in stories" :key="story.id">
    <router-link :to="{name: 'story', params: {id: story.id}}">
      <img v-bind:src="story.images[0]" width="260px" height="260px">
      <p class="title">{{ story.title }}</p>
    </router-link>
  </div>
  </nav>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      stories: [],
      tops: []
    }
  },
  created: function () {
    // var url = '/api' + '/api/4/news/latest'
    var url = '/api/4/news/latest'
    // var url = 'http://localhost:8071/news/latest'
    this.$axios({
      method: 'GET',
      url: url
    }).then(rsp => {
      this.stories = rsp.data.stories
      this.tops = rsp.data.top_stories
    })
  }
}
</script>

<style scoped>
.box {
  width: 960px;
  margin: 0 auto
}
.inner {
  /* background-color: #fff; */
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 65px 5px;
    position: relative;
}
.card {
  width: 300px;
  height: 340px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  padding: 2px;
  margin: 10px 5px 10px 0;
  border-radius: 0;
  position: relative;
  float: left;
  text-align: center
}
.card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
img {
    border-radius: 5px;
    width: 260px;
    height: 260px;
    padding: auto
}
.title {
  line-height: 24px;
  color: #000;
  /* -webkit-transition: color .15s ease;  */
  /* -o-transition: color .15s ease; */
  /* transition: color .15s ease; */
  display: inline-block;
  /* vertical-align: middle; */
  font-weight: 300;
  letter-spacing: .075em;
  margin-right: 1.8em
}
</style>
