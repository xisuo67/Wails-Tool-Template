<template>
  <div class="rankContainer">
    <span>捐赠明细</span>
    <el-row :gutter="20" class="one_box">
    <!-- 第二名 -->
      <el-col :span="8" class="top3">
        <div class="num_two">
            <el-image class="huangguan2" :src="two"></el-image>
            <el-avatar class="top3_head" :size="100" src="https://yfloves.cn/source/head.jpg"/>
            <div class="top_name">xisuo67</div>
            <div class="top_sy">18000<span>元</span></div>
        </div>
        </el-col>
      <!-- 第一名 -->
      <el-col :span="8"  class="top3">
        <div class="num_one">
            <el-image class="huangguan1" :src="one"></el-image>
            <el-avatar  class="top3_head" :size="100" src="https://yfloves.cn/source/head.jpg"/>
            <div class="top_name">xisuo67</div>
            <div class="top_sy">28000<span>元</span></div>
        </div>
        </el-col>
      <el-col :span="8" class="top3">
        <div class="num_three">
            <el-image class="huangguan2" :src="three"></el-image>
            <el-avatar class="top3_head"  :size="100" src="https://yfloves.cn/source/head.jpg"/>
            <div class="top_name">xisuo67</div>
            <div class="top_sy">16000<span>元</span></div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script setup lang="ts">
import one from "@/assets/rank/one.png";
import two from "@/assets/rank/two.png";
import three from "@/assets/rank/three.png"
</script>

<style scoped>
.rankContainer {
  display: block;
}
.one_box {
  margin-top: 30px;
  justify-content: center;
  align-items: center;
  display: flex;
  /* justify-content: space-around; */
}
.one_box .top3{
    width: 260px;
    height: 346px;
    align-items: center;
}
.huangguan2{
    width: 123px;
    height: 123px;
    position: absolute;
    left: 128px;
}
.top3_head{
    position: relative;
}
.num_two .top3_head{
    width: 148px;
    height: 148px;
    border-radius: 100%;
    margin: 55px 0 0 55px;
    border: 4px solid #bcdcdf;
}

.num_one{
    position: relative;
}
.huangguan1{
    width: 123px;
    height: 123px;
    position: absolute;
    right: 38px;
    top: -32px;
}
.num_one .top3_head {
    width: 185px;
    height: 185px;
    border-radius: 100%;
    margin: 18px 0 0 37px;
    border: 4px solid #ffdd3c;
}

.num_three{
    position: relative;
}

.num_three .top3_head{
    width: 148px;
    height: 148px;
    border-radius: 100%;
    margin: 55px 0 0 55px;
    border: 4px solid #e29d85;
}

.top_name{
    width: 100%;
    height: 68px;
    line-height: 74px;
    color: #ffdd3c;
    font-size: 32px;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.top_sy{
    width: 100%;
    height: 49px;
    line-height: 49px;
    font-size: 29px;
    color: black;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>
