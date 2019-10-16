<template>
  <div class="footer">
    <div class="jz">
      <p class="lianjie" v-for="item in ljList" :key="item.id">
        <span>{{item.nav}}</span>
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
          nav: "首页"
        },
        {
          id: "2",
          nav: "历史"
        },
        {
          id: "3",
          nav: "风景"
        },
        {
          id: "4",
          nav: "旅游"
        },
        {
          id: "5",
          nav: "美食"
        },
        {
          id: "6",
          nav: "动态"
        },
        {
          id: "7",
          nav: "联系我们"
        }
      ]
    };
  }
};
</script>
<style scope>
.footer {
  margin: 0px 12%;
  display: flex;
  flex-direction: column;
  align-items: center
}
.lianjie {
  display: inline-block;

}
.jz{
    align-items: center
}

</style>