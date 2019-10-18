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
            <h1>必玩景点</h1>
            <ul>
              <li>
                <h3>线路介绍</h3>
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
              <el-breadcrumb-item>旅游景点</el-breadcrumb-item>
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
  name: "Tourism",
  components: {
    VFooter,
    VHeader,
    VLxfs
  },
  data() {
    return {
      src: "/static/images/banner_erji2.jpg",
      imgList: [
        {
          id: "0001",
          url: "/static/images/ac2fc3c443a030a138db4941.jpg",
          title:"青秀山"
        },{
          id: "0002",
          url: "/static/images/8cb1cb13495409232994fbb49258d109b2de497f.jpg",
          title:"灵水"
        }
        ,{
          id: "0003",
          url: "/static/images/03087bf40ad162d9e177468510dfa9ec8b13cd89.jpg",
          title:"南宁大明山"
        }
        ,{
          id: "0004",
          url: "/static/images/0865b5188d74656d34fa416e.jpg",
          title:"药用植物园"
        }
        ,{
          id: "0005",
          url: "/static/images/902397dda144ad340cc4a51ed1a20cf431ad852b.jpg",
          title:"广西民族博物馆"
        }
        ,{
          id: "0006",
          url: "/static/images/c71d0e381eddfbaab311c753.jpg",
          title:"西津湖"
        }
        ,{
          id: "0007",
          url: "/static/images/b90e7bec54e736d1aa1945aa9b504fc2d562690e.jpg",
          title:"九龙瀑布森林公园"
        }
      ],

      srcList: [
        "/static/images/ac2fc3c443a030a138db4941.jpg",
        "/static/images/8cb1cb13495409232994fbb49258d109b2de497f.jpg",
        "/static/images/03087bf40ad162d9e177468510dfa9ec8b13cd89.jpg",
        "/static/images/0865b5188d74656d34fa416e.jpg",
        "/static/images/902397dda144ad340cc4a51ed1a20cf431ad852b.jpg",
        "/static/images/c71d0e381eddfbaab311c753.jpg",
        "/static/images/b90e7bec54e736d1aa1945aa9b504fc2d562690e.jpg"

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