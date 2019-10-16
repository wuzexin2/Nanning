<template>
  <div class="header">
    <div class="logo">
      <img src="../../static/images/logo.jpg" />
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
          <a href>历史</a>
        </el-menu-item>
        <el-menu-item index="3">
          <a href>风景</a>
        </el-menu-item>
        <el-menu-item index="4">
          <a href>旅游</a>
        </el-menu-item>
        <el-menu-item index="5">
          <a href>美食</a>
        </el-menu-item>
        <el-menu-item index="6">
          <a href>动态</a>
        </el-menu-item>
        <el-menu-item index="7">
          <a href>留言</a>
        </el-menu-item>
        <el-menu-item index="8">
          <a href>团队介绍</a>
        </el-menu-item>
        <el-menu-item index="9">
          <a href>联系我们</a>
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
<style scope>
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