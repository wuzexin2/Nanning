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
            <h1>风景景点</h1>
            <ul>
              <li>
                <h3>景点介绍</h3>
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
              <el-breadcrumb-item>旅游风景</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
          <div class="xlfj">
            <div class="item"  v-for="item in imgList" :key="item.id" >
              <el-image
                :src="item.url"
                :preview-src-list="srcList"
              ></el-image>
              <span>{{item.title}}</span>
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
  name: "Beautiful",
  components: {
    VFooter,
    VHeader,
    VLxfs
  },
  data() {
    return {
      src: "/static/images/banner_erji1.jpg",
      imgList: [
        {
          id: "0001",
          url: "/static/images/201410301619396038.jpg",
          title:"人民公园"
        },{
          id: "0002",
          url: "/static/images/201410301618110413.jpg",
          title:"南宁海底世界"
        }
        ,{
          id: "0003",
          url: "/static/images/201410301611286194.jpg",
          title:"金花茶公园"
        }
        ,{
          id: "0004",
          url: "/static/images/201410301613498694.jpg",
          title:"五象广场"
        }
        ,{
          id: "0005",
          url: "/static/images/201410301614494319.jpg",
          title:"地王云顶"
        }
        ,{
          id: "0006",
          url: "/static/images/201410301615449632.jpg",
          title:"南宁民歌湖游船"
        }
      ],

      srcList: [
        "/static/images/201410301619396038.jpg",
        "/static/images/201410301618110413.jpg",
        "/static/images/201410301611286194.jpg",
        "/static/images/201410301613498694.jpg",
        "/static/images/201410301614494319.jpg",
        "/static/images/201410301615449632.jpg"

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
.item{
    display: flex;
    flex-direction: column;
    width: 45%;
    margin-bottom: 18px;
    align-items: center;
}
</style>