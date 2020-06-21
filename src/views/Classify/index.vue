<template>
  <div id="main">
    <!--<Header title="分类"></Header>-->
    <el-container>
      <!-- 搜索框 -->
      <el-header>
        <el-autocomplete
          v-model="state"
          :fetch-suggestions="querySearchAsync"
          placeholder="请输入内容"
          @select="handleSelect"
        ></el-autocomplete>
      </el-header>
      <!-- 商品页 -->
      <el-main>
        <el-tabs :tab-position="tabPosition" style="height:100%;">
          <!-- 一级循环 -->
          <el-tab-pane v-bind:label="item.list" v-for="item in tabsArray" :key="item"  class="tabs-one">
            <!-- 二级循环 -->
            <ul class="tabs-two" v-for="items in item.childArray" :key="items">
              <span>{{items.title}}</span>
              <li v-for="i in items.childrenArray" :key="i">
                <router-link :to="i.path">
                  <img v-bind:src="i.icon" alt="">
                  <p>{{i.name}}</p>
                </router-link>
              </li>
            </ul>
          </el-tab-pane>
          <!--<el-tab-pane label="按摩理疗">居家理疗</el-tab-pane>-->
          <!--<el-tab-pane label="健康检测">居家检测</el-tab-pane>-->
          <!--<el-tab-pane label="健康食品">体闲食品</el-tab-pane>-->
        </el-tabs>
      </el-main>
    </el-container>
    <TabBar></TabBar>
  </div>
</template>

