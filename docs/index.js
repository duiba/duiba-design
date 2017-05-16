import './assets/docs.less';
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import routes from './router.config';
import demoBlock from './components/demo-block';
import SideNav from './components/side-nav';
import DuibaDesign from '../src/index';

Vue.use(VueRouter);
Vue.component('demo-block', demoBlock);
Vue.component('side-nav', SideNav);

// init components
for (let i in DuibaDesign) {
  let module = DuibaDesign[i];
  if (!module.ignoreInit) {
    Vue.component(module.name, module);
  }
}

const router = new VueRouter({
  mode: 'hash',
  routes
});

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  next();
});

new Vue({
  el: '#app-container',
  router,
  render: h => h(App)
});
