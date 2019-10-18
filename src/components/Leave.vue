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
              <h1>其他目录</h1>
              <ul>
                <li>
                  <h3><router-link to="/leave">给我留言</router-link></h3>
                </li>
                <li>
                  <h3><router-link to="/about">团队介绍</router-link></h3>
                </li>
                <li>
                  <h3><router-link to="/connection">联系我们</router-link></h3>
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
                <el-breadcrumb-item>给我留言</el-breadcrumb-item>
              </el-breadcrumb>
            </div>
            <div class="news">
              <el-form
                :model="ruleForm"
                :rules="rules"
                ref="ruleForm"
                label-width="100px"
                class="demo-ruleForm"
              >
                <el-form-item label="您的称呼" prop="name">
                  <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="您的电话" prop="telphone">
                  <el-input v-model="ruleForm.telphone"></el-input>
                </el-form-item>  
                <el-form-item label="您的性别" prop="sex">
                  <el-radio-group v-model="ruleForm.sex">
                    <el-radio label="男"></el-radio>
                    <el-radio label="女"></el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="留言" prop="desc">
                  <el-input type="textarea" v-model="ruleForm.desc"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                  <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
              </el-form>
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
  name: "Leave",
  components: {
    VFooter,
    VHeader,
    VLxfs
  },
  data() {
    var checkPhone = (rule, value, callback) => {
    const phoneReg = /^1[3|4|5|7|8][0-9]{9}$/
    if (!value) {
      return callback(new Error("电话号码不能为空"))
    }
    setTimeout(() => {
      // Number.isInteger是es6验证数字是否为整数的方法,但是我实际用的时候输入的数字总是识别成字符串
      // 所以我就在前面加了一个+实现隐式转换

      if (!Number.isInteger(+value)) {
        callback(new Error("请输入数字值"))
      } else {
        if (phoneReg.test(value)) {
          callback()
        } else {
          callback(new Error("电话号码格式不正确"))
        }
      }
    }, 100)
  }
    return {
      src: "/static/images/banner_erji6.jpg",
      ruleForm:{
          name:'',
          telphone:'',
          sex:'',
          desc:''
      },
      rules:{
          name:[{
              required:true,message:"请输入您的称呼",tigger:'blur'
          }
          ],
          telphone:[
              {required:true,tigger:'blur',validator: checkPhone},
              
          ],
          sex:[
              { required: true, message: '请选择您的性别', trigger: 'change'}
          ],
           desc: [
            { required: true, message: '请填写您的留言', trigger: 'blur' }
          ]
      }
    };
  },
      methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
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
.leftone ul li  h3 a{
  text-decoration: none;
    color: #5e5e5e;
}
</style>