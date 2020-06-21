<template>
  <div id="login">
    <el-form :rules="logiFormRules" ref="logiForm"  :model="logiForm"  v-bind:label-position="right" v-bind:label-width="auto" v-bind="show-message">
      <span class="login-login"></span>
      <el-form-item prop="loginName">
        <el-col :span="24">
          <el-input type="text" v-model="loginForm.loginName" placeholder="请输入用户名／手机号／邮箱"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item prop="loginPassword">
        <el-col :span="24">
          <el-input type="password" v-model="loginForm.loginPassword" placeholder="请输入密码"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="but-top" @click="loginSubmit('loginForm')">登录</el-button>
        <el-button type="primary" @click="onRegit('loginForm')">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default{
    name:'Login',
    data(){
      return{
        loginForm: {
         loginName: '',
         loginPassword: ''
         },
        // 表单验证，需要在 el-form-item 元素中增加 prop 属性
        loginFormRules:{
          loginName:[
            {required: true, message: '账号不可为空', trigger: 'blur'}
           ],
           loginPassword:[
            {required: true, message: '密码不可为空', trigger: 'blur'}
           ]
         }
      }
    },
    methods:{
      loginSubmit(formName){
       //console.log(this);
       // 为表单绑定验证功能
       this.$refs[formName].validate((valid) => {
         console.log(1);
         if (valid) {
           // 使用 vue-router 路由到指定页面，该方式称之为编程式导航
           console.log("to loginSuccess")
           this.$router.replace("/loginSuccess");
           }else{
            return false
         }
       });
      }
    }
  }
</script>

<style lang="less" scoped>
  .el-form{
    height: 17rem;
    background: #fff;
  }
  .el-form .login-login{
    display: block;
    width:10rem;
    height:5.635rem;
    background:url('../../assets/login_logo.png') no-repeat center #ffa132;
  }
  .el-form-item{
    padding: .267rem .533rem;
    margin:0 auto;
  }
  .el-input{
    border-bottom: 1px solid #ffad4d;
  }
  /deep/ .el-input__inner{
    border: 0;
    outline: none;
  }
  .el-button{
    width: 8.933rem;
    height:1.28rem;
    border:1px #ffa132 solid;
    border-radius: .667rem;
    background: #fff;
    color: #ffa132;
    /*background: #ffa132;*/
    font-size: .453rem;
    margin: 0 0 .533rem 0;
  }
  .but-top{
    background: #ffa132;
    color: #fff;
  }
</style>