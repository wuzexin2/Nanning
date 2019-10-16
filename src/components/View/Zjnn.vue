<template>
  <div class="content">
    <p class="title">走进南宁</p>

    <ul class="container">
      <li class="item" v-for="item in nnList" :key="item.id">
        <a class="item-img">
          <img class="item-img-content" :src="item.imgUrl" />
        </a>

        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p>{{ item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Zjnn",
  data() {
    return {
      nnList: [
        {
          id: "1",
          imgUrl: "/static/images/pic_1.jpg",
          title: "南宁简介",
          desc:
            "南宁，简称“邕”，是广西壮族自治区首府，全区政治、经济、交通、科教文卫、金融和信息中心，是中国面向东盟开放合作的前沿城市、中国—东盟博览会永久举办地、北部湾经济区核心城市、国家“一带一路”有机衔接的重要门户城市。"
        },
        {
          id: "2",
          imgUrl: "/static/images/pic_2.jpg",
          title: "南宁文化",
          desc:
            "南宁别称绿城、凤凰城、五象城。旅游资源丰富，北连桂林，南接北海，构成了广西的黄金旅游带。壮丽的边关风采、浪漫的海滩风貌、迷人的异国情调，星罗棋布的灵山秀水，古朴悠远的古迹故址，山、水、人、情构成南宁多层次的旅游景观。"
        },
        {
          id: "3",
          imgUrl: "/static/images/pic_3.jpg",
          title: "南宁历史",
          desc:
            "南宁历史悠久，在古代，南宁属于百越领地。秦始皇统一岭南地区后，南宁属于桂林郡。西汉时期，汉武帝又将它置于玉林郡管辖。东晋大兴元年（公元318年），置大兴郡，以南宁为郡治所在地，南宁建制从此开始，至今已有1600多年。"
        }
      ]
    };
  }
};
</script>
<style scope>
.content {
  margin-left: 12%;
  margin-right: 12%;
}
.title {
  text-align: center;
  background: url(/static/images/bg_tit.jpg) no-repeat left bottom;
  height: 60px;
  line-height: 76px;
  color: #0f8f3a;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 14px;
}
.container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;

  padding-left: 0px;
  justify-content: space-around;
}
.container li {
  list-style: none;
  width: 291px;
  height: 310px;
  padding: 16px 13px 10px;
  background-color: #ffffff;
  overflow: hidden;
  border: 1px solid #beccc3;
}
.item-img img {
  width: 291px;
  height: 126px;
}
.item-info {
  line-height: 20px;
  color: #000000;
}
.item-title {
  display: block;
  text-align: center;
  line-height: 24px;
  color: #0a0a0a;
  font-size: 14px;
}
</style>