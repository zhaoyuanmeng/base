/*
 *@Author: 赵元达
 *@Date: 2022-04-25 15:02:59
 *@parms: 
 *@Description: 
*/

import { createRouter, createWebHistory} from 'vue-router'
const Test = ()=> import('../views/test/index.vue')
const Index = ()=> import('../views/index/index.vue')
const Login = ()=> import('../views/login/index.vue')
const routes = [  
    {    path: '/',    name: 'test',    component: Test  },  
    {    path: '/home',    name: 'index',    component: Index,  }, 
    {    path: '/about',    name: 'login',    component: Login  },
]
const router = createRouter({  
    history: createWebHistory(),  
    routes
})

export default router

