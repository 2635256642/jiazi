<template>
  <div id="main">
    <Header title="首页"></Header>
    <div class="content">
      <!-- 图标分类 -->
      <div class="menu">
        <ul class="menu-top">
          <li v-for="item in iconArray" :key="item">
            <router-link :to="item.path">
              <img v-bind:src="item.icon" alt=""><br>
              {{item.name}}
            </router-link>
          </li>
        </ul>
      </div>
      <!-- 赠品活动 -->
      <div class="zeng">
        <router-link :to='zeng.path'>
          <img v-bind:src="zeng.bannerImg" alt="">
        </router-link>
      </div>
      <div class="hot-box">
        <div class="hot-left">
          <ul>
            <li v-for="item in hotArray" :key="item">
              <router-link :to="item.path">
                <h3>{{item.title}}</h3>
                <p>{{item.name}}</p>
                <img v-bind:src="item.icon" alt="">
                <img v-bind:src="item.imggf" class="img-gf" alt="">
              </router-link>
            </li>
          </ul>
        </div>
        <div class="hot-right">
          <h3>限时秒杀</h3>
          <div class="bot-data">
            <span class="bot-data-title">上午场</span>
            <span class="bot-data-sj">--</span>
          </div>
          <ul>
            <li v-for="item in timeArray" :key="item">
              <router-link :to="item.path">
                <img v-bind:src="item.timeImg" alt="">
                <span class="bot-data-top">{{item.title}}</span><br>
                <span class="bot-data-bottom">{{item.titles}}</span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <!-- 商品分类 -->
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane v-bind:label="items.listName" :name="items.listName" v-for="items in tabsArray" :key="items">
          <ul class="tabs-box infinite-list" style="overflow:auto">
            <li v-for="item in items.listArray" class="infinite-list-item" :key="item">
              <router-link :to="item.path">
                <img v-bind:src="item.tabsImg" alt="">
                <p>{{item.name}}</p>
                <span class="tabs-title-left">{{item.title}}</span>
                <span class="tabs-title-right">{{item.titles}}</span>
              </router-link>
            </li>
          </ul>
        </el-tab-pane>
      </el-tabs>
      <div style="margin-bottom: 45px"></div>
    </div>
    <TabBar></TabBar>
  </div>
</template>

