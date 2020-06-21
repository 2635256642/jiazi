<template>
  <div id="main">
    <!--<Header title="购物车"></Header>-->
    <div class="header-top">
      <router-link to="/home">
        <i class="el-icon-arrow-left"></i>
      </router-link>
      <span>购物车</span>
    </div>
    <div class="nogoods-box">
      <el-image :src="src.alert_gray">
        <div slot="placeholder" class="image-slot">
          加载中<span class="dot">...</span>
        </div>
      </el-image>
      <p>您的购物车内还没有商品!</p>
      <el-row>
        <el-button>个人中心</el-button>
        <el-button>立即逛逛</el-button>
      </el-row>
    </div>
    <div class="gw_more">
      <h2>
        ———&nbsp;&nbsp;
        <el-image :src="src.lightbulb8"></el-image>
        你可能还想要&nbsp;&nbsp;———
      </h2>
      <div class="gw_content_slide">
        <ul>
          <li v-for="item in listArray" :key="item">
            <router-link :to="item.path">
              <img :src="item.image" alt="">
              <p>{{item.name}}</p>
              <p class="gw_more_price">{{item.price}}</p>
              <span>
                <router-link :to="item.path" class="gw_more_addcart">
                  <img :src="item.icon" alt="">
                </router-link>
              </span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <TabBar></TabBar>
  </div>
</template>

<script>
//  import Header from '@/components/Header';
  import TabBar from '@/components/TabBar';
  export default{
    name:'Shopping',
    components:{
//      Header,
      TabBar
    },
    data(){
      return{
        src:{
          alert_gray:'https://wm.china60.com/themes/default/new_images/alert_gray.png',
          lightbulb8:'https://wm.china60.com/themes/default/new_images/lightbulb8.png'
        },
        listArray:[
          {
            image:require('@/assets/gw_content_slide_img_1.jpg'),
            icon:require('@/assets/cart6.png'),
            name:'美知然原始点折叠按摩搓澡床便携式家用纹绣火疗推拿理疗美容床铝合金	MZR-L31',
            price:'￥658.00',
            path:'/classify'
          },
          {
            image:require('@/assets/gw_content_slide_img_2.jpg'),
            icon:require('@/assets/cart6.png'),
            name:'瑝玛（WOMA）浴缸步入式老人浴缸侧开门浴缸打开门式Q372',
            price:'￥18888.00',
            path:'/classify'
          },
          {
            image:require('@/assets/gw_content_slide_img_3.jpg'),
            icon:require('@/assets/cart6.png'),
            name:'瑝玛（WOMA）浴缸步入式浴缸老人浴缸简易浴盆 家用成人浴池 SG5327',
            price:'￥8999.00',
            path:'/classify'
          },
          {
            image:require('@/assets/gw_content_slide_img_4.jpg'),
            icon:require('@/assets/cart6.png'),
            name:'好步（HEPO） 五代加强版马桶扶手老人带靠背厕所马桶扶手残疾人移动马桶围架卫生间助力架坐便椅免打孔孕妇浴室扶手',
            price:'￥388.00',
            path:'/classify'
          },
          {
            image:require('@/assets/gw_content_slide_img_4.jpg'),
            icon:require('@/assets/cart6.png'),
            name:'好步（HEPO） 五代加强版马桶扶手老人带靠背厕所马桶扶手残疾人移动马桶围架卫生间助力架坐便椅免打孔孕妇浴室扶手',
            price:'￥388.00',
            path:'/classify'
          }
        ]
      }
    },
    methods:{
    }
  }
</script>

<style lang="less" scoped>
   /deep/ *{
    box-sizing: border-box;
  }
   #main{
     margin-bottom: 1.2rem;
   }
  .header-top{
    background:#fafafa;
    border-bottom: 1px #e1e1e1 solid;
    line-height: 1.333rem;
    color: #3f3f3f;
    font-size: .507rem;
    text-align: center;
    display: flex;
  }
  .header-top a{
    line-height: 1.333rem;
    padding-left: .16rem;
    color: #333;
  }
  .header-top span{
    display: inline-block;
    width: 85%;
  }
  .nogoods-box{
    padding: 1.333rem .2667rem .2667rem;
    text-align: center;
    background: #fff;
  }
  .nogoods-box p{
    font-size: .373rem;
    color: #313330;
  }
  .el-row{
    display: flex;
  }
  .el-row .el-button{
    width: 4.603rem;
    line-height: .56rem;
    font-size: .347rem;
    color: #333;
    border: 1px #ddd solid;
    background: #f3f3f3;
  }
  .gw_more h2{
    font-weight: normal;
    font-size: .373rem;
    text-align: center;
    line-height: 1.036rem;
    box-sizing: border-box;
  }
   .gw_more .el-image{
     width: .533rem;
     height: .533rem;
     position: relative;
     top:.107rem;
   }
  .gw_more .gw_content_slide ul{
    width: 100%;
    list-style: none;
    padding: 1%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
  }
   .gw_more .gw_content_slide ul:after{
     content: "";
     flex: auto;
   }
   .gw_more .gw_content_slide li{
     width: 48%;
     height: 5.613rem;
     background: #fff;
     text-align: center;
     padding: 1%;
     margin-bottom: 2%;
   }
   .gw_more .gw_content_slide li a{
     display:block;
     text-decoration: none;
     color: #333;
   }
   .gw_more .gw_content_slide li a img{
      width: 3.168rem;
     height: 3.168rem;
   }
   .gw_more .gw_content_slide li a p{
     font-size: .373rem;
     text-align: left;
     overflow: hidden;
     text-overflow: ellipsis;
     display: -webkit-box;
     -webkit-line-clamp: 2;
     -webkit-box-orient: vertical;
     line-height: .535rem;
     margin-bottom: 4px;
   }
   .gw_more .gw_content_slide li a .gw_more_price{
     color: #f9584e;
     margin: 0;
     line-height: .693rem;
   }
   .gw_more .gw_content_slide li a span .gw_more_addcart{
     display: block;
     width: .693rem;
     height: .693rem;
     margin: 0;
     position: relative;
     left:3.9rem;
     top:-.72rem;
     border: 1px solid #dddee0;
     border-radius: 0.1rem;
   }
   .gw_more .gw_content_slide li a span .gw_more_addcart img{
     width: .461rem;
     height: .461rem;
     position: absolute;
     left:.083rem;
     top:.083rem;
   }
</style>