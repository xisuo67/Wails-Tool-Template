<template>
  <!-- 登录弹窗 -->
  <el-dialog 
      v-model="showLogin" 
      class="loginDialog"
      :width="320" 
      draggable 
      :before-close="closeLogin">
    <el-form id="login" ref="form">
            <el-form-item>
                <el-input
                    placeholder="用户名"
                >
                    <!-- <a-icon
                        slot="prefix"
                        type="user"
                        style="color: rgba(0, 0, 0, 0.25)"
                    /> -->
                </el-input>
            </el-form-item>
            <el-form-item>
                <el-input
                    type="password"
                    placeholder="密码"
                >
                    <!-- <a-icon
                        slot="prefix"
                        type="lock"
                        style="color: rgba(0, 0, 0, 0.25)"
                    /> -->
                </el-input>
            </el-form-item>
            <el-form-item>
                <el-button
                    type="primary"
                    class="login-form-button"
                    >登录</el-button
                >
            </el-form-item>
            <el-divider  class="enter-x">其他登录方式</el-divider>
            <div class="flex justify-evenly enter-x" >
              <Wechat/>
              <TencentQq/>
      <Github />
      <Twitter />
      <Alipay/>
      <!-- <WechatFilled />
      <AlipayCircleFilled />
      <GoogleCircleFilled />
      <TwitterCircleFilled /> -->
    </div>
        </el-form>
  </el-dialog>
</template>

<script setup lang="ts">
import { Github,Wechat,Alipay,TencentQq,Google,Twitter } from '@icon-park/vue-next';
import {onMounted, ref, watch} from "vue";
import {storeToRefs} from "pinia";
// import {checkQR, getQR, getQrKey} from "@/api/login";
import {useUserStore} from "@/stores/user";
import waiting from '@/assets/waiting-authorization.png'

const userStore = useUserStore()
const { showLogin } = storeToRefs(userStore)
const { getUserInfo } = userStore

onMounted(() => {
  getUserInfo()
})

let qrKey = ''
/**
 * 0：初始化
 * 800：二维码不存在或已过期
 * 801：等待扫码
 * 802：授权中
 * 803：授权成功
 */
const qrStatus = ref(0)
const qrImg = ref('')
const qrImgLoading = ref(false)
let timer: number

async function toLogin() {
  // clearInterval(timer)
  showLogin.value = true
  qrImgLoading.value = true
  try {
    // qrKey = await getQrKey()
    qrImg.value ='http://localhost:8080/discover'
    qrStatus.value=801
    qrImgLoading.value = false
    // timer = setInterval(checkQRHandler, 2000)
  } catch (e) {
    ElMessage({
      message: e === '网络异常' ? '网络异常' : '系统异常',
      type: 'error',
      duration: 1000,
      center: true
    })
    qrImgLoading.value = false
    showLogin.value = false
  }
}

function closeLogin() {
  showLogin.value = false
  clearInterval(timer)
  qrStatus.value = 0
}

watch(showLogin, val => {
  if (val) {
    toLogin()
  }
  if (!val && timer) {
    clearInterval(timer)
  }
})
</script>

<style lang="scss">

.loginDialog{
    min-height: 400px;
    background: #f8f8f8 url("@/assets/images/loginBg.jpg") top
        center/contain no-repeat !important;
}

#login {
    margin-top: 180px;
}

#login .login-form-button {
    width: 100%;
}

</style>
