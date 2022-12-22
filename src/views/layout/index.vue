<template>
    <el-container class="layout-container-box" style="height: 100%">
        <!-- 左侧导航栏组件 -->
        <el-aside width="266px">
            <!-- 1级导航栏 -->
            <div class="first-navigation">
                <div class="first-navigation-logo">
                    <img src="~@/assets/vue.svg" alt="">
                </div>
                <div class="first-navigation-content">
                    <ul>
                        <li>
                            <el-icon :size="20" color="#fff">
                                <HomeFilled />
                            </el-icon>
                            <div>首页</div>
                        </li>
                        <li>
                            <el-icon :size="20">
                                <HomeFilled />
                            </el-icon>
                            <div>首页</div>
                        </li>
                        <li>
                            <el-icon :size="20">
                                <HomeFilled />
                            </el-icon>
                            <div>首页</div>
                        </li>
                        <li>
                            <el-icon :size="20">
                                <HomeFilled />
                            </el-icon>
                            <div>首页</div>
                        </li>
                        <li>
                            <el-icon :size="20">
                                <HomeFilled />
                            </el-icon>
                            <div>首页</div>
                        </li>
                        <li>
                            <el-icon :size="20">
                                <HomeFilled />
                            </el-icon>
                            <div>首页</div>
                        </li>
                        <li>
                            <el-icon :size="20">
                                <HomeFilled />
                            </el-icon>
                            <div>首页</div>
                        </li>
                        <li>
                            <el-icon :size="20">
                                <HomeFilled />
                            </el-icon>
                            <div>首页</div>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- 2级导航栏 -->
            <div class="second-navigation">
                <div class="second-navigation-title">
                    <h1>Vue Admin Plus</h1>
                    <span>组件</span>
                </div>
                <div class="second-navigation-content">
                    <el-scrollbar>
                        <el-menu :default-openeds="['1', '3']">
                            <el-sub-menu index="1">
                                <template #title>
                                    <el-icon>
                                        <message />
                                    </el-icon>首页
                                </template>
                                <el-menu-item-group>
                                    <template #title>Group 1</template>
                                    <el-menu-item index="1-1">Option 1</el-menu-item>
                                    <el-menu-item index="1-2">Option 2</el-menu-item>
                                </el-menu-item-group>
                                <el-menu-item-group title="Group 2">
                                    <el-menu-item index="1-3">Option 3</el-menu-item>
                                </el-menu-item-group>
                                <el-sub-menu index="1-4">
                                    <template #title>Option4</template>
                                    <el-menu-item index="1-4-1">Option 4-1</el-menu-item>
                                </el-sub-menu>
                            </el-sub-menu>
                            <el-sub-menu index="2">
                                <template #title>
                                    <el-icon><icon-menu /></el-icon>看板
                                </template>
                                <el-menu-item-group>
                                    <template #title>Group 1</template>
                                    <el-menu-item index="2-1">Option 1</el-menu-item>
                                    <el-menu-item index="2-2">Option 2</el-menu-item>
                                </el-menu-item-group>
                                <el-menu-item-group title="Group 2">
                                    <el-menu-item index="2-3">Option 3</el-menu-item>
                                </el-menu-item-group>
                                <el-sub-menu index="2-4">
                                    <template #title>Option 4</template>
                                    <el-menu-item index="2-4-1">Option 4-1</el-menu-item>
                                </el-sub-menu>
                            </el-sub-menu>
                            <el-sub-menu index="3">
                                <template #title>
                                    <el-icon>
                                        <setting />
                                    </el-icon>工作台
                                </template>
                                <el-menu-item-group>
                                    <template #title>Group 1</template>
                                    <el-menu-item index="3-1">Option 1</el-menu-item>
                                    <el-menu-item index="3-2">Option 2</el-menu-item>
                                </el-menu-item-group>
                                <el-menu-item-group title="Group 2">
                                    <el-menu-item index="3-3">Option 3</el-menu-item>
                                </el-menu-item-group>
                                <el-sub-menu index="3-4">
                                    <template #title>Option 4</template>
                                    <el-menu-item index="3-4-1">Option 4-1</el-menu-item>
                                </el-sub-menu>
                            </el-sub-menu>
                        </el-menu>
                    </el-scrollbar>
                </div>
            </div>
        </el-aside>
        <!-- 顶部组件 -->
        <el-container>
            <el-header style="text-align: right; font-size: 12px">

                <div class="header-top">
                    <div class="isopen-btn">
                        <el-icon size="18">
                            <Fold />
                        </el-icon>
                        <!-- <el-icon size="20"><Expand /></el-icon> -->
                    </div>
                    <div class="nav-top">
                        <el-breadcrumb :separator-icon="ArrowRight">
                            <el-breadcrumb-item :to="{ path: '/' }">导航1</el-breadcrumb-item>
                            <el-breadcrumb-item>导航2</el-breadcrumb-item>
                            <el-breadcrumb-item>导航3</el-breadcrumb-item>
                            <el-breadcrumb-item>导航4</el-breadcrumb-item>
                        </el-breadcrumb>
                    </div>
                    <!-- 用户导航栏 -->
                    <div class="user-nav">

                    </div>
                </div>
                <div class="header-content">

                </div>
                <div class="toolbar">
                    <el-dropdown>
                        <el-icon style="margin-right: 8px; margin-top: 1px">
                            <setting />
                        </el-icon>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item>View</el-dropdown-item>
                                <el-dropdown-item>Add</el-dropdown-item>
                                <el-dropdown-item>Delete</el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                    <span>Tom</span>
                </div>
            </el-header>
            <!-- 内容区域 -->
            <el-main>
                <el-scrollbar>
                    <el-table :data="tableData">
                        <el-table-column prop="date" label="Date" width="140" />
                        <el-table-column prop="name" label="Name" width="120" />
                        <el-table-column prop="address" label="Address" />
                    </el-table>
                </el-scrollbar>
            </el-main>
        </el-container>
    </el-container>
