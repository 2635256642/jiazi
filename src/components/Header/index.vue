<template>
  <div id="header">
    <el-row>
      <el-col :span="24">
        <!-- 搜索框 -->
        <div class="grid-content bg-purple-dark">
          <!--<el-input v-model="input" placeholder="请输入内容"></el-input>-->
          <el-autocomplete
            v-model="state"
            :fetch-suggestions="querySearchAsync"
            placeholder="请输入内容"
            @select="handleSelect"
          ></el-autocomplete>
        </div>
        <!-- 走马灯 -->
        <div class="block" style="height: 170px">
          <el-carousel trigger="click" height="170px">
            <el-carousel-item v-for="item in bannerImg" :key="item">
              <h3 class="small">
                <img v-bind:src="item.img" alt="">
              </h3>
            </el-carousel-item>
          </el-carousel>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default{
    name:'Header',
//    props:{
//      title:{
//        type:String,
//        default:'甲子'
//      }
//    },
    data(){
      return{
        restaurants: [],
        state: '',
        timeout:  null,
        bannerImg:[
          {
            img:require('@/assets/banner-1.png')
          },
          {
            img:require('@/assets/banner-2.jpg')
          },
          {
            img:require('@/assets/banner-3.jpg')
          },
          {
            img:require('@/assets/banner-4.jpg')
          }
        ]
      };
    },
    methods:{
      loadAll(){
        return [
          { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
          { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
          { "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" }
        ]
      },
      querySearchAsync(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;

        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          cb(results);
        }, 3000 * Math.random());
      },
      createStateFilter(queryString) {
        return (state) => {
          return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      handleSelect(item) {
        console.log(item);
      }
    },
    mounted() {
      this.restaurants = this.loadAll();
    }
  }

</script>

<style lang="less" scoped>

/deep/ *{
  box-sizing: border-box;
}
.el-col{
  background: linear-gradient(to bottom right,#F4521D,#CD331E);
  width: 100%;
}
/* 搜索框 */
.el-row {
  margin-bottom: 20px;
  &:last-child {
   margin-bottom: 0;
 }
}
.bg-purple-dark {

}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  padding-top: 15px;
  width: 100%;
}
  /deep/ .el-input{
   width: 9.36rem;
   height: 0.853rem;
    margin-left: .267rem;
}
 /deep/ .el-input input{
   width: 9.36rem;
   height: 0.853rem;
   outline: none;
   border:0;
   border-radius: .4rem;
   padding-left: .85rem;
   background:url('../../assets/sousuo-icon.png') no-repeat 3% center white;
}
/* 走马灯 */
 /deep/ .block{
  width: 100%;
   position: relative;
   top:15px;
   margin-left: .267rem;

}
.el-carousel__item h3 {
  width: 9.36rem;
  margin: 0;
}
.el-carousel__item h3 img{
  width: 9.36rem;
  height: 4.533rem;
  border-radius: .2rem;
}
</style>