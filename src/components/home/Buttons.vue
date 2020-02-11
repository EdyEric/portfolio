<template>
  <div class="columns">
    <div class="column is-2" />

    <div class="column is-8 buttons">
      <a href="https://twitter.com/Oyaji_De_Go">
        <b-button size="is-large" type="is-primary" outlined>Twitter</b-button>
      </a>

      <a href="https://github.com/EdyEric">
        <b-button size="is-large" type="is-success" outlined>GitHub</b-button>
      </a>

      <a href="https://qiita.com/edy-eric">
        <b-button size="is-large" type="is-danger" outlined>Qiita</b-button>
      </a>

      <b-button size="is-large" type="is-warning" outlined>Anything</b-button>
    </div>

    <div class="column is-2" />
  </div>
</template>

<script lang="ts">
import { createComponent } from "@vue/composition-api";

export default createComponent({});
</script>

<style lang="sass" scoped>
.buttons
  text-align: center;

  .is-large
    padding: 32px 40px;
    margin: 0px 4px;
</style>
