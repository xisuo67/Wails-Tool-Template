<template>
  <el-dialog
    v-loading="loading"
    draggable
    class="subscribeDialog"
    v-model="visible"
    width="900px"
    :before-close="close"
  >
  <el-row>
      <el-col :span="2"
        ><div style="font-size: 14px; font-weight: 700">选择订阅</div></el-col
      >
      <el-col :span="6">
        <el-select
          v-model="subscribePriceId"
          placeholder="请选择订阅价格"
          @change="onChange"
        >
          <el-option
            v-for="item in subscribePriceOpts"
            :key="item.id"
            :value="item.id"
            :label="`${item.duration}${
              [
                { value: 0, text: '天' },
                { value: 1, text: '月' },
                { value: 2, text: '年' },
              ].find((ele) => ele.value === item.durationTypeEnum)?.text
            }${item.price}元`"
          >
          </el-option>
        </el-select>
      </el-col>
    </el-row>
    <div class="vipChooseWrap">
      <div class="column">
        <div class="row">权益对比</div>
        <div v-for="(item, index) in functionList" :key="index" class="row">
          {{ item.name }}
        </div>
      </div>
      <div
        v-for="(item, index) in services"
        :key="index"
        class="column"
        :class="{
        choosed: (item.id as number) === choosedId,
      }"
        @click="
          () => {
            choosedId = item.id;
          }
        "
      >
        <div class="row">{{ item.licensesType }}</div>
        <div v-for="(cItem, cIndex) in functionList" :key="cIndex" class="row">
          {{
            item.subscribeFunctionOutputs &&
            item.subscribeFunctionOutputs[cIndex].hasFunction
              ? "√"
              : "×"
          }}
        </div>
      </div>
      <div class="column custom">
        <div class="main-title">团队版</div>
        <div class="small-info">按需定制</div>
        <div class="small-info">为您的团队和组织赋能</div>
        <el-button type="primary">咨询购买</el-button>
      </div>
      <div class="column custom">
        <div class="qr-box">
          <QrCode
            class="qr-image"
            value="https://u.wechat.com/EJQ2hKjIeevSOA6Y3Lo27Pk?s=2"
            :width="160"
          />
          <img class="scan-image" :src="scanImg" />
          <div class="wechat-title">扫码支付</div>
        </div>
      </div>
    </div>
  </el-dialog>
</template>
<script setup lang="ts">
import { computed, ref , onMounted, onBeforeUnmount, nextTick } from "vue";
import { QrCode } from "@/components/Qrcode/index";
import scanImage from "@/assets/images/qrcode/scan.png";
import {
  SubscribeTypeOutput,
  VipDictTypeGetPageOutput,
  SubscribePriceOutput,
} from "@/models/Subscribe";
import { vipDataList } from "@/views/mock/SubscribeMock";
const scanImg=ref('');
const loading = ref(false);
const visible = ref(false);
let interval: number | undefined;
const choosedId = ref<number>();

const detail = ref<SubscribeTypeOutput>();
const subscribePriceOptions = ref<Array<SubscribePriceOutput>>();
const functionList = computed(() => {
  const subscribeLicensesOutput = detail.value?.subscribeLicensesOutputs;
  return (
    (subscribeLicensesOutput &&
      subscribeLicensesOutput[0]?.subscribeFunctionOutputs) ||
    []
  );
});
const services = computed(() => {
  const subscribeLicensesOutput = detail.value?.subscribeLicensesOutputs;
  return subscribeLicensesOutput || [];
});

const subscribePriceOpts = computed(() => {
  const subscribePriceOutputs = detail.value?.subscribePriceOutputs;
  return subscribePriceOutputs || [];
});
// 定义启动定时器的方法
const startImageRefresh = () => {
  interval = window.setInterval(() => {
    refreshImage();
  }, 2900); // 设置间隔时间
};
// 定义停止定时器的方法
const stopImageRefresh = () => {
  if (interval) {
    clearInterval(interval);
  }
};
const refreshImage =async()=>{
  scanImg.value = ''; // 清空图片
  nextTick(() => {
    scanImg.value = scanImage; // 重新赋值图片路径
  });
}
const subscribePriceId = ref<number>();
const onChange = () => {};
defineExpose({
  open: async (id: number) => {
    //TODO:这里传入订阅id,调用接口返回数据，使用mock数据暂时替代
    var data = vipDataList;
    detail.value = data;
    subscribePriceOptions.value = detail.value?.subscribePriceOutputs || [];
    visible.value = true;

  },
});
// 在组件挂载时启动定时器
onMounted(() => {
  startImageRefresh();
});

// 在组件卸载前停止定时器
onBeforeUnmount(() => {
  stopImageRefresh();
});
const value = ref("");
const onSubscribe = () => {};
const close=()=> {
  visible.value = false
}
</script>
<style lang="scss">
.subscribeDialog {
  min-height: 400px;
  background: #fef4de;
  border-radius: 15px;
}
.el-dialog__header {
  padding: 0px;
  border-radius: 125px;
  letter-spacing: 2px;
}
.vipChooseWrap {
  display: flex;
  border: 1px solid var(--el-color-info-light-5);
  margin-bottom: 10px;
  border-radius: 20px;
  .column {
    flex: 1;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &:not(:last-child) {
      border-right: 1px solid var(--el-color-info-light-5);
    }

    .main-title {
      font-size: 18px;
      font-weight: 600;
    }

    .small-info {
      font-size: 12px;
      color: var(--el-text-color-secondary);
    }

    .row {
      width: 100%;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;

      &:not(:last-child) {
        border-bottom: 1px solid var(--el-color-info-light-5);
      }
    }

    &.choosed {
      border: 1px solid #ffa049;
      background-color: rgba(#f5c78a, 0.3);
    }

    &.custom {
      > div {
        margin-bottom: 4px;
      }
    }
  }
  .qr-box {
    position: relative;
    text-align: center;
  }
  .qr-box .scan-image {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 999;
    width: 200px;
    height: 160px;
    transform: translate(-50%, -80%);
  }
}
</style>
