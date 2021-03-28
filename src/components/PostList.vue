<template> 
<div class="post-list">
      <div v-for="post in posts" :key="post.id">
      <div class="user-info">
        <a href="#" class="user-name">{{
          userById(post.userId).name
        }}</a>
        <a href="#">
          <img
            class="avatar-large"
            :src="userById(post.userId).avatar"
            alt=""
          />
        </a>
        <p class="desktop-only text-small">107 posts</p>
      </div>
      <div class="post-content">
        <div>
          <p>{{ post.text }}</p>
        </div>
        <a
          href="#"
          style="margin-left: auto"
          class="link-unstyled"
          title="Make a change"
          ><i class="fa fa-pencil"></i
        ></a>
      </div>
      <div class="post-date text-faded">
        {{ post.publishedAt }}
      </div>
      </div>
    </div>
</template>

<script>
import sourceData from '@/forumdata.json'
export default {
    props: {
        posts: {
            required: true, 
            type: Array, 
        }
    },
    data() {
        return {
            users: sourceData.users
        }
    },
    methods: {
    userById(userId) {
      return this.users.find((p) => p.id === userId);
    },
  },
    
}
</script>

<style scoped>

</style>