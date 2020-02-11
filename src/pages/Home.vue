<template>
  <div class="home">
    <main-title />
    <steps />
    <buttons />
  </div>
</template>

<script lang="ts">
// Libraries
import { createComponent, ref } from "@vue/composition-api";
// Components
import MainTitle from "@/components/home/MainTitle.vue";
import Steps from "@/components/home/Steps.vue";
import Buttons from "@/components/home/Buttons.vue";

export default createComponent({
  components: {
    "main-title": MainTitle,
    steps: Steps,
    buttons: Buttons
  },
  setup() {
    return {};
  }
});
</script>

<style lang="sass" scoped>
</style>