</template>
  
<script setup lang="ts">
import { ref } from 'vue'
import { Menu as IconMenu, Message, Setting } from '@element-plus/icons-vue'
import { ArrowRight } from '@element-plus/icons-vue'

const item = {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
}
const tableData = ref(Array.from({ length: 10 }).fill(item))
</script>

<style lang="scss" scoped>
.layout-container-box {
    width: 100%;
    height: 100%;

    .first-navigation {
        width: 64px;
        height: 100%;
        float: left;
        background-color: #292c33;
        color: #fff;

        .first-navigation-logo {
            height: 60px;
            position: relative;

            >img {
                position: absolute;
                top: 14px;
                left: 16px;
                width: 32px;
                height: 32px;
            }
        }

        .first-navigation-content {
            >ul {
                >li {
                    height: 54px;
                    width: 54px;
                    padding: 5px;
                    margin: 0 auto;
                    text-align: center;
                    padding-top: 20px;
                }
            }

        }
    }

    .second-navigation {
        width: 180px;
        float: left;
        padding: 0px 10px;

        .second-navigation-title {
            padding-top: 20px;
            height: 40px;
            position: relative;
            border-bottom: 1px solid #ccc;

            >h1 {

                text-align: center;
                font-size: 20px;
                height: 20px;
                line-height: 20px;
            }

            >span {
                position: absolute;
                bottom: -7px;
                left: 56px;
                width: 68px;
                background-color: #fff;
                text-align: center;
                height: 14px;
                font-size: 14px;
                line-height: 14px;
                z-index: 99;
            }
        }

        .second-navigation-content {
            margin-top: 20px;
        }
    }

    .header-top {
        position: relative;
        height: 60px;

        .isopen-btn{
            position: absolute;
            top: 23px;
        }
        .nav-top {
            position: absolute;
            top: 25px;
            left: 40px;
        }
    }
}

.layout-container-box .el-header {
    position: relative;
    color: var(--el-text-color-primary);
}

.layout-container-box .el-aside {
    color: var(--el-text-color-primary);
}

.layout-container-box .el-menu {
    border-right: none;
}

.layout-container-box .el-main {
    padding: 0;
}

.layout-container-box .toolbar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    right: 20px;
}
</style>