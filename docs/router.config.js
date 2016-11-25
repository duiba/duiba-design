import navConfig from './nav.config.json';

const registerRoute = (navConfig) => {
  let route = {};
  let navs = navConfig['zh-CN'];
  navs.forEach(nav => {
    if (nav.groups) {
      nav.groups.forEach(group => {
        group.list.forEach(nav => {
          addRoute(nav);
        });
      });
    } else if (nav.children) {
      nav.children.forEach(nav => {
        addRoute(nav);
      });
    } else {
      addRoute(nav);
    }
  });

  function addRoute(page) {
    route['/component' + page.path] = {
      component: function(resolve) {
        require([`./examples${page.path}.vue`], resolve);
      }
    };
  }

  return route;
};

let route = registerRoute(navConfig);

export default route;
