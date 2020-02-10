<template>
  <div class="home">
    <div class="columns">
      <div class="column is-3 center" />

      <div class="column is-6 center">
        <h1 class="title is-1">Edy Eric 's portfolio</h1>
        <h2 class="subtitle is-3">Sleep quality is the source of everything</h2>
      </div>

      <div class="column is-3 center" />
    </div>

    <b-steps class="steps" v-model="activeStep" :animated="true" :has-navigation="false">
      <b-step-item label="Profile" :clickable="true">
        <h1 class="title has-text-centered">Profile</h1>
        <h2>23歳 MENS です。渋谷の IT 企業で日々成長している途中であります。</h2>
        <h2>覚えることが多い今日この頃に感謝しつつ、なんだかんだ言ってゲームに明け暮れています。</h2>
      </b-step-item>

      <b-step-item label="Skill" :clickable="true">
        <h1 class="title has-text-centered">Skill</h1>
        <h2>新卒入社から幸運なことに、たくさんの技術を学ぶことができました。</h2>
        <h2>覚えている限りで自己評価を行います。</h2>
      </b-step-item>

      <b-step-item label="Work" :clickable="true">
        <h1 class="title has-text-centered">Work</h1>
        <h2>個人的に作成した成果物を取りあげます。</h2>
        <h2>成果物については GitHub にて公開しています。</h2>
      </b-step-item>

      <b-step-item label="Finish" :clickable="true">
        <h1 class="title has-text-centered">Finish</h1>
        <h2>一読ありがとうございました。</h2>
        <h2>Twitter, Qiita など利用していますのでもし良ければお声かけていただけると幸いです。</h2>
      </b-step-item>
    </b-steps>

    <div class="columns">
      <div class="column is-2" />

      <div class="column is-8 buttons">
        <b-button size="is-large" type="is-primary" outlined>Twitter</b-button>
        <b-button size="is-large" type="is-success" outlined>GitHub</b-button>
        <b-button size="is-large" type="is-danger" outlined>Qiita</b-button>
        <b-button size="is-large" type="is-warning" outlined>Anything</b-button>
      </div>

      <div class="column is-2" />
    </div>

    <div class="colum is-12" />
  </div>
</template>

<script lang="ts">
import { createComponent, SetupContext, ref } from "@vue/composition-api";

export default createComponent({
  setup(context: SetupContext) {
    const activeStep = ref<number>(0);

    setInterval(() => (activeStep.value = (activeStep.value + 1) % 4), 8000);

    return { activeStep };
  }
});
</script>

<style lang="sass" scoped>
.home
  height: 800px

.buttons
  text-align: center;

  .is-large
    padding: 40px 40px;
    margin: 0px 4px;

.center
    margin: 6% 0px;

h1, h2
    color: white;
    text-align: center
    padding: 16px 0px
</style>