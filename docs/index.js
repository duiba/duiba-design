import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import routes from './router.config';
import demoBlock from './components/demo-block';
import SideNav from './components/side-nav';
import Alert from '../src/components/Alert';

Vue.use(VueRouter);
Vue.component('demo-block', demoBlock);
Vue.component('side-nav', SideNav);
Vue.component('alert', Alert);

const AppContainer = Vue.extend(App);
const router = new VueRouter();

router.map(routes);

router.redirect({
  '*': '/component/alert'
});

router.beforeEach(function(transition) {
  window.scrollTo(0, 0);
  transition.next();
});

router.start(AppContainer, '#app-container');
