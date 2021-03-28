<template>
  <h1> Welcome to Torum </h1>
  <ThreadList :threads="threads"/>
</template>
<script>
import sourceData from "@/forumdata.json";
import ThreadList from "@/components/ThreadList"
export default {
  components: {
      ThreadList
  },
  data() {
    return {
      threads: sourceData.threads,
    };
  },
  methods: {
   
  },
};
</script>
<style scoped>

</style>