<script>
  import Header from '@/components/Header';
  import TabBar from '@/components/TabBar';

  export default{
    name:'Home',
    components:{
      Header,
      TabBar
    },
    data(){
      return{
        iconArray:[
          {
            icon:require('@/assets/icon-1.png'),
            path:'classify',
            name:'按摩理疗'
          },
          {
            icon:require('@/assets/icon-2.png'),
            path:'classify',
            name:'出行代步'
          },
          {
            icon:require('@/assets/icon-3.png'),
            path:'classify',
            name:'家庭护理'
          },
          {
            icon:require('@/assets/icon-4.png'),
            path:'classify',
            name:'卧室用品'
          },
          {
            icon:require('@/assets/icon-5.png'),
            path:'classify',
            name:'健康检测'
          },
          {
            icon:require('@/assets/icon-6.png'),
            path:'classify',
            name:'健康食品'
          },
          {
            icon:require('@/assets/icon-7.png'),
            path:'classify',
            name:'智慧物联'
          },
          {
            icon:require('@/assets/icon-8.png'),
            path:'classify',
            name:'家居生活'
          },
          {
            icon:require('@/assets/icon-9.png'),
            path:'classify',
            name:'卫浴用品'
          },
          {
            icon:require('@/assets/icon-10.png'),
            path:'classify',
            name:'进口专区'
          }
        ],
        zeng:{
          bannerImg:require('@/assets/zeng.png'),
          path:'/home'
        },
        hotArray:[
          {
            icon:require('@/assets/ji.png'),
            path:'/classify',
            title:'积分商城',
            name:'等你兑换'
          },
          {
            icon:require('@/assets/ji-2.jpg'),
            path:'/classify',
            title:'折扣特价',
            name:'超值优惠'
          },
          {
            icon:require('@/assets/ji-3.jpg'),
            path:'/classify',
            title:'好货推荐',
            name:'购物指南'
          },
          {
            icon:require('@/assets/ji-4.png'),
            imggf:require('@/assets/pay.gif'),
            path:'/classify',
            title:'0·元购',
            name:'天天惊喜'
          }
        ],
        timeArray:[
          {
            timeImg:require('@/assets/shop_time-1.jpg'),
            path:'/classify',
            title:'¥318.00',
            titles:'¥378.00'
          },
          {
            timeImg:require('@/assets/shop_time-2.jpg'),
            path:'/classify',
            title:'¥188.00',
            titles:'¥228.00'
          },
          {
            timeImg:require('@/assets/shop_time-3.jpg'),
            path:'/classify',
            title:'¥178.00',
            titles:'¥188.00'
          },
          {
            timeImg:require('@/assets/shop_time-4.jpg'),
            path:'/classify',
            title:'¥138.00',
            titles:'¥158.00'
          }
        ],
        activeName: '全部专区',
        tabsArray:[
          {
            listName:'全部专区',
            listArray:[
              {
                tabsImg:require('@/assets/imgdiv-1.jpg'),
                path:'/classify',
                name:'敏斯特糖尿病足垫ZY-102',
                title:'¥118.00',
                titles:'¥135.00'
              },
              {
                tabsImg:require('@/assets/imgdiv-2.jpg'),
                path:'/classify',
                name:'燕麦片冲饮 免煮即冲 即食 老布特木糖醇燕麦片600g',
                title:'¥23.00',
                titles:'¥35.00'
              },
              {
                tabsImg:require('@/assets/imgdiv-3.jpg'),
                path:'/classify',
                name:'璟泰 小便器悬挂式扶手 无障碍扶手 KT35-21',
                title:'¥238.00',
                titles:'¥257.00'
              },
              {
                tabsImg:require('@/assets/imgdiv-4.jpg'),
                path:'/classify',
                name:'璟泰 洗脸盆扶手 无障碍扶手 KT35-22',
                title:'¥129.00',
                titles:'¥155.00'
              },
              {
                tabsImg:require('@/assets/imgdiv-5.jpg'),
                path:'/classify',
                name:'璟泰 135度卫浴扶手	无障碍扶手 KT35-25',
                title:'¥129.00',
                titles:'¥177.00'
              },
              {
                tabsImg:require('@/assets/imgdiv-6.jpg'),
                path:'/classify',
                name:'璟泰 L型卫浴扶手 无障碍扶手 KT35-27',
                title:'¥149.00',
                titles:'¥188.00'
              }
            ],
          },
          {
            listName:'糖尿病区',
            listArray:[
              {
                tabsImg:require('@/assets/imgdiv-1.jpg'),
                path:'/classify',
                name:'敏斯特糖尿病足垫ZY-102',
                title:'¥118.00',
                titles:'¥135.00'
              },
              {
                tabsImg:require('@/assets/imgdiv-2.jpg'),
                path:'/classify',
                name:'燕麦片冲饮 免煮即冲 即食 老布特木糖醇燕麦片600g',
                title:'¥23.00',
                titles:'¥35.00'
              },
              {
                tabsImg:require('@/assets/imgdiv-7.jpg'),
                path:'/classify',
                name:'齐瓦戈-糖尿病足鞋加宽调节型舒适橡胶发泡布鞋（女鞋）7007',
                title:'¥147.00',
                titles:'¥238.00'
              },
              {
                tabsImg:require('@/assets/imgdiv-8.png'),
                path:'/classify',
                name:'齐瓦戈-糖尿病足鞋春秋中老年人脚肿鞋男拇指外翻宽鞋爷爷变形术后宽棉鞋子防滑软底6013',
                title:'¥147.00',
                titles:'¥269.00'
              },
              {
                tabsImg:require('@/assets/imgdiv-9.png'),
                path:'/classify',
                name:'齐瓦戈-糖尿病足鞋高帮加宽前后可调节魔术贴保暖防滑中老年男士布鞋拇指外翻棉鞋子冬季  黑色MS6015',
                title:'¥197.00',
                titles:'¥399.00'
              },
              {
                tabsImg:require('@/assets/imgdiv-10.png'),
                path:'/classify',
                name:'齐瓦戈-春夏季糖尿病足鞋老人脚肿鞋加宽拇外翻术后康复脚痛穿的父亲爸爸鞋 黑色MS6008',
                title:'¥127.00',
                titles:'¥39800'
              }
            ],
          },
          {
            listName:'防摔区',
            listArray:[
              {
                tabsImg:require('@/assets/imgdiv-1.jpg'),
                path:'/classify',
                name:'敏斯特糖尿病足垫ZY-102',
                title:'¥118.00',
                titles:'¥135.00'
              },
              {
                tabsImg:require('@/assets/imgdiv-2.jpg'),
                path:'/classify',
                name:'燕麦片冲饮 免煮即冲 即食 老布特木糖醇燕麦片600g',
                title:'¥23.00',
                titles:'¥35.00'
              },
              {
                tabsImg:require('@/assets/imgdiv-3.jpg'),
                path:'/classify',
                name:'璟泰 小便器悬挂式扶手 无障碍扶手 KT35-21',
                title:'¥238.00',
                titles:'¥257.00'
              },
              {
                tabsImg:require('@/assets/imgdiv-4.jpg'),
                path:'/classify',
                name:'璟泰 洗脸盆扶手 无障碍扶手 KT35-22',
                title:'¥129.00',
                titles:'¥155.00'
              },
              {
                tabsImg:require('@/assets/imgdiv-5.jpg'),
                path:'/classify',
                name:'璟泰 135度卫浴扶手	无障碍扶手 KT35-25',
                title:'¥129.00',
                titles:'¥177.00'
              },
              {
                tabsImg:require('@/assets/imgdiv-6.jpg'),
                path:'/classify',
                name:'璟泰 L型卫浴扶手 无障碍扶手 KT35-27',
                title:'¥149.00',
                titles:'¥188.00'
              }
            ],
          },
          {
            listName:'失聪区',
            listArray:[
              {
                tabsImg:require('@/assets/imgdiv-11.jpg'),
                path:'/classify',
                name:'中德（zhongde） ZDB-111老人助听器 老年人耳聋耳背式无线助听器',
                title:'¥113.00',
                titles:'¥128.00'
              },
              {
                tabsImg:require('@/assets/imgdiv-12.jpg'),
                path:'/classify',
                name:'中德（zhongde） ZDB-100助听器 耳背式无线充电助听器 老年人助听机',
                title:'¥143.00',
                titles:'¥158.00'
              },
              {
                tabsImg:require('@/assets/imgdiv-13.jpg'),
                path:'/classify',
                name:'中德（zhongde） 中德助听器老年人隐形无线耳挂式入耳式耳聋耳背式耳道式 ZDC-900B 耳内充电款 轻中度听力损失使用',
                title:'¥162.00',
                titles:'¥185.00'
              },
              {
                tabsImg:require('@/assets/imgdiv-14.jpg'),
                path:'/classify',
                name:'中德耳背式老人助听器可USB充电式无线隐形助听老年人耳聋机 ZDB-100MH',
                title:'¥168.00',
                titles:'¥1198.00'
              },
              {
                tabsImg:require('@/assets/imgdiv-15.jpg'),
                path:'/classify',
                name:'ZDB-111老人助听器 老年人耳聋耳背式无线助听器',
                title:'¥113.00',
                titles:'¥125.00'
              }
            ],
          }
        ]
      }
    },
    methods:{
      handleClick(tab, event) {
        console.log(tab, event);
      },
      load () {
        this.count += 2
      }
    }
  }
