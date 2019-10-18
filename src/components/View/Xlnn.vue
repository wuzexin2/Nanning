<template>
  <div class="xlnn">
    <p class="title">秀丽南宁</p>
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in xlnnList" :key="item.id">
        <img class="medium" :src="item.imgUrl" >
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
    name:"Xlnn",
    data(){
        return{
            xlnnList:[
                {
                    'id':'1',
                    'imgUrl':'/static/images/201410301619396038.jpg'
                },
                {
                    'id':'2',
                    'imgUrl':'/static/images/201410301618110413.jpg'
                },
                {
                    'id':'3',
                    'imgUrl':'/static/images/201410301611286194.jpg'
                },
                {
                    'id':'4',
                    'imgUrl':'/static/images/201410301613498694.jpg'
                },
                {
                    'id':'5',
                    'imgUrl':'/static/images/201410301614494319.jpg'
                },
                {
                    'id':'6',
                    'imgUrl':'/static/images/201410301615449632.jpg'
                }
            ]
        }
    }

}
</script>
<style scoped>
.xlnn{
    margin: 0px 12%;
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
</style>