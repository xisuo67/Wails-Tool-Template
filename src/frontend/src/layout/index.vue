<template>
  <el-container style="height: 100%;">
    <el-header class="flex-vertical-center">
      <Header />
    </el-header>

    <el-container>
      <SideBar/>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
  <!-- login弹窗 -->
  <Login />
</template>

<script setup lang="ts">
import Header from './components/Header.vue'
import SideBar from './components/SideBar.vue'
import Login from "./components/Login/index.vue";
</script>

<style lang="scss" scoped>
.el-header {
  width: 100%;
  background-color: var(--header-bg);
  line-height: 60px;
  color: #ffffff;
}
.el-main {
  position: relative;
  padding: 0;
  height: 100%;
  background-color: var(--main-bg);
  color: var(--main-text);
}
</style>
