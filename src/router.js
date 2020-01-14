import Vue from 'vue'
import Router from 'vue-router'


import List from './pages/List';
import Navigation from './pages/Navigation';
import Entry from './pages/Entry';
import Top from './pages/Top';
import Impres from './pages/Impres';
import Description from './pages/Description';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/Top',
      name: 'Top',
      component: Top
    },
    {
      path: '/List',
      name: 'List',
      component: List
    },
    {
      path: '/Navigation',
      name: 'Navigation',
      component: Navigation
    },
    {
      path: '/Entry',
      name: 'Entry',
      component: Entry
    },
    {
      path: '/Description',
      name: 'Description',
      component: Description
    },
    {
      path: '/Impres',
      name: 'Impres',
      component: Impres
    },
  ]
})