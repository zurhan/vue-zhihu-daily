<template>
<div>
  <meta name="referrer" content="never">
  <div class="box">
    <h1>List</h1>
    <nav class="inner">
    <div class="card" v-for="theme in themes" :key="theme.id">
    <router-link :to="{name: 'themeList', params: {themeId: theme.id}}">
      <img v-bind:src="theme.thumbnail" width="260px" height="260px">
      <p class="title">{{ theme.name }}</p>
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
      themes: ''
    }
  },
  mounted: function () {
    var url = '/api/4/themes'
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
</style>
