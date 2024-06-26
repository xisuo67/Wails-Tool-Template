<template>
    <el-aside width="200px">
      <el-scrollbar>
        <ul class="menu p-0">
          <li v-for="menuGroup in menuGroups" class="menu-group">
            <div v-if="menuGroup.title" class="menu-group-title flex justify-between">
            <span>{{menuGroup.title}}</span>
           
          </div>
            <router-link v-for="menuItem in menuGroup.list"
                         class="menu-item" :class="{ active: isActive(menuItem.path), 'not-need-login': !menuGroup.title }"
                         :to="menuItem.path">
              <Component :is="menuItem.icon" theme="outline" size="20" :strokeWidth="2" />
              <span class="menu-text">{{menuItem.text}}</span>
            </router-link>
          </li>
        </ul>
      </el-scrollbar>
    </el-aside>
  </template>
  
  <script setup lang="ts">
  import {Like, Setting, Lock, Video, Time,Home} from '@icon-park/vue-next';
  import {computed, h, ref} from "vue";
  import { useRouter } from "vue-router";
  import {storeToRefs} from "pinia";
  import {useUserStore} from "@/stores/user";
  
  const userStore = useUserStore()
  const { toLogin } = userStore
  const { hasLogin } = storeToRefs(userStore)
  
  const router = useRouter()
  
  interface MenuGroup {
    title?: string
    list: Array<{
      path: string
      text: string
      icon? : any
    }>
  }
  
  const menuGroups = computed(() => {
    const group: Array<MenuGroup> = [
      {
        list: [
          {
            path: '/discover',
            text: '为我推荐',
            icon:Home
          },
          // {
          //   path: '/video',
          //   text: '教学视频',
          //   icon:Video
          // }
        ]
      },
      {
        title: '社区',
        list: [
          {
            path: `/community/donation`,
            text: '捐赠明细',
            icon: Like
          },
        ]
      },
      {
        title: '系统设置',
        list: [
          {
            path: `/common/settings`,
            text: '设置',
            icon: Setting
          },
        ]
      }
    ]
    // if (hasLogin) {
    //   // 创建的歌单
    //   group.push({
    //     title: '创建的歌单',
    //     list: myPlayList.value.created.map(item => {
    //       return {
    //         path: `/my/playlist/${item.id}`,
    //         text: item.name,
    //         icon: item.privacy ? Lock : MusicMenu
    //       }
    //     })
    //   })
    //   // 收藏的歌单
    //   if (myPlayList.value.collected.length) {
    //     group.push({
    //       title: '收藏的歌单',
    //       list: myPlayList.value.collected.map(item => {
    //         return {
    //           path: `/common/playlist/${item.id}`,
    //           text: item.name,
    //           icon: MusicMenu
    //         }
    //       })
    //     })
    //   }
    // }
    return group
  })
  
  function isActive(path: string) {
    return router.currentRoute.value.fullPath.includes(path)
  }
  
  const isPrivacy = ref<boolean | string | number>(false)

  </script>
  
  <style lang="scss" scoped>
  .el-aside {
    background-color: var(--main-bg);
    border-right: 1px solid var(--aside-border-right);
    .menu {
      .menu-group-title {
        margin-top: 20px;
        margin-bottom: 10px;
        padding: 0 20px;
        font-size: 14px;
        color: rgb(169, 169, 169);
      }
      .menu-item {
        display: flex;
        align-items: center;
        padding: 10px 20px 10px 20px;
        color: var(--main-text);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        &.active, &:hover {
          background-color: var(--aside-active-bg);
          color: var(--aside-active-text);
        }
        &.active.not-need-login {
          font-size: 18px;
          font-weight: 600;
        }
        .menu-text {
          margin-left: 5px;
        }
      }
    }
  }
  </style>
  