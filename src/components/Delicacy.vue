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
              <el-breadcrumb-item>风味小吃</el-breadcrumb-item>
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
  name: "Delicacy",
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
          url: "/static/images/d058ccbf6c81800a0ddb2b83b13533fa828b4704.jpg",
          title:"老友粉"
        },{
          id: "0002",
          url: "/static/images/0dd7912397dda1447836ce3fb2b7d0a20cf48604.jpg",
          title:"南宁酸品"
        }
        ,{
          id: "0003",
          url: "/static/images/a71ea8d3fd1f41348a31a7f3251f95cad1c85e3c.jpg",
          title:"粥品"
        }
        ,{
          id: "0004",
          url: "/static/images/94cad1c8a786c91731850b92c83d70cf3ac75792.jpg",
          title:"八仙粉"
        }
        ,{
          id: "0005",
          url: "/static/images/622762d0f703918f605d6561503d269758eec489.jpg",
          title:"卷筒粉"
        }
        ,{
          id: "0006",
          url: "/static/images/c995d143ad4bd1130dcdec995bafa40f4bfb051c.jpg",
          title:"粉胶"
        }
        ,{
          id: "0007",
          url: "/static/images/8b82b9014a90f603e74dd9ec3812b31bb151ed98.jpg",
          title:"柠檬鸭"
        }
      ],

      srcList: [
        "/static/images/d058ccbf6c81800a0ddb2b83b13533fa828b4704.jpg",
        "/static/images/0dd7912397dda1447836ce3fb2b7d0a20cf48604.jpg",
        "/static/images/a71ea8d3fd1f41348a31a7f3251f95cad1c85e3c.jpg",
        "/static/images/94cad1c8a786c91731850b92c83d70cf3ac75792.jpg",
        "/static/images/622762d0f703918f605d6561503d269758eec489.jpg",
        "/static/images/c995d143ad4bd1130dcdec995bafa40f4bfb051c.jpg",
        "/static/images/8b82b9014a90f603e74dd9ec3812b31bb151ed98.jpg"

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