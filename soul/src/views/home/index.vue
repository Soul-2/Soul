<template>
<div class="container">
       <el-container>
  <el-header>Easy一点</el-header>
  <el-container>
    <el-aside width="200px">
      <el-row>
        <el-col >
    <el-menu
      router='true'
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#2C2E2E"
      text-color="#aaa"
      active-text-color="#fff">
      <el-menu-item index="/home" >
        <i class="el-icon-document"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>云仓库</span>
        </template>
        <el-menu-item-group>
          <template slot="title">图片</template>
          <el-menu-item index="/image">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">音乐</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">日志</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">个人设置</span>
      </el-menu-item>

    </el-menu>
  </el-col>
      </el-row>
    </el-aside>
    <el-main>
      <my-image></my-image>
    </el-main>
  </el-container>
</el-container>
</div>
</template>
<script>
// import { myImage } from '../../components'
export default {

}
</script>

<style  scoped lang="less">
.container {
  width: 100%;
  height: 100%;
  position: fixed;

  left: 0;
  top: 0;
.el-header {
    background-color: #2C2E2E;
    color: #fff;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #2C2E2E;
    color: #fff;
    text-align: center;
    line-height: 200px;
    height: 1000px;
  }

  .el-main {
    background-color: white;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
}
</style>
