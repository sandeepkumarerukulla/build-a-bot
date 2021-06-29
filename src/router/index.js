import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '../home/HomePage.vue';
import RobotBuilder from '../build/RobotBuilder.vue';
import PartInfo from '../parts/PartInfo.vue';
import BrowseParts from '../parts/BrowseParts.vue';
import RobotHeads from '../parts/RobotHeads.vue';
import RobotArms from '../parts/RobotArms.vue';
import RobotBases from '../parts/RobotBases.vue';
import RobotTorsos from '../parts/RobotTorsos.vue';
import SidebarStandard from '../sidebar/SidebarStandard.vue';
import SidebarBuild from '../sidebar/SidebarBuild.vue';
import ShoppingCart from '../cart/ShoppingCart.vue';

import DisplayEmployees from '../employee/DisplayEmployees.vue';
import AddEmployee from '../employee/AddEmployee.vue';
import EditEmployee from '../employee/EditEmployee.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/employees',
      name: 'employees',
      component: DisplayEmployees,
    },
    {
      path: '/add',
      name: 'AddEmployee',
      component: AddEmployee,
    }, {
      path: '/edit/:id',
      name: 'EditEmployee',
      params: true,
      component: EditEmployee,
    },
    {
      path: '/cart',
      name: 'Cart',
      component: ShoppingCart,
    },
    {
      path: '/',
      name: 'Home',
      components: {
        default: HomePage,
        sidebar: SidebarStandard,
      },
    }, {
      path: '/build',
      name: 'Build',
      components: {
        default: RobotBuilder,
        sidebar: SidebarBuild,
      },
    }, {
      path: '/parts/browse',
      name: 'Browseparts',
      component: BrowseParts,
      children: [{
        path: 'heads',
        name: 'BrowseHeads',
        component: RobotHeads,
      }, {
        path: 'arms',
        name: 'BrowseArms',
        component: RobotArms,
      }, {
        path: 'bases',
        name: 'BrowseBases',
        component: RobotBases,
      }, {
        path: 'torsos',
        name: 'BrowseTorsos',
        component: RobotTorsos,
      },
      ],
    }, {
      path: '/parts',
      name: 'Parts',
      component: PartInfo,
      props: true,
      beforeEnter(to, from, next) {
        if (to.params.part) {
          next(true);
        } else {
          next({ path: '/build' });
        }
      },
    },
  ],
});
