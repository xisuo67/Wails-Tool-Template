import {useRouter} from "vue-router";
import { defineStore } from 'pinia'
import {reactive, ref} from "vue";
export const useUserStore = defineStore('user', () => {
    const router = useRouter()
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

    const toLogin=()=> {
        if (hasLogin.value) return
        showLogin.value = true
    }

    const getUserInfo=()=> {
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
        router.push({ path: '/' })
    }
    return {
        hasLogin, userInfo, showLogin,
        toLogin, getUserInfo, exitLogin
    }
})
