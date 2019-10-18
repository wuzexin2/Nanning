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
              <h1>新闻分类</h1>
              <ul>
                <li>
                  <h3><router-link to="/new">旅游动态</router-link></h3>
                </li>
                <li>
                  <h3><router-link to="/newest">旅游公告</router-link></h3>
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
                <el-breadcrumb-item>旅游公告</el-breadcrumb-item>
              </el-breadcrumb>
            </div>
            <div class="news">
                <ul >
                    <li v-for="item in newList" :key="item.id">
                        <span>{{item.title}}</span>
                        <span>{{item.time}}</span>
                    </li>
                </ul>

          
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
  name: "New",
  components: {
    VFooter,
    VHeader,
    VLxfs
  },
  data() {
    return {
      src: "/static/images/banner_erji5.jpg",
      newList:[
          {
              'id':"01",
              'title':'关于举办2016年南宁市“乡村旅游”精准扶贫专题培训班的通知',
              'time':'2018-06-02'
          
          },{
              'id':"02",
              'title':'关于举办2016年南宁市“乡村旅游”精准扶贫专题培训班的通知',
              'time':'2018-03-02'
          
          },{
              'id':"03",
              'title':'关于举办2016年南宁市“乡村旅游”精准扶贫专题培训班的通知',
              'time':'2018-09-02'
          
          },

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
.leftone ul li  h3 a{
  text-decoration: none;
    color: #5e5e5e;
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
.news {
  padding: 10px 20px;
  min-height: 560px;
}
.rightbar {
  background-color: #fff;
  border: 1px solid #cccccc;
}

.news ul li{
  list-style: none;
    line-height: 42px;
    height: 42px;
    background: url(/static/images/ico_2.jpg) left center no-repeat;
    padding-left: 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
</style>