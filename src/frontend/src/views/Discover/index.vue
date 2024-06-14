<template>
    <el-scrollbar view-style="padding: 10px 20px;">
      <!-- banner -->
  <el-carousel :interval="4000" type="card"  @change="changeBanner">
    <el-carousel-item v-for="(banner, index) in banners" :key="index" @click="clickBanner(banner)">
      <div class="banner-item">
        <el-image :src="banner.imageUrl" />
        <div class="title" :style="{ backgroundColor: banner.titleColor }">{{banner.typeTitle}}</div>
      </div>
    </el-carousel-item>
  </el-carousel>
    <!-- 推荐应用 -->
    <div class="flex-vertical-center">
    <router-link to="/discover/playlist">
      <h3>推荐应用<Right theme="outline" size="22"/></h3>
    </router-link>
  </div>
  <div class="grid-col5">
    <Cover v-for="item in applists"
           mode="vertical" :image-url="item.picUrl" :key="item.id"
           @click="toCommonAppList(item)">
      <el-link :underline="false" @click="toCommonPlayList(item.id)">{{item.name}}</el-link>
    </Cover>
  </div>
    </el-scrollbar>
</template>

<script setup lang="ts">
import Cover from '@/components/Cover/index.vue'
import {onMounted, reactive, ref, watch} from "vue";
import {Banner} from "@/models/Banner";
import {PersonalizedAppList} from "@/models/App";
import {bannerList,appList} from "@/views/mock/Discover";
const banners = ref<Banner[]>([])
const currentBannerIndex = ref(0)
const applists = ref<PersonalizedAppList[]>([])
const changeBanner=(index: number)=>{
  currentBannerIndex.value = index
}
onMounted(() => {
  initBanners()
  initAppList()
})
const initBanners=async ()=>{
  banners.value= bannerList
}
const initAppList=async()=>{
  applists.value= appList
}
const clickBanner=(banner: Banner)=>{
  const index = banners.value.findIndex(item => item.imageUrl === banner.imageUrl)
  if (currentBannerIndex.value !== index) return

  if (banner.url) {
    window.open(banner.url, '_blank')
  }
}
const toCommonAppList=(app:PersonalizedAppList)=>{
  if (app.url) {
    window.open(app.url, '_blank')
  }
}
const toCommonPlayList=(id:string)=>{

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