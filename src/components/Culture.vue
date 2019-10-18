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
              <h1>话说南宁</h1>
              <ul>
                <li>
                  <h3>
                    <router-link to="/introduce">南宁简介</router-link>
                  </h3>
                </li>
                <li>
                  <h3>
                    <router-link to="/culture">南宁文化</router-link>
                  </h3>
                </li>
                <li>
                  <h3>
                    <router-link to="/historic">南宁历史</router-link>
                  </h3>
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
                <el-breadcrumb-item>南宁文化</el-breadcrumb-item>
              </el-breadcrumb>
            </div>
            <div class="con_news">
              <p class="p_tit2">
                <span>南宁文化</span>
                发布人:管理员 发布时间：2016-07-2 23:25:28
              </p>

              <div class="con">
                <p></p>

                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;南宁又称绿城。有东盟博览会，有民歌节。美丽的南方城市。
                  <br />
&nbsp;&nbsp;&nbsp;&nbsp;南宁，是一座历史悠久的边陲古城，具有深厚的文化积淀，古称邕州，是一个民族欢乐、活力动感的文化之城。南宁以壮族为主，居住着壮、汉、苗、瑶等36个少数民族，总人口为666.16万，各族人民和睦相处，民族文化缤纷灿烂，民俗活动多姿多彩。抛绣球、赛龙舟、板鞋舞、抢花炮、踩风车等各种民俗活动精彩纷呈。南宁是一座充满歌声的城市，每年一届的南宁国际民歌艺术节是世界民族艺术交流的盛会，热情的壮乡儿女与中外艺术家欢聚一堂，以歌会友、以歌传情，充分展示歌的海洋，舞的故乡的无限魅力。
                  <br />
&nbsp;&nbsp;&nbsp;&nbsp;南宁别称绿城、凤凰城、五象城。旅游资源丰富，北连桂林，南接北海，构成了广西的黄金旅游带。壮丽的边关风采、浪漫的海滩风貌、迷人的异国情调，星罗棋布的灵山秀水，古朴悠远的古迹故址，山、水、人、情构成南宁多层次的旅游景观。
                  <br />
&nbsp;&nbsp;&nbsp;&nbsp;南宁城区人通用南宁白话（粤语方言之一），郊区部分使用平话（汉语方言之一)，壮族使用壮语（分别属于南部方言邕南土语和北部方言邕北土语）。整个南宁市最通行的是南宁白话以及混杂粤语元素的普通话，各族人民大部分能使用普通话。
                  <br />
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
  name: "Culture",
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
.leftone ul li h3 a {
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
  color: #bcb2b2;
}
.p_tit2 span {
  display: block;
  height: 42px;
  line-height: 42px;
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
</style>