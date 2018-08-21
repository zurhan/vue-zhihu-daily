import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import subject from '@/components/DailySubject'
import list from '@/components/DailyList'
import story from '@/components/DailyStory'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'list',
      component: list
    },
    {
      path: '/list',
      name: 'list',
      component: list
    },
    {
      path: '/subject',
      name: 'subject',
      component: subject
    },
    {
      path: '/story/:id',
      name: 'story',
      component: story
    }
  ]
})
