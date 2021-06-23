<template>
  <div class="home">
    <Layout />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Layout  from '@/components/layout/index.vue';

@Options({
  components: {
    Layout,
  },
})
export default class Home extends Vue {}
</script>
