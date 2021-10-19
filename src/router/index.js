//1 引入router相关方法
import { createRouter, createWebHashHistory } from 'vue-router'
import AboutYou from '../components/AboutYou.vue'
import AboutMe from '../components/AboutMe.vue'
import Events from '../components/Events.vue'
/*
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import NotFound from '../components/404.vue'
import News from '../components/News.vue'
*/
const Home = () => import('../components/Home.vue')
const About = () => import('../components/About.vue')
const News = () => import('../components/News.vue')
const NotFound = () => import('../components/404.vue')

//2 创建映射关系
const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',  //路由重定向
        component: Home
    },
    {
        path: '/about',
        component: About
    },

    {
        path: '/news/:nid',   //动态路由，必须是不变的部分+变得部分
        component: News
    },
    {
        path: '/events',  
        component: Events
    },
    {
        path: '/about',
        component: About,
        children: [
            {
                path: 'aboutyou',  /*嵌套路由不使用斜杠*/
                component: AboutYou
            },
            {
                path: 'aboutme',
                component: AboutMe
            }
        ]
    },
    {
        path: '/:catchAll(.*)',   //vue必须
        component: NotFound
    },

]
3 //创建路由对象
const router = createRouter({
    history: createWebHashHistory(),
    routes  //键值名字一样，使用简写
});
//4 导出以便vue中使用
export default router;

