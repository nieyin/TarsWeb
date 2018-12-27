import Vue from 'vue';
import Router from 'vue-router';

// 服务管理
import Server from '@/pages/server/dcacheIndex';
import ServerManage from '@/pages/server/manage';
import ServerPublish from '@/pages/server/publish';
import ServerConfig from '@/pages/server/config';
import ServerServerMonitor from '@/pages/server/monitor-server';
import ServerPropertyMonitor from '@/pages/server/monitor-property';
import userManage from '@/pages/server/user-manage';
import InterfaceDebuger from '@/pages/server/interface-debuger';


// dcache 运维管理
import Operation from '@/pages/dcacheOperation/index';
import Apply from '@/pages/dcacheOperation/apply/index';
import CreateApply from '@/pages/dcacheOperation/apply/createApply';
import CreateService from '@/pages/dcacheOperation/apply/createService.vue';
import installAndPublish from '@/pages/dcacheOperation/apply/installAndPublish.vue';
import Module from '@/pages/dcacheOperation/module/index.vue';
import CreateModule from '@/pages/dcacheOperation/module/CreateModule.vue';
import ModuleConfig from '@/pages/dcacheOperation/module/ModuleConfig.vue';
import ModuleServerConfig from '@/pages/dcacheOperation/module/ServerConfig.vue';
import ModuleInstallAndPublish from '@/pages/dcacheOperation/module/InstallAndPublish.vue';
import Region from '@/pages/dcacheOperation/region';

// 发布包管理
import releasePackage from '@/pages/releasePackage/index';
import proxyList from '@/pages/releasePackage/proxyList';
import routerList from '@/pages/releasePackage/routerList';
import cacheList from '@/pages/releasePackage/cacheList';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/server',
      name: 'Server',
      component: Server,
      children: [
        {
          path: ':treeid/manage',
          component: ServerManage,
        },
        {
          path: ':treeid/publish',
          component: ServerPublish,
        },
        {
          path: ':treeid/config',
          component: ServerConfig,
        },
        {
          path: ':treeid/server-monitor',
          component: ServerServerMonitor,
        },
        {
          path: ':treeid/property-monitor',
          component: ServerPropertyMonitor,
        },
        {
          path: ':treeid/interface-debuger',
          component: InterfaceDebuger,
        },
        {
          path: ':treeid/user-manage',
          component: userManage,
        },
      ],
    },
    {
      path: '/operation',
      name: 'Operation',
      component: Operation,
      redirect: '/operation/apply',
      children: [
        {
          path: 'apply',
          name: 'apply',
          component: Apply,
          redirect: '/operation/apply/createApply',
          children: [
            {
              path: 'createApply',
              component: CreateApply,
            },
            {
              path: 'createService/:applyId',
              component: CreateService,
            },
            {
              path: 'installAndPublish/:applyId',
              component: installAndPublish,
            },
          ]
        },
        {
          path: 'module',
          component: Module,
          redirect: '/operation/module/createModule',
          children: [
            {
              path: 'createModule',
              component: CreateModule,
            },
            {
              path: 'moduleConfig/:moduleId',
              component: ModuleConfig,
            },
            {
              path: 'serverConfig/:moduleId',
              component: ModuleServerConfig,
            },
            {
              path: 'installAndPublish/:moduleId',
              component: ModuleInstallAndPublish,
            },
          ]
        },
        {
          path: 'region',
          name: 'region',
          component: Region,
        },
      ],
    },
    {
      path: '/releasePackage',
      name: 'releasePackage',
      component: releasePackage,
      redirect: '/releasePackage/proxyList',
      children: [
        {
          path: 'proxyList',
          component: proxyList,
        },
        {
          path: 'routerList',
          component: routerList,
        },
        {
          path: 'cacheList',
          component: cacheList,
        },
      ],
    },
    {
      path: '*',
      redirect: '/server',
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    return {x: 0, y: 0}
  }
});
