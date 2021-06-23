<template>
  <div class="layout">
    <my-layout>
      <slot></slot>
    </my-layout>
  </div>
</template>

<script>
import { Options, Vue } from 'vue-class-component'
import MyLayout from './MyLayout.vue';
@Options({
  components: {
    MyLayout
  }
})
export default class Y extends Vue {};
</script>
