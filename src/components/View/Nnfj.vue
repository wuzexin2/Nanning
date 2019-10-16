<template>
    <div class="wrap">
      <p class="title">南宁名景</p>
       <div class="nnfj">
           <ul class="first">
               <li class="item" v-for="item in firstList" :key="item.id">
                    <div class="item-img">
                        <img class="item-img-content" :src="item.imgUrl">
                        <p class="item-title">{{item.title}}</p>
                    </div>                   
               </li>
           </ul>
       </div>
    </div>
</template>
<script>
export default {
    name:"Nnfj",
    data(){
        return{
            firstList:[
                {
                    'id':'1',
                    'imgUrl':'/static/images/pic_4.jpg',
                   'title':'人民公园'
                },
                 {
                    'id':'2',
                    'imgUrl':'/static/images/pic_5.jpg',
                   'title':'南宁海底世界'
                },
                 {
                    'id':'3',
                    'imgUrl':'/static/images/pic_6.jpg',
                   'title':'金花茶公园'
                },
           
                 {
                    'id':'4',
                    'imgUrl':'/static/images/pic_7.jpg',
                   'title':'五象广场'
                }, {
                    'id':'5',
                    'imgUrl':'/static/images/pic_8.jpg',
                   'title':'地王云顶'
                }, {
                    'id':'6',
                    'imgUrl':'/static/images/pic_9.jpg',
                   'title':'南宁民歌湖游船'
                }
            ] 
        }  
    }
}
</script>
<style scoped>
.wrap{
   
    margin: 0px 12.5%;
}

.first{
    background-color: #fff;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap
}
.item{
    width: 10%;
    list-style: none;
    padding: 2% 10%;
    margin-right: 3%;
}
.item-img{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.item-img-content{
    width:75px;
    height:76px;
   
}
</style>