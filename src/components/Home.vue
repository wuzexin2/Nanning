<template>
    <div class="body">
        <v-header></v-header>
        <el-carousel :interval="5000" arrow="always" >
        <el-carousel-item v-for="item in imgList" :key="item.id">
        <img :src="item.image"  class="banner_img"/>
        </el-carousel-item>
        </el-carousel>
        <v-Zjnn></v-Zjnn>
        <v-nnfj></v-nnfj>
        <v-xlnn></v-xlnn>
        <v-footer></v-footer>
    </div>
</template>
<script>
import VHeader from './common/Header'
import VZjnn from './View/Zjnn'
import VNnfj from './View/Nnfj'
import VXlnn from './View/Xlnn'
import VFooter from './common/Footer'
export default {
    name:'Home',
    components:{
        VHeader,
        VZjnn,
        VNnfj,
        VXlnn,
        VFooter
        },
    data(){
        return{
            imgList:[
               {id:'1',image:'/static/images/banner_2.jpg'},
               {id:'2',image:'/static/images/banner_4.jpg'}
            ],
        }
    }
}
</script>
<style scoped>
.body{
        background-color: #ebf3ee;
}
</style>