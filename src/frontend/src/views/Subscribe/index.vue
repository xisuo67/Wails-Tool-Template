<template>
  <el-dialog
    v-loading="loading"
    v-model="visible"
    :title="`【${detail?.name}】订阅`"
    width="1200px"
  >
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
            choosedId = item.id
          }
        "
      >
        <div class="row">{{ item.licensesType }}</div>
        <div v-for="(cItem, cIndex) in functionList" :key="cIndex" class="row">
          {{
            item.subscribeFunctionOutputs &&
            item.subscribeFunctionOutputs[cIndex].hasFunction
              ? '√'
              : '×'
          }}
        </div>
      </div>
      <div class="column custom">
        <div class="main-title">团队版</div>
        <div class="small-info">按需定制</div>
        <div class="small-info">为您的团队和组织赋能</div>
        <el-button type="primary">咨询购买</el-button>
      </div>
    </div>
    <div style="margin-bottom: 5px; font-size: 14px;font-weight: 700;">订阅选择</div>
    <div>
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
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" @click="onSubscribe">
          捐赠
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue'
import {
  SubscribeTypeOutput,
  VipDictTypeGetPageOutput,
} from '@/models/Subscribe'
import {
  vipDataList
} from '@/views/mock/SubscribeMock'

const loading = ref(false)
const visible = ref(false)

const choosedId = ref<number>()

const detail = ref<SubscribeTypeOutput>()
const functionList = computed(() => {
  const subscribeLicensesOutput = detail.value?.subscribeLicensesOutputs
  return (
    (subscribeLicensesOutput &&
      subscribeLicensesOutput[0]?.subscribeFunctionOutputs) ||
    []
  )
})
const services = computed(() => {
  const subscribeLicensesOutput = detail.value?.subscribeLicensesOutputs
  return subscribeLicensesOutput || []
})

const subscribePriceOpts = computed(() => {
  const subscribePriceOutputs = detail.value?.subscribePriceOutputs
  return subscribePriceOutputs || []
})

const subscribePriceId = ref<number>()
const onChange = () => {}
defineExpose({
  open: async (id: number) => {
    //TODO:这里传入订阅id,调用接口返回数据，使用mock数据暂时替代
    var data=vipDataList
    detail.value = data
    console.log(data.subscribeLicensesOutputs[0].subscribeFunctionOutputs)
    visible.value = true
  },
})


const onSubscribe = () => {

}
</script>
<style scoped lang="scss">
.vipChooseWrap {
  display: flex;
  border: 1px solid var(--el-border-color-light);
  margin-bottom: 10px;

  .column {
    flex: 1;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &:not(:last-child) {
      border-right: 1px solid var(--el-border-color-light);
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
        border-bottom: 1px solid var(--el-border-color-light);
      }
    }
    &.choosed {
      border: 1px solid #d9ba87;
      background-color: rgba(#d9ba87, 0.3);
    }
    &.custom {
      > div {
        margin-bottom: 4px;
      }
    }
  }
}
</style>
