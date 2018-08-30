<template>
<div id="DailyList">
  <!-- 防止获取知乎日报的图片时报403，图片盗链 -->
  <meta name="referrer" content="never">
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <div class="box">
    <nav class="inner">
      <el-carousel :interval="4000" type="card" height="300px" >
        <el-carousel-item v-for="top in tops" :key="top.id" name="top.title">
          <router-link :to="{name: 'story', params: {id: top.id}}">
            <div style="">
            <img v-bind:src="top.image" class="img-cover">
            <span style="position: absolute; left: 10px; bottom:10px; color: #d3dce6;font-size: 20px"><strong>{{ top.title }}</strong></span>
            </div>
          </router-link>
        </el-carousel-item>
      </el-carousel>
    <div class="card" v-for="story in stories" :key="story.id">
    <router-link :to="{name: 'story', params: {id: story.id}}" @click="routerto(story.id)">
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
    /* max-width: 100%;
    max-height: 100%; */
    padding: auto;
}
.img-cover {
  width: 100%;
  height: auto;
  top:10%;
  -webkit-transform: translateY(-20%);
  -ms-transform: translateY(-20%);
  -moz-transform: translateY(-20%);
  position: relative;
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

@media (max-width:860px) {
    .header .inner {
        padding: 15px 30px
    }

}

@media (max-width:600px) {
    .header .inner {
        padding: 15px
    }

    .header a {
        margin-right: 1em
    }

    .header .github {
        display: none
    }

}

.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
    position: relative;
    text-align: center
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
