<template>
  <div class="lx">
    <h1>联系方式</h1>

    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <p v-for="item in infoList" :key="item.id">{{ item.info }}</p>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "Lxfs",
  data() {
    return {
      infoList: [
        {
          id: "1",
          info: "地址：XXXX"
        },
        {
          id: "2",
          info: "联系人：XXXX"
        },
        {
          id: "3",
          info: "电话：0771-xxxxxxx"
        },
        {
          id: "4",
          info: "QQ：9XXX5"
        },
        {
          id: "5",
          info: "网址：www.baidu.com"
        },
        {
          id: "6",
          info: "邮编：530001"
        }
      ]
    };
  }
};
</script>
<style scoped>
.lx {
  background-color: #fff;
  border: 1px solid #cccccc;
  color: #5e5e5e;
  font-size: 14px;
  border-top: 2px solid #1d953f;
}
.lx h1 {
  overflow-wrap: break-word;
  padding-left: 14px;
  margin-bottom: 10px;
  font-weight: bold;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: #cccccc;
}
.lx p {
  color: #000;
  overflow-wrap: break-word;
  padding: 0 16px;
}
</style>