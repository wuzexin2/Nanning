<template>
  <div>
    <v-header></v-header>
    <div class="body">
      <div class="img">
        <el-image :src="src"></el-image>
      </div>
      <el-row :gutter="10">
        <div class="content">
          <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="leftbar">
            <section class="leftone">
              <h1>其他目录</h1>
              <ul>
                <li>
                  <h3>
                    <router-link to="/leave">给我留言</router-link>
                  </h3>
                </li>
                <li>
                  <h3>
                    <router-link to="/about">团队介绍</router-link>
                  </h3>
                </li>
                <li>
                  <h3>
                    <router-link to="/connection">联系我们</router-link>
                  </h3>
                </li>
              </ul>
            </section>
          </el-col>
          <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="lefttwo">
            <v-lxfs></v-lxfs>
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
  name: "Connection",
  components: {
    VFooter,
    VHeader,
    VLxfs
  },
  data() {
    return {
      src: "/static/images/banner_erji8.jpg"
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
  height: 280px;
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
</style>