<template>
  <el-image :src="logo" class="logo" style="" />
  <span style="width: 180px;">Geek工具</span>
  <el-row class="flex-1">
    <el-col :span="24" class="flex-vertical-center justify-end setting">
      <span v-if="hasLogin" class="flex-vertical-center login-icon">
        <el-avatar :size="30" :src="userInfo.avatarUrl" @click="toUserDetail" />
      </span>
      <!-- login -->
      <el-popover v-if="hasLogin" placement="bottom" trigger="click" :width="200" :offset="0">
        <template #reference>
          <span class="flex-vertical-center login-icon">
            <span class="text-14">{{ userInfo.userName }}</span>
            <DownOne theme="filled" size="18" :strokeWidth="2" />
          </span>
        </template>
        <div class="menu">
          <div style="cursor: pointer;" @click="onSubscribe">
            <Vip theme="filled" size="18" :strokeWidth="2" />我的订阅
          </div>
          <el-divider />
          <div style="cursor: pointer;" @click="exitLogin">
            <Power theme="filled" size="18" :strokeWidth="2" />退出登录
          </div>
        </div>
      </el-popover>

      <span v-else class="flex-vertical-center login-icon" @click="toLogin">
        <el-avatar :size="30" :src="userInfo.avatarUrl" />
        <span class="text-14">未登录</span>
        <DownOne theme="filled" size="18" :strokeWidth="2" />
      </span>
      <div v-if="hasLogin" class="action-icon">
        <img src="./../../assets/images/vip.jpg" v-if="userInfo.vipType" class="img-vip" />
        <span class="level">
          <i>Lv.{{ userInfo.level }}</i>
        </span>
      </div>
      <div ref="userNewsBadgeRef"  class="action-icon" v-click-outside="onUserNewsClick">
        <el-badge is-dot :offset="[0, 12]">
          <Mail theme="outline" size="20" :strokeWidth="2" />
        </el-badge>
      </div>
      <el-popover ref="userNewsRef" :virtual-ref="userNewsBadgeRef" placement="bottom" trigger="click"
        transition="el-zoom-in-top" virtual-triggering :width="300" :persistent="false">
        <UserNews />
      </el-popover>
      <SettingTwo class="action-icon" theme="outline" size="20" :strokeWidth="2" @click="toSetting" />
      <!-- 主题切换 -->
      <el-popover placement="bottom-start" trigger="click" :width="300" :offset="20">
        <template #reference>
          <Theme class="action-icon" theme="outline" size="20" :strokeWidth="2" />
        </template>
        <h6 class="m-0">主题</h6>
        <div class="theme-list">
          <div v-for="theme in themeList" class="theme-item relative" :style="{ background: theme.background }"
            @click="changeTheme(theme.key)">
            <span style="margin-left: 5px">{{ theme.text }}</span>
            <CheckOne v-show="currentTheme === theme.key" theme="two-tone" size="22" :fill="['#fff', '#ec4141']"
              :strokeWidth="3" />
          </div>
        </div>
      </el-popover>
    </el-col>
  </el-row>
  <VipSubscribe ref="vipSubscribeRef" />
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref, unref, computed, reactive, onMounted } from 'vue';
import { Vip, DownOne, Theme, SettingTwo, Mail, Power, CheckOne } from '@icon-park/vue-next';
import VipSubscribe from '@/views/Subscribe/index.vue';
import logo from '@/assets/logo.png'
import { storeToRefs } from "pinia";
import { useUserStore } from "@/stores/user";
import { useRouter } from 'vue-router'
import { useAppStore } from "@/stores/app";
import { themeList } from "@/models/Theme";
// 引入组件
const UserNews = defineAsyncComponent(() => import('@/layout/navBars/topBar/UserNews.vue'));
const router = useRouter()
// 定义变量内容
const userNewsRef = ref();
const userNewsBadgeRef = ref();
const userStore = useUserStore()
const { hasLogin, userInfo } = storeToRefs(userStore)
const { toLogin, exitLogin } = userStore
const vipSubscribeRef = ref()
const { currentTheme } = storeToRefs(useAppStore())
// 消息通知点击时
const onUserNewsClick = () => {
  unref(userNewsRef).popperRef?.delayHide?.();
};
const changeTheme = (theme: string) => {
  currentTheme.value = theme
  document.body.className = theme === 'red' ? '' : theme
}
const onSubscribe=()=>{
  vipSubscribeRef.value.open(123)
}
const toSetting = () => {
  router.push({ path: '/common/settings' })
}

const toUserDetail = () => {
  router.push({ path: '/User/details' })
}
</script>

<style lang="scss" scoped>
.img-vip {
  width: 30px;
  height: 12px;
  border-radius: 3px;
  margin: 2px 3px;
}

.menu {
  padding-left: 12px;
  padding-top: 12px;
}

.level {
  display: inline-block;
  // margin-left: 10px;
  padding: 0 8px;
  line-height: 16px;
  height: 18px;
  font-size: 14px;
  font-weight: bold;
  // border: 1px solid @primary-color;
  border-radius: 9px;
  // color: @primary-color;
}

.logo {
  display: inline-flex;
  width: 30px;
  margin-right: 10px;
  border-radius: 10px;
  background: #ffffff;
}

.setting {
  .login-icon {
    cursor: pointer;

    .el-avatar {
      margin-right: 5px;
    }
  }

  .action-icon {
    margin-left: 20px;
    display: flex;
    cursor: pointer;
  }
}

.theme-list {
  display: flex;
  flex-wrap: wrap;

  .theme-item {
    width: 30%;
    height: 80px;
    margin-top: 20px;
    margin-right: 5%;
    display: flex;
    align-items: flex-end;
    cursor: pointer;
    color: #ffffff;

    &:nth-child(3n) {
      margin-right: 0;
    }

    .i-icon {
      position: absolute;
      right: -10px;
      bottom: -10px;
    }
  }
}

.qr-invalid {
  position: absolute;
  top: 75px;
  left: 50%;
  transform: translate(-50%, 0px);
  width: 150px;
  height: 150px;
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.8);
}
</style>
