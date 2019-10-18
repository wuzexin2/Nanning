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
            <h1>必吃美食</h1>
            <ul>
              <li>
                <h3><router-link to="/delicacy">风味小吃</router-link></h3>
              </li>
              <li>
                <h3><router-link to="/special">特色菜</router-link></h3>
              </li>
            </ul>
          </section>
          <section class="lefttwo">
            <v-lxfs></v-lxfs>
          </section>
        </el-col>
        <el-col :xs="24" :sm="24" :md="16" :lg="16" :xl="12" class="rightbar">
          <div class="breadcrumb">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item>特色菜</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
          <div class="xlfj">
            <div class="item"  v-for="item in imgList" :key="item.id" >
              <el-image
                style="width:220px;height:140px"
                :src="item.url"
                :preview-src-list="srcList"
              >
              </el-image>
              <p class="title">{{item.title}}</p>
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
  name: "Special",
  components: {
    VFooter,
    VHeader,
    VLxfs
  },
  data() {
    return {
      src: "/static/images/banner_erji3.jpg",
      imgList: [
        {
          id: "0001",
          url: "/static/images/150327113039897.jpg",
          title:"爆炒柠檬鸭"
        },{
          id: "0002",
          url: "/static/images/150327113039892.jpg",
          title:"灵马豆腐烧鲶鱼"
        }
        ,{
          id: "0003",
          url: "/static/images/150327113039891.jpg",
          title:"老友炒鸭胗"
        }

      ],

      srcList: [
        "/static/images/150327113039897.jpg",
        "/static/images/150327113039892.jpg",
        "/static/images/150327113039891.jpg"
        

      ]
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
  border-top: 2px solid #1d953f;
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
.leftone ul{
    padding-left: 0px;
}
.leftone ul li {
  list-style: none;
  background: url(/static/images/ico_3.jpg) no-repeat 4px center;
  padding-left: 20px;
  white-space: nowrap;
}
.leftone ul li  h3 a{
  text-decoration: none;
    color: #5e5e5e;
}
.breadcrumb .el-breadcrumb {
  height: 40px;
  line-height: 38px;
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

.rightbar {

  background-color: #fff;
  border: 1px solid #cccccc;
}
.xlfj{
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 10px 0px;
}
.xlfj .title{
  color: #0f8f38;
    background-color: #ebf3ee;
    width: 220px;
    margin: 0 auto;
    text-align: center
}
.item{
    display: flex;
    flex-direction: column;
    width: 45%;
    margin-bottom: 18px;
    align-items: center;
}
</style>