<script>
//  import Header from '@/components/Header';
  import TabBar from '@/components/TabBar';

  export default{
    name:'Classify',
    components:{
//      Header,
      TabBar
    },
    data(){
      return{
        restaurants: [],
        state: '',
        timeout:  null,
        tabPosition:'left',
        tabsArray:[
          {
            list:'进口专区',
            childArray:[
              {
                title:'那特恩纸尿裤',
                childrenArray:[
                  {
                    icon:require('@/assets/classify-tabs-1.png'),
                    name:'纸尿裤',
                    path:'/classify'
                  },
                  {
                    icon:require('@/assets/classify-tabs-2.png'),
                    name:'拉拉裤',
                    path:'/classify'
                  },
                  {
                    icon:require('@/assets/classify-tabs-3.png'),
                    name:'护理垫',
                    path:'/classify'
                  }
                ]
              },
              {
                title:'海外购',
                childrenArray:[
                  {
                    icon:require('@/assets/classify-tabs-4.jpg'),
                    name:'新西兰直邮',
                    path:'/classify'
                  },
                  {
                    icon:require('@/assets/classify-tabs-5.jpg'),
                    name:'澳洲直邮',
                    path:'/classify'
                  }
                ]
              },
              {
                title:'生活辅助',
                childrenArray:[
                  {
                    icon:require('@/assets/classify-tabs-6.jpg'),
                    name:'奶粉',
                    path:'/classify'
                  },
                  {
                    icon:require('@/assets/classify-tabs-7.jpg'),
                    name:'室内移动扶手',
                    path:'/classify'
                  },
                  {
                    icon:require('@/assets/classify-tabs-8.jpg'),
                    name:'药盒',
                    path:'/classify'
                  },
                  {
                    icon:require('@/assets/classify-tabs-9.jpg'),
                    name:'拐杖凳',
                    path:'/classify'
                  }
                ]
              },
              {
                title:'进口卫浴',
                childrenArray:[
                  {
                    icon:require('@/assets/classify-tabs-10.png'),
                    name:'洗澡椅',
                    path:'/classify'
                  },
                  {
                    icon:require('@/assets/classify-tabs-11.jpg'),
                    name:'座厕椅',
                    path:'/classify'
                  },
                  {
                    icon:require('@/assets/classify-tabs-12.jpg'),
                    name:'马桶辅助扶手',
                    path:'/classify'
                  }
                ]
              },
              {
                title:'进口卫浴',
                childrenArray:[
                  {
                    icon:require('@/assets/classify-tabs-13.png'),
                    name:'放大镜',
                    path:'/classify'
                  }
                ]
              }
            ]
          },
          {
            list:'按摩理疗',
            childArray:[
              {
                title:'居家理疗',
                childrenArray:[
                  {
                    icon:require('@/assets/classify-tabs-1.png'),
                    name:'纸尿裤',
                    path:'/classify'
                  },
                  {
                    icon:require('@/assets/classify-tabs-2.png'),
                    name:'拉拉裤',
                    path:'/classify'
                  },
                  {
                    icon:require('@/assets/classify-tabs-3.png'),
                    name:'护理垫',
                    path:'/classify'
                  }
                ]
              }
            ]
          },
          {
            list:'健康检测',
            childArray:[
              {
                title:'居家理疗',
                childrenArray:[
                  {
                    icon:require('@/assets/classify-tabs-1.png'),
                    name:'纸尿裤',
                    path:'/classify'
                  },
                  {
                    icon:require('@/assets/classify-tabs-2.png'),
                    name:'拉拉裤',
                    path:'/classify'
                  },
                  {
                    icon:require('@/assets/classify-tabs-3.png'),
                    name:'护理垫',
                    path:'/classify'
                  }
                ]
              }
            ]
          },
          {
            list:'健康食品',
            childArray:[
              {
                title:'居家理疗',
                childrenArray:[
                  {
                    icon:require('@/assets/classify-tabs-1.png'),
                    name:'纸尿裤',
                    path:'/classify'
                  },
                  {
                    icon:require('@/assets/classify-tabs-2.png'),
                    name:'拉拉裤',
                    path:'/classify'
                  },
                  {
                    icon:require('@/assets/classify-tabs-3.png'),
                    name:'护理垫',
                    path:'/classify'
                  }
                ]
              }
            ]
          },
          {
            list:'卧室用品',
            childArray:[
              {
                title:'居家理疗',
                childrenArray:[
                  {
                    icon:require('@/assets/classify-tabs-1.png'),
                    name:'纸尿裤',
                    path:'/classify'
                  },
                  {
                    icon:require('@/assets/classify-tabs-2.png'),
                    name:'拉拉裤',
                    path:'/classify'
                  },
                  {
                    icon:require('@/assets/classify-tabs-3.png'),
                    name:'护理垫',
                    path:'/classify'
                  }
                ]
              }
            ]
          },
          {
            list:'出行代步',
            childArray:[
              {
                title:'居家理疗',
                childrenArray:[
                  {
                    icon:require('@/assets/classify-tabs-1.png'),
                    name:'纸尿裤',
                    path:'/classify'
                  },
                  {
                    icon:require('@/assets/classify-tabs-2.png'),
                    name:'拉拉裤',
                    path:'/classify'
                  },
                  {
                    icon:require('@/assets/classify-tabs-3.png'),
                    name:'护理垫',
                    path:'/classify'
                  }
                ]
              }
            ]
          },
          {
            list:'卫浴用品',
            childArray:[
              {
                title:'居家理疗',
                childrenArray:[
                  {
                    icon:require('@/assets/classify-tabs-1.png'),
                    name:'纸尿裤',
                    path:'/classify'
                  },
                  {
                    icon:require('@/assets/classify-tabs-2.png'),
                    name:'拉拉裤',
                    path:'/classify'
                  },
                  {
                    icon:require('@/assets/classify-tabs-3.png'),
                    name:'护理垫',
                    path:'/classify'
                  }
                ]
              }
            ]
          },
          {
            list:'家庭护理',
            childArray:[
              {
                title:'居家理疗',
                childrenArray:[
                  {
                    icon:require('@/assets/classify-tabs-1.png'),
                    name:'纸尿裤',
                    path:'/classify'
                  },
                  {
                    icon:require('@/assets/classify-tabs-2.png'),
                    name:'拉拉裤',
                    path:'/classify'
                  },
                  {
                    icon:require('@/assets/classify-tabs-3.png'),
                    name:'护理垫',
                    path:'/classify'
                  }
                ]
              }
            ]
          },
          {
            list:'家居生活',
            childArray:[
              {
                title:'居家理疗',
                childrenArray:[
                  {
                    icon:require('@/assets/classify-tabs-1.png'),
                    name:'纸尿裤',
                    path:'/classify'
                  },
                  {
                    icon:require('@/assets/classify-tabs-2.png'),
                    name:'拉拉裤',
                    path:'/classify'
                  },
                  {
                    icon:require('@/assets/classify-tabs-3.png'),
                    name:'护理垫',
                    path:'/classify'
                  }
                ]
              }
            ]
          },
          {
            list:'智慧养老',
            childArray:[
              {
                title:'居家理疗',
                childrenArray:[
                  {
                    icon:require('@/assets/classify-tabs-1.png'),
                    name:'纸尿裤',
                    path:'/classify'
                  },
                  {
                    icon:require('@/assets/classify-tabs-2.png'),
                    name:'拉拉裤',
                    path:'/classify'
                  },
                  {
                    icon:require('@/assets/classify-tabs-3.png'),
                    name:'护理垫',
                    path:'/classify'
                  }
                ]
              }
            ]
          },
          {
            list:'体验区',
            childArray:[
              {
                title:'健康体验',
                childrenArray:[
                  {
                    icon:require('@/assets/classify-tabs-xx.jpg'),
                    name:'产品体验',
                    path:'/classify'
                  }
                ]
              }
            ]
          }
        ]
      }
    },
    methods:{
      loadAll() {
        return [
          {"value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号"},
          {"value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号"},
          {"value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113"},
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
      },
      mounted() {
        this.restaurants = this.loadAll();
      }
    }
  }
</script>

<style lang="less" scoped>
  /* 布局 */
  /deep/ *{
    box-sizing: border-box;
  }
  #main{
    margin-bottom: 1.2rem;
  }
  .el-header{
    width: 100%;
    background-color: #fff;
    color: #333;
    text-align: center;
    /*line-height: 60px;*/
    padding:0 0 2rem 0;
    margin-top: -.213rem;
    /*margin-bottom: .267rem;*/
    border-bottom: 1px #E4E4E4 solid;
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  body > .el-container {
    margin-bottom: 40px;
  }

  /* 搜索框 */
  /deep/ .el-input{
    width: 9.2rem;
    height: 0.907rem;
    /*margin-left: .267rem;*/
  }
  /deep/ .el-input input{
    width: 9.2rem;
    height: 0.907rem;
    outline: none;
    border:0;
    border-radius: .4rem;
    padding-left: .85rem;
    background:url('../../assets/sousuo-icon.png') no-repeat 3% center #eee;
  }

  /* 商品页 */
  .el-main{
    padding: 0;
    line-height: 0;
    text-align: left;
    background: #fff;
    border-top: 1px #E4E4E4 solid;
  }
  /* 左边 */
  .el-tabs{

  }
   /deep/ .el-tabs__header{
     background: #f3f3f3;
     font-size: .327rem;
  }
  /deep/ .el-tabs__item{
    font-size: .373rem;
    color: #666;
  }
  /deep/ .el-tabs__item:hover{
    background: #fff;
    color: #409EFF;
  }

  /* 右边 */
  /deep/ .el-tabs__content{
    font-size: .327rem;
  }
  /deep/ .tabs-two{
    margin:auto;
    width: 100%;
    list-style: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    overflow: hidden;
  }
  /deep/ .tabs-two:after{
    content: "";
    flex: auto;
  }
  /deep/ .tabs-two span{
    /*display: block;*/
    height: .8rem;
    line-height: .8em;
    font-size: .427rem;
    padding-top: 5px;
    padding-bottom: 5px;
    width: 7.547rem;
  }
  /deep/ .tabs-two li{
     height:3.067rem;
    margin-right: .096rem;
   }
  .tabs-two li a{
    text-decoration: none;
    color: #4D4D4D;
    font-size: .373rem;
    display: block;

    width: 2.107rem;
    text-align: center;

  }
  .tabs-two li a p{
    line-height: .8rem;
    margin:0;
    padding: 0;
    width: 100%;
  }
  .tabs-two li a img{
    width: 2.107rem;
  }
</style>