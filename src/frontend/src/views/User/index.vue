<template>
    <div class="user-detail" v-if="hasLogin">
        <div class="user-detail-info">
            <div class="avatar-box">
                <el-avatar :src="userInfo.avatarUrl" class="avatar-img"
                    :key="userInfo.avatarUrl" />
            </div>
            <div class="intro-box">
                <div class="row1">
                    <span class="nickname">{{ userInfo.userName }}</span>
                    <img src="./../../assets/images/vip.jpg" v-if="userInfo.vipType" class="img-vip" />
                    <span class="level">
                        <i>Lv.{{ userInfo.level }}</i>
                    </span>
                    <div class="extra">
                      
                    </div>
                </div>
                <div class="row3">简介:
                    {{
                        userInfo.description
                            ? userInfo.description
                            : "暂无介绍"
                    }}
                    </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useUserStore } from "@/stores/user";
const userStore = useUserStore()
const { hasLogin, userInfo } = storeToRefs(userStore)
</script>

<style lang="less" scoped>
.img-vip {
    width: 30px;
    height: 12px;
    border-radius: 3px;
    margin: 0 3px;
}
.size(@width: 100px, @height: 100px) {
    width: @width;
    height: @height;
}

.p-l(@size: 20px) {
    padding-left: @size;
}

.box {
    display: flex;

    .avatar {
        position: relative;

        img {
            display: block;
            width: 100%;
            height: 100%;
        }
    }

    .intro {
        flex: 1;
        .p-l(20px);
    }
}

.user-detail-info {
    padding: 20px;
    &:extend(.box);

    .avatar-box {
        &:extend(.avatar);
        .size(200px, 200px);

        .avatar-img {
            &:extend(.box .avatar img);
        }
    }

    .intro-box {
        &:extend(.box .intro);

        .row1 {
            position: relative;
            display: flex;
            align-items: center;
            border-bottom: 1px solid #ddd;
            padding-bottom: 5px;
            margin-bottom: 5px;

            .extra {
                position: absolute;
                right: 0;
                top: 0;

                .btn-edit {
                    height: 28px;
                    line-height: 28px;
                }
            }

            .nickname {
                margin-right: 10px;
                font-size: 24px;
            }

            .level {
                display: inline-block;
                margin-left: 10px;
                padding: 0 8px;
                line-height: 16px;
                height: 18px;
                font-size: 14px;
                font-weight: bold;
                // border: 1px solid @primary-color;
                border-radius: 9px;
                // color: @primary-color;
            }
        }

        .row2 {
            width: 300px;
            display: flex;
            margin-bottom: 20px;

            a {
                flex: 1;
                text-align: left;
                font-size: 13px;
                color: #333;

                strong {
                    font-size: 24px;
                    font-weight: normal;
                }
            }
        }
    }
}
.page {
    margin: 20px 0;
    text-align: center;
}
</style>
