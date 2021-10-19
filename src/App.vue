<script setup>
import router from "./router/index.js";
import { ref } from "vue";
const toHome = () => {
  router.push("/home");
};
const toAbout = () => {
  router.push("/about");
};

let nid = ref("123456");
const toNews = () => {
  router.push("/news/" + nid.value);
}

const toEvents=()=>{
 router.push({path:'/events',query:{title:'阿富汗新闻',content:'塔利班重新掌握政权'}});

}
</script>

<template>
  <div>
    <div class="nav">
      <!--
      <button @click="toHome()">首页</button>
     <button @click="toAbout()">关于我们</button>
    -->

      <router-link to="/home">首页页面</router-link>&nbsp;&nbsp;
      <router-link :to="'/news/' + nid">新闻页面</router-link>&nbsp;&nbsp;
      <!--
      <router-link to="/about" active-class="current">关于我们</router-link>&nbsp;&nbsp;
      <router-link :to="{path:'/events',query:{title:'阿富汗新闻',content:'塔利班重新掌握政权'}}">今日要闻</router-link>
      -->
      <button @click="toAbout()">关于我们</button>
      <button @click="toEvents()">今日要闻</button>

    </div>
    <div class="maincontent">
      <!--展示符合路由规则结果页面-->
      <router-view></router-view>
    </div>
    <div class="footer">这是底部版权问题</div>
  </div>
</template>

<style>
div {
  text-align: center;
}
.nav {
  background-color: crimson;
}
.maincontent {
  background-color: tomato;
}
.footer {
  background-color: palevioletred;
}
.current,
.router-link-active {
  font-size: 20px;
  color: darkred;
  font-weight: bolder;
}
</style>
