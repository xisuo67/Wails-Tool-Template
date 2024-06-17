<template>
    <div class="setting">
        <span class="settingDes">设置</span>
        <el-tabs  class="setting-tabs" >
            <el-tab-pane label="账号">账号</el-tab-pane>
            <el-tab-pane label="常规">常规</el-tab-pane>
            <el-tab-pane label="系统">系统</el-tab-pane>
            <el-tab-pane label="快捷键">快捷键</el-tab-pane>
            <el-tab-pane label="关于Geek工具"><setting-version /></el-tab-pane>
        </el-tabs>
    </div>
</template>

<script lang="ts" setup>
import SettingVersion from "./components/SettingVersion.vue";
</script>

<style>
.setting {
    padding: 50px 40px;
}
.settingDes {
    font-size: 22px;
    font-weight: 600;
}
/* .setting-tabs>.el-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
} */
</style>
