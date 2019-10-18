<template>
  <div>
    <v-header></v-header>
    <div class="body">
      <div class="img">
        <el-image :src="src"></el-image>
      </div>
      <el-row :gutter="10">
        <div class="content">
          <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="12" class="leftbar">
            <section class="leftone">
              <h1>其他目录</h1>
              <ul>
                <li>
                  <h3><router-link to="/leave">给我留言</router-link></h3>
                </li>
                <li>
                  <h3><router-link to="/about">团队介绍</router-link></h3>
                </li>
                <li>
                  <h3><router-link to="/connection">联系我们</router-link></h3>
                </li>
              </ul>
            </section>
            <section>
              <v-lxfs></v-lxfs>
            </section>
          </el-col>
          <el-col :xs="24" :sm="24" :md="16" :lg="16" :xl="12" class="rightbar">
            <div class="breadcrumb">
              <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>团队介绍</el-breadcrumb-item>
              </el-breadcrumb>
            </div>
            <div class="con_news">
              <p class="p_tit2">团队介绍</p>

              <div class="con">
                <p></p>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;我们的团队成员来自五湖四海，为了一个共同的梦想走到了一起。我们虽然拥有不同的性格、但都有一个共同的特点：热爱物联网、热爱网站开发！
                  <br />&nbsp;&nbsp;&nbsp;&nbsp;我们激情四射，但底蕴丰厚；我们活力无限，也同样耐得住寂寞；我们满怀理想，脚踏实地去实现；我们创想无限，我们拒绝平庸！
                  <br />&nbsp;&nbsp;&nbsp;&nbsp;在这里，我们的每个想法都会得到团队中肯的意见，最终趋于完美；在这里，我们在一起，没有曲高和寡，只有知己相伴；在这里，我们的工作受到应得的肯定，付出一定有回报！
                </p>

                <p>
                  <br />
                </p>
              </div>
            </div>
          </el-col>
        </div>
      </el-row>
    </div>
    <v-footer></v-footer>
  </div>
</template>
<script>
import VHeader from "./common/Header";
import VFooter from "./common/Footer";
import VLxfs from "./common/Lxfs";
export default {
  name: "About",
  components: {
    VFooter,
    VHeader,
    VLxfs
  },
  data() {
    return {
      src: "/static/images/banner_erji.jpg"
    };
  }
};
</script>
<style scoped>
.body {
  margin: 0px 12.5%;
}
.content {
  margin-bottom: 2%;
  margin-top: 2%;
}

.leftone {
  margin-bottom: 18px;
  background-color: #fff;
  border: 1px solid #cccccc;
  color: #5e5e5e;
  font-size: 14px;
  border-top-width: 2px;
  border-top-style: solid;
  border-top-color: #1d953f;
}
.leftone h1 {
  overflow-wrap: break-word;
  background-color: #ffffff;
  padding-left: 14px;
  height: 25px;
  font-weight: bold;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: #cccccc;
}
.leftone ul {
  padding-left: 0px;
}
.leftone ul li {
  list-style: none;
  height: 37px;
  line-height: 37px;
  font-size: 14px;
  background: url(/static/images/ico_3.jpg) no-repeat 4px center;
  padding-left: 20px;
  white-space: nowrap;
}
.breadcrumb .el-breadcrumb {
  height: 40px;
  line-height: 38px;
  font-size: 14px;
  color: #000000;
  padding-left: 28px;
  background-repeat: repeat-x;
  background-position: 15px center;
  border-top-width: 2px;
  border-top-style: solid;
  border-top-color: #1d953f;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: #cccccc;
}
.con_news {
  padding: 10px 20px;
  min-height: 560px;
}
.rightbar {
  background-color: #fff;
  border: 1px solid #cccccc;
}
.p_tit2 {
  text-align: center;
  line-height: 26px;
  display: block;
  color: #3c3c3c;
  font-size: 14px;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: #cccccc;
}
.con {
  color: #686868;
  line-height: 27px;
}
.leftone ul li  h3 a{
  text-decoration: none;
    color: #5e5e5e;
}
</style>