</script>

<style lang="less" scoped>
  /deep/ *{
    box-sizing: border-box;
  }
  #main{
    background: #F3F3F3;
    font:14px Helvetica Neue,Helvetica,PingFang SC,Tahoma,Arial,sans-serif;
  }
  /* 图标分类 */
  .menu .menu-top{
    width: 100%;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin-top: 30px;
  }
  .menu .menu-top li{
    width: 20%;
    box-sizing: border-box;
    margin-bottom: 15px;
  }
  a{
    text-decoration: none;
    color: #333;
    font-size: 12px;
    display: inline-block;
    width: 100%;
    text-align: center;
  }
  a img{
    width: 40px;
  }
  /* 赠品活动*/
  .zeng{
    width:100%;
    /*height:1.483rem;*/
    margin-bottom:15px;
  }
  .zeng img{
    width: 9.36rem;
    display: block;
    margin: 0 auto;
  }
  .hot-box{
    width: 9.36rem;
    margin:0 auto;
    border-radius: 3px;
    background: #fff;
    display: flex;
  }
  .hot-box .hot-left{
    width: 5.547rem;
  }
  .hot-box .hot-left ul{
    width: 100%;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 0 auto;
  }
  .hot-box .hot-left ul li{
    width: 50%;
    padding: 5px;
    border-right:1px #F3F3F3 solid;
    border-bottom: 1px #F3F3F3 solid;
  }
  .hot-box .hot-left ul li a h3{
    font-size: .427rem;
    color: #1A1A1A;
    padding: 0;
    margin: 0;
    text-align: left;
    line-height: .8rem;
  }
  .hot-box .hot-left ul li a p{
    margin: 0;
    color: #FD663C;
    font-size: .347rem;
    text-align: left;
    line-height: .427rem;
  }
  .hot-box .hot-left ul li a img{
    margin-top: 10px;
  }
  .hot-box .hot-left ul li a img.img-gf{
    margin:0;
    width: 20px;
    position: relative;
    top:-30px;
  }
  .hot-box .hot-right{
    width: 3.733rem;
    padding: 5px;
  }
  .hot-box .hot-right h3{
    font-size: .427rem;
    color: #1A1A1A;
    padding: 0;
    margin: 0;
    line-height: .8rem;
  }
  .hot-box .hot-right .bot-data{
    font-size: .267rem;
    width: 2.72rem;
    height: .427rem;
    background: #F90A0A;
  }
  .hot-box .hot-right .bot-data .bot-data-title{
    line-height: .427rem;
    color: #fff;
    display: inline-block;
    padding: 0 .134rem;
  }
  .hot-box .hot-right .bot-data .bot-data-sj{
    display: inline-block;
    width: 1.547rem;
    background: white;
    text-align: center;
    color: #F90A0A;
  }
  .hot-box .hot-right ul{
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 0 auto;
  }
  .hot-box .hot-right ul li{
    width: 50%;
  }
  .hot-box .hot-right ul li a .bot-data-top{
    color: #333;
    font-size: .373rem;
    font-weight: bold;
  }
  .hot-box .hot-right ul li a .bot-data-bottom{
    color: #999;
    font-size: .293rem;
    text-decoration: line-through;
  }
  /* 商品分类 */
  .el-tabs{
    width: 9.36rem;
    margin: 0 auto;
  }
  /deep/ .el-tabs .el-tabs__item.is-active{
    color: #F44C11;
    font-weight: bold;
  }
  /deep/ .el-tabs .el-tabs__active-bar{
    background: #F44C11;
    height: .107rem;
    border-radius: .053rem;
    width: .533rem !important;
    margin-left:.5rem  !important;
  }
  .el-tab-pane .tabs-box{
    width: 9.36rem;
    height:13.6rem;
    list-style: none;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0;
    margin: 0 auto;
    color: #333;
  }
  .el-tab-pane .tabs-box:after{
    content: "";
    flex: auto;
  }
  .el-tab-pane .tabs-box li{
    width: 4.587rem;
    padding: 2%;
    background: #fff;
    border-radius: .107rem;
    margin-bottom: .213rem;
  }
  .el-tab-pane .tabs-box li a p{
    text-align: left;
    font-size: .373rem;
    margin:.8rem 0 0 0;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .el-tab-pane .tabs-box li a img{
    width: 100%;
  }
  .el-tab-pane .tabs-box li a .tabs-title-left{
    color: #EC1616;
    font-size: .373rem;
    text-align: left;
    display: inline-block;
    width: 50%;
    line-height: 1.067rem;
  }
  .el-tab-pane .tabs-box li a .tabs-title-right{
    color: #999;
    font-size: .293rem;
    text-decoration: line-through;
    display: inline-block;
    width: 50%;
    line-height: 1.067rem;
  }
</style>