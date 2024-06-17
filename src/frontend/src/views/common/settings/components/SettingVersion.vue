<template>
    <setting-item label="关于云音乐">
        <div>
            <span>当前版本：v0.01</span>
            <span v-if="remoteVersion">远程版本：v0.0.2</span>
            <a-button :loading="loading" size="small">检查更新</a-button>
        </div>
    </setting-item>
</template>
<script>

</script>
