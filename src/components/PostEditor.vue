<template> 
    <div class="col-full">
    <form @submit.prevent="save">
      <div class="form-group">
      <textarea v-model="newPostText" class="form-input"></textarea>
      </div>
      <div class="form-actions">
        <button class="btn-green">Submit post</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
    data(){
        return{
            newPostText: ''
        }
    },
    methods: {
    save() {
      const postId = "ggasfd"+ Math.random()
      const post = {
        id: postId, 
        text: this.newPostText, 
        publishedAt : Math.floor(Date.now()/1000),
        userId: "rpbB8C6ifrYmNDufMERWfQUoa202" 
      }
      this.$emit('save-post', {post})
      this.newPostText = ""
    }
    }
    
}
</script>

<style scoped>

</style>