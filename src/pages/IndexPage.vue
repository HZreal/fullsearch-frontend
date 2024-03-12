<template>
  <div class="index-page">
    <a-input-search
      v-model:value="searchText"
      placeholder="input search text"
      enter-button
      @search="onSearch"
    />
    <a-tabs v-model:activeKey="activeKey">
      <a-tab-pane key="postList" tab="帖子">
        <post-list></post-list>
      </a-tab-pane>
      <a-tab-pane key="userList" tab="用户" force-render>
        <user-list></user-list>
      </a-tab-pane>
      <a-tab-pane key="pictureList" tab="图片">
        <picture-list></picture-list>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import PostList from "@/components/postList.vue";
import UserList from "@/components/userList.vue";
import PictureList from "@/components/pictureList.vue";

const searchText = ref("");
const activeKey = ref("postList");

const onSearch = (value: string) => {
  alert(value);
};
</script>

<style scoped></style>
