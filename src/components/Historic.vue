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
                  <h3><router-link to="/introduce">南宁简介</router-link></h3>
                </li>
                <li>
                  <h3><router-link to="/culture">南宁文化</router-link></h3>
                </li>
                <li>
                  <h3><router-link to="/historic">南宁历史</router-link></h3>
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
                <el-breadcrumb-item>南宁历史</el-breadcrumb-item>
              </el-breadcrumb>
            </div>
            <div class="con_news">
              <p class="p_tit2">
                <span>南宁历史</span>
                发布人:管理员 发布时间：2016-07-2 23:25:28
              </p>

              <div class="con">
                <p></p>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;南宁历史悠久，在古代，南宁属于百越领地。秦始皇统一岭南地区后，南宁属于桂林郡。西汉时期，汉武帝又将它置于玉林郡管辖。东晋大兴元年（公元318年），置大兴郡，以南宁为郡治所在地，南宁建制从此开始，至今已有1600多年。唐朝贞观八年（公元634年），一说贞观六年（公元632年），唐太宗将该地命名为邕州，设邕州下都督府，这就是南宁简称“邕”的由来。
                  <br />&nbsp;&nbsp;&nbsp;&nbsp;从元丰三年(公元1080年)起，邕城人民开展修城墙、建城楼、挖城壕等浩大工程，城区轮廓大体呈椭圆状，南北稍长，东西较窄，古有“直城三里七，横城七里三”的说法。元朝泰定元年（公元1324年），元朝政府将邕州路改为南宁路，取其南疆安宁之意，“南宁”由此得名。
                  <br />&nbsp;&nbsp;&nbsp;&nbsp;清宣统三年九月(1911年)，南宁宣布独立。民国元年(1912年)废宣化县，以南宁府长理事，直属广西军政府，后改称广西省政府。三次迁省：第一次迁省：1912年广西省会由桂林迁到南宁。第二次迁省：1936年广西省会由南宁迁回桂林。第三次迁省：1950年。
                  <br />&nbsp;&nbsp;&nbsp;&nbsp;上世纪30年代起，南宁就是广西省内仅次于梧州的第二大商业城市，商业中心的地位高于当时的省会桂林，也正是民国时期商业的繁荣，铸造了南宁作为一座中心城市的地位和影响力，即使当时还不是省会，但很多方面已经和桂林叫板，正是由于商业和交通的中心地位促成了南宁在近代迅速崛起，最终成为解放后广西省会的不二之选。
                  <br />&nbsp;&nbsp;&nbsp;&nbsp;经过这一千六百余年，南宁这座英雄的城市，写下无数动人心魄的篇章。宋熙宁八年冬，至州苏缄率兵二千八百名，英勇抗击交趾侵略者八万人，坚守邕州达四十二天，粮尽弹绝，壮烈殉国。1939年11月至1940年1月，我爱国将士以数万之众与日寇大战昆仑关，殊死搏斗，正气浩然。1929年邓小平、张云逸等共产党人在南宁开展士兵运动，组织革命武装力量，挥师左、右江，相继举行百色起义、龙州起义，创立于中国工农红军第七军、第八军。1958年1月，毛泽东主席以六十五岁高龄，冒着严寒，两次到邕江冬泳，劈波斩浪，表了无产阶级革命家的伟大气魄------光辉的历史，丰富的文化，构成了独特的人文景观。
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
  name: "Historic",
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