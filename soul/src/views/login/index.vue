<template>
  <div class="container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>登录</span>
      </div>
      <div class="text">

        <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="用户名" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
   <el-form-item label="密码" prop="pwd">
    <el-input v-model="ruleForm.pwd"></el-input>
  </el-form-item>
        </el-form>
        <div class="btn">
<el-button type="primary" size="medium" @click="login">登录</el-button>
  <el-button type="success" size="medium">注册</el-button>
        </div>

      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ruleForm: {
        name: '请输入用户名',
        pwd: '请输入密码'
      }
    }
  },
  methods: {
    rules () {},
    login () {
      this.$router.push('/')
    }
  }
}
</script>
<style  scoped lang="less">

.container {
  width: 100%;
  height: 100%;
  position: fixed;
  background: url(../../assets/imgs/bg1.jpg);
  background-size: 100% 100%;
  left: 0;
  top: 0;
  .box-card {
    width: 400px;
    height: 300px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    .el-form-item{
      margin-top:20px;
    }
    .btn{

    }
  }
}
</style>
