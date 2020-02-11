<template>
  <div class="columns">
    <div class="column is-3 center" />

    <div class="column is-6 center">
      <h1 class="title is-1">Edy Eric 's portfolio</h1>
      <h2 class="subtitle is-3">Sleep quality is the source of everything</h2>
    </div>

    <div class="column is-3 center" />
  </div>
</template>

<script lang="ts">
import { createComponent } from "@vue/composition-api";

export default createComponent({});
</script>

<style lang="sass" scoped>
.center
    margin: 6% 0px;

h1, h2
    color: white;
    text-align: center
    padding: 8px 0px
</style>