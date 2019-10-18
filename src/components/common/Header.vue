<template>
  <div class="header">
    <div class="logo">
      <img src="/static/images/logo.jpg" />
    </div>
    <div class="nav">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1">
          <a href>网站首页</a>
        </el-menu-item>
        <el-menu-item index="2">
          <router-link to="/historic">历史</router-link>
        </el-menu-item>
        <el-menu-item index="3">
          <router-link to="/beautiful">风景</router-link>
        </el-menu-item>
        <el-menu-item index="4">
          <router-link to="/tourism">旅游</router-link>
        </el-menu-item>
        <el-menu-item index="5">
          <router-link to="/delicacy">美食</router-link>
        </el-menu-item>
        <el-menu-item index="6">
          <router-link to="/new">动态</router-link>
        </el-menu-item>
        <el-menu-item index="7">
          <router-link to="/leave" >留言</router-link>
        </el-menu-item>
        <el-menu-item index="8">
          <router-link to="/about">团队介绍</router-link>
        </el-menu-item>
        <el-menu-item index="9">
          <router-link to="/connection">联系我们</router-link>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header"
};
</script>
<style scoped>
.header {
 justify-content: center;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.nav a{
    text-decoration: none
}
</style>