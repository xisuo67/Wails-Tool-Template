import {useRouter} from "vue-router";
import { defineStore } from 'pinia'
import {reactive, ref} from "vue";
import {AppList} from "@/models/App";
import defaultCoverImage from "@/assets/playlist-cover.png";

const router = useRouter()

export const useUserStore = defineStore('user', () => {
    const hasLogin = ref(false)
    const showLogin = ref(false)
    const defaultAvatar = 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
    const mockUserInfo={
        userId: 8023474819,
        userName: 'xisuo67',
        nickname:'xisuo67',
        avatarUrl: 'https://yfloves.cn/source/head.jpg',
        vipType:true,
        level:8,
    }
    const logoutUserInfo = {
        userId: 8023474819,
        userName: '0_m15849353741@163.com',
        avatarUrl: defaultAvatar
    }
    const userInfo = reactive({
        userId: logoutUserInfo.userId,
        userName: logoutUserInfo.userName,
        avatarUrl: logoutUserInfo.avatarUrl,
        vipType:false,
        level:0,
    })

    function toLogin() {
        if (hasLogin.value) return
        showLogin.value = true
    }

    function getUserInfo() {
            userInfo.userId = mockUserInfo.userId
            userInfo.userName = mockUserInfo.nickname
            userInfo.avatarUrl = mockUserInfo.avatarUrl
            userInfo.vipType = mockUserInfo.vipType
            userInfo.level = mockUserInfo.level
            hasLogin.value = true
    }

    function exitLogin() {
        sessionStorage.removeItem('cookie')
        hasLogin.value = false
        userInfo.userId = logoutUserInfo.userId
        userInfo.userName = logoutUserInfo.userName
        userInfo.avatarUrl = logoutUserInfo.avatarUrl
        debugger
        router.push({ path: '/' })
    }

    const defaultMyPlayList: { liked: AppList, created: AppList[], collected: AppList[] } = {
        liked: {
            name: '我喜欢的音乐',
            id: -1,
            userId: userInfo.userId,
            coverImgUrl: defaultCoverImage,
            coverImgId: -1,
            createTime: 0,
            updateTime: 0,
            description: '',
            tags: [],
            trackUpdateTime: 0,
            trackCount: 0,
            playCount: 0,
            specialType: 0,
            totalDuration: 0,
            creator: null,
            tracks: [],
            subscribed: false,
            subscribers: [],
            subscribedCount: 0,
            commentThreadId: '',
            newImported: false,
            adType: 0,
            highQuality: false,
            privacy: 0,
            ordered: false
        },
        created: [],
        collected: []
    }
    const myPlayList = ref<{ liked: AppList, created: AppList[], collected: AppList[] }>(defaultMyPlayList)

    function getMyPlayList() {
        // playList(userInfo.userId).then(res => {
        //     myPlayList.value = {
        //         liked: res[0],
        //         created: res.slice(1, res.length).filter(item => item.creator?.userId === userInfo.userId),
        //         collected: res.slice(1, res.length).filter(item => item.creator?.userId !== userInfo.userId)
        //     }
        // })
    }

    const myLikedSongIds = ref<number[]>([])
    function getMyLikedSongIds() {
        // likedSongs(userInfo.userId).then(res => {
        //     myLikedSongIds.value = res
        // })
    }

    return {
        hasLogin, userInfo, showLogin,
        toLogin, getUserInfo, exitLogin,
        getMyPlayList, myPlayList,
        getMyLikedSongIds, myLikedSongIds
    }
})
