<template>
  <div id="main">
    <Login></Login>
    <TabBar></TabBar>
  </div>
</template>

<script>
//  import Header from '@/components/Header';
  import Login from '@/components/Login';
  import TabBar from '@/components/TabBar';

  export default{
    name:'Me',
    components:{
//      Header,
      Login,
      TabBar
    },
    data(){
      return {

      }
    }

  }
</script>

<style>

</style>