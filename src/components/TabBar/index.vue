<template>
  <div id="footer">
    <div id="nav">
      <!-- 路由跳转 -->
      <!-- 问题:img的路由跳转变成双击才切换图片 -->
      <ul>
        <li
          v-for="(item,index) in navPicArray"
          :key="index"
         @click="changeImg(index)"
        >
          <router-link :to="item.path" >
            <img  alt="未选中" v-bind:src="item.icon" v-show="index!=num">
            <img  alt="已选中" v-bind:src="item.active" v-show="index==num">
            <span>{{item.name}}</span>
          </router-link>
        </li>
      </ul>
    </div>
    <router-view/>
  </div>
</template>

<script>
  export default{
    name:'TabBar',
    data () {
      return {
        navPicArray:[
          {
            icon:require('@/assets/home-icon-0.png'),
            active:require('@/assets/home-icon-1.png'),
            path:"/home",
            name:"首页"
          },
          {
            icon:require('@/assets/classfiy-icon-0.png'),
            active:require('@/assets/classfiy-icon-1.png'),
            path:"/classify",
            name:"分类"
          },
          {
            icon:require('@/assets/shopping-icon-0.png'),
            active:require('@/assets/shopping-icon-1.png'),
            path:"/shopping",
            name:"购物车"
          },
          {
            icon:require('@/assets/me-icon-0.png'),
            active:require('@/assets/me-icon-1.png'),
            path:"/me",
            name:"我的"
          }
        ],
        num:"index",
      }
    },
    methods:{
      changeImg(index){
//        console.log(this.num);
//        console.log("index改变之前"+index)

        this.num=index;
//        console.log("index改变之后"+index)
      }
    }
  }
</script>

<style scoped>
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }
  #nav{
    width:100%;
    position: fixed;
    bottom: 0;
    left: 0;
  }
  #nav ul{
    display: flex;
    justify-content: space-between;
    list-style: none;
    background: #fff;
    padding-top: 4px;
  }
  #nav ul li{
    width: 25%;
    text-align: center;
    margin:0;
    padding:0;
  }
  #nav ul li img{
    width: 20px;
    display: block;
    margin:0 auto;
  }
  a{
    text-decoration: none;
    color: #4D4D4D;
    font-size: .32rem;
    display: block;
  }
  a.router-link-active span{
    /*text-decoration: none;*/
    color: #FF7300;
  }
</style>