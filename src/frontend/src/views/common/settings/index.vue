<template>
    <div class="setting">
        <setting-version />
    </div>
</template>

<script>
import SettingVersion from "./components/SettingVersion.vue";
export default {
    name: "setting",
    data() {
        return {};
    },
    components: {
        SettingVersion,
    },
};
</script>

<style lang="less" scoped></style>
