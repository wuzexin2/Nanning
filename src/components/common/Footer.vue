<template>
  <div class="footer">
    <div class="jz">
      <p class="lianjie" v-for="item in ljList" :key="item.id">
        <router-link :to="{path:item.path}"><span>{{item.nav}}</span></router-link>
        <el-divider direction="vertical"></el-divider>
      </p>
    </div>
    <p >Copyright &copy; 2015－2016 All Rights Reserved 版权所有 XXXXXXXXXXXXXXXXXX</p>
    <p >地址：XXXXXXXXXXXXXXXXXX</p>
  </div>
</template>
<script>
export default {
  name: "Footer",
  data() {
    return {
      ljList: [
        {
          id: "1",
          nav: "首页",
          path:'/'
        },
        {
          id: "2",
          nav: "历史",
          path:'/historic'
        },
        {
          id: "3",
          nav: "风景",
          path:'/beautiful'
        },
        {
          id: "4",
          nav: "旅游",
          path:'/tourism'
        },
        {
          id: "5",
          nav: "美食",
          path:'/delicacy'
        },
        {
          id: "6",
          nav: "动态",
          path:'/new'
        },
        {
          id: "7",
          nav: "联系我们",
          path:'/connection'
        }
      ]
    };
  }
};
</script>
<style scope>
.footer {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  color: #5e5e5e;
}
.lianjie {
  display: inline-block;

}
.lianjie a{
  
  text-decoration: none;
    color: #5e5e5e;

}
.jz{
    align-items: center
}

</style>