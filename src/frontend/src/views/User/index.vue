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
                        <!-- <a-button-group size="small">
                            <a-button icon="edit" :disabled="true">编辑信息</a-button>
                            <a-button type="primary" icon="check" @click="subscribe(2, user)"
                                v-if="user.profile.followed">
                                {{
                                    user.profile.followTime
                                        ? user.profile.followTime
                                        : "已关注"
                                }}
                            </a-button>
                            <a-button icon="plus" @click="subscribe(1, user)" v-else>
                                关注
                            </a-button>
                        </a-button-group> -->
                    </div>
                </div>
                <!-- <nav class="row2">
                    <router-link :to="`/user-event?uid=${userInfo.userId}&nickname=${userInfo.nickname}`"
                        class="row-item">
                        <strong>{{ user.profile.eventCount }}</strong>
                        <div>动态</div>
                    </router-link>
                    <router-link to="/follower" class="row-item">
                        <strong>{{ user.profile.follows }}</strong>
                        <div>关注</div>
                    </router-link>
                    <router-link to="/followed" class="row-item">
                        <strong>{{ user.profile.followeds }}</strong>
                        <div>粉丝</div>
                    </router-link>
                </nav> -->
                <div class="row3">简介:
                    {{
                        userInfo.description
                            ? userInfo.description
                            : "暂无介绍"
                    }}
                    </div>
            </div>
        </div>
        <!-- <div class="user-detail-playlist">
            <div class="title">{{ userInfo.nickname }} 的歌单( {{ total }} )</div>
            <ul>
                <li v-for="playlist in list" :key="playlist.id" class="list-item">
                    <router-link :to="`/playlist/${playlist.id}`" class="playlist">
                        <img v-lazy="`${playlist.coverImgUrl}?param=42y42`" class="avatar" />
                        <div class="name">{{ playlist.name }}</div>
                        <div class="track-count">
                            歌曲: {{ playlist.trackCount }}首
                        </div>
                        <div class="nickname">
                            by
                            <router-link
                                :to="`/user?id=${playlist.creator.userId}`"
                                >{{ playlist.creator.nickname }}</router-link
                            >
                        </div>
                        <div class="sub-count">
                            <a-icon type="folder-add" />
                            {{ playlist.subscribedCount }}
                        </div>
                        <div class="play-count">
                            <a-icon type="play-circle" />
                            {{ playlist.playCount }}
                        </div>
                    </router-link>
                </li>
            </ul>
            <div class="page">
                <a-pagination
                    size="small"
                    v-model="page"
                    :pageSize="pageSize"
                    :total="total"
                    @change="onPageChange"
                />
            </div>
        </div> -->
    </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useUserStore } from "@/stores/user";
const userStore = useUserStore()
const { hasLogin, userInfo } = storeToRefs(userStore)
</script>

<style lang="less">
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

.user-detail-playlist {
    .title {
        line-height: 28px;
        padding: 0 20px;
        border-top: 1px solid #ddd;
        border-bottom: 1px solid #ddd;
        font-size: 12px;
    }

    .list-item {
        background: #efefef;

        &:nth-child(even) {
            background: #f3f5f7;
        }

        &:hover {
            background: #ddd;
        }

        .playlist {
            display: flex;
            align-items: center;
            padding: 6px 20px;
            color: #333;
            box-sizing: content-box;
            border-bottom: 1px solid #eee;
            font-size: 12px;

            .avatar {
                flex: 0 0 42px;
                width: 42px;
                height: 42px;
                border: 1px solid #eee;
            }

            .name {
                flex: 3;
                padding: 0 10px;
            }

            .track-count,
            .sub-count,
            .play-count,
            .nickname {
                flex: 1;
                color: #888;
            }

            .nickname a {
                color: #333;

                // &:hover {
                //     color: @primary-color;
                // }
            }
        }
    }
}

.page {
    margin: 20px 0;
    text-align: center;
}
</style>
