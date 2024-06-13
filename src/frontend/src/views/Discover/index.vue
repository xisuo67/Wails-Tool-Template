<template>
  <!-- banner -->
  <el-carousel :interval="4000" type="card" height="220px" @change="changeBanner">
    <el-carousel-item v-for="(banner, index) in banners" :key="index" @click="clickBanner(banner)">
      <div class="banner-item">
        <el-image :src="banner.imageUrl" />
        <div class="title" :style="{ backgroundColor: banner.titleColor }">{{banner.typeTitle}}</div>
      </div>
    </el-carousel-item>
  </el-carousel>
</template>

<script setup lang="ts">
import {reactive, ref, watch} from "vue";
import {Banner} from "@/models/Banner";
const banners = ref<Banner[]>([])
const currentBannerIndex = ref(0)
const changeBanner=(index: number)=>{
  currentBannerIndex.value = index
}
</script>


<style scoped lang="scss">
.el-carousel__item{
  z-index: 1;
}
.el-carousel__item.is-active{
  z-index: 2;
}
.banner-item {
  position: relative;
  .el-image {
    border-radius: 10px;
  }
  .title {
    position: absolute;
    right: 0;
    bottom: 4px;
    padding: 3px 7px;
    border-radius: 10px 0;
    color: #ffffff;
  }
}
.daily-songs {
  .el-image {
    width: 100%;
    filter: blur(4px);
  }
  .i-icon-calendar {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 120px;
    &:hover {
      cursor: pointer;
    }
  }
}
</style>