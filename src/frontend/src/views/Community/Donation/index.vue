<template>
  <div class="rankContainer">
    <el-row :gutter="20" class="one_box">
      <!-- 第二名 -->
      <el-col :span="8" class="top3">
        <div class="num_two">
          <el-image class="huangguan huangguan2" :src="two"></el-image>
          <el-avatar
            class="top3_head"
            :size="100"
            src="https://yfloves.cn/source/head.jpg"
          />
          <div class="top_name">xisuo67</div>
          <div class="top_sy">18000<span>元</span></div>
        </div>
      </el-col>
      <!-- 第一名 -->
      <el-col :span="8" class="top3">
        <div class="num_one">
          <el-image class="huangguan huangguan1" :src="one"></el-image>
          <el-avatar
            class="top3_head"
            :size="100"
            src="https://yfloves.cn/source/head.jpg"
          />
          <div class="top_name">xisuo67</div>
          <div class="top_sy">28000<span>元</span></div>
        </div>
      </el-col>
      <!-- 第三名 -->
      <el-col :span="8" class="top3">
        <div class="num_three">
          <el-image class="huangguan huangguan2" :src="three"></el-image>
          <el-avatar
            class="top3_head"
            :size="100"
            src="https://yfloves.cn/source/head.jpg"
          />
          <div class="top_name">xisuo67</div>
          <div class="top_sy">16000<span>元</span></div>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-scrollbar height="400px">
        <div class="rankList_box">
				<div class="rankItem" v-for="(item,index) in state.rankList" :key="index">
					<div class="rankIndex">
						<text>{{ index + 4 }}</text>
					</div>
					<div class="HeardBox">
						<el-image class="rankHeard" :src="item.headimgurl"></el-image>
					</div>

					<div class="NameBox">
						<!-- <div class="userName">{{item.name}}</div> -->
						<div class="userName text-bold">{{item.name}}</div>
						<div class="userPost text-gray">{{item.post}}</div>
						<div class="color_ccc">{{item.city}} ｜ <text class="text-blue">{{item.salary}}</text>元</div>
					</div>
					<div class="download_box">
						<image mode="widthFix" src="@/static/rank/download.png"></image>
					</div>
				</div>
			</div>
      </el-scrollbar>

    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, getCurrentInstance, onBeforeMount, defineAsyncComponent } from 'vue'
import one from "@/assets/rank/one.png";
import two from "@/assets/rank/two.png";
import three from "@/assets/rank/three.png";
const state = reactive({
  nowTime: '',
  rankList: [{
						headimgurl: 'http://cdn.zhoukaiwen.com/head4.jpg',
						name: '张 *',
						post: '全栈工程师',
						city: '深圳',
						salary: '17500'
					}, {
						headimgurl: 'http://cdn.zhoukaiwen.com/head5.jpg',
						name: '李 * 阳',
						post: 'Java后台工程师',
						city: '杭州',
						salary: '17000'
					}, {
						headimgurl: 'http://cdn.zhoukaiwen.com/head6.png',
						name: '吕 * 浩',
						post: 'Web前端工程师',
						city: '西安',
						salary: '16000'
					},
					{
						headimgurl: 'http://cdn.zhoukaiwen.com/head7.jpg',
						name: '张 * 鹏',
						post: 'Web前端工程师',
						city: '西安',
						salary: '15500'
					},
					{
						headimgurl: 'http://cdn.zhoukaiwen.com/head8.jpg',
						name: '李 * 静',
						post: 'Web前端工程师',
						city: '西安',
						salary: '15000'
					},
					{
						headimgurl: 'http://cdn.zhoukaiwen.com/head9.jpg',
						name: '周 * 德',
						post: 'Web前端工程师',
						city: '西安',
						salary: '14000'
					},
					{
						headimgurl: 'http://cdn.zhoukaiwen.com/head10.jpeg',
						name: '赵 *',
						post: 'Web前端工程师',
						city: '西安',
						salary: '13500'
					}
				]
})
</script>

<style scoped>
.rankContainer {
  display: block;
}

.one_box {
  margin-top: 30px;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
}

.one_box .top3 {
  width: 260px;
  height: 346px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.huangguan {
  width: 123px;
  height: 123px;
  position: absolute;
  top: -32px;
  left: 50%;
}
.huangguan1 {
  top: 10px;
  left: 52%;
}
.huangguan2 {
  top: 10px;
  left: 46%;
}
.top3_head {
  width: 128px;
  height: 128px;
  border-radius: 100%;
  border: 4px solid;
  margin-top: 60px;
  position: relative;
}

.num_one .top3_head {
  width: 185px;
  height: 185px;
  border-color: #ffdd3c;
}

.num_two .top3_head {
  border-color: #bcdcdf;
}

.num_three .top3_head {
  border-color: #e29d85;
}

.top_name {
  width: 100%;
  height: 68px;
  line-height: 68px;
  color: #ffdd3c;
  font-size: 32px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.top_sy {
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

.rankList_box{
    width: 100%;
    min-height: 247px;
    margin-top: 161px;
}
.rankItem:last-child {
		border: none;
	}
.rankItem{
    width: 867px;
    height: 173px;
    margin: 0px auto;
    border-bottom: 1px solid #e9e9e9;
}
.rankIndex {
    width: 74px;
    height: 173px;
    line-height: 173px;
    text-align: center;
    color: #CCCCCC;
    font-size: 49px;
    float: left;
}
.HeardBox{
    width: 123px;
    height: 123px;
    margin: 24px;
    border-radius: 100%;
    overflow: hidden;
    float: left;
    margin-right: 30px;
    margin-left: 12px !important;
}

.HeardBox image {
		width: 100%;
		height: 100%;
	}

	.NameBox {
    width: 495px;
    height: 173px;
    float: left;
    padding-top: 12px;
    box-sizing: border-box;
	}

	.NameBox div {
    height: 61px;
    line-height: 86px;
	}

	.userName {
    min-width: 111px;
    font-size: 37px;
    float: left;
    margin-right: 24px;
	}

	.download_box {
    width: 99px;
    height: 173px;
    float: right;

	}

	.download_box image {
    width: 55px;
    margin: 61px auto;
    display: block;
	}
</style>
